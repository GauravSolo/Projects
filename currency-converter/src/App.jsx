import { useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from); 
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }
  

  return (
    <div className="border mx-auto flex flex-col gap-5 bg-gray-200 md:w-1/2  rounded-md mt-20 p-5">
      <div className="flex flex-col gap-3 relative">
        <InputBox 
          label="From" 
          amount={amount}
          onChangeAmount={(amount) => setAmount(amount)}
          onCurrencyChange={(from) => setFrom(from)}
          selectCurrency={from}
          currencyOptions={options}
          // amountDisable={amountDisable}
          // currencyDisable={currencyDisable}
           />
        <InputBox
          label="To"
          amount={convertedAmount}
          onChangeAmount={(amount) => setAmount(amount)}
          onCurrencyChange={(to) => setTo(to)}
          selectCurrency={to}
          currencyOptions={options}
          // amountDisable={amountDisable}
          // currencyDisable={currencyDisable}
          />
        <button onClick={swap} className="bg-blue-600 text-white font-medium w-fit px-3 py-1 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          swap
        </button>
      </div>
      <button onClick={convert} className="w-100 bg-blue-500 p-3 rounded-lg text-white font-medium">
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
    </div>
  );
}

export default App;
