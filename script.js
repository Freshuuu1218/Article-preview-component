const button = document.querySelector('.share-section');
const arrow = document.querySelector('.share-section i');
const share = document.querySelector('.share-buttons');

button.addEventListener('click',()=>{
    if(window.innerWidth <= 420){
        if(button.classList.contains('clicked')){
            button.classList.remove('clicked');
            button.style.backgroundColor = 'hsl(213, 44%, 95%)';
            arrow.style.color = 'hsl(214, 17%, 51%)';
            share.style.opacity = '0';
    }else{
            button.classList.add('clicked');
            button.style.backgroundColor = 'hsl(214, 17%, 51%)';
            arrow.style.color = 'hsl(210, 46%, 95%)';
            share.style.opacity = '1';
    }
    }else{
        if(button.classList.contains('clicked')){
            button.classList.remove('clicked');
            button.style.backgroundColor = 'hsl(213, 44%, 95%)';
            arrow.style.color = 'hsl(214, 17%, 51%)';
            share.style.opacity = '0';
        }else{
            button.classList.add('clicked');
            button.style.backgroundColor = 'hsl(214, 17%, 51%)';
            arrow.style.color = 'hsl(210, 46%, 95%)';
            share.style.opacity = '1';
        }
    }
})