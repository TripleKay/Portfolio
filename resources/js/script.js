/* -------------------------------PreLoader-------------------------------------   */
$(window).on("load",function(){
    $('.loader-container').fadeOut(3500,function(){
        $(this).remove();
    }); 
});

const cursor = document.querySelector(".cursor-inner");
const cursor2 = document.querySelector(".cursor-outer");

let bannerTexts = document.querySelectorAll('.banner-text');
let navLinks = document.querySelectorAll('.nav-link');


window.addEventListener("mousemove", event => {
    cursor.style.top = event.pageY + "px";
    cursor.style.left = event.pageX + "px";

    cursor2.style.top = event.pageY + "px";
    cursor2.style.left = event.pageX + "px";
    
})
bannerTexts.forEach(bannerText => {
    bannerText.addEventListener("mouseover", () => {
        cursor2.classList.add("cursorHoverNav");
        bannerText.classList.add("bounce");
        setTimeout(function(){
            bannerText.classList.remove("bounce");
        }.bind(bannerText),1000)
    });
    bannerText.addEventListener("mouseleave", () => {
        cursor2.classList.remove("cursorHoverNav");
    })
});





const hamburgerMenuContainerTag = document.querySelector(".hamburgerMenuContainer");
const hamburgerLine1Tag = document.querySelector(".line1");
const hamburgerLine2Tag = document.querySelector(".line2");
const hamburgerLine3Tag = document.querySelector(".line3");
const overlayMenuTag = document.querySelector(".overlayMenu");
const liTags = document.getElementsByTagName("li");

hamburgerMenuContainerTag.addEventListener("click", ()=> {
    if (hamburgerMenuContainerTag.classList.contains("isOpened")) {
        hamburgerLine2Tag.classList.remove("hideLine2");
        hamburgerLine1Tag.classList.remove("rotatePlus45Deg");
        hamburgerLine3Tag.classList.remove("rotateMinus45Deg");
        hamburgerMenuContainerTag.classList.remove("isOpened");
        overlayMenuTag.classList.remove("showOverlayMenu");
        for (let i = 0; i < liTags.length; i++) {
            liTags[i].classList.remove("moveLiTagUp");
        }
    } else {
        hamburgerLine2Tag.classList.add("hideLine2");
        hamburgerLine1Tag.classList.add("rotatePlus45Deg");
        hamburgerLine3Tag.classList.add("rotateMinus45Deg");
        hamburgerMenuContainerTag.classList.add("isOpened");
        overlayMenuTag.classList.add("showOverlayMenu");
        for (let i = 0; i < liTags.length; i++) {
            liTags[i].classList.add("moveLiTagUp");
        }
    }
    
});

    hamburgerMenuContainerTag.addEventListener("mouseover", () => {
        cursor2.classList.add("cursorHoverNav");
    })
    hamburgerMenuContainerTag.addEventListener("mouseleave", () => {
        cursor2.classList.remove("cursorHoverNav");
    })

    const navbarLinks = document.querySelectorAll(".navbar-link");
    navbarLinks.forEach(navbarLink => {
        navbarLink.addEventListener("mouseover", () => {
            cursor2.classList.add("cursorHoverNav");
        })
        navbarLink.addEventListener("mouseleave", () => {
            cursor2.classList.remove("cursorHoverNav");
        })
    });
    