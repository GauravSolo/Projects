import './style.css'


const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;


function setUpIntersectionObserver(element, isLTR, speed){
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll', scrollHandler);
        }else{
            document.removeEventListener('scroll', scrollHandler);
        }
    }

    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);

    function scrollHandler(){
        const translateX = (window.innerHeight - element.getBoundingClientRect().top)*speed;
        let totalTranslate = isLTR ? (translateX + initialTranslateLTR) : -(translateX + initialTranslateRTL)
        element.style.transform = `translateX(${totalTranslate}px)`;
    }
 }

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');

setUpIntersectionObserver(line1, true, 0.15);
setUpIntersectionObserver(line2, false, 0.15);
setUpIntersectionObserver(line3, true, 0.15);
setUpIntersectionObserver(line4, true, 0.8);
