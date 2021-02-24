

let button = document.getElementById('button');
let clean = document.getElementById('clean');
let inputReversed = document.getElementById('input-reversed');
let reversed = '';



function wordReversed (string) {
    for (let i = string.length - 1; i >= 0; i --){
        reversed += string[i];
    }
    inputReversed.innerText = reversed;
};

function cleanEverything(){
    inputReversed.innerText = '';
    formInput.innerText = '';
};


button.addEventListener('click', function(){
    let formInput = document.getElementById('input').value;
    wordReversed(formInput);
});


