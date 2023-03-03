window.addEventListener('load', function() {
    var carousels = document.getElementsByClassName('carousel');

    console.log(carousels.length);

    // 캐러셀 이벤트 로직
        for( let i = 0; i < carousels.length; i++){
            //carousel[i] 는 class="carousels"인 요소를 순차적으로 불러옴
            addeventToCarousel(carousels[i]);
        }

});

function addeventToCarousel(carouselElem){
    let ulElem = carouselElem.querySelector('ul');
    let liElems = ulElem.querySelectorAll('li');

    let adjustedWidth = liElems.length * liElems[0].clientWidth;
    ulElem.style.width = adjustedWidth + 'px';

    //슬라이드 버튼
    let slidebutton = carouselElem.querySelectorAll('.slide');
    for(let i = 0; i < slidebutton.length; i++){
        slidebutton[i].addEventListener('click',createListnerSlide(carouselElem));
    }
}

    function createListnerSlide(carouselElem){
        return function(event){
            let clickedButton = event.currentTarget;
            //currentTarget 은 현재 클릭한 버튼

            // 값 가져오기
            let liElems = carouselElem.querySelectorAll('li');
            let liCount = liElems.length;
            let currentIndex = carouselElem.attributes.data.value;

            //슬라이드 버튼 체크
            if(clickedButton.className.includes('right') && currentIndex < liCount - 1){
                currentIndex ++;
                scrollDiv(carouselElem, currentIndex);
            } else if (clickedButton.className.includes('left') && currentIndex > 0){
                currentIndex --;
                scrollDiv(carouselElem, currentIndex);
            }

            updateindicator(carouselElem, currentIndex);

            buttonvisible(carouselElem, currentIndex, liCount);

            carouselElem.attributes.data.value = currentIndex;
        }
    }

    function scrollDiv(carouselElem, nextIndex){
        let scrollable = carouselElem.querySelector('div');
        let liWidth = scrollable.clientWidth;
        let newLeft = liWidth * nextIndex;

        scrollable.scrollTo({left: newLeft, behavior: 'smooth'});
    }

    function updateindicator(carouselElem, currentIndex){
        let indicator = carouselElem.querySelectorAll('footer > div');

        for(let i = 0; i < indicator.length; i++){
            if(currentIndex == i){
                indicator[i].className = 'active';
            } else {
                indicator[i].className = '';
            }
        }
    }

    function buttonvisible(carouselElem, currentIndex, liCount){
        let left = carouselElem.querySelector('.slide-left');
        let right = carouselElem.querySelector('.slide-right');

        if(currentIndex > 0){
            left.style.display = 'block';
        } else {
            left.style.display = 'none';
        }

        if(currentIndex < liCount - 1){
            right.style.display = 'block';
        } else {
            right.style.display = 'none';
        }
    }