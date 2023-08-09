let addBtn = document.querySelector('#Add');
let subBtn = document.querySelector('.Sub');
let qty = document.querySelector('#qty');
addBtn.addEventListener('click',()=>{
    qty.value = parseInt(qty.value) + 1;
});
subBtn.addEventListener('click',()=>{
   qty.value = parseInt(qty.value) - 1;
});