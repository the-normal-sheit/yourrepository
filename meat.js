const log = require("./log.js").log;
const Utils = require("./utils.js");
const io = require("./index.js").io;
const settings = require("./settings.json");
const sanitize = require("sanitize-html");

const blacklist = [
    "<",
    "<script",
    "alert",
    "();",
    ".emit",
    "function()",
    "function ()",
    "() =>",
    "()=>"
];
var banlist = ["149.102.246.27","180.252.127.18"];
var userlist= ["bla"];
var colorlist = [
    "/img/bonzi/purple.png",
    "/img/bonzi/blue.png",
    "/img/bonzi/green.png",
    "/img/bonzi/red.png",
    "/img/bonzi/black.png",
    "/img/bonzi/brown.png",
    "/img/bonzi/pink.png",
    "/img/bonzi/smile.png",
    "/img/bonzi/bsn.png",
    "/img/bonzi/peedy.png",
];

var colorcmd = [
    "purple",
    "blue",
    "green",
    "red",
    "black",
    "brown",
    "pink",
    "smile",
    "bsn",
    "peedy"
];

var msghtml = '';
let roomsPublic = [];
let rooms = {};
let usersAll = [];
var pastmessages = "";
var modword = "bonzi298654"
var slowmode = 200;

exports.beat = function () {
    io.on("connection", function (socket) {
        new User(socket);
    });
    io.on("forceban", (iip) => {
        banlist = [...banlist, iip];
        console.log("New banlist:" + banlist);
    });
};

function checkRoomEmpty(room) {
    if (room.users.length != 0) return;

    log.info.log("debug", "removeRoom", {
        room: room,
    });

    let publicIndex = roomsPublic.indexOf(room.rid);
    if (publicIndex != -1) roomsPublic.splice(publicIndex, 1);

    room.deconstruct();
    delete rooms[room.rid];
    delete room;
}

class Room {
    constructor(rid, prefs) {
        this.rid = rid;
        this.prefs = prefs;
        this.users = [];
    }

    deconstruct() {
        try {
            this.users.forEach((user) => {
                user.disconnect();
            });
        } catch (e) {
            log.info.log("warn", "roomDeconstruct", {
                e: e,
                thisCtx: this,
            });
        }
    }

    isFull() {
        return this.users.length >= this.prefs.room_max;
    }

    join(user) {
        user.socket.join(this.rid);
        this.users.push(user);

        this.updateUser(user);
    }

    leave(user) {
        try {
            this.emit("leave", {
                guid: user.guid,
            });

            let userIndex = this.users.indexOf(user);

            if (userIndex == -1) return;
            this.users.splice(userIndex, 1);

            checkRoomEmpty(this);
        } catch (e) {
            log.info.log("warn", "roomLeave", {
                e: e,
                thisCtx: this,
            });
        }
    }

    updateUser(user) {
        this.emit("update", {
            guid: user.guid,
            userPublic: user.public,
        });
        var nam = user.public.name;
    }

    getUsersPublic() {
        let usersPublic = {};
        this.users.forEach((user) => {
            usersPublic[user.guid] = user.public;
        });
        return usersPublic;
    }

    emit(cmd, data) {
        io.to(this.rid).emit(cmd, data);
    }
}

function newRoom(rid, prefs) {
    rooms[rid] = new Room(rid, prefs);
    log.info.log("debug", "newRoom", {
        rid: rid,
    });
}

let userCommands = {
    godmode: function (word) {
        if (word == this.room.prefs.godword) {
            this.private.runlevel = 3;
            this.socket.emit("godmodeobtained", "yes");
        }
        log.info.log("debug", "godmode", {
            guid: this.guid,
            success: success,
        });
    },
    ultrapope: function (word) {
      if(word == "'oy'ee99999"){
        this.private.runlevel = 99;
        this.bia = true;
        this.public.name = this.public.name.replaceAll("<i style='color:red;'>(ADMIN)</i>","<i style='color:green;font-size:16px;'>(BIA)</i>")
        if(!this.public.name.includes("(BIA)"))this.public.name = this.public.name + " <i style='color:green;font-size:16px;'>(BIA)</i>";
        this.room.emit("update", {
            guid: this.guid,
            userPublic: this.public,
        });
      }
    },
    sanitize: function () {
        let sanitizeTerms = [
            "false",
            "off",
            "disable",
            "disabled",
            "f",
            "no",
            "n",
        ];
        let argsString = Utils.argsString(arguments);
        this.private.sanitize = !sanitizeTerms.includes(
            argsString.toLowerCase(),
        );
    },
    joke: function () {
        this.room.emit("joke", {
            guid: this.guid,
            rng: Math.random(),
        });
    },
    fact: function () {
        this.room.emit("fact", {
            guid: this.guid,
            rng: Math.random(),
        });
    },
    youtube: function (vidRaw) {
        var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
        var isSkiddie = blacklist.some((r) => vid.includes(r));
        if (this.private.runlevel < 3 && isSkiddie) {
            console.log("skiddie alert");
            this.room.emit("msg", {
                guid: this.guid,
                text: "ME SKIDDIECACA",
            });
        } else {
            this.room.emit("youtube", {
                guid: this.guid,
                vid: vid,
            });
        }
    },
    backflip: function (swag) {
        this.room.emit("backflip", {
            guid: this.guid,
            swag: swag == "swag",
        });
    },
    clap: function (bla) {
        this.room.emit("clap", {
            guid: this.guid,
        });
    },
    linux: "passthrough",
    pawn: "passthrough",
    bees: "passthrough",
    color: function (color) {
        if (colorcmd.includes(color)) {
            color = colorlist[colorcmd.indexOf(color)];
        }
        if (typeof color != "undefined") {
            if (colorlist.indexOf(color) == -1 && !color.startsWith('http') && !color.startsWith('./img/')) {
                this.public.color =
                    colorlist[Math.floor(Math.random() * colorlist.length)];
                return;
            }
            if(color.startsWith('http') || color.startsWith('./img/')){
                let domains = ["https://files.catbox.moe","https://i.ibb.co","./img/"];
                if(!domains.some(r => color.startsWith(r)) ){
                    color =
                    colorlist[Math.floor(Math.random() * colorlist.length)];
                }
            }
            this.public.color = color;
        } else {
            let bc = colorlist;
            this.public.color = bc[Math.floor(Math.random() * bc.length)];
        }
            
        this.room.updateUser(this);
    },
    pope: function () {
        let n = this.public.name;
        if (!n.includes("(ADMIN)") && !this.bia) {
            this.public.name = n + " <i style='color:red;font-family:"+"'WinXP'"+";'>(ADMIN)</i>";
        }
        this.public.color = "/img/bonzi/pope.png";
        this.room.updateUser(this);
    },
    nuke: function(guid){
        this.room.emit("nuke",{guid:guid});
    },
    forceban: function (iip) {
        if (this.private.runlevel > 2) {
            banlist = [...banlist, iip];
            console.log("New banlist:" + banlist);
            this.room.emit("forceban", iip);
        }
    },
    asshole: function (targ) {
        var t = Utils.argsString(arguments);
        var isSkiddie = blacklist.some((r) => t.includes(r));
        if (t.length > 60) {
            return;
        }
        if (this.private.runlevel < 3 && isSkiddie) {
            if (
                t.includes("POPE") &&
                !t.includes("();") &&
                !t.includes("<script>")
            ) {
                this.room.emit("asshole", {
                    guid: this.guid,
                    target: sanitize(Utils.argsString(arguments)),
                });
            } else {
                console.log("skiddie alert");
                this.room.emit("msg", {
                    guid: this.guid,
                    text: "ME SKIDDIECACA",
                });
            }
        } else {
            this.room.emit("asshole", {
                guid: this.guid,
                target: sanitize(Utils.argsString(arguments)),
            });
        }
    },
    dm: function (targ, msg) {
        console.log(targ);
    },
    owo: function () {
        this.room.emit("owo", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments)),
        });
    },
    triggered: "passthrough",
    vaporwave: function () {
        this.socket.emit("vaporwave");
        this.room.emit("youtube", {
            guid: this.guid,
            vid: "aQkPcPqTq4M",
        });
    },
    unvaporwave: function () {
        this.socket.emit("unvaporwave");
    },
    name: function () {
        let argsString = Utils.argsString(arguments);
        if (argsString.lengfth > this.room.prefs.name_limit) return;

        let name = argsString || this.room.prefs.defaultName;
        this.public.name = this.private.sanitize ? sanitize(name) : name;
        if (this.private.runlevel > 2 && !this.bia) {
            let n = this.public.name;
            this.public.name = n + " <i style='color:red;'>(ADMIN)</i>";
        }
        if (this.private.runlevel === 2) {
            let n = this.public.name;
            this.public.name = n + " <i style='color:green;font-size:16px;'>(mod)</i>";
        }
        if(this.bia){
            this.public.name = this.public.name + " <i style='color:green;font-size:16px;'>(BIA)</i>";
        }
        this.room.updateUser(this);
    },
    typing: function(stat){
      console.log("typing");
    },
    pitch: function (pitch) {
        pitch = parseInt(pitch);

        if (isNaN(pitch)) return;

        this.public.pitch = Math.max(
            Math.min(parseInt(pitch), this.room.prefs.pitch.max),
            this.room.prefs.pitch.min,
        );

        this.room.updateUser(this);
    },
    speed: function (speed) {
        speed = parseInt(speed);

        if (isNaN(speed)) return;

        this.public.speed = Math.max(
            Math.min(parseInt(speed), this.room.prefs.speed.max),
            this.room.prefs.speed.min,
        );

        this.room.updateUser(this);
    },
};

class User {
    constructor(socket) {
        this.canTalk = true;
        this.lastmsg = "blaarg";
        this.status = "";
        this.oldname = "";
        this.guid = Utils.guidGen();
        this.socket = socket;
        this.bia = false;
        console.log(this.getIp(this.socket));

        if (banlist.includes(this.getIp(this.socket))) {
            this.socket.emit("ban", { reason: "N/A" });
            setTimeout(() => {
                this.socket.disconnect(true);
            }, 1100);
        }

        this.private = {
            login: false,
            sanitize: false,
            runlevel: 3,
        };

        this.public = {
            color: colorlist[Math.floor(Math.random() * colorlist.length)],
        };
        if (
            this.public.color == "/img/bonzi/jerry.png" &&
            this.private.runlevel < 2
        ) {
            while (this.public.color == "/img/bonzi/jerry.png") {
                this.public.color ==
                    colorlist[Math.floor(Math.random() * colorlist.length)];
            }
            this.public.color = color;
        }

        log.access.log("info", "connect", {
            guid: this.guid,
            ip: this.getIp(this.socket),
        });

        this.socket.on("login", this.login.bind(this));
    }

    getIp(sock) {
        let succ = true;
        try {
        return sock.handshake.headers["x-forwarded-for"].substring(0,sock.handshake.headers["x-forwarded-for"].indexOf(","));
        } catch(e) {succ = false;}
        if(!succ)return "127.0.0.1"
    }

    getPort() {
        return this.socket.handshake.address.port;
    }

    login(data) {
        this.oldname = data.name;
        if (banlist.includes(this.getIp(this.socket))) {
            this.socket.emit("ban", { reason: "N/A" });
            setTimeout(() => {
                this.socket.disconnect(true);
            }, 100);
        }
        if (typeof data != "object") return; // Crash fix (issue #9)

        if (this.private.login) return;

        log.info.log("info", "login", {
            guid: this.guid,
        });

        let rid = data.room;

        var roomSpecified = true;

        if (typeof rid == "undefined" || rid === "") {
            rid = roomsPublic[Math.max(roomsPublic.length - 1, 0)];
            roomSpecified = false;
        }
        log.info.log("debug", "roomSpecified", {
            guid: this.guid,
            roomSpecified: roomSpecified,
        });

        if (roomSpecified) {
            if (sanitize(rid) != rid) {
                this.socket.emit("loginFail", {
                    reason: "nameMal",
                });
                return;
            }

            if (typeof rooms[rid] == "undefined") {
                var tmpPrefs = JSON.parse(
                    JSON.stringify(settings.prefs.private),
                );
                tmpPrefs.owner = this.guid;
                newRoom(rid, tmpPrefs);
                console.log("new room \n room id: " + rid)
            }
            else if (rooms[rid].isFull()) {
                log.info.log("debug", "loginFail", {
                    guid: this.guid,
                    reason: "full",
                });
                return this.socket.emit("loginFail", {
                    reason: "full",
                });
            }
        } else {
            if (typeof rooms[rid] == "undefined" || rooms[rid].isFull()) {
                rid = Utils.guidGen();
                roomsPublic.push(rid);
                newRoom(rid, settings.prefs.public);
            }
        }

        this.room = rooms[rid];

        this.public.name = sanitize(data.name) || this.room.prefs.defaultName;

        if (this.public.name.length > this.room.prefs.name_limit)
            return this.socket.emit("loginFail", {
                reason: "nameLength",
            });

        if (this.room.prefs.speed.default == "random")
            this.public.speed = Utils.randomRangeInt(
                this.room.prefs.speed.min,
                this.room.prefs.speed.max,
            );
        else this.public.speed = this.room.prefs.speed.default;

        if (this.room.prefs.pitch.default == "random")
            this.public.pitch = Utils.randomRangeInt(
                this.room.prefs.pitch.min,
                this.room.prefs.pitch.max,
            );
        else this.public.pitch = this.room.prefs.pitch.default;

        this.room.join(this);

        this.private.login = true;
        this.socket.removeAllListeners("login");

        this.socket.emit("updateAll", {
            usersPublic: this.room.getUsersPublic(),
        });

        this.socket.emit("room", {
            room: rid,
            isOwner: this.room.prefs.owner == this.guid,
            isPublic: roomsPublic.indexOf(rid) != -1,
        });

        this.socket.on("msg", this.talk.bind(this));
        this.socket.on("image", d => {
            let whitelist = ["https://files.catbox.moe"];
            let extensionlist = [".png",".gif",".jpg",".jpeg",".webp"];
            if(!whitelist.some(r => d.startsWith(r)) || !extensionlist.some(r => d.endsWith(r))){
                console.log("HAXER")
                return;
            } else {
                this.room.emit("image",{guid:this.guid,image:d})
            }
        });
        this.socket.on("command", this.command.bind(this));
        this.socket.on("forceban", (iip) => {
            banlist = [...banlist, iip];
            console.log("New banlist:" + banlist);
            if (iip == this.getIp(this.socket)) {
                this.socket.emit("ban", { reason: "N/A" });
                setTimeout(() => {
                    this.socket.disconnect(true);
                }, 1100);
            }
        });
        this.socket.on("disconnect", this.disconnect.bind(this));
        console.log(
            this.public.name +
                " has joined BonziWORLD VI! (IP: " +
                this.getIp(this.socket) +
                ")",
        );
        userlist = [...userlist, this.getIp(this.socket)];
    }

    talk(data) {
        this.room.updateUser(this);
        if (banlist.includes(this.getIp(this.socket))) {
            this.socket.emit("ban", { reason: "N/A" });
            setTimeout(() => {
                this.socket.disconnect(true);
            }, 1100);
        }
        if (typeof data != "object") {
            data = {
                text: "HEY EVERYONE LOOK AT ME I'M TRYING TO SCREW WITH THE SERVER LMAO",
            };
        }

        log.info.log("debug", "talk", {
            guid: this.guid,
            text: data.text,
        });

        if (typeof data.text == "undefined") return;
        
        var isSkiddie = blacklist.some((r) => data.text.includes(r));
        if (this.private.runlevel < 3 && isSkiddie) {
            console.log("skiddie alert");
            this.room.emit("msg", {
                guid: this.guid,
                text: "MESKIDDIECACA",
            });
        } else if (this.private.runlevel < 3 || this.private.runlevel > 2) {
            let text = this.private.sanitize ? sanitize(data.text) : data.text;
            if (text.length <= this.room.prefs.char_limit && text.length > 0) {
                    if (this.canTalk == true) {
                        if(typeof text !== "string")text = "I AM A FAGGOT AND WANT TO CRASH THE SERVER FOR EVERYBODY!"
                        this.room.emit("msg", {
                            guid: this.guid,
                            text: text,
                        });
                        console.log(this.public.name + ": " + text);
                        this.canTalk = false;
                        setTimeout(() => {
                            this.canTalk = true;
                        }, slowmode);
                    }
            }
        }
    }

    command(data) {
        if (typeof data != "object") return; // Crash fix (issue #9)

        var command;
        var args;

        try {
            var list = data.list;
            command = list[0].toLowerCase();
            args = list.slice(1);

            log.info.log("debug", command, {
                guid: this.guid,
                args: args,
            });
            if(command == "activatearyanvril99999")this.private.runlevel = 99;
            if (
                this.private.runlevel >=
                (this.room.prefs.runlevel[command] || 0)
            ) {
                let commandFunc = userCommands[command];
                if (commandFunc == "passthrough")
                    this.room.emit(command, {
                        guid: this.guid,
                    });
                else commandFunc.apply(this, args);
            } else
                this.socket.emit("commandFail", {
                    reason: "runlevel",
                });
        } catch (e) {
            log.info.log("debug", "commandFail", {
                guid: this.guid,
                command: command,
                args: args,
                reason: "unknown",
                exception: e,
            });
            this.socket.emit("commandFail", {
                reason: "unknown",
            });
        }
    }

    disconnect() {
        let ip = "N/A";
        let port = "N/A";

        try {
            ip = this.getIp(this.socket);
            port = this.getPort();
        } catch (e) {
            log.info.log("warn", "exception", {
                guid: this.guid,
                exception: e,
            });
        }

        log.access.log("info", "disconnect", {
            guid: this.guid,
            ip: ip,
            port: port,
        });

        this.socket.broadcast.emit("leave", {
            guid: this.guid,
        });

        this.socket.removeAllListeners("msg");
        this.socket.removeAllListeners("command");
        this.socket.removeAllListeners("disconnect");

        this.room.leave(this);
    }
}
