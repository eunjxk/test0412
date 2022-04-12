'use strick';

const gallery=document.querySelector('.gallery');
const galleryUl=gallery.querySelector('ul');
const galleryUlLi=galleryUl.querySelectorAll('li');


const arrImg=[];
for(let i=0; i<galleryUlLi.length; i++){
    arrImg.push(`url(img/gallery${i}.jpg) no-repeat 50%/cover`);
    galleryUlLi[i].style.background=arrImg[i];
}

function autoGo(num){
    let gab=galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
    let goto= (-gab * num)+'px';
    gallery.style.left=goto;
    gallery.classList.add('gallery-animation');
}
function autoAdd(num){
    itemsUlLi.forEach((el,idx)=>{
        if(idx===i){
            el.classList.add('on')
        }else{
            el.classList.remove('on')
        }
    });
}

let i=-1;

function autoGallery(){
    if(i>=galleryUlLi.length-1) i=-1;
    
    i++;
    autoGo(i);
    
    autoAdd(i);

    if(i>=galleryUlLi.length-1) i=-1;
}

let setInt=setInterval(autoGallery,4000);

const centerBtn=document.querySelector('.center-btn');
const spanArrow=centerBtn.querySelectorAll('span.arrow');

centerBtn.addEventListener('mouseover', (e)=>{
    const eTarget=e.target;
    spanArrow.forEach(el=>{
        if(el===eTarget){
            clearInterval(setInt)
        }
    });
});
centerBtn.addEventListener('mouseout', (e)=>{
    const eTarget=e.target;
    spanArrow.forEach(el=>{
        if(el===eTarget){
            setInt = setInterval(autoGallery,4000);
        }
    });
});

const items=document.querySelector('.gallery');
const itemsUl=items.querySelector('ul');
const itemsUlLi=itemsUl.querySelectorAll('li');

itemsUl.addEventListener('mouseover', (e)=>{
    const eTarget=e.target;
    itemsUlLi.forEach(el=>{
        if(el===eTarget){
            clearInterval(setInt)
        }
    });
});

itemsUl.addEventListener('mouseout', (e)=>{
    const eTarget=e.target;
    itemsUlLi.forEach(el=>{
        if(el===eTarget){
            setInt=setInterval(autoGallery,2000);
        }
    });
});


(()=>{
    autoGallery();
})();