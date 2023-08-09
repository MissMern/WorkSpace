let multBtn = document.querySelector('#Mult');
let divBtn = document.querySelector('.Div');
let qty = document.querySelector('#qty2');
multBtn.addEventListener('click',()=>{
    if(qty.value<=0){
        qty.value = 1
    }
    else{
        qty.value = parseInt(qty.value) * 2;
    }
    
});
divBtn.addEventListener('click',()=>{
    if(qty.value<=0){
        qty.value = 1
    }
    else{
        qty.value = parseInt(qty.value) /2;
    }
})


