//Get the string (should use DOM)
// let word = 'This is a string';
// let word1 = 'madam';
//Reverse a string without converting to array


let button = document.getElementById('button');
let clean = document.getElementById('clean');
// let formInput = document.getElementById('input').value;
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
//    check();
});





// let input = '';

// function submitForm(event){
//     event.preventDefault();
//     let input = event.target['input'].value;
//     let reversed = '';
//     for (let i = input.length - 1; i >= 0; i --){
//         reversed += input[i];
//     }
//     if(input === reversed){
//         input.value=reversed;
//     } else {
//         // console.log('No');
//         input.value='reversed';
//     }
// }





// // console.log(input);

// // if(){

// // }


// function check (string, reversed){
//     if (reversed !== string){
//         console.log('Not a palindrome');
//     } else {
//         console.log('Palindrome found');
//     }
// };

// // check(word1, wordReversed);
