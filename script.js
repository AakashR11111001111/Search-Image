// let data = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw`);
// let res = await data.json();

// var accessKey = 'QWko2gOfq4iRL3ZMP_M9LEjXU8I_Y19vrEsUF2gj3a0';
var body = document.body;
var inputs = document.querySelector(".inputs");
body.addEventListener("scroll", ()=>{
    let val = window.scrollY;
    inputs.style.background = `rgba(0,0,0,${val * 0.001})`;
})