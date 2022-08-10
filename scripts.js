function createNameElement(type, name){

    let node = document.createElement(`${type}`);
    node.classList.add(`${name}`);

    return node;
}

function addContainer(){

    const body = document.querySelector('body');
    let container = createNameElement('div', 'container');
    body.appendChild(container);
    return container;
}

function populateGrid(){

    let container = addContainer();
    for(let i = 0; i < 4; i++){

        let row = createNameElement('div', 'row');
        for(let i = 0; i < 4; i ++){
            row.appendChild(createNameElement('div', 'originalDiv'));
        }
        container.appendChild(row);
    }
}

function overHelper(div){
    
    div.classList.remove('originalDiv');
    div.classList.add('hoverDiv');

    div.addEventListener('mouseout', () => {
        outHelper(div);
    })
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

populateGrid();
changeDiv();