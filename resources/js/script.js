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
    
    feather.replace();
        
   const filteBtnContainer = document.querySelector('.filterBtnContainer');
   const projectBoxs = document.querySelectorAll('.projectBox');
   const projectImages = document.querySelectorAll('.projectImage');
   const filterBtns = document.querySelectorAll('.filterBtn');
const cursorText = document.querySelector('.cursor-text');
const projectTitles = document.querySelectorAll('.projectTitle');
filterBtns.forEach(filterBtn => {
    filterBtn.addEventListener("mouseover", () => {
        cursor2.classList.add("cursorHoverNav");
    })
    filterBtn.addEventListener("mouseleave", () => {

        cursor2.classList.remove("cursorHoverNav");
    })
});

projectImages.forEach(projectImage => {
    projectImage.addEventListener("mouseover", () => {
        cursor.classList.add('innerCursorHoverGoLink');
        cursorText.classList.add('cursor-text-show');
        cursor2.classList.add("cursorHoverGoLink");
    })
    projectImage.addEventListener("mouseleave", () => {
        cursorText.classList.remove('cursor-text-show');

        cursor2.classList.remove("cursorHoverGoLink");
    })
});
const projectGithubs = document.querySelectorAll('.projectGithub');
projectGithubs.forEach(projectGithub => {
    projectGithub.addEventListener("mouseover", () => {
        cursor2.classList.add("cursorHoverNav");
    })
    projectGithub.addEventListener("mouseleave", () => {
        cursor2.classList.remove("cursorHoverNav");
    })
});

   window.onload = () => {
    filteBtnContainer.onclick = (selectedItem) => {
        if(selectedItem.target.classList.contains('item')){
            filteBtnContainer.querySelector('.active').classList.remove('active');
            selectedItem.target.classList.add('active');
            let filterType = selectedItem.target.getAttribute('data-name');
            projectBoxs.forEach((projectBox)  => {
                let filterBoxs = projectBox.getAttribute('data-name');
                if((filterBoxs == filterType) || filterType == 'all'){
                    projectBox.classList.remove('hide');
                    projectBox.classList.add('show');
                }else{
                    projectBox.classList.add('hide');
                    projectBox.classList.remove('show');
                }
            })
        }
    }
   }