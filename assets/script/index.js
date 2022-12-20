//NAV
const btnExpMenu = document.getElementById("btnExpMenu")
btnExpMenu.addEventListener("click", navMobileMenu)
const expMenu = document.getElementById("expMenu")
expMenu.style.height = '0px'

function navMobileMenu() {
    if (expMenu.style.height == '0px') {
        expMenu.style.height = '280px';
        expMenu.style.borderBottom = "solid 1px rgba(0, 0, 0, 0.25)";
    }
    else { expMenu.style.height = '0px'; expMenu.style.borderBottom = "none" }

}

setTimeout(() => {
    const x = document.querySelector("#eapps-google-reviews-3d5503b7-ac55-4620-a445-0f173eadb11b > div > a")
    console.log(x)
    x.style.display = "none"

    const y =document.querySelector("#eapps-instagram-feed-1 > a")
    console.log(y)
    y.style.display = "none"
}, 1000);


//Test 

