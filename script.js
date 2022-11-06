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
        let color1 = document.getElementsByClassName('color')[0].style.backgroundColor;
        let color2 = document.getElementsByClassName('color')[1].style.backgroundColor;
        let color3 = document.getElementsByClassName('color')[2].style.backgroundColor;
        let color4 = document.getElementsByClassName('color')[3].style.backgroundColor;


        localStorage.setItem('colorPalette', `${color1}, ${color2}, ${color3}, ${color4}`);        
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


// cor preta como cor inicial

let blackSelected = document.getElementsByClassName('color')[0];
blackSelected.classList.add('selected');

// cria função para alterar cor

function selectColorPalllete(){
    let divSelected = document.getElementById('color-palette');

    divSelected.addEventListener('click', function (event){
        event.target.className = 'color selected';

        let color1 = document.getElementsByClassName('color')[0];
        let color2 = document.getElementsByClassName('color')[1];
        let color3 = document.getElementsByClassName('color')[2];
        let color4 = document.getElementsByClassName('color')[3];  

             
         
            if(color4.className == 'color selected'){
                color1.classList.remove('selected');
                color2.classList.remove('selected');
                color3.classList.remove('selected');
            }
            event.target.className = 'color selected';
            if(color3.className == 'color selected'){
                color1.classList.remove('selected');
                color2.classList.remove('selected');
                color4.classList.remove('selected');
            }
            event.target.className = 'color selected';
            if(color2.className == 'color selected'){
                color1.classList.remove('selected');
                color3.classList.remove('selected');
                color4.classList.remove('selected');
            }
            event.target.className = 'color selected';
            if(color1.className == 'color selected'){
                color2.classList.remove('selected');
                color3.classList.remove('selected');
                color4.classList.remove('selected');
            }
            event.target.className = 'color selected';
    })
}

selectColorPalllete();

// altera cor board

function colorPixelBoard(){
    let pixelBoard2 = document.getElementById('pixel-board');

    pixelBoard2.addEventListener('click', function (event){

        let colorPallete1 = document.getElementsByClassName('color')[0];
        let colorPallete2 = document.getElementsByClassName('color')[1];
        let colorPallete3 = document.getElementsByClassName('color')[2];
        let colorPallete4 = document.getElementsByClassName('color')[3];

        if(colorPallete1.className == 'color selected'){
            event.target.style.backgroundColor = colorPallete1.style.backgroundColor;
        }else if(colorPallete2.className == 'color selected'){
            event.target.style.backgroundColor = colorPallete2.style.backgroundColor;
        }else if(colorPallete3.className == 'color selected'){
            event.target.style.backgroundColor = colorPallete3.style.backgroundColor;
        }else if(colorPallete4.className == 'color selected'){
            event.target.style.backgroundColor = colorPallete4.style.backgroundColor;
        }
        
    })
}

colorPixelBoard();

// retornar o quadro de pixel para branco

function pixelBoardWhite(){
    let clearBoard = document.getElementsByClassName('pixel');
    for(i=0; i<clearBoard.length; i=i+1){
        clearBoard[i].style.backgroundColor = 'white';
    }
}

pixelBoardWhite();
