const tree = document.getElementById('tree');
const snow = document.body;
const btn = document.getElementById('partyBtn');
const btn2 = document.getElementById('snowBtn');
const audio = document.getElementById('xmasSound');

let isParty = false;
let isSnow = false;

btn.addEventListener('click',async () => {

    isParty =!isParty;

    if(isParty){

        tree.classList.add('party');

        btn.textContent='🎵演出停止';

        try{
            audio.currentTime = 0;

            await audio.play();
        }catch{
            console.warn('Audio play was blocked:',e)
        }
    }else{

        tree.classList.remove('party');

        btn.textContent='✨クリック演出';

        audio.pause();
        audio.currentTime = 0;
    }
});

btn2.addEventListener('click',async () => {

    isSnow =!isSnow;

    if(isSnow){

        snow.classList.add('snowing');

        btn2.textContent='❄️ 雪を止める';


    }else{

        snow.classList.remove('snowing');

        btn2.textContent='❄️ 雪を降らす';

    }
});