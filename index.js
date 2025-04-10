/*this changes the text inside of an elemet    
document.querySelector('#user>b').textContent = ('grace');
document.querySelector('#user > i').textContent = ('?');
*/
// this is an array of numbers
// [1,2,3,.4]
// const c ='a very long sentence,500 words long. Really!!!!!';
// document.querySelector('output').textContent = c;
const eye = document.querySelector("#eye");
const output =document.querySelector('output');
const ipt =document.querySelector('input')
const fm =document.querySelector('form');
const pop = document.querySelector("#pop")
eye.addEventListener('mousedown', () => {
    ipt.type ='text';
});
eye.addEventListener('mouseup', () => {
    ipt.type ='password';
});

fm.addEventListener("submit",(e) =>{
    e.preventDefault(); //this will stop the page form reloading
    const pd ="grace&praise";
    if (pd=== ipt.value) {
        fm.remove();
        output.textContent ='signing you in...';
        const timeoutID = setTimeout(() => {
            
        }, 3000);
        pop.showPopover();
        clearTimeout (timeoutID);
    }else{
      output.textContent = 'wrong password'; 
    }
});