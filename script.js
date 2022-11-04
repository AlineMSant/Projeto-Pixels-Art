// 4 cores distintas, 

function colorPalette(){
    let palette = document.getElementById('color-palette');

    for(let i=0; i<4; i=i+1){
    let color = document.createElement('div');
    color.className = 'color';
    palette.appendChild(color);
    }    
}

// primeira cor sempre preta 

colorPalette();

function firstColor(){
    let colorOne = document.getElementsByClassName('color')[0];
    colorOne.style.backgroundColor = 'black';
}

firstColor();

// outras cores feitas de forma dinamica e que não se repetem 
// pesquisa sobre parseInt e Math.random https://wallacemaxters.com.br/blog/48/como-gerar-cores-aleatorias-no-javascript

function generateColor(){
    let color234 = document.getElementsByClassName('color');
    for(let i=1; i<color234.length; i=i+1){
        let r = parseInt(Math.random() * 255);
        let g = parseInt(Math.random() * 255);
        let b = parseInt(Math.random() * 255);

        let cor = `rgb(${r}, ${g}, ${b})`;

        color234[i].style.backgroundColor = cor;
    }
}

generateColor();


//salva no localStorage chave colorPalette

function savePallete(){
    let buttonGenerateColor = document.getElementById('button-random-color');

    buttonGenerateColor.addEventListener('click',function(){
        let colors = document.getElementsByClassName('color');
    })
}

savePallete();

// quadro com 25px

let board = document.getElementById('pixel-board');

    for(i=0; i<25; i=i+1){
    let pixel = document.createElement('div');
    pixel.className = 'pixel'
    board.appendChild(pixel);
    }
