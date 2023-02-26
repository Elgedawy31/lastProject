let outdent = document.querySelector(".outdent");

let navul = document.querySelector(" #logo nav ul");

outdent.onclick = function(){
    navul.classList.add("active")
}

let close = document.getElementById("close");

close.onclick = function(){
    navul.classList.remove("active")
}

///////////////////////////////

let imgslider = document.querySelectorAll("#pro-details .single-pro-img .small-img img");
let mainImg = document.getElementById("main-img");

imgslider.forEach(img => {
    img.addEventListener("click" , (e) => {
        mainImg.src = e.target.src
    })
})

////////////////////////////////

let allimg = document.querySelectorAll("#products .all .pro-box img");


allimg.forEach(img => {
    img.addEventListener("click" , (ele) => {

        document.location.href = "singleProduct.html";

        mainImg.src = ele.target.src
    })
})