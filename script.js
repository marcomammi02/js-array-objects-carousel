const arrImages = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const eleSliderContainer = document.querySelector('.slider-container');
const eleSmallImgContainer = document.querySelector('.small-img-container');

for (let i = 0; i < arrImages.length; i++) {
    const eleImg = document.createElement('img');
    eleImg.src = `img/${arrImages[i].image}`;
    eleImg.classList.add('slider-img');

    eleSmallImgContainer.innerHTML += `<img class="small-img" src="img/${arrImages[i].image}">`;
    const eleSmallImg = document.querySelector('.small-img');

    const eleDescription = document.createElement('div');
    eleDescription.classList.add('description')
    eleDescription.innerHTML = `<h1 class="description-title">${arrImages[i].title}</h1><p class="description-text">${arrImages[i].text}</p>`

    if (i == 0) {
        eleImg.classList.add('active');
        eleDescription.classList.add('active');
        eleSmallImg.classList.add('active-small');
    }

    eleSliderContainer.append(eleImg);
    eleSliderContainer.append(eleDescription);
}

const eleBtnPrev = document.querySelector('.btn-prev');
const eleBtnNext = document.querySelector('.btn-next');
const eleImgList = document.querySelectorAll('.slider-img');
const eleSmallImgList = document.querySelectorAll('.small-img')
const eleDescriptionList = document.querySelectorAll('.description');
const elePausePlayBtn = document.querySelector('.pause-play');
const elePauseBtn = document.querySelector('.fa-pause');
const elePlayBtn = document.querySelector('.fa-play');
const eleInvertAutoscrollBtn = document.querySelector('.invert-autoscroll');
const eleAutoscrollUpBtn = document.querySelector('.fa-arrow-up');
const eleAutoscrollDownBtn = document.querySelector('.fa-arrow-down');


let pause = false;
let autoscroll = true;

let activeIndex = 0

eleBtnNext.addEventListener('click', nextSlide)
eleBtnPrev.addEventListener('click', prevSlide)

let autoNext = setInterval(nextSlide, 3 * 1000);
let autoPrev;

elePauseBtn.classList.toggle('active');
elePausePlayBtn.addEventListener('click', pausePlay);

eleAutoscrollUpBtn.classList.toggle('active');
eleInvertAutoscrollBtn.addEventListener('click', invertAutoscroll);

function invertAutoscroll() {
    if (autoscroll == true) {
        clearInterval(autoNext);
        autoPrev = setInterval(prevSlide, 3 * 1000);
        autoscroll = false;
        eleAutoscrollUpBtn.classList.toggle('active');
        eleAutoscrollDownBtn.classList.toggle('active');
    } else {
        clearInterval(autoPrev);
        autoNext = setInterval(nextSlide, 3 * 1000);
        autoscroll = true
        eleAutoscrollUpBtn.classList.toggle('active');
        eleAutoscrollDownBtn.classList.toggle('active');
    }

}


// functions

function nextSlide() {
    if (activeIndex < eleImgList.length) {
        eleImgList[activeIndex].classList.remove('active');
        eleDescriptionList[activeIndex].classList.remove('active');
        eleSmallImgList[activeIndex].classList.remove('active-small');
        
        activeIndex++;
        
        if (activeIndex == eleImgList.length) {
            activeIndex = 0;
        } 
        
        eleImgList[activeIndex].classList.add('active');
        eleDescriptionList[activeIndex].classList.add('active');
        eleSmallImgList[activeIndex].classList.add('active-small');
        
    }
};


function prevSlide(){
    if (activeIndex >= 0) {
        eleImgList[activeIndex].classList.remove('active');
        eleDescriptionList[activeIndex].classList.remove('active');
        eleSmallImgList[activeIndex].classList.remove('active-small');
        
        if (activeIndex == 0) {
            activeIndex = eleImgList.length - 1;
        } else {
            activeIndex--;
        }
        
        eleImgList[activeIndex].classList.add('active');
        eleDescriptionList[activeIndex].classList.add('active');
        eleSmallImgList[activeIndex].classList.add('active-small');
        
    }
};


function pausePlay() {
    if (pause == false) {
        clearInterval(autoNext);
        pause = true;
        elePlayBtn.classList.toggle('active');
        elePauseBtn.classList.toggle('active');
    }else {
        autoNext = setInterval(nextSlide, 3 * 1000);
        pause = false
        elePlayBtn.classList.toggle('active');
        elePauseBtn.classList.toggle('active');
    }
};
