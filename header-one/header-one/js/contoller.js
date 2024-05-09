
let res__btn = document.getElementById("res__btn");
let mobail__navigation = document.getElementById('mobail__navigation');
let responsive__icon = document.getElementById('responsive__icon');

let count = 1;
res__btn.addEventListener("click", ()=>{
    count = count + 1;

    if(count % 2 == 0){
        mobail__navigation.style.display = "block";
        responsive__icon.innerHTML= "<i class='fa-solid fa-xmark'></i>";
    }else{
        mobail__navigation.style.display = "none";
        responsive__icon.innerHTML= "<i class='fa-solid fa-bars'></i>";
    }
    
    console.log(count)
});

// account modal

let account__modal_btn = document.getElementById('account__modal_btn');


account__modal_btn.addEventListener("click", ()=>{
    console.log("modal Open");
})