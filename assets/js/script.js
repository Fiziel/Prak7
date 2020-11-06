var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];

function Slide(title, subtitle, background, link ) {
    this.title = title;
    this.subtitle = subtitle;
    this.background = background;
    this.link = link;
    this.id = "slide" + slideIndex;
    this.counterDotSlider = "dot" + slideIndex;
    slideIndex++;
    slideArray.push(this);
}


var one = new Slide(
    "Ebay 1",
    "Ebay",
    "https://columbauto.com.ua/upload/iblock/64f/64ff4ca09da480463f2d271c194ddc0e.png",
    "https://www.ebay.com"
);

var two = new Slide(
    "Github 2",
    "Github",
    "https://www.somagnews.com/wp-content/uploads/2020/04/75-e1586981465263.png",
    "https://github.com"
);

var three = new Slide(
    "Amazon 3",
    "Amazon",
    "https://i2.wp.com/itc.ua/wp-content/uploads/2018/03/amazon_logo_RGB-1.jpg?fit=770%2C546&quality=100&strip=all&ssl=1",
    "https://www.amazon.com"
);

var four = new Slide(
    "Playstation 4",
    "Ps Store",
    "https://ua.news/wp-content/uploads/2019/02/psstore.0.jpg",
    "https://store.playstation.com/ru-ua/latest"
);

var five = new Slide(
    "Microsoft 5",
    "Microsoft store",
    "https://helpdeskgeek.com/wp-content/pictures/2020/03/microsoft-store.jpg",
    "https://www.microsoft.com/ru-tj/store/b/home"
);

function buildSlider(){
    var myHTML;
    for(var i = 0; i < slideArray.length; i++) {
        myHTML +=
            "<div id='" + slideArray[i].id + "' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +
            "<div class='slideOverlay'>" +
            "<h1>" + slideArray[i].title + "</h1>" +
            "<h4>" + slideArray[i].subtitle + "</h4>" +
            "<a class='slider' href='" + slideArray[i].link + "' target='_blank'>Open Link</a>" +
            "</div>" +
            "</div>";
    }
    document.getElementById("mySlider").innerHTML = myHTML;
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
    buildDots();
}
buildSlider();
function prevSlide(){
    var nextSlideIndex;

    if (currentSlideIndex === 0 ) {
        nextSlideIndex = slideArray.length - 1;
    } else {
        nextSlideIndex = currentSlideIndex - 1;
    }

    document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
    currentSlideIndex = nextSlideIndex;
    fDot(currentSlideIndex);
}
function nextSlide(){
    var nextSlideIndex;

    if (currentSlideIndex === (slideArray.length - 1) ) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1;
    }

    document.getElementById("slide" + nextSlideIndex).style.left = "100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class",
        "singleSlide slideOutLeft");
    currentSlideIndex = nextSlideIndex;
    fDot(currentSlideIndex);
}

function buildDots(){
    var myHTML = '';
    for(var i = 0; i < slideArray.length; i++) {
        myHTML += "<div id='" + slideArray[i].counterDotSlider + "' class='dot' onclick='fDot(this.textContent);'><span>"+i+"</span></div>";
    }
    document.getElementById("circles").innerHTML = myHTML;
    document.getElementById("dot" + currentSlideIndex).setAttribute("class", "dot dot_active");
}
function fDot(currentSlideIndex) {
    console.log("dot" +currentSlideIndex);
    for(var i = 0; i < slideArray.length; i++) {
        document.getElementById("dot" + i).classList.remove("dot_active")
        document.getElementById("slide" + i).style.left = 0;
        document.getElementById("slide" + i).setAttribute("class", "singleSlide slideOutLeft");
    }
    document.getElementById("dot" + currentSlideIndex).setAttribute("class", "dot dot_active");
    document.getElementById("slide" + currentSlideIndex).style.left = "100%";
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideInRight");
}