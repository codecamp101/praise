/* this changes the text inside of an element
document.querySelector('#user > b').textContent = 'Emeka';
document.querySelector('#user > i').textContent = '?';
*/
//this is an array of numbers
//[2,4,"computer",8]
const eye = document.querySelector('#eye');
const output = document.querySelector('output');
const ipt = document.querySelector('input');
const fm = document.querySelector('form');
const pop = document.querySelector('#pop');
const user = document.querySelector('#user')
const start = document.querySelector('#start')
const pan = document.querySelector('#panel')
// this unmasks the password
eye.addEventListener('mousedown', () => {
    ipt.type = 'text'
});
// this masks the password
eye.addEventListener('mouseup', () => {
    ipt.type = 'password'
});
// this submits the password with the formsuii
fm.addEventListener('submit', (e) => {
    e.preventDefault();//this will stop the page from reloading
    const pd ='12345';
    if (pd === ipt.value) {
        user.remove()
        fm.remove()
        output.textContent = 'Signing you in...';
        const timeoutID = setTimeout(() => {
                output.remove()
            pop.showPopover();
            clearTimeout(timeoutID)
        }, 3000);
    } else {
        output.textContent ='Wrong Password'
    }
});
// this shows/hides the #panel
start.addEventListener('click', () => {
     pan.classList.toggle('on')
})
// this formats UNIX number into a human-readadle date
const dob = new Date('05/28/2013').getTime();//date format in javascript mm-dd-yyy
pan.querySelector('#dob').textContent = Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(dob);

//FUNCTION
// A Function is a group of statements that does not run unless when called
function calculator () {
    console.log(2 + 4);
    console.log(10 - 5)
    console.log(10 / 2);
    console.log(3 * 3);
    console.log(10 % 2)//modulos( short form is mod);the remainder of a division
}
calculator();

function callConfetti () {
    /*
 const t ='ME&';
  const u ="12345";
  console.log(t - u);
   */
  const d = new Date('05/28/2013').getDate();
  const m = new Date("04/14/2025").getMonth();
  const today = Date.now();
  console.log(newDate(today).getDate())
  if (new Date(today).getDate() === d && new Date() === m) {
    pan.classList.add('bgi');
  } 
  console.log(d)
  console.log(m)
}
callConfettie();