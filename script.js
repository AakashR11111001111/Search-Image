// let data = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=QWko2gOfq4iRL3ZMP_M9LEjXU8I_Y19vrEsUF2gj3a0`);
// let res = await data.json();

var accessKey = 'QWko2gOfq4iRL3ZMP_M9LEjXU8I_Y19vrEsUF2gj3a0';
var mainContainer = document.querySelector(".main-container");
var photoContainer = document.querySelector(".photo-container");
var searchBtn = document.querySelector(".search-btn");
var showMoreBtn = document.querySelector(".showmore-Btn");
var searchIp = document.querySelector(".search-ip");
var body = document.body;
var search = "";
var inputs = document.querySelector(".inputs");
var page = 1;
window.addEventListener("scroll", ()=>{
    let val = window.scrollY;
    let maxOpacity = 0.3;
    let maxBlur = 10;

    let opacity = Math.min(val * 0.0008, maxOpacity);
    let blur = Math.min(val * 0.005, maxBlur);      

    inputs.style.background = `rgba(255,255,255,${opacity})`;
    inputs.style.backdropFilter = `blur(${blur}px)`;
})

searchBtn.addEventListener("click", async ()=>{
    search = searchIp.value;
    let obj = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=QWko2gOfq4iRL3ZMP_M9LEjXU8I_Y19vrEsUF2gj3a0`);
    let fotu = await obj.json();
    photoContainer.innerHTML = "";
    fotu["results"].forEach(fotuu => {
        let code = `
                <div class="card">
                    <div class="img-div">
                        <img src ="${fotuu["urls"]["raw"]}" alt="">
                    </div>
                    <div class="desc-div">
                        <p>${fotuu["alt_description"].toUpperCase()}</p>
                    </div>
                </div> 
                `
        showMoreBtn.style.display = "block";
        photoContainer.innerHTML += code;
    });
})

showMoreBtn.addEventListener("click", async ()=>{
    page++;
    let obj = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=QWko2gOfq4iRL3ZMP_M9LEjXU8I_Y19vrEsUF2gj3a0`);
    let fotu = await obj.json();
    fotu["results"].forEach(fotuu => {
        let code = `
                <div class="card">
                    <div class="img-div">
                        <img src ="${fotuu["urls"]["raw"]}" alt="">
                    </div>
                    <div class="desc-div">
                        <p>${fotuu["alt_description"].toUpperCase()}</p>
                    </div>
                </div> 
                `
        showMoreBtn.style.display = "block";
        photoContainer.innerHTML+= code;
    });
})