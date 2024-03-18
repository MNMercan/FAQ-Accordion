const items = document.querySelectorAll('.list-item');
const toggleButtons = document.querySelectorAll('.icon-toggle > img')
const plus = "http://127.0.0.1:5500/assets/images/icon-plus.svg"
const minus = "http://127.0.0.1:5500/assets/images/icon-minus.svg"
console.log(toggleButtons);

items.forEach((item) => {
   item.addEventListener('click', () => {
    console.log(item.classList)
    item.classList.toggle('active');
   })
})
toggleButtons.forEach((item) => {
    let toggle = false;
    item.addEventListener('click', () => {
        if(toggle){
            item.src = plus;
        }else{
            item.src = minus;
        }
        toggle = !toggle;
    })
})