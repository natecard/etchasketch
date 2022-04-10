const container = document.getElementById('container')
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        //cell.innerText = (c + 1);
        container.appendChild(cell).className = 'grid-item';
        };
};
makeRows(16,16);

coloring()
function coloring() {
    let restart = document.querySelector('restart')
    let items = document.querySelectorAll('.grid-item')
    items.forEach(item => {
    item.addEventListener('mouseover', () => {item.style.backgroundColor = 'red'}); 
    restart.addEventListener('click', () => {item.style.backgroundColor = 'white'});
    })
};
