document.addEventListener("DOMContentLoaded", function () {

    const imgs = [...document.querySelectorAll(".gallery-item img")];

    if (imgs.length === 0) {
        console.log("Không tìm thấy ảnh");
        return;
    }

    let index = 0;

    // Tạo popup
    const box = document.createElement("div");
    box.id = "imageViewer";

    box.innerHTML = `
        <button id="prevImg">&#10094;</button>
        <img id="viewerImg">
        <button id="nextImg">&#10095;</button>
        <span id="closeImg">&times;</span>
    `;

    document.body.appendChild(box);


    // CSS tạo bằng JS
    const style = document.createElement("style");
    style.innerHTML = `
    #imageViewer {
        display:none;
        position:fixed;
        inset:0;
        background:rgba(0,0,0,.9);
        z-index:999999;
        align-items:center;
        justify-content:center;
    }

    #viewerImg {
        max-width:85%;
        max-height:85%;
    }

  #prevImg,
#nextImg {
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    background:rgba(255,255,255,0.15);
    border:none;
    color:white;
    width:35px;
    height:35px;
    border-radius:50%;
    font-size:18px;
    cursor:pointer;
}

    #prevImg {
        left:30px;
    }

    #nextImg {
        right:30px;
    }

    #closeImg {
        position:absolute;
        top:20px;
        right:35px;
        color:white;
        font-size:45px;
        cursor:pointer;
    }
    `;

    document.head.appendChild(style);


    const viewer = document.getElementById("imageViewer");
    const viewerImg = document.getElementById("viewerImg");


    function showImage(){

        viewerImg.src = imgs[index].src;
        viewer.style.display = "flex";

    }


    imgs.forEach((img,i)=>{

        img.onclick = function(){

            index = i;
            showImage();

        };

    });


    document.getElementById("nextImg").onclick = function(e){

        e.stopPropagation();

        index++;

        if(index >= imgs.length){
            index = 0;
        }

        showImage();

    };


    document.getElementById("prevImg").onclick = function(e){

        e.stopPropagation();

        index--;

        if(index < 0){
            index = imgs.length - 1;
        }

        showImage();

    };


    document.getElementById("closeImg").onclick = function(){

        viewer.style.display = "none";

    };


    viewer.onclick = function(e){

        if(e.target === viewer){
            viewer.style.display = "none";
        }

    };


    document.addEventListener("keydown", function(e){

        if(viewer.style.display === "flex"){

            if(e.key === "ArrowRight"){
                document.getElementById("nextImg").click();
            }

            if(e.key === "ArrowLeft"){
                document.getElementById("prevImg").click();
            }

            if(e.key === "Escape"){
                viewer.style.display = "none";
            }

        }

    });

});
