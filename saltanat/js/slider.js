window.onload = function(){

    var btn_prev = document.querySelector('#gallery .buttons .prev');
    var btn_next = document.querySelector('#gallery .buttons .next');
    var selects = document.querySelectorAll('.select');

    


    var img = document.querySelector('.slider-img');

    selects[0].addEventListener('click', function(){
    	img.style.background  = "url('img/img01.jpg')";
    	selects[0].classList.add('active-btn');
    	selects[1].classList.remove('active-btn');
    	selects[2].classList.remove('active-btn');
        document.querySelector('.three-block-title').innerHTML = 'Зал торжеств на 1000 мест';
        document.querySelector('.three-block-text').innerHTML = 'С большой любовью проработана каждая деталь в интерьере, чтобы сделать <br>Ваше торжество по-настоящему прекрасным!';
    });

    selects[1].addEventListener('click', function(){
    	img.style.background  = "url('img/img02.jpg')";
    	selects[1].classList.add('active-btn');
    	selects[0].classList.remove('active-btn');
    	selects[2].classList.remove('active-btn');
        document.querySelector('.three-block-title').innerHTML = 'Зал караоке';
        document.querySelector('.three-block-text').innerHTML = 'Зал караоке ';
    });

    selects[2].addEventListener('click', function(){
    	img.style.background  = "url('img/img03.jpg')";
    	selects[2].classList.add('active-btn');
    	selects[0].classList.remove('active-btn');
    	selects[1].classList.remove('active-btn');
        document.querySelector('.three-block-title').innerHTML = 'Music hall';
        document.querySelector('.three-block-text').innerHTML = 'Music hall';
    });

     

   

}