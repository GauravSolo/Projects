import { useId } from 'react';
import './InputBox.css';

const InputBox = (props) => {
  const {label, amount, onChangeAmount, currencyOptions = [], onCurrencyChange, selectCurrency = "usd", amountDisable = false, currencyDisable = false} = props;

  const amountInputId = useId();
  const currencySelect = useId();

  return (
    <div
      className="inputbox"
    >
      <div className="box">
        <label htmlFor={amountInputId} className="label">
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="font-semibold text-lg focus:outline-gray-400 max-w-[10rem] px-2 py-1 my-2"
          value={amount}
          onChange={(e) => onChangeAmount(e.target.value)}
          disabled={amountDisable}
        />
      </div>
      <div className="box">
        <label htmlFor={currencySelect} className="label">
          Currency Type
        </label>
        <select
          name=""
          className="font-semibold focus:outline-none focus:ring-2 focus:ring-purple-400 px-2 py-2 my-2 min-w-[10rem] rounded-lg  bg-slate-200 appearance-none"
          id={currencySelect}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
        {
          currencyOptions.map((currency) =>
            <option key={currency} value={currency}>{currency}</option>
          )
        }
        </select>
      </div>
    </div>
  );
};

export default InputBox;
