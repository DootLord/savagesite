function initfade() {
    let headerElem = document.getElementsByClassName("header");
    headerElem = headerElem[0];
    console.log(headerElem);
    for(let i = 0; headerElem.children.length > i; i++) {
        setTimeout(() => {
            headerElem.children[i].style.opacity = "1";
            headerElem.children[i].classList.add("animate__fadeInUp")
        }, i * 200, headerElem);
    }

    let videoElems = document.getElementById("videoShowcase")
    let videoAnims = ["animate__fadeInLeft", "animate__fadeInUp", "animate__fadeInRight"];
    for(let i = 0; videoElems.children.length > i; i++) {
        setTimeout(() => {
            videoElems.children[i].style.opacity = "1";
            videoElems.children[i].classList.add(videoAnims[i]);
        }, i * 300, videoElems)
        

    }
}

let twitterLink = document.getElementById("twitterLink");

twitterLink.addEventListener("click", function() {
    window.open("https://twitter.com/SavNatEd");
});

twitterLink.addEventListener("mouseover", function() {
    this.classList.add("animate__rubberBand")
});

twitterLink.addEventListener("mouseout", function() {
    this.classList.remove("animate__rubberBand");
});

setTimeout(initfade, 200);

tippy(".tippyHover", {
    content: "Tooltip"
})
