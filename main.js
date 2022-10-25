let board = document.querySelector('.board');
const blackBtn = document.querySelector('.black');
const whiteBtn = document.querySelector('.white');
const randomBtn = document.querySelector('.random');
const resetBtn = document.queryCommandValue('.reset');
const changeBtn = document.querySelector('.changeSize');


window.onload = () => {
    const boxs = board.querySelectorAll('.box');
    boxs.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'red'
    } ))
}

function createGrid(cols, rows) {
    board.style.setProperty('--grid-rows', rows);
    board.style.setProperty('--grid-cols', cols);
    for(let i = 0; i <(cols * rows); i++) {
        const div = document.createElement('div');
        board.appendChild(div).classList.add('box');
    }
}

createGrid(150, 150);

function blackColor() {
    const boxs = board.querySelectorAll('.box');
    blackBtn.addEventListener('click',  () => {
         boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black'
         }))
    })
}


function whiteColor() {
    const boxs = board.querySelectorAll(".box");
    whiteBtn.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = "rgb(232, 228, 228)";
                }))
    })
}


function resetAll() {
    const boxs = document.querySelectorAll('.box');
    boxs.forEach(box => {
     box.style.background = "rgb(232, 228, 228)";
    })
}

function randomColor() {
    const boxs = document.querySelectorAll('.box');
    randomBtn.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            
            const RGB = `rgb(${R},${G},${B})`;
            
            box.style.background = RGB;

        }))
    } )
}

function changeBoard() {
    changeBtn.addEventListener('click', () => {
        let user = prompt("Enter only a number: ");
        if(user === null || user <= 1 || user >= 150) {
            resetAll();
            createGrid(16, 16);
        } else {
            resetAll();
            createGrid(user, user);
            whiteColor();
            blackColor();
            randomColor()
        }
    })
}