/*
GO TO "SETTINGS AND HACKS",
COPY AND PASTE THIS ENTIRE SCRIPT INTO "CUSTOM JAVASCRIPT HERE...",
THEN PRESS "SEND JAVASCRIPT"
*/


function el(a){return document.getElementById(a);}
function openFullscreen() {
    const elem = document.documentElement;
  
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
function initiateNiggalink(){
    el('bonzi_canvas').style.animation = "rainbo 0.5s linear infinite";
    socket.emit("command",{list:["name","NIGGALINK TESTER"]});
    el('chat_send').innerText = "BOOST";
    el('chat_send').style.width = "30%";
    el('chat_send').style.height = "30%";
    el('chat_send').style.fontSize = "90px";
    el('chat_bar').style.backgroundImage = 'none';
    el('chat_bar').style.backgroundColor = 'black';
    let qs=0;el('chat_send').onclick = () => {qs++; alert("PLEAZ WAIT MANE... (QUEUE "+qs+")");setTimeout(() => {alert("MORE RAM SUCCESFULLY DOWNLOADED FOR NIGGALINK..."); qs--;},qs*1000);}
    let elements = document.getElementsByClassName('niggalink_interface');
    document.body.style.backgroundImage = "url('./hackz/src/droyd.png')";
    let droyde = new Audio('./hackz/src/DROYD.mp3');
    droyde.play();
    droyde.loop = true;
    let overs = false;
    for(let i=0;i<elements.length;i++){
        let element = elements[i];
        let mous =  (e) => {
            if(!overs){
                overs = true;
                openFullscreen();
            }
            if(document.fullscreenElement){}
            else{
                openFullscreen();
            }
        }
        element.onmouseover = mous;
        document.body.onmouseover = mous;
        el('content').onmouseover = mous;
        setTimeout(() => {
            element.style.display = "block";
            element.style.animation = "spine 2s linear alternate-reverse infinite";
            if(element.innerHTML.includes("floydtech"))element.style.animation = "scrolle 4s linear infinite";
        },i*(800+Math.random()*300))
    }
}
document.body.insertAdjacentHTML('beforeend','<div style="width:100%;height:100%;z-index:9999;pointer-events: none;"><img style="position:absolute;opacity:0.2;" src="./hackz/src/hax.gif" width="100%" height="100%"></div><marquee scrollamount="25" style="position:absolute;left:0px;top:0px;width:100%;height:8%;color:green;background-color:black;font-family:monospace;font-style:italic;">VITALS: {[AFRO-IMMUNE&REPAIR:84WPS][PERIPHERAL-HOLOVIEW:ONLINE][BPS:300][FENT:48%]} ||||||||||  NIGGALINK_STAT: ONLINE - RAM: 86 GB</marquee><style> @keyframes spine{from{transform:rotate(360deg) scale(1);}to{transform:rotate(0deg) scale(3, 1.5);}} @keyframes scrolle{from{top:-100%;}to{top:200%;}} .icon {font-family:monospace;}</style><div><div class="niggalink_interface" style="display:none;position:absolute;left:50%;top:0px;"><img src="./hackz/src/droyd.gif" width="300" height="300" style="opacity:0.5;"></div><div class="niggalink_interface" style="display:none;position:absolute;right:0px;bottom:0px;">            <img src="./hackz/src/droyd.gif" width="300" height="300" style="opacity:0.5;">        </div>        <div class="niggalink_interface" style="display:none;position:absolute;left:50%;bottom:0px;"><img src="./hackz/src/droyd.gif" width="300" height="300" style="opacity:0.5;"></div></div><div class="niggalink_interface" style="display:none;position:absolute;"><img src="./hackz/src/floydtech.jpg" width="300" height="300" style="opacity:0.5;"></div>');
initiateNiggalink();