function initfade() {
    let headerElem = document.getElementsByClassName("header");
    headerElem = headerElem[0];
    console.log(headerElem);
    for (let i = 0; headerElem.children.length > i; i++) {
        setTimeout(() => {
            headerElem.children[i].style.opacity = "1";
            headerElem.children[i].classList.add("animate__fadeInUp")
        }, i * 200, headerElem);
    }

    let videoElems = document.getElementById("videoShowcase")
    let videoAnims = ["animate__fadeInLeft", "animate__fadeInUp", "animate__fadeInRight"];
    for (let i = 0; videoElems.children.length > i; i++) {
        setTimeout(() => {
            videoElems.children[i].style.opacity = "1";
            videoElems.children[i].classList.add(videoAnims[i]);
        }, i * 300, videoElems)


    }
}

let twitterLink = document.getElementById("twitterLink");


setTimeout(initfade, 200);

tippy(".tippyHover", {
    content: "Tooltip"
})


$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
});
