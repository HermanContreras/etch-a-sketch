function createNameElement(type, name){

    let node = document.createElement(`${type}`);
    node.classList.add(`${name}`);

    return node;
}

function addContainer(){

    const body = document.querySelector('body');
    let container = createNameElement('div', 'container'),
        btn = createNameElement('btn', 'btn');

    btn.textContent = 'Change Squares';
    body.appendChild(container);
    container.appendChild(btn);
    return container;
}

function changeDivSizeHelper(div,size){
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
}

function changeDivSize(side){
    let originalDivs = document.querySelectorAll('.row > div'),
        newSize = 500/side;

    originalDivs.forEach( div => 
        changeDivSizeHelper(div, newSize)
    );
}

function populateGrid(side){

    let container = addContainer();
    for(let i = 0; i < side; i++){

        let row = createNameElement('div', 'row');
        for(let i = 0; i < side; i ++){
            row.appendChild(createNameElement('div', 'originalDiv'));
        }
        container.appendChild(row);
    }
    changeDiv();
    changeDivSize(side);
    btn();
}

function overHelper(div){
    
    div.classList.remove('originalDiv');
    div.classList.add('hoverDiv');

    /*
    div.addEventListener('mouseout', () => {
        outHelper(div);
    })
    */
}

function outHelper(div){
    div.classList.remove('hoverDiv');
    div.classList.add('originalDiv');
}

function changeDiv(){
    let startDivs = document.querySelectorAll('.originalDiv');

    startDivs.forEach(div =>        
        div.addEventListener('mouseover', () => {
            overHelper(div);
        })
    );
}

function reset(){
    input = prompt('Numer of square per side: ');
    let container = document.querySelector('.container');
    container.remove();

    populateGrid(input);
}

function btn(){
    let btn = document.querySelector('.btn');
    
    btn.addEventListener('click', reset);
}

populateGrid(4);