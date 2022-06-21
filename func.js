let chances = 3;
let ShowChances = document.getElementsByClassName('chances');
ShowChances[0].innerText = chances;

let color;

let Prince;

let master;
let ShowRGBColor = document.getElementsByClassName('ShowRGBcolor');


let pre = document.getElementsByClassName('prevent');
let pre2 = document.getElementsByClassName('prevent_2');
                
let re = document.getElementsByClassName('relaod');

re[2].addEventListener('click', ()=>{
  location.reload();
})

let Box = document.getElementsByClassName('box');

let min = 0;
let max = 255;

let m1 = Math.ceil(0);
let m2 = Math.floor(8);

Prince = Math.floor(Math.random() * (m2 - m1 + m1) + m1);
// console.log(Prince)

function ColorGenerator(){
  color_one = Math.floor(Math.random() * (max - min + min) + min);
  color_one = String(color_one)

  color_two = Math.floor(Math.random() * (max - min + min) + min);
  color_two = String(color_two)

  color_tree = Math.floor(Math.random() * (max - min + min) + min);
  color_tree = String(color_tree)

  color = color_one + ', ' + color_two + ', ' + color_tree   ;
  // console.log(color)

  color_one = parseInt(color_one);
  color_two = parseInt(color_two);
  color_tree = parseInt(color_tree);
}

for(let b = 0; b < Box.length; b++){

  ColorGenerator();

  Box[b].style.backgroundColor = `${'rgb'}${'(' + color + ')'}`;
  Box[Prince].style.backgroundColor = `${'rgb'}${'(' + color + ')' }`;

  if(Box[7].style.backgroundColor == Box[Prince].style.backgroundColor){
    Box[7].style.backgroundColor =  `${'rgb'}${'('+(color_tree+20)+','+(color_one+40 )+','+(color_two+60)+')'}`;
  }

  if(Prince == 7){
    Box[7].style.backgroundColor =  `${'rgb'}${'(' + color + ')'}`;
  }

    Box[b].addEventListener('click', (event)=>{
      
      if(Box[b].style.backgroundColor == master){
   
        pre2[0].style.opacity = '1';
        pre2[0].style.visibility = 'visible';

        for(let r=0; r < re.length; r++){
          re[r].addEventListener('click', ()=>{
            location.reload();
          })
        }

      }

      if(Box[b].style.backgroundColor != master){
        chances--;    
       ShowChances[0].innerText = chances   ;     
      }  

      if(chances <= 0){
  
        chances = 0;

        // let re = document.getElementsByClassName('relaod');

        pre[0].style.opacity = '1';
        pre[0].style.visibility = 'visible';

        for(let r=0; r < re.length; r++){
          re[r].addEventListener('click', ()=>{
            location.reload();
          })
        }
    
      }

    })

    Box[Prince].style.backgroundColor = master;
  
}

master = `${'rgb'}${'(' + color + ')'}`;

ShowRGBColor[0].innerText = master;


