let resultDisply = document.querySelector('.js-disply');

function sqrt2(){
    let sqrt = Math.sqrt(resultDisply.value);
    resultDisply.value = sqrt;

}

function clearDisply(){
    resultDisply.value = "";
}

function backspace(){
    let newDisply = resultDisply.value.slice(0, resultDisply.value.length - 1);
    resultDisply.value = newDisply;
}

function btnClick(){
    resultDisply.value += value;
}

function calcul(){
    resultDisply.value= eval(resultDisply.value)
}