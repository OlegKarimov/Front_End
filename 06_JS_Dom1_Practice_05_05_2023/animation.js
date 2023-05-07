const t = setInterval(move, 20);
// Запускает функцию move каждые 20 миллисекунд
let pos = 0;
let direction = 0;
const box = document.getElementById('box');

// clearInterval(t); // остановить функцию setInterval
function move() {
    if (direction == 0) {
        if (pos == 150) {
            direction = 1;
        } else {
            pos++;
        }
        
    } else {
        if (pos == 0) {
            direction = 0;
        } else {
            pos--;
        }
    }
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
}
console.log(new Date());

const div1 = document.getElementById('div1');

const time = setInterval (printTime, 1000);

const newP = document.createElement("p");
const newPText = document.createTextNode("Time: ");
newP.appendChild(newPText);
div1.appendChild(newP);

function printTime() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const ms = d.getMilliseconds();
    
    const newP2Text = document.createTextNode("Time: "+h+":"+m+":"+ms);
    newP.appendChild(newP2Text);
    div1.replaceChild(newP2Text, div1.firstElementChild);

    div1.appendChild(newP);


    //TODO Дописать функцию printTime(), чтобы она
    // выводила на экран актуальное время
}



/*
= - присвоение;
== - не строгое сравнение (сравнение значений без учёта типов данных);
=== - строгое сравнение (с учётом типов данных);

Сложение числа и строки называется конкатинацией.
Результатом будет "слипшаяся" строчка

*/