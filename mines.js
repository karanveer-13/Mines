function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var m = getRandomNumber(1, 9);
  
  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function showMobileMessage() {
    if (isMobileDevice()) {
        document.getElementById('mobileMessage').innerHTML = 'Please use desktop site version on mobile for a more immersive experience 😐😊';
    }
}


  m = String(m);
  var n=3;
  var max;
  var min;
  var mines=1;
  var arr1 = new Array();
  var arr2 = new Array();
  var l;
  var unblurr;
const chaching = new Audio();
chaching.src = "Cash Register (Kaching) - Sound Effect (HD).mp3";

const minesound = new Audio();
minesound.src = "Small Bomb Explosion Sound Effect.mp3";


document.addEventListener("DOMContentLoaded", function() {
    
    showMobileMessage();
    sb();
    document.getElementById("submit").onclick = function(event){
        sb();

    }
} );

function disableOtherButtons() {
    var buttons = document.getElementsByTagName('button');
    for (var i = 1; i < max+1; i++) {

            buttons["btn"+i].disabled = true;
            buttons["btn1"].disabled = true;
    };
};

function revealAllMinesAndGems() {
    var buttons = document.getElementsByTagName('button');
    for (var i = 1; i <= max; i++) {
        if (!buttons["btn" + i].disabled) {
            if (arr2.includes(i)) {
                document.getElementById("btn" + i).innerHTML = '<img src="mine.png">';
            } 
            else {
                document.getElementById("btn" + i).innerHTML = '<img src="gem.png" style="opacity:0.2;">';
            }
            buttons["btn" + i].disabled = true;
        }
    }
    arr2=[];
}

function sb(){
    arr2=[];
        event.preventDefault();
        n = document.getElementById("matrix").value;
        mines = document.getElementById("mines").value;

        if(n == 3) {
            document.getElementById("playarea").innerHTML = "<button id='btn1'></button>  <button id='btn2'></button>  <button id='btn3'></button> <br><br><button id='btn4'></button>  <button id='btn5'></button>  <button id='btn6'></button> <br><br><button id='btn7'></button>  <button id='btn8'></button>  <button id='btn9'></button> <br><br>";
            max = 9;
            arr1 = [1,2,3,4,5,6,7,8,9];
            l = arr1.length

        }
        else if(n == 4) {
            document.getElementById("playarea").innerHTML = "<button id='btn1'></button>  <button id='btn2'></button>  <button id='btn3'></button> <button id='btn4'></button> <br><br> <button id='btn5'></button>  <button id='btn6'></button> <button id='btn7'></button> <button id='btn8'></button> <br><br> <button id='btn9'></button> <button id='btn10'></button> <button id='btn11'></button> <button id='btn12'></button><br><br> <button id='btn13'></button> <button id='btn14'></button> <button id='btn15'></button> <button id='btn16'></button> <br><br>";
            max = 16;
            arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
            l = arr1.length

        }
        else if(n == 5) {
             document.getElementById("playarea").innerHTML = "<button id='btn1'></button>  <button id='btn2'></button>  <button id='btn3'></button>  <button id='btn4'></button>  <button id='btn5'></button> <br><br> <button id='btn6'></button>  <button id='btn7'></button>  <button id='btn8'></button>  <button id='btn9'></button>  <button id='btn10'></button> <br><br> <button id='btn11'></button>  <button id='btn12'></button>  <button id='btn13'></button>  <button id='btn14'></button>  <button id='btn15'></button> <br><br> <button id='btn16'></button>  <button id='btn17'></button>  <button id='btn18'></button>  <button id='btn19'></button>  <button id='btn20'></button> <br><br> <button id='btn21'></button>  <button id='btn22'></button>  <button id='btn23'></button>  <button id='btn24'></button>  <button id='btn25'></button> <br><br>";
             max = 25;
             arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
             l = arr1.length;
             for(var i=1; i<max+1; i++) {
                 document.getElementById("btn"+i).style.width = "100px";
                 document.getElementById("btn"+i).style.height = "100px";
             }
          }


        min = 1;
        if(mines==1)
        {
            l = arr1.length
                m = getRandomNumber(0, l-1);
                arr2[0]=arr1[m];
                arr1.splice(m,1);
                var b = String(arr2[0]);
                setupButtonHandlers();
                document.getElementById("btn"+b).onclick = function(){
                 minesound.play();
                 document.getElementById("btn"+b).innerHTML = '<img src="mine.png">';
                 revealAllMinesAndGems();
                 disableOtherButtons();
                };
        }
        else if(mines>=2)
        {
            for(var k=1;k<=mines;k++)
            {
                l = arr1.length
                m = getRandomNumber(0, l-k+1);
                arr2[k-1]=arr1[m];
                arr1.splice(m,1);
            }

                setupButtonHandlers();
                var h;
                for(h=0; h<arr2.length; h++)
                {
                    b = String(arr2[h]);
                    try{
                    document.getElementById("btn"+b).onclick = function(){
                    minesound.play();
                    document.getElementById("btn"+b).innerHTML = '<img src="mine.png">';
                    revealAllMinesAndGems();
                    disableOtherButtons();
                    }
                }
                catch{
                    sb();
                }
                }
        };

    function setupButtonHandlers() {
        for (let i = 1; i <= n * n; i++) {
            document.getElementById("btn" + i).onclick = function(){
                chaching.play();
                document.getElementById("btn" + i).innerHTML = '<img src="gem.png">';
                this.disabled = true;
            
        };
    };    
    };

}
