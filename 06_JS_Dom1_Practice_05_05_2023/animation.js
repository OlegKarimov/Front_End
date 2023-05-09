const t = setInterval(move, 20);
// Запускает функцию move каждые 20 миллисекунд
let pos = 0;
// let flag = true;
let dir = 1;

const box = document.getElementById('box');

// clearInterval(t); // остановить функцию setInterval
function move() {
    // if (flag) {
    //     if (pos == 150) {
    //         flag = false;
    //     } else {
    //         pos++;
    //     }
        
    // } else {
    //     if (pos == 0) {
    //         flag = true;
    //     } else {
    //         pos--;
    //     }
    // }
//-----------------------------------------------------
    
    // flag ? pos++ : pos--;

    // if (pos === 0 || pos===150){
    //     flag = !flag;
    // }

    // box.style.left = pos + 'px';
    // box.style.top = pos + 'px';

//-----------------------------------------------------

    pos += dir;
    // if (pos === 150){
    //     dir = -1;
    // }
    // if (pos === 0){
    //     dir = 1;
    // }
    if (pos == 0 || pos == 150){
        dir *= -1;
    }
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';


}
console.log(new Date());

// const div1 = document.getElementById('div1');

setInterval (printTime, 1000);

// const newP = document.createElement("p");
// const newPText = document.createTextNode("Time: ");
// newP.appendChild(newPText);
// div1.appendChild(newP);

function printTime() {
    const d = new Date();
    const h = d.getHours() > 9 ? d.getHours() : +('0' + d.getHours());
    const m = d.getMinutes() > 9 ? d.getMinutes() : +('0' + d.getMinutes());
    const s = d.getSeconds() > 9 ? d.getSeconds() : +('0' + d.getSeconds());
    const time = `${h} : ${m} : ${s}`;

    const h1 = document.createElement('h1');
    h1.innerText = time;

    h1.style.margin = '10px auto 0';
    h1.style.width = 'fit-content';

    if (document.body.children == 2) {
        document.body.appendChild(h1);
    } else {
        document.body.replaceChild(h1, document.body.lastElementChild)
    }

    // if (!document.querySelector("h1")) {
    //     const timeBox = document.createElement("h1");
    //     document.body.append(timeBox);
    // }
    // document.querySelector("h1").innerText = time;

}



// function printTime() {
//     const d = new Date();
//     const h = d.getHours() > 9 ? d.getHours() : +("0"+d.getHours());
//     const m = d.getMinutes() > 9 ? d.getMinutes() : +("0"+d.getMinutes());
//     const s = d.getSeconds() > 9 ? d.getSeconds() : +("0"+d.getSeconds());
//     const time = `${h}`:`${m}`:`${s}`;

//     const h1 = document.createElement('h1');
//     h1.innerText = time;
//     h1.style.margin = '10px auto 0';
//     h1.style.width = 'fit-content';
//     console.log(document.body.children);
//     if (document.body.children == 2) {
//         document.body.appendChild(h1);
//     } else {
//         document.body.replaceChild(h1,document.body.lastElementChild)
        
//     }

//     // const timeBox = document.getElementById('time');
//     // timeBox.innerText = time;

//     // --------------------------------------------

//     // if (!document.querySelector("h1")) {
//     //     const timeBox = document.createElement("h1");
//     //     document.body.append(timeBox);
//     //   }
//     //   document.querySelector("h1").innerText = time;

// //------------------------------------------------------
//     // const time = document.createTextNode("Time: "+h+":"+m+":"+ms);
//     // newP.appendChild(newP2Text);
//     // div1.replaceChild(newP2Text, div1.firstElementChild);


//     //TODO Дописать функцию printTime(), чтобы она
//     // выводила на экран актуальное время
// }



/*
= - присвоение;
== - не строгое сравнение (сравнение значений без учёта типов данных);
=== - строгое сравнение (с учётом типов данных);

Сложение числа и строки называется конкатинацией.
Результатом будет "слипшаяся" строчка

*/