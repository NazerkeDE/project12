const images = [
    'images/gallery-1.jpg',
    'images/gallery-2.jpg',
    'images/gallery-3.jpg',
    'images/gallery-4.jpg',
    'images/gallery-5.jpg',
    'images/gallery-6.jpg'
];
const modalWindow = document.querySelector(".modal-window");
const modalImg = document.querySelector(".modal-img");
let pic = 0;
const divDots = document.querySelector(".modalDots");
for(let i = 0; i < images.length; i++) {
    divDots.innerHTML += '<div onclick="changeImgDot(${i})" class="modal-dot"></div>';
}

function showModalWindow(index){
    modalImg.src = images[index];
    modalWindow.classList.add("active");
    pic = index;
    changeImgDot(pic);
}

function hideModalWindow(){
    modalWindow.classList.remove("active");
}

function changeImg(i){
    pic += i;
    if(pic >= images.length){
        pic = 0;
    }
    else if(pic < 0){
        pic = images.length - 1;
    }
    modalImg.src = images[pic];
    changeImgDot(pic); 
}
const dots = document.querySelectorAll('.modal-dot');
function changeImgDot(index){
    modalImg.src = images[index];
    pic = index;
    for(let i = 0; i < dots.length; i++) {
        if(index == i){
            dots[i].classList.add("active-dot")
        }else{
            dots[i].classList.remove("active-dot")
        }
    }
}