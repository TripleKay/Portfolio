/* -------------------------------PreLoader-------------------------------------   */
$(window).on("load",function(){
    $('.loader-container').fadeOut(3500,function(){
        $(this).remove();
    }); 
});

function delay(n){
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(()=>{
            done();
        },n);
    });
}
function pageTransition(){
    var tl = gsap.timeline();
    tl.to(".loading-screen",{
        duration: 1.2,
        width: "100%",
        left: "0",
        ease: "Expo.easeInOut"
    });
    tl.to(".loading-screen",{
        duration: 1,
        width: "100%",
        left : "100%",
        ease: "Expo.easeInOut",
        delay: 0.3

    });
    return tl.set(".loading-screen",{left: "-100%"});
  }


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
        
        // const texts = [
        //     'HTML','CSS','BOOTSTRAP','SCSS',
        //     'JAVASCRIPT','JQUERY','AJAX',
        //     'VUE','VUEX',
        //     'PHP','MYSQL','LARAVEL','INERTIA',
        //     'NPM'
        // ];
        // //const TagCloud = require('TagCloud');
        // const container = '.tagcloud';
        // var tagCloud = TagCloud(container,texts,{
        //     radius: '300',

        //     maxSpeed: 'normal',
        //     initSpeed:'fast',

        //     direction: 135,

        //     keep: true,
        // });
        $(function(){
            barba.init({
               
                sync: true,
                transitions: [{
        
                  async leave(data) {
                    const done = this.async();
                    pageTransition();
                    await delay(1000);
                    done();
                    // return data;
        
                  },
                  async enter(data){
                    // pageTransition();
                  }
                // leave(data) {
                //     return gsap.to(data.current.container, {
                //       opacity: 0
                //     });
                //   },
                //   enter(data) {
                //     return gsap.from(data.next.container, {
                //       opacity: 0
                //     });
                //   }
                  
                }]
              });
        })