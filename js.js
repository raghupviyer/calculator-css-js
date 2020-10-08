const display = document.getElementById("display");
const insert = (num) => {
    display.innerHTML = display.innerHTML + num;
}

const result = () => {
    display.innerHTML = eval(display.innerHTML);
}

var func = (op) => {
    if (display.innerHTML == null || display.innerHTML == undefined) {
        display.innerHTML = 'click number first';
    }
    else if(op == 'root'){
        display.innerHTML = Math.sqrt(display.innerHTML);
    }
    else if (op == 'power') {
        display.innerHTML = Math.pow(display.innerHTML,2);
    }
    else if (op == 'tan') {
        display.innerHTML = Math.sin(display.innerHTML);
    }
    else if (op = 'cos') {
        display.innerHTML = Math.cos(display.innerHTML);
    }
    else if (op == 'log') {
        display.innerHTML=Math.log(display)
    }
}
const fact = () => {
    let n = display.innerHTML;
    let i = n;
    if (n ==0||n==1) {
        display.innerHTML = '1';
    }
    while (n > 1) {
        n--;
        i *= n;
    }
    display.innerHTML = i;
}

const comb = () => {
    
}

const perm = () => {
    
}