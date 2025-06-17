function upDate(previewPic){

    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("title").style.backgroundColor = "black";
    console.log("Image from " + previewPic.src);

    document.getElementById("title").innerHTML = previewPic.alt;
    console.log(previewPic.alt + " image");

    onfocus("images")
}

function unDo(){
    document.getElementById("image").style.backgroundImage = "url('')";
    console.log("Removing image");

    document.getElementById("title").innerHTML = "Hover over an image below to display here.";
    document.getElementById("title").style.backgroundColor = "transparent";
    console.log("Removing text");
}

function addStuff() {
    const gallery = document.querySelectorAll(".preview");
    for (let i = 0; i < gallery.length; i++) {
        gallery[i].onfocus = function() {
            upDate(this);
        };

        gallery[i].onblur = function() {
            unDo();
        };

        gallery[i].tabIndex = 0;
    }
}