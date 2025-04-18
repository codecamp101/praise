const hintBtn =document.querySelector('#hintBtn');
const txt = document.querySelector('#txt');
hintBtn. addEventListener('click', ()=> {
    writeTxt();
    // txt.textContent ='I CHANGED YOU'
});
function writeTxt () {
    const text ='To walk unsteadily, as like a baby';
    txt.textContent ='';
    let count = 0;
    setInterval(() => {
        if (count === text.length) clearInterval(id);
        txt.textContent+= text[count];
        count++; //count++ keeps adding 1 to the value of count
    },100 );
}
2.0.wordsmit
let score =0;
const checkBtn = document.querySelector('#checkBtn');
checkBtn.addEventListener ('click', () => {
    document.querySelector('#cup > i').textContent = score;
    score +=5;
    document.querySelector('#action').computedStyleMap.backgroundImage = `url('error_fawzi_mourad.gif)`;
    const timeoutID  =  setTimeout(() => {
    document.querySelector('#action').computedStyleMap.backgroundImage = `url('comfetti.gif')`;
    clearTimeout(tid);
    });

});
//STRING METHODS
//.slice(starts,end) //slices a portion of a string
//.trim () //remove spaces at the beginning and of a sting
//concat(... stings) //remoces at the beginning and end of a stings 
//.at(...index)   //chooses the char at the index
//.lenght  //tells how many chars are in a sting
//.toLowercase() //writes all chars in Lower case
//.toUpperCase() writes all chars in upper case
//.endsWith("")//returns true if char of the  shrings matchs the FIRST char
//startWith ('') // returns false if char of the stings matches the LAST char