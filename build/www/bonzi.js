let socket = io("https://bonziworld.org");
delete io;
let moving = false;
let error_id = "error_disconnect";
let level = 0;
let welcomeversion = 4;
let target;
let room = "";
let minx = 0;
//0 = normal, 1 = DM, 2 = reply
let talkstate = 0;
let talktarget = undefined;
let mobile = innerWidth<=560;
let stage;
const agents = {
};
const settings = parseCookie(document.cookie);
let idcounter = 0;
let useredit = {
    name: "",
    id: "",
    newname: "",
    newcolor: ""
}
let mouseevents = {
    mousemove: "mousemove",
    mousedown: "mousedown",
    mouseup: "mouseup"
}
if(mobile) mouseevents = {mousemove: "touchmove", mousedown: "touchstart", mouseup: "touchend"}

let announcements = [];
let poll;

//The TTS library has a bug that may cause failure to stop current audio when new audio is made.
//It was "fixed" by making all instances of TTS global and assigned a bonzi ID.
window.tts = {};

//Type of each color
const types = {
    "peedy": "peedy",
    "clippy": "clippy"
}
const colors = ["purple", "blessed", "yellow", "allah", "red", "blue", "green", "pink", "brown", "orange", "black", "jew", "floyd", "cyan", "white", "king", "pope", "rabbi", "peedy", "clippy", "troll"];

//Set up stylesheets
const sheets = {
    bonzi:{
        spritew: 200,
        spriteh: 160,
        w: 3400,
        h: 3360,
        toppad: 0,
        anims: {
            idle: 0,
            enter: [277, 302, "idle", 0.25],
       	    leave: [16, 39, 40, 0.25],
            grin_fwd: {frames: range(182, 189).concat([184]), next: "grin_back", speed: 0.25},
            grin_back: {frames: [183, 182], next: "idle", speed: 0.25},
            shrug_fwd: [40, 50, "shrug_idle", 0.25],
            shrug_idle: [50],
            shrug_back: {frames: range(40, 50).reverse(), speed: 0.25, next: "idle"},
            backflip: [331, 343, "idle", 0.25],
            swag_fwd: [108, 125, "swag_idle", 0.25],
            swag_idle: 125,
            swag_back: {frames: range(108, 125).reverse(), next: "idle", speed: 0.25},
            earth_fwd: [51, 56, "earth_idle", 0.25],
            earth_idle: [57, 80, "earth_idle", 0.25],
            earth_back: {frames: range(51, 58).reverse(), next: "idle", speed: 0.25},
            clap_fwd: {frames: [0, 10, 11, 12, 13, 14, 15, 13, 14, 15], next: "clap_back", speed: 0.25},
            clap_back: {frames: [13, 14, 15, 13, 14, 15, 12, 11, 10], next: "idle", speed: 0.25},
            beat_fwd: {frames: [0, 101, 102, 103, 104, 105, 106, 107, 104, 105, 106, 107], next: "beat_back", speed: 0.25},
            beat_back: { frames: [104, 105, 106, 107, 104, 105, 106, 107, 103, 102, 101], next: "idle", speed: 0.25},
            think_fwd: {frames: range(242, 247).concat([247, 247, 247, 247]), next: "think_back", speed: 0.25},
            think_back: {frames: range(242, 247).reverse(), next: "idle", speed: 0.25},
            bow_fwd: [224, 231, "bow_idle", 0.25],
            bow_idle: 232,
            bow_back: {frames: range(224, 232).reverse(), next: "idle", speed: 0.25},
            praise_fwd: [159, 163, "praise_idle", 0.25],
            praise_idle: 164,
            praise_back: {frames: range(159, 164).reverse(), next: "idle", speed: 0.25},
		},
    },
    //TODO: ADD PEEDY AND CLIPPY ANIMATIONS
    peedy: {
        spritew: 160,
        spriteh: 128,
        w: 4000,
        h: 4095,
        toppad: 12,
        anims: {
            idle: 0,
            enter: [659, 681, "idle", 0.25],
            leave: [23, 47, 47, 0.25]
        }
    },
    clippy: {
        spritew: 124,
        spriteh: 93,
        w: 3348,
        h: 3162,
        toppad: 40,
        anims: {
            idle: 0,
            enter: [410, 416, "idle", 0.25],
            leave: {frames: [0].concat(range(364, 411)), speed: 0.25}
        }
    },
}

const spritesheets = {};
colors.forEach(color=>{
    if(types[color] != undefined){
        let sheet = sheets[types[color]];
        spritesheets[color] = new createjs.SpriteSheet({images: ["./img/agents/"+color+".png"], frames: {width: sheet.spritew, height: sheet.spriteh}, animations: sheet.anims})

    } else{
        spritesheets[color] = new createjs.SpriteSheet({images: ["./img/agents/"+color+".png"], frames: {width: 200, height: 160}, animations: sheets.bonzi.anims})
    }
})


//Client side commands
const clientcommands = {
    "settings": ()=>{
        new msWindow("Settings XP", `<h1>Changing Settings</h1>
            Name: <input id="autojoin_name" placeholder="name" value="${settings.name}"><br>
            Color: <input id="color_name" value='${settings.color}'><br>
            Enable Autojoin: <input type="checkbox" id="autojoin" ${settings.autojoin ? "Checked" : ""}><br>
            Background: <input id='bgName' value='${settings.bg}'><br>Disable Crosscolors: <input type="checkbox" id="disCC" ${settings.disableCCs ? "Checked" : ""}>
            <br>Theme: <input id="theme_name" placeholder="theme URL or name" list="themes" value="purple">
            <datalist id="themes">
                <option value="purple">
                <option value="blue">
            </datalist>
            `, 30, 30, innerWidth-60, innerHeight-90, [{name: "Accept & Reload", callback: ()=>{changeSettings($("disCC").checked, $("bgName").value, $("autojoin").checked, $("autojoin_name").value, $("theme_name").value, $("color_name").value);location.reload();}}, {name: "Cancel"}])
    },
}

//Shortcut, since remainder of jQuery isn't worth importing
function $(id){
	return document.getElementById(id);
}

//Primitive approach to linkifying a message
function linkify(msg){
    //Don't linkify HTML messages
    if(msg.includes("<")) return msg;

    msg = msg.split(" ");
    let nmsg = [];
    msg.forEach(word=>{
        if(word.startsWith("http://") || word.startsWith("https://")){
            nmsg.push("<a href='"+word+"' target='_blank'>"+word+"</a>")
        }
        else nmsg.push(word);
    })
    return nmsg.join(" ");
}

//The msWindow class can be treated like an agent by the move handler.
class msWindow{
    constructor(title, html, x, y, width, height, buttons){
        this.x = x;
        this.y = y;
        this.toppad = 0;
        this.w = !width ? "auto" : width;
        this.h = !height ? "auto": height;
        this.lx = x;
        this.ly = y;
        this.id = idcounter+"w";
        let btncounter = 0;
        idcounter++;
        html+="<br><br>"
        if(buttons == undefined) buttons = [{name: "Close"}]
        buttons.forEach((button)=>{
            html+="<button id='"+this.id+"b"+btncounter+"'>"+button.name+"</button> &nbsp; ";
            button.id = btncounter;
            btncounter++;
        })
        document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", `
            <div id='`+this.id+`p' style='top:`+y+`;left:`+x+`;height: `+height+`px;width: `+width+`px;' class='msWindow_cont'>
            <p id="`+this.id+`t" class='msWindow_title'>`+title+`<button class="log_close" id='`+this.id+`close'><i class='fa fa-close'></i></button></p>
            <div class='msWindow_body'>`+html+`</div>
            </div>
            `);
        //Button function handler
        buttons.forEach((button)=>{
            $(this.id+"b"+button.id).onclick = ()=>{
                if(button.callback != undefined) button.callback();
                this.kill();
            };
        })
        $(this.id+"close").onclick = ()=>{this.kill()};
        //Move starter
        $(this.id+"t").addEventListener(mouseevents.mousedown, mouse=>{movestart(mouse, this)});
        this.w = $(this.id+"p").clientWidth;
        this.h = $(this.id+"p").clientHeight;
        this.check();
    }
    update(){
        $(this.id+"p").style.left = this.x;
        $(this.id+"p").style.top = this.y;
    }
    kill(){
        $(this.id+"p").remove();
        if(announcements.includes(this)) announcements.splice(announcements.indexOf(this), 1);
        else if(poll == this) poll = undefined;
        delete this;
    }
    check(){
        if(this.x < 0) this.x = 0;
        else if(this.x > innerWidth - this.w-25) this.x = innerWidth - this.w-25;
        if(this.y < 0) this.y = 0;
        else if(this.y > innerHeight - this.h-50) this.y = innerHeight - this.h-50;
        this.update();
    }
}

class agent{
    constructor(x, y, upub){
        let id = upub.guid;
        let image = upub.color;
        let sheet = sheets[image] == undefined ? sheets["bonzi"] : sheets[image];
        this.x = x;
        this.y = y;
        this.toppad = sheet.toppad;
        this.w = sheet.spritew;
    	this.h = sheet.spriteh;
        this.anims = sheet.anims;
    	this.id = upub.guid;
        this.lx = x;
        this.ly = y;
        this.pub = upub;

        if(image.startsWith("http") && settings.disableCCs) image="purple";
        if(spritesheets[image] == undefined){
            let img = new Image();
            img.crossOrigin = "anonymous";
            img.src = image;
            let spritesheet = new createjs.SpriteSheet({images: [img], frames: {width: 200, height: 160}, animations: sheets.bonzi.anims})
            this.sprite = new createjs.Sprite(spritesheet, "enter");
        }
        else this.sprite = new createjs.Sprite(spritesheets[image], "enter");
        this.sprite.x = x;
        this.sprite.y = y+this.toppad;
        stage.addChild(this.sprite);

    	let bubbleclass = (x > innerWidth/2-this.w/2) ? "bubble-left" : "bubble-right";
        if(mobile) bubbleclass = (y > innerHeight/2-this.h/2) ? "bubble-top" : "bubble-bottom";
    	$("agent_content").insertAdjacentHTML("beforeend", `
    		<div id='`+id+`p' style='margin-top:`+y+`;margin-left:`+x+`;height: `+(this.h+sheet.toppad)+`px;width: `+this.w+`px;' class='agent_cont'>
            <span class='tag' id='`+id+`tg'></span>
            <span class='nametag' id='`+id+`n'><span id='`+id+`nn'>`+this.pub.dispname+`</span><span id='`+id+`nt'></span></span>
    		<span class='`+bubbleclass+`' style='display: none;' id='`+id+`b' >
    		<p id='`+id+`t' class='bubble_text'></p>
    		</span>
            <div style='width:${this.w};height:${this.h};' id='${this.id}c'></div>
    		</div>
    		`);
        this.parent = $(this.id+"p");
        $(id+"c").onclick = ()=>{if(this.lx == this.x && this.ly == this.y) this.cancel()};
        if(this.pub.tagged){
            $(id+"tg").style.display = "inline-block";
            $(id+"tg").innerHTML = this.pub.tag;
        }

        //Move starter
        $(id+"c").addEventListener(mouseevents.mousedown, mouse=>{movestart(mouse, this)});
    }
    update(){
        this.parent.style.marginLeft = this.x;
        this.parent.style.marginTop = this.y;
        this.sprite.x = this.x;
        this.sprite.y = this.y+this.toppad;
    }
    change(image){
        this.cancel();
        let sheet = sheets[types[image]];
        let spritesheet;
        if(image.startsWith("http")){
            if(settings.disableCCs){
                image="purple";
                spritesheet = spritesheets["purple"];
            }
            else{
                let img = new Image();
                img.crossOrigin = "anonymous";
                img.src = image;
                //Make new sheet
                spritesheet = new createjs.SpriteSheet({images: [img], frames: {width: 200, height: 160}, animations: sheets.bonzi.anims})
            }
        } else spritesheet = spritesheets[image];
        if(sheet == undefined) sheet = sheets["bonzi"];
        this.w = sheet.spritew;
        this.h = sheet.spriteh;
        this.toppad = sheet.toppad;
        this.pub.color = image;

        //Re-size parent
        $(this.id+"p").style.width = this.w;
        $(this.id+"p").style.height = this.h+sheet.toppad;
        $(this.id+"c").style.width = this.w;
        $(this.id+"c").style.height = this.h;

        //Re-create styleobject
        stage.removeChild(this.sprite);
        this.anims = sheet.anims;
        this.sprite = new createjs.Sprite(spritesheet, "idle");
        this.update();
        stage.addChild(this.sprite);

        poscheck(this.id);
    }
    talk(write, say){
        this.cancel();
        setTimeout(()=>{$(this.id+"b").style.display = "block"}, 100);
        if(write.startsWith("-")) say="";
        else say = desanitize(say);
    	if(say != "") speak.play(say, this.id, this.pub.voice, ()=>{
            delete window.tts[this.id];
            $(this.id+"b").style.display = "none";
        })
    	$(this.id+"t").innerHTML = linkify(write);
        var toscroll = $("log_body").scrollHeight - $("log_body").scrollTop < 605;
        $("log_body").insertAdjacentHTML("beforeend", "<p><font color='"+this.pub.color+"'>"+this.pub.name+": </font>"+linkify(write)+"</p>");
        if(toscroll) $("log_body").scrollTop = $("log_body").scrollHeight;
    }
    actqueue(list, i){
        if(i == 0) this.cancel();
        if(i >= list.length) return;
        if(list[i].say == undefined) list[i].say = list[i].text;
        if(list[i].type == 0){
            setTimeout(()=>{
                $(this.id+"t").innerHTML = linkify(list[i].text);
                $(this.id+"b").style.display = "block"
                speak.play(list[i].say, this.id, this.pub.voice, ()=>{
                    delete window.tts[this.id];
                    $(this.id+"b").style.display = "none";
                    i++;
                    this.actqueue(list, i);
                })
            }, 100);
        } else{
            if(this.anims[list[i].anim] == undefined){
                i++;
                this.actqueue(list, i);
                return;
            }
            let animlen = this.anims[list[i].anim].frames != undefined ? this.anims[list[i].anim].frames.length : this.anims[list[i].anim][1] - this.anims[list[i].anim][0]
            this.sprite.gotoAndPlay(list[i].anim)
            setTimeout(()=>{
                i++;
                this.actqueue(list, i);
            }, 1000/15*animlen)
        }
    }
    kill(playignore){
        this.cancel();
        if(!playignore){
            this.sprite.gotoAndPlay("leave");
            let animlen = 1000/15*(this.anims.leave[1] - this.anims.leave[0]) ;
            setTimeout(()=>{
                stage.removeChild(this.sprite);
                $(this.id+"p").remove();
            }, animlen)
        }
        else{
            stage.removeChild(this.sprite);
            $(this.id+"p").remove();
        }
        delete agents[this.id];
    }
    cancel(){
        $(this.id+"b").style.display = "none";
        if(window.tts[this.id] != undefined && window.tts[this.id].started){
            window.tts[this.id].stop();
            window.tts[this.id] = undefined;
        }
        else if(window.tts[this.id] != undefined){
            window.tts[this.id].start = ()=>{};
            window.tts[this.id] = undefined;
        }
        this.sprite.stop();
        this.sprite.gotoAndPlay("idle");
        //If left, remove (BUG FIX)
        if(agents[this.id] == undefined){
            stage.removeChild(this.sprite);
            $(this.id+"p").remove();
        }
    }
}

function poscheck(agent){
    agent = agents[agent];
    if(agent.x> innerWidth-agent.w) agent.x = innerWidth - agent.w;
    if(agent.y> innerHeight-32-agent.h) agent.y = innerHeight - 32 - agent.h;
    //Find new bubble location.
    if(agent.x> innerWidth/2-agent.w/2 && !mobile) $(agent.id+"b").className = "bubble-left";
    else if(!mobile) $(agent.id+"b").className = "bubble-right";
    else if(agent.y > innerHeight/2-agent.h/2) $(agent.id+"b").className = "bubble-top";
    else $(agent.id+"b").className = "bubble-bottom";
    agent.update();
}

function movestart(mouse, self){
    if(moving) return;
    if(mouse.touches != undefined) mouse = mouse.touches[0];
    target = self;
    //Find offset of mouse to target
    target.offsetx = mouse.clientX - target.x;
    target.offsety = mouse.clientY - target.y;
    target.lx = target.x;
    target.ly = target.y;
    //Enable moving
    moving = window.cont == undefined;
}


function mousemove(mouse){
    if(mouse.touches != undefined) mouse = mouse.touches[0];
    if(!moving) return;

    //Find new x. If new x above or below limits, set it to appropriate limit.
    target.x = Math.max(minx, Math.min(innerWidth-target.w, mouse.clientX - target.offsetx))

    //Do the same as above to Y
    target.y = Math.max(0, Math.min(innerHeight-target.h-32, mouse.clientY - target.offsety));

    //Find new bubble location.
    if($(target.id+"b") != undefined){
        if(mobile) $(target.id+"b").className = target.y > innerHeight/2-target.h/2 ? "bubble-top" : "bubble-bottom";
        else $(target.id+"b").className = target.x > innerWidth/2-target.w/2 ? "bubble-left" : "bubble-right";
    }
    target.update();
}
function mouseup(mouse){
    if(mouse.touches != undefined) mouse = mouse.touches[0];
    moving = false;
}

function movehandler(){
    //Moving
    document.addEventListener(mouseevents.mousemove, mousemove)
    document.addEventListener(mouseevents.mouseup, mouseup)

    //On resize
    window.addEventListener("resize", ()=>{
        $("bonzicanvas").width = innerWidth;
        $("bonzicanvas").height = innerHeight;
        stage.updateViewport(innerWidth, innerHeight);
    	Object.keys(agents).forEach(poscheck)
    })

    //Context menu
    document.addEventListener("contextmenu", mouse=>{
        mouse.preventDefault();
        moving = false;
        //Find agent the mouse is over
        let bid = -1;
        Object.keys(agents).forEach((akey)=>{
            //Check if within bounds of an agent. Pretty long condition.
            if(
                mouse.clientX > agents[akey].x &&
                mouse.clientX < agents[akey].x + agents[akey].w &&
                mouse.clientY > agents[akey].y &&
                mouse.clientY < agents[akey].y + agents[akey].h + agents[akey].toppad
            ) bid = akey;
        })

        //Contextmenu if found passing agent through
        if(bid>-1){
            //Define the contextmenu upon click (so it can be dynamic)
            let cmenu = [
                {
                    type: 0,
                    name: "Cancel",
                    callback: (passthrough)=>{
                        passthrough.cancel();
                    }
                },
                {
                    type: 0,
                    name: "Heil",
                    callback: (passthrough)=>{
                        socket.emit("command", {command: "heil", param: passthrough.pub.name});
                    }
                },
                {
                    type: 0,
                    name: "Direct Message",
                    callback: (passthrough)=>{
                        talkstate = 1;
                        $("talkcard").innerHTML = "Sending a private message to "+passthrough.pub.name+" <i class='fa fa-close' onclick='this.parentElement.style.display=\"none\";talkstate=0;'></i>";
                        talktarget = passthrough.id;
                        $("talkcard").style.display = "inline-block";
                    }
                },
                {
                    type: 0,
                    name: "Reply",
                    callback: (passthrough)=>{
                        talkstate = 2;
                        $("talkcard").innerHTML = "Replying to "+passthrough.pub.name+" <i class='fa fa-close' onclick='this.parentElement.style.display=\"none\";talkstate=0;'></i>";
                        talktarget = passthrough.id;
                        $("talkcard").style.display = "inline-block";
                    }
                },
                {
                    type: 0,
                    name: "Hey, NAME!",
                    callback: (passthrough)=>{
                        socket.emit("talk", `Hey, ${passthrough.pub.name}!`);
                    }
                },
                {
                    type: 0,
                    name: "Get Stats",
                    callback: (passthrough)=>{
                        new msWindow(passthrough.pub.name+"'s stats", `
                            <h1>${passthrough.pub.name} Stats</h1>Name: ${passthrough.pub.name}<br>Color: ${passthrough.pub.color}<br>GUID: ${passthrough.id}`, 30, innerHeight/2-200, innerWidth-60);
                    }
                },
                {
                    type: 1,
                    name: "Insults",
                    items: [
                        {
                            type: 0,
                            name: "Call an Asshole",
                            callback: (passthrough)=>{
                                socket.emit("command", {command: "asshole", param: passthrough.pub.name})
                            }
                        },
                        {
                            type: 0,
                            name: "Notice Bulge",
                            callback: (passthrough)=>{
                                socket.emit("command", {command: "owo", param: passthrough.pub.name})
                            }
                        },
                        {
                            type: 0,
                            name: "Pastule",
                            callback: (passthrough)=>{
                                socket.emit("talk", passthrough.pub.name+" stop being a pastule.")
                            }
                        },
                        {
                            type: 0,
                            name: "Niggerify",
                            callback: (passthrough)=>{
                                socket.emit("talk", passthrough.pub.name+" hey guess what, you're a nigger!")
                            }
                        },
                        {
                            type: 0,
                            name: "Ask to KYS",
                            callback: (passthrough)=>{
                                socket.emit("talk", passthrough.pub.name+" kill yourself" + (Math.random()>0.5 ? " like a tranny." : " NOW!"));
                            }
                        },
                    ]
                }
            ]
            if(level >= 1){
                cmenu.push({
                    type: 1,
                    name: "Gamer Mod CMDs",
                    items: [
                        {
                            type: 0,
                            name: "Jewify",
                            callback: (passthrough)=>{
                                socket.emit("command", {command: "jewify", param: passthrough.id})
                            }
                        },
                        {
                            type: 0,
                            name: "Toggle Bless",
                            callback: (passthrough)=>{
                                socket.emit("command", {command: "bless", param: passthrough.id})
                            }
                        },
                        {
                            type: 0,
                            name: "User Edit",
                            callback: (passthrough)=>{
                                useredit.name = passthrough.pub.name;
                                useredit.id = passthrough.id;
                                showUserEdit();
                            }
                        },
                        {
                            type: 0,
                            name: agents[bid].pub.locked ? "Stat Unlock" : "Stat Lock",
                            callback: (passthrough)=>{
                                socket.emit("command", {command: "statlock", param: passthrough.id})
                            }
                        },
                        {
                            type: 0,
                            name: agents[bid].pub.muted ? "Unmute" : "Mute",
                            disabled: level <= 1,
                            callback: (passthrough)=>{
                                socket.emit("command", {command: "mute", param: passthrough.id});
                            }
                        },
                        {
                            type: 0,
                            name: "Nuke",
                            disabled: level <= 1,
                            callback: (passthrough)=>{
                                socket.emit("command", {command: "nuke", param: passthrough.id})
                            }
                        },
                        {
                            type: 0,
                            name: "Blacklist Crosscolor",
                            disabled: level <= 1,
                            callback: (passthrough)=>{
                                socket.emit("command", {command: "blacklistcc", param: passthrough.id})
                            }
                        },
                        {
                            type: 0,
                            name: "Kick",
                            disabled: level <= 1,
                            callback: (passthrough)=>{
                                socket.emit("command", {command: "kick", param: passthrough.id})
                            }
                        },
                    ]
                })
            }
            if(level >= 3){
                cmenu.push({
                    type: 1,
                    name:"Gamer POPE CMDs",
                    items: [
                        {
                            type: 0,
                            name: "Set Tag",
                            callback: (passthrough)=>{
                                new msWindow("Change Tag", `
                                    <h1>Change ${passthrough.pub.name}'s tag</h1>
                                    <input id="new_tag">
                                `, 60, 60, innerWidth-120, undefined, [{name: "submit", callback: ()=>{socket.emit("command", {command: "tagsom", param: passthrough.id+" "+$("new_tag").value})}}, {name: "cancel"}])
                            }
                        },
                    ]
                })
            }
            window.cont = contextmenu(cmenu, mouse.clientX, mouse.clientY, agents[bid], window.cont);
        }
    })
}

function talk(){
    let say = $("chatbar").value;
    if(talkstate == 2){
        $("talkcard").style.display = "none";
        talkstate = 0;
        socket.emit("command", {command: "reply", param: talktarget+" "+say});
    }
    else if(talkstate == 1){
        $("talkcard").style.display = "none";
        talkstate = 0;
        socket.emit("command", {command: "dm", param: talktarget+" "+say});
    }
    else if(say.startsWith("/")){
        //Parse command
        let cmd = say.split(" ");
        let command = cmd[0].substring(1);
        cmd.splice(0, 1);
        let param = cmd.join(" ");
        if(clientcommands[command] == undefined) socket.emit("command", {command: command, param: param});
        else clientcommands[command](param);
        if(command == "kingmode" || command == "godmode"){
            settings.autorun = {command: command, param: param};
            document.cookie = compileCookie(settings);
        }
    } else if(say.startsWith("https://youtube.com/watch?v=") || say.startsWith("https://www.youtube.com/watch?v=")  || say.startsWith("https://youtu.be/")){
        socket.emit("command", {command: "youtube", param: say});
    }else{
	   socket.emit("talk", say);
    }
    $("chatbar").value = "";
}

function setup(logindata){
    if(window.ticker == undefined) window.ticker = setInterval(()=>{
        stage.update();
    }, 17)
    error_id = "error_disconnect";
    $("error_page").style.display = "none";
    $("error_restart").style.display = "none";
    $("error_disconnect").style.display = "none";

    level = logindata.level;
	//Show main UI
    $("room_name").innerHTML = logindata.roomname;
    $("room_count").innerHTML = Object.keys(logindata.users).length;
    room = logindata.roomname;
    $("error_room").innerHTML = logindata.roomname;
	$("room_priv").innerHTML = logindata.roompriv ? "private" : "public";
	$("login").style.display = "none";
	$("content").style.display = "block";
    if(logindata.owner) $("room_owner").style.display = "block";

  	//Create agents
   	Object.keys(logindata.users).forEach(userkey=>{
        let user = logindata.users[userkey];
        let type = sheets[types[user.color]] == undefined ? sheets["bonzi"] : sheets[types[user.color]]
    	let x = Math.floor(Math.random()*(innerWidth-type.spritew-minx))+minx;
    	let y = Math.floor(Math.random()*(innerHeight-type.spriteh-32-type.toppad));
		agents[userkey] = new agent(x, y, user)
    })

    $("chatbar").addEventListener("keydown", key=>{
    	if(key.which == 13) talk();
    });
    $("chatbar").addEventListener("keyup", ()=>{
        if($("chatbar").value.startsWith("/")) socket.emit("typing", 2);
        else if($("chatbar").value != "") socket.emit("typing", 1);
        else socket.emit("typing", 0)
    })
    //Autorun
    if(settings.autorun != undefined) socket.emit("command", {command: settings.autorun.command, param: settings.autorun.param})

    //Socket event listeners
    socket.on("leave", guid=>{
    	agents[guid].kill();
        $("room_count").innerHTML = Object.keys(agents).length;
    })
    socket.on("join", user=>{
        let sheet = sheets[types[user.color]] == undefined ? sheets["bonzi"] : sheets[types[user.color]]
    	let x = Math.floor(Math.random()*(innerWidth-sheet.spritew-minx))+minx;
    	let y = Math.floor(Math.random()*(innerHeight-sheet.spriteh-32-sheet.toppad));
    	agents[user.guid] = new agent(x, y, user);
        $("room_count").innerHTML = Object.keys(agents).length;
    })
    socket.on("update", user=>{
        $(agents[user.guid].id+"nt").innerHTML = user.muted ? "<br>(MUTED)" : user.typing;
        agents[user.guid].typing = user.typing;
        //Prevent unneccessary name/tag/color updates (for special effects)
        if(user.dispname != agents[user.guid].pub.dispname) $(agents[user.guid].id+"nn").innerHTML = user.dispname;
        if(user.tag != agents[user.guid].pub.tag && user.tagged){
            $(user.guid+"tg").innerHTML = user.tag;
            $(user.guid+"tg").style.display = "inline-block";
        }
        let oldcolor = agents[user.guid].pub.color;
        agents[user.guid].pub = user;

        if(user.color != oldcolor) agents[user.guid].change(user.color)
    })
    socket.on("talk", text=>{
    	agents[text.guid].talk(text.text, text.say == undefined ? text.text : text.say);
    })
    socket.on("actqueue", queue=>{
        agents[queue.guid].actqueue(queue.list, 0);
    })
    socket.on("update_self", info=>{
        if(info.nuked){
            $("chatbar_cont").style.display = "none";
            $("bg").innerHTML = "<img src='https://www.politico.eu/cdn-cgi/image/width=1160,height=751,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/01/04/GettyImages-1244207852.jpg'>"
        }
        level = info.level;
        if(info.roomowner) $("room_owner").style.display = "block";
    })
    socket.on("kick", kicker=>{
        error_id = "error_kick";
        $("error_kicker").innerHTML = kicker;
    })
    socket.on("announce", data=>{
        announcements.push(new msWindow(data.title, data.html, mobile ? 30 : 150, Math.random()*(innerHeight-100), mobile ? innerWidth - 60 : innerWidth-300));
        if(announcements.length > 3){
            announcements[0].kill();
        }
    })
    socket.on("poll", data=>{
        if(poll != undefined){
            poll.kill();
        }
        poll = new msWindow("Poll from "+data.name, `
            <h1>${data.title}</h1>
            <div id="pollyes" onclick="socket.emit('command', {command: 'vote', param: 'yes'})"><div id="innerbar_yes"></div></div>
            <div id="pollno" onclick="socket.emit('command', {command: 'vote', param: 'no'})"><div id="innerbar_no"></div></div>
            <span id="votecount">0</span> Votes!
            `,
            mobile ? 30 : 150, mobile ? 30 : 150, mobile ? innerWidth - 60 : innerWidth - 300, mobile ? innerHeight - 60 : innerHeight - 300);
    })
    socket.on("vote", data=>{
        if(poll == undefined) return;
        let tvotes = data.yes+data.no;
        $("innerbar_yes").style.width = data.yes/tvotes*100+"%";
        $("innerbar_no").style.width = data.no/tvotes*100+"%";
        $("votecount").innerHTML = tvotes;
    })
}

function start(){
	socket.emit("login", {
		name: $("nickname").value,
		room: $("room").value,
        color: settings.color
	})
    settings.name = $("nickname").value.replace(/ /g, "") == "" ? "Anonymous" : $("nickname").value;
    document.cookie = compileCookie(settings);
    $("login_card").style.display = "none";
    $("loading").style.display = "block";
}

function tile(){
	let x = 0;
	let sx = 0;
	let y = 0;
	Object.keys(agents).forEach(agent=>{
		agent = agents[agent];
		agent.x = x;
		agent.y = y;
		agent.update();
		x+=agent.w;
		if(x>innerWidth-agent.w){
			x=sx;
			y+=agent.h;
		}
		if(y>innerHeight-agent.w-32){
			sx+=20;
			x=sx;
			y=0;
		}
	})
}

//So the speaking isn't affected by sanitization
function desanitize(text){
    return text.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&apos;/g, "'").replace(/&lbrack;/g, "square bracket");
}

window.onload = ()=>{
    $("bonzicanvas").width = innerWidth;
    $("bonzicanvas").height = innerHeight;
    stage = new createjs.StageGL($("bonzicanvas"), {transparent: true});
    if(settings.bg == undefined) settings.bg = "";
    if(settings.theme == undefined) settings.theme = "https://bonziworld.org/themes/purple.css";
    if(settings.disableCCs == undefined) settings.disableCCs = false;
    if(settings.autojoin == undefined) settings.autojoin = false;
    if(settings.color == undefined) settings.color = "";
    if(settings.bg.startsWith("http")) $("bg").innerHTML += "<img src='"+settings.bg.replace(/["']/g, "")+"'></img>"
    $("content").addEventListener("mouseup", mouse=>{
        if(mouse.touches != undefined) mouse = mouse.touches[0];
        if(window.cont != undefined && mouse.button != 2) window.cont = killmenus(window.cont);
    })
    movehandler();
    if(settings.name != undefined) $("nickname").value = settings.name;
    if(settings.welcome != welcomeversion){
        settings.welcome = welcomeversion;
        document.cookie = compileCookie(settings);
        new msWindow("Welcome to BonziWORLD!",
            `<h1>Welcome to BonziWORLD!</h1>
            The worst place on the internet!<br>
            By pressing "Accept" you agree to our <a href='tac.html' target="_blank">Terms & Conditions</a><br>
            For more info, use the <a href='readme.html' target='_blank'>"README"</a><br>
            <font color=red>DISCLAIMER! WE ARE NOT RESPONSIBLE FOR CONTENT SENT BY USERS.<br>FOR MORE INFORMATION, READ THE TERMS AND CONDITIONS!</font><br><br>
            Use /settings to configure BonziWORLD to your liking! Custom backgrounds were moved to settings.
            `,
                mobile ? 10 : 100, mobile ? 10 : 100, mobile ? innerWidth - 60: innerWidth-200, mobile ? innerHeight - 60 : innerHeight-200, [{name: "Accept"}]);
    }
	$("loading").style.display = "none";
	$("login_card").style.display = "block";
	socket.on("login", setup);
    if(settings.autojoin) socket.emit("login", {name: settings.name, color: settings.color, room: "default"});
    //rejoiner
    socket.io.on("reconnect", ()=>{
        if((error_id == "error_disconnect" || error_id == "error_restart")  && room != ""){
            //Clear previous event listeners
            socket.off("leave");
            socket.off("join");
            socket.off("update");
            socket.off("kick");
            socket.off("announce");
            socket.off("talk");
            socket.off("actqueue");
            socket.off("update_self");
            //Setup
            socket.emit("login", {name: settings.name, color: settings.color, room: room});
        }
    })
}

//Error Handling
socket.on("error", error=>{
    $("login_error").innerHTML = error;
    $("login_error").style.display = "block";
    $("login_card").style.display = "block";
    $("loading").style.display = "none";
})
socket.on("restart", ()=>{
    error_id = "error_restart";
})
socket.on("disconnect", ()=>{
    Object.keys(agents).forEach(agent=>{
        agents[agent].kill(true);
    })
    $("error_page").style.display = "block";
    $(error_id).style.display = "block";
})
socket.on("rawdata", (d)=>{alert(d)})

function showlog(){
    $("log_cont").style.display = "inline-block";
    $("logshow").style.display = "none";
    minx = $("log_cont").clientWidth;
    $("log_body").scrollTop = $("log_body").scrollHeight;
    //Move all bonzis out of the way
    Object.keys(agents).forEach((agent)=>{
        agent = agents[agent];
        if(agent.x < $("log_cont").clientWidth){
            agent.x = $("log_cont").clientWidth;
            agent.update();
        }
    })
}
function closelog(){
    $("log_cont").style.display = "none";
    $("logshow").style.display = "block";
    minx = 0;
}

//Cookie functions
function parseCookie(cookie){
    let settings = {};
    cookie = cookie.split("; ");
    cookie.forEach(item=>{
        let key = item.substring(0, item.indexOf("="));
        let param = item.substring(item.indexOf("=")+1, item.length);
        if(key == "settings"){
            try{
                settings = JSON.parse(atob(param.replace(/_/g, "/").replace(/-/g, "+")));
            }
            catch(exc){
                console.log("COOKIE ERROR. RESETTING.");
                document.cookie = compileCookie({});
            }
        }
    })
    return settings;
}
function compileCookie(cookie){
    let date = new Date();
    date.setDate(new Date().getDate() + 365);
    document.cookie = "settings="+btoa(JSON.stringify(cookie)).replace(/\//g, "_").replace(/\+/g, "-")+"; expires="+date;
}

function clearCookie(){
    let date = new Date();
    date.setDate(new Date().getDate() - 365);
    document.cookie.split("; ").forEach(item=>{
        document.cookie = item+"; expires="+date;
    })
}

function showUserEdit(){
    new msWindow("User Editor XP", `
        <h1>Editing ${useredit.name}#${useredit.id}</h1>
        New Name: <input id="newname"><br><br>
        New Color: <input id="newcolor">
        <input type="submit" style="display:none;">
        `,
        60, 60, innerWidth-120, undefined, [{name: "Submit", callback: ()=>{submitUserEdit($("newname").value, $("newcolor").value)}}, {name: "Cancel"}]);
}

function submitUserEdit(newname, newcolor){
    useredit.newname = newname;
    useredit.newcolor = newcolor;
    socket.emit("command", {command: "useredit", param: JSON.stringify(useredit)})
};

function changeSettings(crosscolors, bg, autojoin, name, theme, color){
    //This function will do stuff soon!
    settings.theme = theme.startsWith("http") ? theme : "/themes/"+theme+".css";
    settings.disableCCs = crosscolors;
    settings.bg = bg;
    settings.autojoin = autojoin;
    settings.name = name;
    settings.color = color;
    document.cookie = compileCookie(settings);
}

//Useful to add in for spritesheets, JS doesn't have a default range function
function range(bottom, to){
    let x = [];
    for(i=bottom;i<=to;i++){
        x.push(i);
    }
    return x;
}


//SET THEME
if(settings.theme != undefined) $("theme").href = settings.theme.replace(/"/g, "");
