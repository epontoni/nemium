let skin = document.getElementById('skin');
let btnChangeSkin = document.getElementById('change-skin');
let images = document.querySelectorAll('.section-content img');
let footerImgs = document.querySelectorAll('footer img');

btnChangeSkin.addEventListener('click', handleSkin);

function handleSkin(){
    console.log(`changing skin '${skin.href}'...`)
    if(skin.href.split('/')[skin.href.split('/').length-1] == 'styles-logical.css') {
        skin.href = 'css/styles-physical.css'
        // 0 a 3
        for(let i=0; i<=3; i++){
            images[i].src =  images[i].src.substring(0, images[i].src.length - 13) + '.png'
        }

        //imagenes del footer:
        for(img of footerImgs){
            img.src = img.src.substring(0, img.src.length - 10) + '.png' // '-black.png' 10 characters
        }
    } else {
        skin.href = 'css/styles-logical.css'
        for(let i=0; i<=3; i++){
            images[i].src = images[i].src.split('.png')[0] + '-bg-white.png'
            
        }
        for(img of footerImgs){
            img.src = img.src.split('.png')[0] + '-black.png'
        }
    }
}