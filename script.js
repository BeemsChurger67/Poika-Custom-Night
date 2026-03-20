let scene = "menu";
const soundEffects = {
    alarm: "Assets/SoundEffects/alarm.mp3",
    aatosliina: "Assets/SoundEffects/aatosliina.mp3",
    lightSwitch: "Assets/SoundEffects/lightSwitch.mp3",
    laugh: "Assets/SoundEffects/laugh.mp3",
    warhead: "Assets/SoundEffects/warhead.mp3",
    beemsDeath:  "Assets/SoundEffects/beemsDeath.mp3",
    beemsVoiceline:  "Assets/SoundEffects/beemsVoiceline.mp3",
    unkkaFound:  "Assets/SoundEffects/unkkaFound.mp3",
    unkkaVoiceline:  "Assets/SoundEffects/unkkaVoiceline.mp3",
    neliöDeath:  "Assets/SoundEffects/neliöDeath.mp3",
    neliöVoiceline:  "Assets/SoundEffects/neliöVoiceline.mp3",
    shobDeath:  "Assets/SoundEffects/shobDeath.mp3",
    shobVoiceline:  "Assets/SoundEffects/shobVoiceline.mp3",
    aateepeeLeft: "Assets/SoundEffects/aateepeeLeft.mp3",
    aateepeeRight: "Assets/SoundEffects/aateepeeRight.mp3",
    jerpa: "Assets/SoundEffects/jerpa.mp3",
    bonk: "Assets/SoundEffects/bonk.mp3",
    buzz: "Assets/SoundEffects/buzzSound.mp3",
    aggressiveMode: "Assets/SoundEffects/aggressiveMode.mp3",
    clock1: "Assets/SoundEffects/Clock1.mp3",
    clock2: "Assets/SoundEffects/Clock2.mp3",
    beemsaMan: "Assets/SoundEffects/beemsaman.mp3",
    heartbeat: "Assets/SoundEffects/heartbeat.mp3",
    T12: "Assets/SoundEffects/T12.mp3",
    T1: "Assets/SoundEffects/T1.mp3",
    T2: "Assets/SoundEffects/T2.mp3",
    T4: "Assets/SoundEffects/T4.mp3",
    bmc: "Assets/SoundEffects/bmc.mp3",
    easycideTheme: "Assets/SoundEffects/easycideTheme.mp3",
} 
for (let i in soundEffects) {
    soundEffects[i] = new Audio(soundEffects[i]);
}
soundEffects.easycideTheme.volume = 0.3;
let characters = [
    {
        name: "beems",
        moveTimer: 0,
        moveTime: 30,
        killTimer: 0,
        killTime: 10,
        leaveTimer: 0,
        leaveTime: 0.5,
        img: "Assets/Characters/beems.png",
        difficulty: 0,
        element: null,
        moveFrame: [0,0],
        camFrames: [
            [4,50,50,10],
            [0,51,50,15],
            [0,51,70,30],
        ],
        camFrames2: [
            [4,50,50,10],
            [1,51,50,15],
            [1,51,70,30],
        ],
        direction: "left",
        officePos: [
            [27, 65, 25],
            [106, 65, 25],
        ],
        killSound: soundEffects.beemsDeath,
        voiceLine: soundEffects.beemsVoiceline,
        description: "Goes from the stage to either CAM0 or CAM1 and will enter the office. Close the correct door to avoid his jumpscare.",
        hyperDescription: "Hyper: He is much faster."
    },
    {
        name: "unkka",
        moveTimer: 0,
        moveTime: 20,
        killTimer: 0,
        killTime: 10,
        img: "Assets/Characters/unkka.png",
        rekkuImg: "Assets/Characters/rekku.png",
        pos: [50,50],
        unkkaCam: 6,
        difficulty: 0,
        element: null,
        rekkuElement: null,
        voiceLine: soundEffects.unkkaVoiceline,
        description: "Unkka is hunting his dog but you dont want that to happen. You have to teleport the dog into another cam by pressing teleport button in the cams to another cam before unkka gets his dog back.",
        hyperDescription: "Hyper: Theres no sound cue anymore.",
    },
    {
        name: "hunajameloni",
        moveTimer: 0,
        moveTime: 60,
        img: "Assets/Characters/hunajameloni.png",
        difficulty: 0,
        element: null,
        positions: [
            [51,55,15],
            [50,50,30],
            [40,50,45],
            [30,55,50],
        ],
        moveFrame: [0,0],
        description: "Hunajameloni will go away from the cove and you have to look at him to make him go back in the cove. The cove is located on CAM5.",
        hyperDescription: "Hyper: It takes longer to make him go back."
    },
    {
        name: "korb",
        gravity: 0,
        x: 0,
        y: 0,
        size: 10,
        img: "Assets/Characters/korb.png",
        difficulty: 0,
        closeFrame: 0,
        active: true,
        element: null,
        description: "When you close cams there is a 50% chance korb will appear. You need to click him to avoid his jumpscare",
        hyperDescription: "Hyper: Korb is faster and has a 100% chance to appear."
    },
    {
        name: "nondari",
        moveTimer: 0,
        moveTime: 30,
        img: "Assets/Characters/nondari.png",
        difficulty: 0,
        flashAmount: [0,5],
        flashing: false,
        element: null,
        cam: 8,
        description: "he will go from room 5 into the vents and will appear in your room. When he appears you need to flash him 5 times or he will make the cams malfunction.",
        hyperDescription: "Hyper: You have to flash him 10 times",
    },
    {
        name: "neliögd",
        img: "Assets/Characters/neliögd.png",
        difficulty: 0,
        element: null,
        fade: 0,
        killSound: soundEffects.neliöDeath,
        voiceLine: soundEffects.neliöVoiceline,
        description: "Once your in the cams he will slowly fade in and if hes too visible you will get jumpscared. To avoid his jumpscare close the cams.",
        hyperDescription: "Hyper: It takes longer for his fade to fade out."
    },
    {
        name: "shob",
        moveTimer: 0,
        moveTime: 60,
        killTimer: 0,
        killTime: 30,
        img: "Assets/Characters/shob.png",
        mlImg: "Assets/Characters/makaroonilaatikko.png",
        difficulty: 0,
        element: null,
        mlElement: null,
        mlCam: 0,
        killSound: soundEffects.shobDeath,
        voiceLine: soundEffects.shobVoiceline,
        description: "Once he is in the office you need to search the cams to find his makaroonilaatikko. It will appear in a random cam and you have 30 seconds time to find it.",
        hyperDescription: "Hyper: His killtimer is twice as small."
    },
    {
        name: "sinitiainen",
        killTimer: 0,
        killTime: 15,
        leaveTimer: 0,
        leaveTime: 1,
        img: "Assets/Characters/sinitiainen.png",
        difficulty: 0,
        x: 0,
        y: 0,
        frame: 0,
        element: null,
        direction: "right",
        camFrame: false,
        active: false,
        description: "When you open cams there is a chance for sinitiainen to appear and fly. You have to click him to get rid of him",
        hyperDescription: "Hyper: If you close cams when hes active your cooked."
    },
    {
        name: "jape",
        moveTimer: 0,
        moveTime: 30,
        killTimer: 0,
        killTime: 20,
        img: "Assets/Characters/jape.png",
        difficulty: 0,
        cams: [],
        active: false,
        element: null,
        description: "A cam will be highlighted green and you just have to open that cam. Pretty simple.",
        hyperDescription: "Hyper: You have to check 3 random cams."
    },
    {
        name: "vallufinland",
        moveTimer: 0,
        moveTime: 30,
        killTimer: 0,
        killTime: 10,
        img: "Assets/Characters/vallufinland.png",
        difficulty: 0,
        fade: 0,
        element: null,
        description: "You will figure it out...",
        hyperDescription: "Hyper: wtf how do i buff this"
        
    },
    {
        name: "kikkimöö",
        moveTimer: 0,
        moveTime: 15,
        amount: 0,
        kikkisAdded: 0,
        img: "Assets/Characters/kikkimöö.png",
        difficulty: 0,
        element: null,
        kikkiElements: [],
        description: "Kikkimöös will spawn in the office often and you need to click them to get rid of them. If there are more than 4 you will die. You also have to click them in order lol.",
        hyperDescription: "Hyper: they appear more often."
    },
    {
        name: "aatosliina",
        moveTimer: 0,
        moveTime: 20,
        killTimer: 0,
        killTime: 10,
        leaveTimer: 0,
        leaveTime: 0.5,
        img: "Assets/Characters/aatosliina.png",
        difficulty: 0,
        element: null,
        description: "Will appear in the left vent. Close it to avoid it.",
        hyperDescription: "Hyper: He will be invisible but you can still hear his theme song."
    },
    {
        name: "jinku",
        leaveTimer: 0,
        leaveTime: 0.5,
        active: false,
        frame: false,
        img: "Assets/Characters/jinku.png",
        difficulty: 0,
        camChange: 0,
        element: null,
        description: "Has a 25% chance to appear when you open cams and when he does you have to look at him for 0.5 seconds to make him go away.",
        hyperDescription: "Hyper: Now has a 50% chance to appear and if you switch cams you die immediatly. Pretty annoying."
    },
    {
        name: "aateepee",
        moveTimer: 0,
        moveTime: 30,
        killTimer: 0,
        killTime: 10,
        leaveTimer: 0,
        leaveTime: 0.5,
        hyperChange: false,
        img: "Assets/Characters/aateepee.png",
        difficulty: 0,
        element: null,
        frame: false,
        side: "left",
        description: "You have to listen for his sound cue at which door hes on. Close the corresponding door.",
        hyperDescription: "Hyper: Once you get rid of him, he returns immediatly.",
    },
    {
        name: "avainportti",
        moveTimer: 0,
        moveTime: 45,
        killTimer: 0,
        killTime: 10,
        leaveTimer: 0,
        leaveTime: 0.5,
        img: "Assets/Characters/avainportti.png",
        difficulty: 0,
        element: null,
        description: "Put the mask on when he enters the office to avoid the jumpscare",
        hyperDescription: "Hyper: Use the flashlight while having the mask on",
    },
    {
        name: "merkz",
        posX: 50,
        posY: -50,
        img: "Assets/Characters/merkz.png",
        difficulty: 0,
        element: null,
        description: "Follows your mouse cursor. DONT TOUCH HIM.",
        hyperDescription: "Hyper: He is bigger",
    },
    {
        name: "noble",
        moveTimer: 0,
        moveTime: 30,
        killTimer: 0,
        killTime: 10,
        leaveTimer: 0,
        leaveTime: 0.5,
        img: "Assets/Characters/noble.png",
        difficulty: 0,
        element: null,
        description: "Close the right vent. yeah thats it.",
        hyperDescription: "Hyper: After he leaves the vent you need to go to cam 7",
    },
    {
        name: "jerpa",
        moveTimer: 0,
        moveTime: 30,
        killTimer: 0,
        killTime: 20,
        img: "Assets/Characters/jerpa.png",
        difficulty: 0,
        element: null,
        description: "Once you start hearing music, go to cam 6 and click jerpa.",
        hyperDescription: "Hyper: No more music and his killtimer is a bit shorter.",
    },
    {
        name: "xylo",
        moveTimer: 0,
        moveTime: 30,
        killTimer: 0,
        killTime: 10,
        count: 0,
        img: "Assets/Characters/xylo.png",
        difficulty: 0,
        x: 66,
        element: null,
        description: "He will appear in the office and you have to click him 3 times",
        hyperDescription: "Hyper: Click him 6 times instead of 3",
    },
    {
        name: "rain",
        moveTimer: 0,
        moveTime: 30,
        drainPower: 0,
        img: "Assets/Characters/rain.png",
        difficulty: 0,
        cam: 4,
        active: false,
        element: null,
        description: "Rain will appear in one of either cam 4, 5, 6 and the cam will be highlighted and you need to click him otherwise your power will drain faster",
        hyperDescription: "Hyper: He will appear more often.... its over.....",
    },
];
let beemsaManCharacters = [
    {
        name: "beemsaManLDoor",
        moveTimer: 0,
        moveTime: 40,
        killTimer: 0,
        killTime: 10,
        leaveTimer: 0,
        leaveTime: 0.5,
        camFrame: false,
        img: "Assets/Characters/beems.png",
        difficulty: 20,
        element: null,
    },
    {
        name: "beemsaManRDoor",
        moveTimer: 0,
        moveTime: 45,
        killTimer: 0,
        killTime: 10,
        leaveTimer: 0,
        leaveTime: 0.5,
        camFrame: false,
        img: "Assets/Characters/beems.png",
        difficulty: 20,
        element: null,
    },
    {
        name: "beemsaManMask",
        moveTimer: 0,
        moveTime: 50,
        killTimer: 0,
        killTime: 10,
        leaveTimer: 0,
        leaveTime: 0.5,
        camFrame: false,
        img: "Assets/Characters/beems.png",
        difficulty: 20,
        element: null,
    },
    {
        name: "beemsaManFlashlight",
        moveTimer: 0,
        moveTime: 55,
        killTimer: 0,
        killTime: 10,
        flashAmount: [0,7],
        flashing: false,
        camFrame: false,
        img: "Assets/Characters/beems.png",
        difficulty: 20,
        element: null,
    },
    {
        name: "beemsaManLVent",
        moveTimer: 0,
        moveTime: 60,
        killTimer: 0,
        killTime: 10,
        leaveTimer: 0,
        leaveTime: 0.5,
        camFrame: false,
        img: "Assets/Characters/beems.png",
        difficulty: 20,
        element: null,
    },
    {
        name: "beemsaManRVent",
        moveTimer: 0,
        moveTime: 65,
        killTimer: 0,
        killTime: 10,
        leaveTimer: 0,
        leaveTime: 0.5,
        camFrame: false,
        img: "Assets/Characters/beems.png",
        difficulty: 20,
        element: null,
    },
    {
        name: "beemsaManTimer",
        moveTimer: 0, 
        moveTime: 5,
        killTimer: 10,
        img: "Assets/Characters/beems.png",
        difficulty: 20,
        element: null,
    },
    {
        name: "beemsaKidSpawner",
        moveTimer: 0,
        moveTime: 5,
        bkElements: [],
        bksAdded: 0,
        img: "Assets/Characters/beems.png",
        difficulty: 20,
        element: null,
    },
];
let menuStaticTimer = [0,0.2];
let aggression = 1;
let clockTicking = {};
let ingameCharacters = [];
for (let i = 0; i<characters.length; i++) {
    const characterDiv = document.createElement("div");
    characterDiv.style = "position: relative; width: 150px; height: 150px";
    characterDiv.classList.add("characterElement");
    document.getElementById("characters").appendChild(characterDiv);

    const characterImg = document.createElement("img");
    characterImg.id = "selectCharacter_" + characters[i].name;
    characterImg.style = "width: 150px; height: 150px;"
    characterImg.src = characters[i].img;
    characterImg.draggable = false;
    characterImg.classList.add("characterImg");
    characterDiv.appendChild(characterImg);
    
    const downArrow = document.createElement("img");
    downArrow.style = "position: absolute; bottom: -10px; right: -10px; width: 20px;";
    downArrow.src = "Assets/downArrow.png";
    downArrow.draggable = false;
    downArrow.dataset.value = i;
    downArrow.classList.add("downArrow");
    characterDiv.appendChild(downArrow);

    const upArrow = document.createElement("img");
    upArrow.style = "position: absolute; bottom: 20px; right: -10px; width: 20px;";
    upArrow.src = "Assets/upArrow.png";
    upArrow.draggable = false;
    upArrow.dataset.value = i;
    upArrow.classList.add("upArrow");
    characterDiv.appendChild(upArrow);

    const difficulty = document.createElement("div");
    difficulty.style = "position: absolute; bottom: -10px; left: 0; font-size: 50px; color: white; font-family: calibri; background-color: rgba(0,0,0,0.5); font-family: 'upheavtt';";
    difficulty.textContent = characters[i].difficulty;
    difficulty.dataset.value = i;
    difficulty.id = i;
    upArrow.classList.add("difficulty");
    characterDiv.appendChild(difficulty);
}
let keys = {};
let doors = [false, false];
let vents = [false, false];
let flashlight = false;
let cams = {
    opened: false,
    transition: false,
    whichWay: "opening",
    cam: 0,
    animationTimer: [0,0.15],
};
let blackTransitionOpacity = 0;
let mask = false;
let mousePos = {x: 0, y: 0};
window.addEventListener("mousemove", (e) => {
    document.getElementById("characterDescription").style.left = e.clientX / window.innerWidth * 100 + "%";
    document.getElementById("characterDescription").style.top = e.clientY / window.innerHeight * 100 + "%";
    document.getElementById("flashlight").style.left = e.clientX / window.innerWidth * 100 + "%";
    document.getElementById("flashlight").style.top = e.clientY / window.innerHeight * 100 + "%";
    mousePos.x = e.clientX / window.innerWidth * 100;
    mousePos.y = e.clientY / window.innerHeight * 100;
});
document.getElementById("camOpenAnimation").style.display = "none";
window.addEventListener("keypress", (e) => {
    if (e.key == "a" || e.key == "A") doors[0] = !doors[0];
    if (e.key == "d" || e.key == "D") doors[1] = !doors[1];
    if (e.key == "q" || e.key == "Q") vents[0] = !vents[0];
    if (e.key == "e" || e.key == "E") vents[1] = !vents[1];
    if ((e.key == "s" || e.key == "S")) {
        if (power > 0) {
            cams.opened = !cams.opened; 
            if (cams.opened) {
                document.getElementById("camOpenAnimation").src = "Assets/camOpen.gif";
            } else {
                document.getElementById("camOpenAnimation").src = "Assets/camClose.gif";
            }
            camStaticOpacity = 0.9;
            mask = false; 
            cams.transition = true; 
            cams.animationTimer[0] = 0;
            document.getElementById("camOpenAnimation").style.display = "block";
        }
    }
    if (e.key == " ") {
        mask = !mask
        maskSpeed = 1000;
        if (mask) {
            maskTop = -100;
        } else {
            maskTop = 0;
        }
    };
});
let info = false;
document.getElementById("infoButton").addEventListener("mousedown", () => {
    info = !info;
    if (info) {
        document.getElementById("info").classList.add("active");
        document.getElementById("info").classList.remove("inactive");
    } else {
        document.getElementById("info").classList.remove("active");
        document.getElementById("info").classList.add("inactive");
    }
});
window.addEventListener("keydown", (e) => {
    keys[e.key.toLowerCase()] = true;
});
window.addEventListener("keyup", (e) => {
    keys[e.key.toLowerCase()] = false;
});
let hopelessBeemsuit = false;
document.getElementById("rightSideBar").addEventListener("mousedown", (e) => {
    if (e.target.id == "HBS") {
        for (let i = 0; i<characters.length; i++) {
            characters[i].difficulty = 30;
        }
        scene = "cutscene";
        blackTransitionOpacity = 1;
        hopelessBeemsuit = true;
        document.getElementById("aggressiveCB").checked = true;
        document.getElementById("hyperCB").checked = true;
        document.getElementById("LNCB").checked = false;
    }
    if (e.target.id == "beemsaManStart") {
        for (let i = 0; i<characters.length; i++) {
            characters[i].difficulty = 0;
        }
        scene = "cutscene";
        blackTransitionOpacity = 1;
        beemsaMan = true;
    }
    if (e.target.id == "easycide") {
        for (let i = 0; i<characters.length; i++) {
            characters[i].difficulty = 10;
        }
        scene = "cutscene";
        easycide = true;
    }
    if (e.target.id == "startButton") {
        scene = "cutscene";
        blackTransitionOpacity = 1;
    }
    if (e.target.id == "all+1") {
        for (let i = 0; i<characters.length; i++) {
            if (characters[i].difficulty < 20) {
                characters[i].difficulty++;
                document.getElementById(i + "").textContent = characters[i].difficulty;
            }
        }
    }
    if (e.target.id == "all-1") {
        for (let i = 0; i<characters.length; i++) {
            if (characters[i].difficulty > 0) {
                characters[i].difficulty--;
                document.getElementById(i + "").textContent = characters[i].difficulty;
            }
        }
    }
    if (e.target.id == "all0") {
        for (let i = 0; i<characters.length; i++) {
            characters[i].difficulty = 0;
            document.getElementById(i + "").textContent = "0";
        }
    }
    if (e.target.id == "all10") {
        for (let i = 0; i<characters.length; i++) {
            characters[i].difficulty = 10;
            document.getElementById(i + "").textContent = "20";
        }
    }
    if (e.target.id == "all20") {
        for (let i = 0; i<characters.length; i++) {
            characters[i].difficulty = 20;
            document.getElementById(i + "").textContent = "20";
        }
    }
});
let longNights = 1;
function startNight() {
    document.getElementById("deathAnimation").style.display = "none";
    scene = "ingame";
    doors = [false, false];
    vents = [false, false];
    displayTime.seconds = 0;
    displayTime.minutes = 0;
    clockTicking = {
        pitch: 0.25,
        ifTick: false,
        which: false,
    }
    for (let key in soundEffects) {
        soundEffects[key].pause();
        soundEffects[key].currentTime = 0;
    }
    cams = {
        opened: false,
        transition: false,
        whichWay: "opening",
        cam: 0,
        animationTimer: [0,0.15],
    }
    if (document.getElementById("aggressiveCB").checked) {
        aggression = 1.5;
    } else {
        aggression = 1;
    }
    if (document.getElementById("LNCB").checked) {
        longNights = 0.5;
        power = 200;
    } else {
        longNights = 1;
        power = 100;
    }
    powerDrain = 0;
    camStaticOpacity = 1;
    maskTop = -100;
    maskSpeed = 2000;
    mask = false;
    camX = 0;
    camDirection = false;
    sixAmOpacity = 0;
    blackTransitionOpacity = 1.15;
    for (let i = 0; i<9; i++) {
        document.getElementById("cam" + i).style.border = "solid black 0.5vh";
    }
    death = {
        image: "",
        frame: [0,1],
        red: 255,
        textOpacity: 0,
        shakeSpeed: [0,0.05],
        transition: false,
    }
    document.getElementById("unkkaTeleport").style.display = "none";
    for (let i = 0; i<ingameCharacters.length; i++) {
        document.getElementById("ingameCharacters").removeChild(document.getElementById("character_" + ingameCharacters[i].name));
    }
    ingameCharacters = [];
    firstFrame[1] = false;
    for (let i = 0; i<characters.length; i++) {
        if (characters[i].difficulty != 0) {
            ingameCharacters.push({...characters[i]});
            const imgCharacter = document.createElement("img");
            imgCharacter.draggable = false;
            imgCharacter.style = "position: absolute; left: 0; top: 0; transform: translate(-50%, -50%); display: none;";
            imgCharacter.id = "character_" + characters[i].name;
            imgCharacter.src = characters[i].img;
            ingameCharacters[ingameCharacters.length-1].element = imgCharacter;
            document.getElementById("ingameCharacters").appendChild(ingameCharacters[ingameCharacters.length-1].element);
        }
    }
}
let menuClicking = false;
let buttonHeld = null;
let menuClickingTimer = 0.4;
let timerBeforeAdd = 0.1;
document.getElementById("characters").addEventListener("mousedown", (e) => {
    menuClicking = true;
    if (e.target.classList.contains("upArrow")) {
        buttonHeld = e.target;
        if (characters[e.target.dataset.value].difficulty < 20) {
            characters[e.target.dataset.value].difficulty++;
        }
        if (keys["shift"]) {
            characters[e.target.dataset.value].difficulty = 20;
        }
    }
    if (e.target.classList.contains("downArrow")) {
        buttonHeld = e.target;
        if (characters[e.target.dataset.value].difficulty > 0) {
            characters[e.target.dataset.value].difficulty--;
        }
        if (keys["shift"]) {
            characters[e.target.dataset.value].difficulty = 0;
        }
    }
    for (let i = 0; i<characters.length; i++) {
        document.getElementById(i).innerText = characters[i].difficulty;
    }
});
let achievementNames = [
    ["AC_1", "Beat Easycide, pretty easy right?", false, "Easycide Conquered"],
    ["AC_2", "Beat Hyper Easycide, now its a bit harder", false, "ez Hypercide basically"],
    ["AC_3", "Beat Aggressive Easycide, thats kinda hard", false, "Ts hard achievement"],
    ["AC_4", "Beat Hyper Aggressive Easycide, thats hard", false, "Almost there!"],
    ["AC_5", "Beat Easycide all challenges, thats really hard", false, "The hardest max mode of Easycide"],
    ["AC_6", "Beat Poikacide, the base max mode", false, "Congrats on the base max mode"],
    ["AC_7", "Beat Hyper Poikacide, the base max mode but buffed", false, "Peakcide"],
    ["AC_8", "Beat Aggressive Poikacide, the base max mode but everyone is like 1.5x faster", false, "Hardcide"],
    ["AC_9", "Beat Genopoikacide, dang now thats a max mode.", false, "Ts impossible lowk idk how you did ts"],
    ["AC_10", "Beat Silent Pneogenopoikacide All Challenges, How.?", false, "Wtf.?"],
    ["AC_11", "Beemsa Man", false],
    ["AC_12", "Hyper Beemsa Man", false],
    ["AC_13", "Aggressive Beemsa Man", false],
    ["AC_14", "Hyper Aggressive Beemsa Man", false],
    ["AC_15", "Hyper Aggressive Beemsa Man Long Nights", false],
    ["AC_16", "Eternal Beemsa Man", false],
    ["AC_17", "Hyper Eternal Beemsa Man", false],
    ["AC_18", "Aggressive Eternal Beemsa Man", false],
    ["AC_19", "Hyper Aggressive Eternal Beemsa Man", false],
    ["AC_20", "Hyper Aggressive Eternal Beemsa Man Long Nights", false],
    ["AC_21", "Beat Hopeless Beemsuit, the hardest max mode. How the hell did you even do this :sob:", false],
];
for (let i = 1; i<achievementNames.length+1; i++) {
    document.getElementById("AC_" + i).style.display = "none";
}
document.getElementById("characters").addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("characterImg")) {
        for (let i = 0; i<characters.length; i++) {
            if (e.target.id.includes(characters[i].name)) {
                document.getElementById("cdName").textContent = characters[i].name;
                if (document.getElementById("hyperCB").checked) {
                    document.getElementById("cdDescription").textContent = characters[i].hyperDescription;
                } else {
                    document.getElementById("cdDescription").textContent = characters[i].description;
                }
                document.getElementById("characterDescription").style.display = "block";
            }
        }
    }

    for (let i = 0; i<achievementNames.length; i++) {
        if (e.target.id == achievementNames[i][0]) {
            document.getElementById("cdName").textContent = achievementNames[i][3];
            document.getElementById("cdDescription").textContent = achievementNames[i][1];
            document.getElementById("characterDescription").style.display = "block";
        }
    }
});
document.getElementById("characters").addEventListener("mouseout", (e) => {
    document.getElementById("characterDescription").style.display = "none";
});
document.getElementById("characters").addEventListener("mouseup", (e) => {
    buttonHeld = null;
    menuClicking = false;
    menuClickingTimer = 0.4;
    timerBeforeAdd = 0.1;
});
document.getElementById("camButtons").addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("camButton")) {
        if (cams.cam != Number(e.target.dataset.value)) {
            cams.cam = Number(e.target.dataset.value);
            camStaticOpacity = 0.8;
        }
    }
});
document.getElementById("retryButton").addEventListener("mousedown", (e) => {
    startNight();
});
document.getElementById("goBackButton").addEventListener("mousedown", (e) => {
    death.transition = true;
    blackTransitionOpacity = 0;
});
let firstFrame = [false,false,false,false];
let mx = 0;
window.addEventListener("mousemove", (e) => {
    mx = e.x;
});
let rekkuCam = 7;
let moveRekku = true;
let removeKorb = false;
let removeShob = false;
let removeSini = false;
let removeJerpa = false;
let removeRain = false;
let removeKikkiNumber = [0,false];
let removebkNumber = [0, false];
document.getElementById("unkkaTeleport").addEventListener("mousedown", (e) => {
    moveRekku = true;
});
document.getElementById("ingameCharacters").addEventListener("mousedown", (e) => {
    if (e.target.id == "character_korb") {
        removeKorb = true;
    }
    if (e.target.id == "character_ml") {
        removeShob = true;
    }
    if (e.target.id == "character_sinitiainen") {
        removeSini = true;
    }
    if (e.target.id.includes("kiki")) {
        removeKikkiNumber[0] = e.target.dataset.value;
        removeKikkiNumber[1] = true;
    }
    if (e.target.id == "character_jerpa") {
        removeJerpa = true;
    }
    if (e.target.id == "character_xylo") {
        removeXylo = true;
    }
    if (e.target.id == "character_rain") {
        removeRain = true;
    }
    if (e.target.id.includes("bk")) {
        removebkNumber[0] = e.target.dataset.value;
        removebkNumber[1] = true;
    }
});
let merkzKill = false;
document.getElementById("ingameCharacters").addEventListener("mouseover", (e) => {
    if (e.target.id == "character_merkz") {
        merkzKill = true;
    }
});
window.addEventListener("mousedown", (e) => {
    console.log(e.target.id);
});
let powerDrain = 0;
let power = 100;
let camStaticOpacity = 1;
let maskTop = -100;
let maskSpeed = 2000;
let camX = 0;
let camDirection = false;
let swapTimer = 0.5;
let death = {
    image: "",
    frame: [0,1],
    red: 255,
    textOpacity: 0,
    shakeSpeed: [0,0.05],
    transition: false,
}
let displayTime = {
    seconds: 0,
    minutes: 0,
    tick: false,
}
let killer = "";
function die(char) {
    scene = "dead";
    death.frame[0] = 0;
    death.image = char.img;
    killer = char.name;
}
function spawnCharacter(cName, difficulty) {
    for (let i = 0; i<characters.length; i++) {
        if (characters[i].name == cName) {
            ingameCharacters.push({...characters[i]});
            ingameCharacters[ingameCharacters.length-1].difficulty = difficulty;    
            const imgCharacter = document.createElement("img");
            imgCharacter.draggable = false;
            imgCharacter.style = "position: absolute; left: 0; top: 0; transform: translate(-50%, -50%); display: none;";
            imgCharacter.id = "character_" + characters[i].name;
            imgCharacter.src = characters[i].img;
            ingameCharacters[ingameCharacters.length-1].element = imgCharacter;
            document.getElementById("ingameCharacters").appendChild(ingameCharacters[ingameCharacters.length-1].element);
            let ic = ingameCharacters[ingameCharacters.length-1];
            if (ic.name == "beems") {
                if (Math.random() > 0.5)
                    ic.direction = "left";
                else
                    ic.direction = "right";
            } else if (ic.name == "unkka") {
                document.getElementById("unkkaTeleport").style.display = "block";
                rekkuCam = 0;
                ingameCharacters.push({name: "rekku"});
                const rekku = document.createElement("img");
                rekku.draggable = false;
                rekku.style = "position: absolute; left: 0; top: 0; transform: translate(-50%, -50%);";
                rekku.id = "character_rekku";
                rekku.src = ic.rekkuImg;
                ic.rekkuElement = rekku;
                document.getElementById("ingameCharacters").appendChild(ic.rekkuElement);
            } else if (ic.name == "jinku") {
                ic.element.style.zIndex = 10;
            } else if (ic.name == "korb") {
                removeKorb = true;
            } else if (ic.name == "neliögd") {
                ic.element.style = "position: absolute; left: 0; top: 0; width: 100%; height: 100%; background-size: 100% 100%; opacity: 0;";
            } else if (ic.name == "shob") {
                ingameCharacters.push({name: "ml"});
                const ml = document.createElement("img");
                ml.draggable = false;
                ml.style = "position: absolute; left: 0; top: 0; transform: translate(-50%, -50%); display: none;";
                ml.id = "character_ml";
                ml.src = ic.mlImg;
                ic.mlElement = ml;
                document.getElementById("ingameCharacters").appendChild(ic.mlElement);
                ic.mlCam = Math.round(Math.random() * 8);
            } else if (ic.name == "sinitiainen") {
                ic.element.style.zIndex = "10";
            } else if (ic.name == "vallufinland") {
                ic.element.style = "position: absolute; left: 0; top: 0; width: 100%; height: 100%; opacity: 0; z-index: 10; pointer-events: none;";
            } else if (ic.name == "kikkimöö") {
                ic.kikkiElements = [];
            } else if (ic.name == "merkz") {
                ic.element.style.zIndex = "15";
            } else if (ic.name == "rain") {
                ic.cam = Math.round(Math.random() * 2 + 4);
            } else if (ic.name == "jape") {
                ic.cams = [];
            } 
        }
    }
}
let easycide = false;
let beemsaMan = false;
let beemsaManLastMinute = false;
let beemsaManFakeTimer = 0;
let t5Shake = 0;
let t5Opacity = 0;
function ingame(dt) {
    if (!firstFrame[1]) {
        firstFrame[3] = false;
        firstFrame[2] = false;
        firstFrame[1] = true;
        firstFrame[0] = false;
        document.getElementById("cutscene").style.display = "none";
        if (document.getElementById("aggressiveCB").checked) {
            document.getElementById("ingame").style.filter = "contrast(2) saturate(2) grayscale(100%)";
            soundEffects.aggressiveMode.play();
        } else if (!document.getElementById("hyperCB").checked) {
            document.getElementById("ingame").style.filter = "";
        }
        if (document.getElementById("hyperCB").checked) {
            document.getElementById("ingame").style.filter = "sepia(200%) hue-rotate(280deg) contrast(200%)";
        } else if (!document.getElementById("aggressiveCB").checked) {
            document.getElementById("ingame").style.filter = "";
        }
        if (document.getElementById("aggressiveCB").checked && document.getElementById("hyperCB").checked && document.getElementById("LNCB").checked) {
            document.getElementById("ingame").style.filter = "sepia(200%) hue-rotate(200deg) contrast(200%)";
        }
        if (easycide) {
            document.getElementById("ingame").style.filter = "sepia(200%) hue-rotate(160deg) contrast(200%) saturate(50%)";
            soundEffects.easycideTheme.play();
        }
        document.getElementById("menu").style.display = "none";
        document.getElementById("ingame").style.display = "block";
        if (ifHardestMaxMode) {
            soundEffects.warhead.play();
        }
        document.getElementById("beemsaTimer").style.display = "none";
        for (let i = 0; i<ingameCharacters.length; i++) {
            if (ingameCharacters[i].name == "beems") {
                if (Math.random() > 0.5)
                    ingameCharacters[i].direction = "left";
                else
                    ingameCharacters[i].direction = "right";
            } else if (ingameCharacters[i].name == "unkka") {
                document.getElementById("unkkaTeleport").style.display = "block";
                ingameCharacters.push({name: "rekku"});
                rekkuCam = 0;
                const rekku = document.createElement("img");
                rekku.draggable = false;
                rekku.style = "position: absolute; left: 0; top: 0; transform: translate(-50%, -50%);";
                rekku.id = "character_rekku";
                rekku.src = ingameCharacters[i].rekkuImg;
                ingameCharacters[i].rekkuElement = rekku;
                document.getElementById("ingameCharacters").appendChild(ingameCharacters[i].rekkuElement);
            } else if (ingameCharacters[i].name == "korb") {
                removeKorb = true;
            } else if (ingameCharacters[i].name == "neliögd") {
                ingameCharacters[i].element.style = "position: absolute; left: 0; top: 0; width: 100%; height: 100%; background-size: 100% 100%; opacity: 0;";
            } else if (ingameCharacters[i].name == "shob") {
                ingameCharacters.push({name: "ml"});
                const ml = document.createElement("img");
                ml.draggable = false;
                ml.style = "position: absolute; left: 0; top: 0; transform: translate(-50%, -50%); display: none;";
                ml.id = "character_ml";
                ml.src = ingameCharacters[i].mlImg;
                ingameCharacters[i].mlElement = ml;
                document.getElementById("ingameCharacters").appendChild(ingameCharacters[i].mlElement);
                ingameCharacters[i].mlCam = Math.round(Math.random() * 8);
            } else if (ingameCharacters[i].name == "sinitiainen") {
                ingameCharacters[i].element.style.zIndex = "10";
            } else if (ingameCharacters[i].name == "vallufinland") {
                ingameCharacters[i].element.style = "position: absolute; left: 0; top: 0; width: 100%; height: 100%; opacity: 0; z-index: 10; pointer-events: none;";
            } else if (ingameCharacters[i].name == "kikkimöö") {
                ingameCharacters[i].kikkiElements = [];
            } else if (ingameCharacters[i].name == "jinku") {
                ingameCharacters[i].element.style.zIndex = 10;
            } else if (ingameCharacters[i].name == "merkz") {
                ingameCharacters[i].element.style.zIndex = "15";
            } else if (ingameCharacters[i].name == "jape") {
                ingameCharacters[i].cams = [];
            } else if (ingameCharacters[i].name == "rain") {
                ingameCharacters[i].cam = Math.round(Math.random() * 2 + 4);
            } else if (ingameCharacters[i].name == "beemsaManTimer") {
                document.getElementById("beemsaTimer").style.display = "block";
            }
        }
        if (beemsaMan) {
            soundEffects.clock1.preservesPitch = false;
            soundEffects.clock2.preservesPitch = false;
            document.getElementById("ingame").style.filter = "sepia(100%)";
            document.getElementById("beemsaManStatic").style.display = "block";
            for (let i = 0; i<beemsaManCharacters.length; i++) {
                ingameCharacters.push({...beemsaManCharacters[i]});
                const imgCharacter = document.createElement("img");
                imgCharacter.draggable = false;
                imgCharacter.style = "position: absolute; left: 0; top: 0; transform: translate(-50%, -50%); display: none;";
                imgCharacter.id = "character_" + beemsaManCharacters[i].name;
                imgCharacter.src = beemsaManCharacters[i].img;
                ingameCharacters[ingameCharacters.length-1].element = imgCharacter;
                document.getElementById("ingameCharacters").appendChild(ingameCharacters[ingameCharacters.length-1].element);
            }
        } else {
            document.getElementById("beemsaManStatic").style.display = "none";
        }
        document.getElementById("true5").opacity = 0;
    }
    if (displayTime.seconds >= 60) {
        displayTime.seconds = 0;
        displayTime.minutes++;
        displayTime.tick = true;
    }
    ingameTimeCounter[1] += dt;
    if (ingameTimeCounter[1] >= 60) {
        ingameTimeCounter[1] = 0
        ingameTimeCounter[0]++;
    }
    displayTime.seconds += dt * longNights;
    if (t5Shake > 0) {
        t5Shake -= dt * 4;
    } else {
        t5Shake = 0;
    }
    if (easycide) {
        if (displayTime.minutes == 4 && displayTime.seconds >= 19) {
            scene = "6AM";
        }
    }
    if (beemsaMan) {
        soundEffects.beemsaMan.play();
        document.getElementById("ingame").style.transform = `translate(${Math.random() * t5Shake - t5Shake/2}%,${Math.random() * t5Shake - t5Shake/2}%)`;
        document.getElementById("beemsaManTimer").textContent = displayTime.minutes + " AM";
        document.getElementById("true5").style.opacity = t5Opacity;
        if (clockTicking.ifTick) {
            soundEffects.clock2.playbackRate = clockTicking.pitch;
            soundEffects.clock1.playbackRate = clockTicking.pitch;
            soundEffects.clock1.pause();
            soundEffects.clock1.currentTime = 0;
            soundEffects.clock2.pause();
            soundEffects.clock2.currentTime = 0;
            clockTicking.which = !clockTicking.which;
            if (clockTicking.which) {
                soundEffects.clock1.play();
            } else {
                soundEffects.clock2.play();
            }
            clockTicking.pitch += 0.04;
            clockTicking.ifTick = false;
            displayTime.tick = true;
            displayTime.minutes += 1;
            if (displayTime.minutes >= 11) {
                displayTime.minutes = 0;
            }
            t5Shake = 4;
        }
        if (displayTime.minutes >= 6) {
            soundEffects.heartbeat.play();
        }
        if (displayTime.tick) {
            if (!beemsaManLastMinute) {
                soundEffects.warhead.play();
            }
            if (!beemsaManLastMinute) {
                if (displayTime.minutes === 6) {
                    spawnCharacter("beems", 25);
                    spawnCharacter("unkka", 25);
                    spawnCharacter("hunajameloni", 25);
                    spawnCharacter("korb", 25);
                }
                if (displayTime.minutes === 7) {
                    spawnCharacter("nondari", 25);
                    spawnCharacter("neliögd", 25);
                    spawnCharacter("shob", 25);
                    spawnCharacter("sinitiainen", 25);
                }
                if (displayTime.minutes === 8) {
                    spawnCharacter("jape", 25);
                    spawnCharacter("vallufinland", 25);
                    spawnCharacter("kikkimöö", 25);
                    spawnCharacter("aatosliina", 25);
                }
                if (displayTime.minutes === 9) {
                    spawnCharacter("jinku", 25);
                    spawnCharacter("aateepee", 25);
                    spawnCharacter("avainportti", 25);
                    spawnCharacter("merkz", 25);
                }
                if (displayTime.minutes === 10) {
                    spawnCharacter("noble", 25);
                    spawnCharacter("jerpa", 25);
                    spawnCharacter("xylo", 25);
                    spawnCharacter("rain", 25);
                }
            }
            if (displayTime.minutes === 0) {document.getElementById("ingame").style.filter = "sepia(100%) contrast(100%)";soundEffects.heartbeat.pause(); soundEffects.T4.pause();}
            if (displayTime.minutes === 1) {document.getElementById("ingame").style.filter = "sepia(100%) contrast(200%)";}
            if (displayTime.minutes === 2) {document.getElementById("ingame").style.filter = "sepia(100%) contrast(300%)";}
            if (displayTime.minutes === 3) {document.getElementById("ingame").style.filter = "sepia(100%) contrast(400%)";}
            if (displayTime.minutes === 4) {document.getElementById("ingame").style.filter = "sepia(100%) contrast(500%)";}
            if (displayTime.minutes === 5) {document.getElementById("ingame").style.filter = "sepia(100%) contrast(900%)";}
            if (displayTime.minutes === 6) {document.getElementById("ingame").style.filter = ""; soundEffects.T12.play(); soundEffects.T12.volume = 0.3}
            if (displayTime.minutes === 7) {document.getElementById("ingame").style.filter = "sepia(200%) hue-rotate(200deg) contrast(200%)";soundEffects.T12.pause();soundEffects.T1.play();}
            if (displayTime.minutes === 8) {document.getElementById("ingame").style.filter = "contrast(2) saturate(2) brightness(3)"; soundEffects.T1.pause();soundEffects.T2.play();}
            if (displayTime.minutes === 9) {document.getElementById("ingame").style.filter = "contrast(2) saturate(2) grayscale(100%)"; soundEffects.aggressiveMode.play();soundEffects.T2.pause();}
            if (displayTime.minutes === 10) {document.getElementById("ingame").style.filter = "contrast(3) saturate(3) grayscale(25%) hue-rotate(120deg)";soundEffects.T12.aggressiveMode = 0; soundEffects.aggressiveMode.pause();soundEffects.T4.play();}
            if (displayTime.minutes === 11) {
                beemsaManLastMinute = true;
                clockTicking.ifTick = true;
                document.getElementById("textUI").style.display = "none";
            }
            if (beemsaManFakeTimer >= 60) {
                scene = "beemsa man completed";
                blackTransitionOpacity = 0;
                for (let key in soundEffects) {
                    soundEffects[key].pause();
                    soundEffects[key].currentTime = 0;
                }
                return;
            }
        }
        if (beemsaManLastMinute) {
            beemsaManFakeTimer += dt;
            if (t5Opacity < 0.7)
                t5Opacity += dt / 30;
        }
    } else {
        if (displayTime.minutes >= 6) {
            scene = "6AM";
            blackTransitionOpacity = 0;
            for (let key in soundEffects) {
                soundEffects[key].pause();
                soundEffects[key].currentTime = 0;
            }
            return;
        }
    }
    displayTime.tick = false;
    if (soundEffects.clock1.currentTime >= soundEffects.clock1.duration) {
        clockTicking.ifTick = true;
    }
    if (soundEffects.clock2.currentTime >= soundEffects.clock2.duration) {
        clockTicking.ifTick = true;
    }
    if (displayTime.seconds >= 10) {
        document.getElementById("timeUI").textContent = displayTime.minutes + ":" + Math.floor(displayTime.seconds) + "AM";
    } else {
        document.getElementById("timeUI").textContent = displayTime.minutes + ":0" + Math.floor(displayTime.seconds) + "AM";
    }
    for (let i = 0; i<document.getElementsByClassName("inOffice").length; i++) {
        document.getElementsByClassName("inOffice")[i].style.left = -mx / window.innerWidth * 33 + "%";
    }
    document.getElementById("desk").style.left = -mx * 0.75 / window.innerWidth * 33 + - 4 + "%";
    if (camStaticOpacity >= 0.1) {
        camStaticOpacity -= dt * 3;
    } else {
        camStaticOpacity = 0.1;
    }
    powerDrain = 0;
    if ((keys["f"] || keys["F"]) && power >= 0) {
        document.getElementById("flashlight").style.display = "block";
        powerDrain++;
    } else {
        document.getElementById("flashlight").style.display = "none";
    }
    if (doors[0] && power >= 0) {
        powerDrain++;
        document.getElementById("leftDoor").style.display = "block";
    } else {
        document.getElementById("leftDoor").style.display = "none";
    }
    if (doors[1] && power >= 0) {
        powerDrain++;
        document.getElementById("rightDoor").style.display = "block";
    } else {
        document.getElementById("rightDoor").style.display = "none";
    }
    if (vents[0] && power >= 0) {
        powerDrain++;
        document.getElementById("leftVent").style.display = "block";
    } else {
        document.getElementById("leftVent").style.display = "none";
    }
    if (vents[1] && power >= 0) {
        powerDrain++;
        document.getElementById("rightVent").style.display = "block";
    } else {
        document.getElementById("rightVent").style.display = "none";
    }
    document.getElementById("camStatic").style.opacity = camStaticOpacity;
    if (power <= 0) {
        cams.opened = false;
        blackTransitionOpacity = 0.75;
    }
    if (cams.opened) {
        cams.animationTimer[0] += dt;
        if (cams.animationTimer[0] >= cams.animationTimer[1]) {
            document.getElementById("theOffice").style.display = "none";
            powerDrain += 0.5;
            if (camDirection)
                camX -= dt * (2560 / window.innerWidth) * 5;
            else
                camX += dt * (2560 / window.innerWidth) * 5;
            if (camX < 0 || 0 < getComputedStyle(document.getElementById("cameraImage")).right.replace("px","") && swapTimer < 0) {
                camDirection = !camDirection;
                swapTimer = 0.5;
            };
            swapTimer -= dt;
            document.getElementById("cameraImage").style.left = -camX + "%";
            document.getElementById("camSystem").style.display = "block";
            document.getElementById("camOpenAnimation").style.display = "none";
            document.getElementById("cameraImage").style.backgroundImage = "url(Assets/Cams/cam" + cams.cam + ".png)";
        }
    } else {
        cams.animationTimer[0] += dt;
        document.getElementById("theOffice").style.display = "block";
        document.getElementById("camSystem").style.display = "none";
        if (cams.animationTimer[0] >= cams.animationTimer[1]) {
            document.getElementById("camOpenAnimation").style.display = "none";
        }
    }
    document.getElementById("powerUI").textContent = "power: " + power.toFixed(1) + "%";
    if (mask && !cams.opened) {
        maskSpeed -= 3000 * dt;
        if (maskTop <= 0)
            maskTop += maskSpeed * dt;
        else {
            maskTop = 0.1;
        }
    } else {
        maskTop -= 1000 * dt;
    }
    document.getElementById("mask").style.top = maskTop + "vh";
    const hyperChecked = document.getElementById("hyperCB").checked;
    for (let i = 0; i<ingameCharacters.length; i++) {
        if (ingameCharacters[i].name == "beems") {
            ingameCharacters[i].element.style.display = "none";
            if (ingameCharacters[i].moveFrame[0] != ingameCharacters[i].moveFrame[1]) {
                camStaticOpacity = 1;
            }
            ingameCharacters[i].moveFrame[1] = Math.floor(ingameCharacters[i].moveTimer / ingameCharacters[i].moveTime * ingameCharacters[i].camFrames.length)
            if (ingameCharacters[i].moveFrame[1] <= ingameCharacters[i].camFrames.length-1) {
                if (cams.opened && cams.animationTimer[0] >= 0.15 && ingameCharacters[i].moveFrame[1] != ingameCharacters[i].camFrames.length && ingameCharacters[i].direction == "left" ? cams.cam == ingameCharacters[i].camFrames[ingameCharacters[i].moveFrame[1]][0] : cams.cam == ingameCharacters[i].camFrames2[ingameCharacters[i].moveFrame[1]][0]) {
                    ingameCharacters[i].element.style.display = "block";
                    ingameCharacters[i].element.style.left = ingameCharacters[i].camFrames[ingameCharacters[i].moveFrame[1]][1] * document.getElementById("cameraImage").getBoundingClientRect().width / window.innerWidth - camX - window.innerHeight/1080 + "vw";
                    ingameCharacters[i].element.style.top = ingameCharacters[i].camFrames[ingameCharacters[i].moveFrame[1]][2] + "vh";
                    ingameCharacters[i].element.style.width = ingameCharacters[i].camFrames[ingameCharacters[i].moveFrame[1]][3] + "vh";
                    ingameCharacters[i].element.style.height = ingameCharacters[i].camFrames[ingameCharacters[i].moveFrame[1]][3] * 1.5 + "vh";
                }
            } else {
                if (!cams.opened) {
                    if (ingameCharacters[i].direction == "left" ? !doors[0] : !doors[1]) {
                        ingameCharacters[i].element.style.display = "block";
                        ingameCharacters[i].element.style.left = ingameCharacters[i].officePos[ingameCharacters[i].direction == "left" ? 0 : 1][0] -mx / window.innerWidth * 33 + "vw";
                        ingameCharacters[i].element.style.top = ingameCharacters[i].officePos[ingameCharacters[i].direction == "left" ? 0 : 1][1] + "vh";
                        ingameCharacters[i].element.style.width = ingameCharacters[i].officePos[ingameCharacters[i].direction == "left" ? 0 : 1][2] + "vh";
                        ingameCharacters[i].element.style.height = ingameCharacters[i].officePos[ingameCharacters[i].direction == "left" ? 0 : 1][2] * 1.5 + "vh";
                    } else {
                        ingameCharacters[i].element.style.display = "none";
                    }
                } else {
                    ingameCharacters[i].element.style.display = "none";
                }
            }
            ingameCharacters[i].moveFrame[0] = ingameCharacters[i].moveFrame[1];
            if (hyperChecked)
                ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression * 2;
            else
                ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            const doorClosed = ingameCharacters[i].direction == "left" ? !doors[0] : !doors[1];
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && doorClosed) {
                ingameCharacters[i].killTimer += dt * (ingameCharacters[i].difficulty / 15 + 1);
                if (ingameCharacters[i].killTimer >= ingameCharacters[i].killTime) {
                    die(ingameCharacters[i]);
                    return;
                }
            }
            if (doors[ingameCharacters[i].direction == "left" ? 0 : 1] && ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                ingameCharacters[i].leaveTimer += dt;
                if (ingameCharacters[i].leaveTimer >= ingameCharacters[i].leaveTime) {
                    for (let a = 0; a<characters.length; a++) {
                        if (characters[a].name == ingameCharacters[i].name) {
                            ingameCharacters[i] = {...characters[a]};
                        }
                    }
                    soundEffects.bonk.currentTime = 0;
                    soundEffects.bonk.pause();
                    soundEffects.bonk.play();
                    if (Math.random() > 0.5)
                        ingameCharacters[i].direction = "left";
                    else
                        ingameCharacters[i].direction = "right";
                    ingameCharacters[i].element = document.getElementById("character_beems");
                }
            }
        } else if (ingameCharacters[i].name == "unkka") {
            if (moveRekku && rekkuCam != cams.cam) {
                camStaticOpacity = 1;
                rekkuCam = cams.cam;
                ingameCharacters[i].moveTimer = 0;
                ingameCharacters[i].killTimer = 0;
            }
            if (ingameCharacters[i].unkkaCam == cams.cam && cams.opened && cams.animationTimer[0] >= 0.15) {
                ingameCharacters[i].element.style.display = "block";
                ingameCharacters[i].element.style.left = 50 * document.getElementById("cameraImage").getBoundingClientRect().width / window.innerWidth - camX - window.innerHeight/1080 + "vw";
                ingameCharacters[i].element.style.top = 50 + "vh";
                ingameCharacters[i].element.style.width = 30 + "vh";
                ingameCharacters[i].element.style.height = 30 * 1.5 + "vh";
            } else {
                ingameCharacters[i].element.style.display = "none";
            }
            if (rekkuCam == cams.cam && cams.opened && cams.animationTimer[0] >= 0.15) {
                ingameCharacters[i].rekkuElement.style.display = "block";
                ingameCharacters[i].rekkuElement.style.left = 50 * document.getElementById("cameraImage").getBoundingClientRect().width / window.innerWidth - camX - window.innerHeight/1080 + "vw";
                ingameCharacters[i].rekkuElement.style.top = 50 + "vh";
                ingameCharacters[i].rekkuElement.style.width = 20 + "vh";
                ingameCharacters[i].rekkuElement.style.height = 20 * 1.5 + "vh";
            } else {
                ingameCharacters[i].rekkuElement.style.display = "none";
            }
            if (ingameCharacters[i].unkkaCam != rekkuCam) {
                ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5) * aggression;
                if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && ingameCharacters[i].unkkaCam != rekkuCam) {
                    ingameCharacters[i].unkkaCam = rekkuCam;
                    camStaticOpacity = 1;
                }
            } else {
                if (ingameCharacters[i].killTimer <= 0.1 && !hyperChecked) {
                    soundEffects.unkkaFound.play();
                }
                ingameCharacters[i].killTimer += dt;
                if (ingameCharacters[i].killTimer >= ingameCharacters[i].killTime) {
                    die(ingameCharacters[i]);
                    return;
                }
            }
            moveRekku = false;
        } else if (ingameCharacters[i].name == "hunajameloni") {
            if (ingameCharacters[i].moveFrame[1] != ingameCharacters[i].moveFrame[0]) {
                camStaticOpacity = 1;
            }
            if (ingameCharacters[i].moveTimer >= 0)
                ingameCharacters[i].moveFrame[1] = Math.floor(ingameCharacters[i].moveTimer / ingameCharacters[i].moveTime * ingameCharacters[i].positions.length);
            else
                ingameCharacters[i].moveFrame[1] = 0;
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                die(ingameCharacters[i]);
                return;
            }
            if (cams.cam == 5 && cams.opened && cams.animationTimer[0] >= 0.15) {
                if (hyperChecked) {
                    if (ingameCharacters[i].moveTimer >= 0)
                        ingameCharacters[i].moveTimer -= dt * (ingameCharacters[i].difficulty / 10 + 1) * 3.75 * aggression;
                } else {
                    if (ingameCharacters[i].moveTimer >= 0)
                        ingameCharacters[i].moveTimer -= dt * (ingameCharacters[i].difficulty / 10 + 1) * 7.5 * aggression;
                }
                ingameCharacters[i].element.style.display = "block";
                ingameCharacters[i].element.style.left = ingameCharacters[i].positions[ingameCharacters[i].moveFrame[1]][0] * document.getElementById("cameraImage").getBoundingClientRect().width / window.innerWidth - camX - window.innerHeight/1080 + "vw";
                ingameCharacters[i].element.style.top = ingameCharacters[i].positions[ingameCharacters[i].moveFrame[1]][1] + "vh";
                ingameCharacters[i].element.style.width = ingameCharacters[i].positions[ingameCharacters[i].moveFrame[1]][2] + "vh";
                ingameCharacters[i].element.style.height = ingameCharacters[i].positions[ingameCharacters[i].moveFrame[1]][2] * 1.5 + "vh";
            } else {
                ingameCharacters[i].element.style.display = "none";
                ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 10 + 1) * aggression * 2;
            }
            ingameCharacters[i].moveFrame[0] = ingameCharacters[i].moveFrame[1];
        } else if (ingameCharacters[i].name == "korb") {
            if (cams.opened) {
                ingameCharacters[i].closeFrame = false;
            }
            if (!cams.opened && !ingameCharacters[i].closeFrame && !ingameCharacters[i].active) {
                ingameCharacters[i].closeFrame = true;
                if (hyperChecked) {
                    ingameCharacters[i].x = 0;
                    ingameCharacters[i].y = Math.random() * 100;
                    ingameCharacters[i].active = true;
                    ingameCharacters[i].element.style.width = ingameCharacters[i].size + "vh";
                    ingameCharacters[i].element.style.height = ingameCharacters[i].size * 1.5 + "vh";
                } else {
                    if (Math.random() > 0.5) {
                        ingameCharacters[i].x = 0;
                        ingameCharacters[i].y = Math.random() * 100;
                        ingameCharacters[i].active = true;
                        ingameCharacters[i].element.style.width = ingameCharacters[i].size + "vh";
                        ingameCharacters[i].element.style.height = ingameCharacters[i].size * 1.5 + "vh";
                    }
                }
            }
            if (!cams.opened && ingameCharacters[i].active) {
                ingameCharacters[i].element.style.display = "block";
            } else {
                ingameCharacters[i].element.style.display = "none";
            }
            if (ingameCharacters[i].active) {
                ingameCharacters[i].element.style.left = ingameCharacters[i].x + "%";
                ingameCharacters[i].element.style.top = ingameCharacters[i].y + "%";
                if (hyperChecked) {
                    ingameCharacters[i].x += dt * (ingameCharacters[i].difficulty / 5 + 1) * 8 * aggression;
                } else {
                    ingameCharacters[i].x += dt * (ingameCharacters[i].difficulty / 5 + 1) * 5 * aggression;
                }
                ingameCharacters[i].y -= ingameCharacters[i].gravity * dt * 200;
                ingameCharacters[i].gravity -= dt * 1.5;
                if (ingameCharacters[i].y >= 100) {
                    ingameCharacters[i].gravity = 1;
                }
            }
            if (removeKorb) {
                removeKorb = false;
                ingameCharacters[i].active = false;
                ingameCharacters[i].element.style.display = "none";
                soundEffects.bonk.currentTime = 0;
                soundEffects.bonk.pause();
                soundEffects.bonk.play();
            }
            if (ingameCharacters[i].x >= 100) {
                die(ingameCharacters[i]);
                return;
            }
        } else if (ingameCharacters[i].name == "nondari") {
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                if (!cams.opened) {
                    ingameCharacters[i].element.style.left = 65 -mx / window.innerWidth * 33 + "vw";
                    ingameCharacters[i].element.style.top = 60 + "%";
                    ingameCharacters[i].element.style.width = 30 + "vh";
                    ingameCharacters[i].element.style.height = 30 * 1.5 + "vh";
                    ingameCharacters[i].element.style.display = "block";
                } else {
                    ingameCharacters[i].element.style.display = "none";
                }
                if (keys["f"] && !cams.opened) {
                    if (!ingameCharacters[i].flashing) {
                        ingameCharacters[i].flashing = true;
                        if (hyperChecked) ingameCharacters[i].flashAmount[0]+=0.5; else ingameCharacters[i].flashAmount[0]++;
                        if (ingameCharacters[i].flashAmount[0] >= ingameCharacters[i].flashAmount[1]) {
                            for (let a = 0; a<characters.length; a++) {
                                if (characters[a].name == ingameCharacters[i].name) {
                                    ingameCharacters[i] = {...characters[a]};
                                }
                            }
                            ingameCharacters[i].flashAmount = [0,5];
                            ingameCharacters[i].element = document.getElementById("character_nondari");
                        }
                    }
                }
                if (!keys["f"]) {
                    ingameCharacters[i].flashing = false;
                }
                camStaticOpacity = 1;
            } else {
                if (cams.opened && cams.animationTimer[0] >= 0.15 && cams.cam == 8) {
                    ingameCharacters[i].element.style.display = "block";
                    ingameCharacters[i].element.style.left = 50 * document.getElementById("cameraImage").getBoundingClientRect().width / window.innerWidth - camX - window.innerHeight/1080 + "vw";
                    ingameCharacters[i].element.style.top = 50 + "vh";
                    ingameCharacters[i].element.style.width = 30 + "vh";
                    ingameCharacters[i].element.style.height = 30 * 1.5 + "vh";
                } else {
                    ingameCharacters[i].element.style.display = "none";
                }
            }
        } else if (ingameCharacters[i].name == "neliögd") {
            if (cams.opened && cams.animationTimer[0] > 0.15) {
                ingameCharacters[i].fade += dt / 30 * (ingameCharacters[i].difficulty / 3 + 1) * aggression; 
                ingameCharacters[i].element.style.display = "block";
                ingameCharacters[i].element.style.opacity = ingameCharacters[i].fade;
                if (ingameCharacters[i].fade > 1) {
                    die(ingameCharacters[i]);
                    return;
                }
            } else {
                if (hyperChecked) {
                    if (ingameCharacters[i].fade > 0)
                        ingameCharacters[i].fade -= dt / 3;
                } else {
                    ingameCharacters[i].fade = 0;
                }
                ingameCharacters[i].element.style.display = "none";
            }
        } else if (ingameCharacters[i].name == "shob") {
            if (removeShob) {
                for (let a = 0; a<characters.length; a++) {
                    if (characters[a].name == ingameCharacters[i].name) {
                        ingameCharacters[i] = {...characters[a]};
                    }
                }
                ingameCharacters[i].mlCam = Math.round(Math.random() * 8);
                ingameCharacters[i].element = document.getElementById("character_shob");
                ingameCharacters[i].mlElement = document.getElementById("character_ml");
                ingameCharacters[i].mlElement.style.display = "none";
            }
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                if (!cams.opened) {
                    ingameCharacters[i].element.style.left = 45 -mx / window.innerWidth * 33 + "vw";
                    ingameCharacters[i].element.style.top = 60 + "%";
                    ingameCharacters[i].element.style.width = 30 + "vh";
                    ingameCharacters[i].element.style.height = 30 * 1.5 + "vh";
                    ingameCharacters[i].element.style.display = "block";
                } else {
                    ingameCharacters[i].element.style.display = "none";
                }
                if (hyperChecked)
                    ingameCharacters[i].killTimer += dt * 2;
                else
                    ingameCharacters[i].killTimer += dt;
                if (ingameCharacters[i].mlCam == cams.cam && cams.animationTimer[0] > 0.15 && cams.opened) {
                    ingameCharacters[i].mlElement.style.display = "block";
                    ingameCharacters[i].mlElement.style.left = 50 * document.getElementById("cameraImage").getBoundingClientRect().width / window.innerWidth - camX - window.innerHeight/1080 + "vw";
                    ingameCharacters[i].mlElement.style.top = 30 + "%";
                    ingameCharacters[i].mlElement.style.width = 30 + "vh";
                    ingameCharacters[i].mlElement.style.height = 30 + "vh";
                } else {
                    ingameCharacters[i].mlElement.style.display = "none";
                }
                if (ingameCharacters[i].killTimer >= ingameCharacters[i].killTime) {
                    die(ingameCharacters[i]);
                    return;
                }
            } else {
                ingameCharacters[i].element.style.display = "none";
            }
            removeShob = false;
        } else if (ingameCharacters[i].name == "sinitiainen") {
            if (cams.opened && cams.animationTimer[0] >= 0.15 && !ingameCharacters[i].camFrame) {
                if (Math.random() * 30 < ingameCharacters[i].difficulty * aggression) {
                    ingameCharacters[i].active = true;
                }
                ingameCharacters[i].camFrame = true;
            }
            if (!cams.opened) {
                ingameCharacters[i].camFrame = false;
            }
            if (ingameCharacters[i].active) {
                ingameCharacters[i].killTimer += dt * (ingameCharacters[i].difficulty / 5 + 1);
                if (ingameCharacters[i].killTimer >= ingameCharacters[i].killTime) {
                    die(ingameCharacters[i]);
                    return;
                }
                ingameCharacters[i].frame += dt;
                if (ingameCharacters[i].direction == "right") {
                    ingameCharacters[i].x += dt * 10 * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
                    if (ingameCharacters[i].x >= 100) {
                        ingameCharacters[i].direction = "left";
                    }
                } else { 
                    ingameCharacters[i].x -= dt * 10 * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
                    if (ingameCharacters[i].x <= 0) {
                        ingameCharacters[i].direction = "right";
                    }
                }
                ingameCharacters[i].element.style.display = "block";
                ingameCharacters[i].element.style.left = ingameCharacters[i].x + "vw";
                ingameCharacters[i].element.style.top = 30 + Math.sin(ingameCharacters[i].frame * 5) * 10 + "%";
                ingameCharacters[i].element.style.width = 15 + "vh";
                ingameCharacters[i].element.style.height = 15 + "vh";
            } else {
                ingameCharacters[i].element.style.display = "none";
            }
            if (hyperChecked) {
                if (ingameCharacters[i].active && !cams.opened) {
                    die(ingameCharacters[i]);
                    return;
                }
            }
            if (!cams.opened && (cams.animationTimer[0] >= 0.15 && cams.opened)) {
                ingameCharacters[i].element.style.display = "none";
            }
            if (removeSini) {
                for (let a = 0; a<characters.length; a++) {
                    if (characters[a].name == ingameCharacters[i].name) {
                        ingameCharacters[i] = {...characters[a]};
                    }
                }
                soundEffects.bonk.currentTime = 0;
                soundEffects.bonk.pause();
                soundEffects.bonk.play();
                ingameCharacters[i].camFrame = true;
                ingameCharacters[i].element = document.getElementById("character_sinitiainen");
            }
            removeSini = false;
        } else if (ingameCharacters[i].name == "jape") {
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                if (!ingameCharacters[i].active) {
                    if (hyperChecked) {
                        for (let a = 0; a<3; a++) {
                            let randomCam = Math.round(Math.random() * 8);
                            while (!ingameCharacters[i].cams.includes(randomCam) && ingameCharacters[i].cams.length != 0) {
                                randomCam = Math.round(Math.random() * 8);
                            }
                            ingameCharacters[i].cams.push(Math.round(Math.random() * 8));
                        }
                    } else {
                        ingameCharacters[i].cams.push(Math.round(Math.random() * 8));
                    }
                    ingameCharacters[i].active = true;
                    for (let a = 0; a<ingameCharacters[i].cams.length; a++) {
                        document.getElementById("cam" + ingameCharacters[i].cams[a]).style.border = "solid green 1vh";
                    }
                }
                ingameCharacters[i].killTimer += dt * (ingameCharacters[i].difficulty / 20 + 1);
                if (ingameCharacters[i].killTimer >= ingameCharacters[i].killTime) {
                    die(ingameCharacters[i]);
                    return;
                }
            }
            if (ingameCharacters[i].active) {
                for (let a = 0; a<ingameCharacters[i].cams.length; a++) {
                    if (cams.cam == ingameCharacters[i].cams[a]) {
                        document.getElementById("cam" + ingameCharacters[i].cams[a]).style.border = "solid black 0.5vh";
                        ingameCharacters[i].cams.splice(a, 1);
                    }
                }
                if (ingameCharacters[i].cams.length == 0) {
                    ingameCharacters[i].active = false;
                    ingameCharacters[i].moveTimer = 0;
                    ingameCharacters[i].killTimer = 0;
                }
            }
        } else if (ingameCharacters[i].name == "vallufinland") {
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                ingameCharacters[i].fade = 1.25;
                ingameCharacters[i].moveTimer = 0;
            }
            if (ingameCharacters[i].fade >= 0) {
                ingameCharacters[i].fade -= dt;
                ingameCharacters[i].element.style.opacity = ingameCharacters[i].fade;
            }
        } else if (ingameCharacters[i].name == "kikkimöö") {
            if (hyperChecked) ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression * 2; else ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                ingameCharacters[i].moveTimer = 0;
                ingameCharacters.push({name: "kiki" + ingameCharacters[i].kikkisAdded});
                const kikki = document.createElement("img");
                kikki.draggable = false;
                kikki.style = "position: absolute; left: 0; top: 0; transform: translate(-50%, -50%); display: block;";
                kikki.id = "character_kiki" + ingameCharacters[i].kikkisAdded;
                kikki.dataset.value = ingameCharacters[i].kikkisAdded;
                kikki.src = ingameCharacters[i].img;
                ingameCharacters[i].kikkisAdded++;
                ingameCharacters[i].amount++;
                ingameCharacters[i].kikkiElements.push([kikki, Math.random() * 50 + 33, Math.random() * 50 + 33]);
                document.getElementById("ingameCharacters").appendChild(ingameCharacters[i].kikkiElements[ingameCharacters[i].kikkiElements.length-1][0]);
            }
            for (let a = 0; a<ingameCharacters[i].kikkiElements.length; a++) {
                ingameCharacters[i].kikkiElements[a][0].style.left = ingameCharacters[i].kikkiElements[a][1] -mx / window.innerWidth * 33 + "vw";
                ingameCharacters[i].kikkiElements[a][0].style.top = ingameCharacters[i].kikkiElements[a][2] + "vh";
                ingameCharacters[i].kikkiElements[a][0].style.width = 20 + "vh";
                ingameCharacters[i].kikkiElements[a][0].style.height = 20 + "vh";
                if (removeKikkiNumber[1]) {
                    if (ingameCharacters[i].kikkiElements[a][0].dataset.value == removeKikkiNumber[0]) {
                        const index = ingameCharacters.findIndex(c => c.name === "kiki" + ingameCharacters[i].kikkiElements[a][0].dataset.value);
                        ingameCharacters.splice(index, 1);
                        ingameCharacters[i].kikkiElements[a][0].remove();
                        ingameCharacters[i].kikkiElements.splice(a, 1);
                        ingameCharacters[i].amount--;
                        return;
                    }
                    removeKikkiNumber[1] = false;
                }
                if (cams.opened) {
                    ingameCharacters[i].kikkiElements[a][0].style.display = "none";
                } else {
                    ingameCharacters[i].kikkiElements[a][0].style.display = "block";
                }
            }
            if (ingameCharacters[i].amount >= 5) {
                die(ingameCharacters[i]);
                return;
            }
        } else if (ingameCharacters[i].name == "aatosliina") {
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && !vents[0]) {
                soundEffects.aatosliina.play();
                ingameCharacters[i].killTimer += dt * (ingameCharacters[i].difficulty / 10 + 1);
            }
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && !vents[0]) {
                ingameCharacters[i].element.style.left = 46.5 -mx / window.innerWidth * 33 + "vw";
                ingameCharacters[i].element.style.top = 65 + "vh";
                ingameCharacters[i].element.style.width = "20vh";
                ingameCharacters[i].element.style.height = "20vh";
            } else {
                soundEffects.aatosliina.pause();
                soundEffects.aatosliina.currentTime = 0;
            }
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && !vents[0] && !cams.opened && !hyperChecked) {
                ingameCharacters[i].element.style.display = "block";
            } else {
                ingameCharacters[i].element.style.display = "none";
            }
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && vents[0]) {
                ingameCharacters[i].leaveTimer += dt;
                if (ingameCharacters[i].leaveTimer >= ingameCharacters[i].leaveTime) {
                    for (let a = 0; a<characters.length; a++) {
                        if (characters[a].name == ingameCharacters[i].name) {
                            ingameCharacters[i] = {...characters[a]};
                        }
                    }
                    soundEffects.bonk.currentTime = 0;
                    soundEffects.bonk.pause();
                    soundEffects.bonk.play();
                    ingameCharacters[i].element = document.getElementById("character_aatosliina");
                }
            }
            if (ingameCharacters[i].killTimer >= ingameCharacters[i].killTime) {
                die(ingameCharacters[i]);
                return;
            }
        } else if (ingameCharacters[i].name == "jinku") {
            if (cams.opened && cams.animationTimer[0] >= 0.15 && !ingameCharacters[i].frame) {
                ingameCharacters[i].frame = true;
                if (hyperChecked) {
                    if (Math.random() > 0.5) {
                        ingameCharacters[i].active = true;
                        ingameCharacters[i].camChange = cams.cam;
                    }
                } else {
                    if (Math.random() > 0.75) {
                        ingameCharacters[i].active = true;
                        ingameCharacters[i].camChange = cams.cam;
                    }
                }
            }
            if (ingameCharacters[i].active) {
                ingameCharacters[i].element.style.left = 50 + document.getElementById("cameraImage").getBoundingClientRect().width / window.innerWidth - camX - window.innerHeight/1080 + "vw";
                ingameCharacters[i].element.style.top = "50%";
                ingameCharacters[i].element.style.width = "30vh";
                ingameCharacters[i].element.style.height = "45vh";
                ingameCharacters[i].element.style.display = "block";
                ingameCharacters[i].element.style.opacity = Math.random();
                ingameCharacters[i].leaveTimer += dt;
                if (ingameCharacters[i].leaveTimer >= 0.75 + ingameCharacters[i].difficulty / 100) {
                    ingameCharacters[i].active = false;
                    soundEffects.bonk.currentTime = 0;
                    soundEffects.bonk.pause();
                    soundEffects.bonk.play();
                    ingameCharacters[i].leaveTimer = 0;
                }
            } else {
                ingameCharacters[i].element.style.display = "none";
            }
            if (!cams.opened) {
                ingameCharacters[i].frame = false;
            }
            if (!cams.opened || ingameCharacters[i].camChange != cams.cam && hyperChecked) {
                if (ingameCharacters[i].active) {
                    die(ingameCharacters[i]);
                    return;
                }
            }
        } else if (ingameCharacters[i].name == "aateepee") {
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                if (!ingameCharacters[i].frame) {
                    ingameCharacters[i].side = Math.random() > 0.5 ? "left" : "right";
                    if (ingameCharacters[i].side == "left") {
                        soundEffects.aateepeeLeft.play();
                    } else {
                        soundEffects.aateepeeRight.play();
                    }
                    ingameCharacters[i].frame = true;
                }
                if (ingameCharacters[i].side == "left" ? doors[0] : doors[1]) {
                    ingameCharacters[i].leaveTimer += dt;
                    if (ingameCharacters[i].leaveTimer >= ingameCharacters[i].leaveTime) {
                        for (let a = 0; a<characters.length; a++) {
                            if (characters[a].name == ingameCharacters[i].name) {
                                ingameCharacters[i] = {...characters[a]};
                            }
                        }
                        if (hyperChecked)
                            ingameCharacters[i].moveTimer = ingameCharacters[i].moveTime / 1.1;
                        ingameCharacters[i].element = document.getElementById("character_aateepee");
                        soundEffects.bonk.currentTime = 0;
                        soundEffects.bonk.pause();
                        soundEffects.bonk.play();
                    }
                } else {
                    ingameCharacters[i].killTimer += dt * (ingameCharacters[i].difficulty / 10 + 1);
                    if (ingameCharacters[i].killTimer >= ingameCharacters[i].killTime) {
                        die(ingameCharacters[i]);
                        return;
                    }
                }
            }
        } else if (ingameCharacters[i].name == "avainportti") {
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1);
            ingameCharacters[i].element.style.display = "none";
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                soundEffects.buzz.play();
                blackTransitionOpacity = Math.random() / 3;
                ingameCharacters[i].killTimer += dt * (ingameCharacters[i].difficulty / 10 + 1);
                if (ingameCharacters[i].killTimer >= ingameCharacters[i].killTime) {
                    die(ingameCharacters[i]);
                    return;
                }
                if (!hyperChecked && mask || hyperChecked && mask && keys["f"]) {
                    ingameCharacters[i].leaveTimer += dt;
                    if (ingameCharacters[i].leaveTimer >= ingameCharacters[i].leaveTime) {
                        blackTransitionOpacity = 1.25;
                        for (let a = 0; a<characters.length; a++) {
                            soundEffects.buzz.currentTime = 0;
                            soundEffects.buzz.pause();
                            if (characters[a].name == ingameCharacters[i].name) {
                                ingameCharacters[i] = {...characters[a]};
                            }
                        }
                        ingameCharacters[i].element = document.getElementById("character_avainportti");
                    }
                }
                if (!cams.opened) {
                    ingameCharacters[i].element.style.left = 45 -mx / window.innerWidth * 33 + "vw";
                    ingameCharacters[i].element.style.top = 60 + "%";
                    ingameCharacters[i].element.style.width = 30 + "vh";
                    ingameCharacters[i].element.style.height = 30 * 1.5 + "vh";
                    ingameCharacters[i].element.style.display = "block";
                    ingameCharacters[i].element.style.opacity = Math.random();
                } else {
                    ingameCharacters[i].element.style.display = "none";
                }
            }
        } else if (ingameCharacters[i].name == "merkz") {
            const angle = Math.atan2(mousePos.y - ingameCharacters[i].posY, Number(mousePos.x) - ingameCharacters[i].posX);
            ingameCharacters[i].posX += Math.cos(angle) * 3 * (ingameCharacters[i].difficulty / 5 + 1) * dt;
            ingameCharacters[i].posY += Math.sin(angle) * 3 * (ingameCharacters[i].difficulty / 5 + 1) * dt;
            ingameCharacters[i].element.style.left = ingameCharacters[i].posX + "%";
            ingameCharacters[i].element.style.top = ingameCharacters[i].posY + "%";
            ingameCharacters[i].element.style.display = "block";
            if (hyperChecked) {
                ingameCharacters[i].element.style.width = "13vh";
                ingameCharacters[i].element.style.height = "13vh";
            } else {
                ingameCharacters[i].element.style.width = "8vh";
                ingameCharacters[i].element.style.height = "8vh";
            }
            if (merkzKill) {
                die(ingameCharacters[i]);
                merkzKill = false;
                return;
            }
        } else if (ingameCharacters[i].name == "noble") {
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && !vents[1]) {
                ingameCharacters[i].killTimer += dt * (ingameCharacters[i].difficulty / 10 + 1);
            }
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && !vents[1]) {
                ingameCharacters[i].element.style.left = 86.4 -mx / window.innerWidth * 33 + "vw";
                ingameCharacters[i].element.style.top = 36 + "vh";
                ingameCharacters[i].element.style.width = "20vh";
                ingameCharacters[i].element.style.height = "20vh";
            }
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && !vents[1] && !cams.opened) {
                ingameCharacters[i].element.style.display = "block";
            } else {
                ingameCharacters[i].element.style.display = "none";
            }
            if (!hyperChecked && ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && vents[1] || ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && vents[1] && cams.opened && cams.cam == 7 && hyperChecked) {
                ingameCharacters[i].leaveTimer += dt;
                if (ingameCharacters[i].leaveTimer >= ingameCharacters[i].leaveTime) {
                    for (let a = 0; a<characters.length; a++) {
                        if (characters[a].name == ingameCharacters[i].name) {
                            ingameCharacters[i] = {...characters[a]};
                        }
                    }
                    soundEffects.bonk.currentTime = 0;
                    soundEffects.bonk.pause();
                    soundEffects.bonk.play();
                    ingameCharacters[i].element = document.getElementById("character_noble");
                }
            }
            if (ingameCharacters[i].killTimer >= ingameCharacters[i].killTime && !vents[1]) {
                die(ingameCharacters[i]);
                return;
            }
        } else if (ingameCharacters[i].name == "jerpa") {
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            ingameCharacters[i].element.style.display = "none";
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                if (hyperChecked) {
                    ingameCharacters[i].killTimer += dt * 1.2;
                } else {
                    ingameCharacters[i].killTimer += dt;
                    soundEffects.jerpa.play();
                }
                if (cams.opened && cams.animationTimer[0] >= 0.15 && cams.cam == 6) {
                    ingameCharacters[i].element.style.left = 50 + document.getElementById("cameraImage").getBoundingClientRect().width / window.innerWidth - camX - window.innerHeight/1080 + "vw";
                    ingameCharacters[i].element.style.top = "50%";
                    ingameCharacters[i].element.style.width = "30vh";
                    ingameCharacters[i].element.style.height = "45vh";
                    ingameCharacters[i].element.style.display = "block";
                } else {
                    ingameCharacters[i].element.style.display = "none";
                }
                if (ingameCharacters[i].killTimer >= ingameCharacters[i].killTime) {
                    die(ingameCharacters[i]);
                    return;
                }
                if (removeJerpa) {
                    for (let a = 0; a<characters.length; a++) {
                        if (characters[a].name == ingameCharacters[i].name) {
                            ingameCharacters[i] = {...characters[a]};
                        }
                    }
                    soundEffects.bonk.currentTime = 0;
                    soundEffects.bonk.pause();
                    soundEffects.bonk.play();
                    soundEffects.jerpa.currentTime = 0;
                    soundEffects.jerpa.pause();
                    ingameCharacters[i].element = document.getElementById("character_jerpa");
                }
            }
            removeJerpa = false;
        } else if (ingameCharacters[i].name == "xylo") {
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            ingameCharacters[i].element.style.display = "none";
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                if (!cams.opened) {
                    ingameCharacters[i].element.style.left = ingameCharacters[i].x -mx / window.innerWidth * 33 + "vw";
                    ingameCharacters[i].element.style.top = "65%";
                    ingameCharacters[i].element.style.width = "20vh";
                    ingameCharacters[i].element.style.height = "35vh";
                    ingameCharacters[i].element.style.display = "block";
                } else {
                    ingameCharacters[i].element.style.display = "none";
                }
                ingameCharacters[i].killTimer += dt * (ingameCharacters[i].difficulty / 10);
                if (ingameCharacters[i].killTimer >= ingameCharacters[i].killTime) {
                    die(ingameCharacters[i]);
                    return;
                }
                if (removeXylo) {
                    ingameCharacters[i].x = Math.random() * 100 + 11.5;
                    ingameCharacters[i].count++;
                    if (!hyperChecked && ingameCharacters[i].count >= 3 || hyperChecked && ingameCharacters[i].count >= 6) {
                        for (let a = 0; a<characters.length; a++) {
                            if (characters[a].name == ingameCharacters[i].name) {
                                ingameCharacters[i] = {...characters[a]};
                            }
                        }
                    }
                    ingameCharacters[i].element = document.getElementById("character_xylo");
                }
            }
            removeXylo = false;
        } else if (ingameCharacters[i].name == "rain") {
            if (hyperChecked)
                ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression * 1.8;
            else
                ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            ingameCharacters[i].element.style.display = "none";
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                ingameCharacters[i].drainPower += dt / 20;
                powerDrain += ingameCharacters[i].drainPower;
                document.getElementById("cam" + ingameCharacters[i].cam).style.border = "solid red 1vh";
                if (cams.opened && cams.animationTimer[0] >= 0.15 && cams.cam == ingameCharacters[i].cam) {
                    ingameCharacters[i].element.style.left = 50 + document.getElementById("cameraImage").getBoundingClientRect().width / window.innerWidth - camX - window.innerHeight/1080 + "vw";
                    ingameCharacters[i].element.style.top = "30%";
                    ingameCharacters[i].element.style.width = "20vh";
                    ingameCharacters[i].element.style.height = "35vh";
                    ingameCharacters[i].element.style.display = "block";
                } else {
                    ingameCharacters[i].element.style.display = "none";
                }
                if (removeRain) {
                    document.getElementById("cam" + ingameCharacters[i].cam).style.border = "solid black 0.5vh";
                    for (let a = 0; a<characters.length; a++) {
                        if (characters[a].name == ingameCharacters[i].name) {
                            ingameCharacters[i] = {...characters[a]};
                        }
                    }
                    ingameCharacters[i].cam = Math.round(Math.random() * 2 + 4);
                    ingameCharacters[i].element = document.getElementById("character_rain");
                    soundEffects.bonk.currentTime = 0;
                    soundEffects.bonk.pause();
                    soundEffects.bonk.play();
                }
            }
            removeRain = false;
        } else if (ingameCharacters[i].name == "beemsaManLDoor") {
            if (cams.opened) {
                if (!ingameCharacters[i].camFrame) {
                    if (Math.random() > 0.66) {ingameCharacters[i].moveTimer += ingameCharacters[i].moveTime / 1.5}
                    ingameCharacters[i].camFrame = true;
                }
            } else {
                ingameCharacters[i].camFrame = false;
            }
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                if (!cams.opened) {
                    if (!doors[0]) {
                        ingameCharacters[i].element.style.display = "block";
                        ingameCharacters[i].element.style.left = 27 -mx / window.innerWidth * 33 + "vw";
                        ingameCharacters[i].element.style.top = 70 + "vh";
                        ingameCharacters[i].element.style.width = 25 + "vh";
                        ingameCharacters[i].element.style.height = 25 * 1.5 + "vh";
                    } else {
                        ingameCharacters[i].element.style.display = "none";
                    }
                } else {
                    ingameCharacters[i].element.style.display = "none";
                }
                if (doors[0]) {
                    ingameCharacters[i].leaveTimer += dt;
                    if (ingameCharacters[i].leaveTimer >= ingameCharacters[i].leaveTime) {
                        for (let a = 0; a<beemsaManCharacters.length; a++) {
                            if (beemsaManCharacters[a].name == ingameCharacters[i].name) {
                                ingameCharacters[i] = {...beemsaManCharacters[a]};
                            }
                        }
                        ingameCharacters[i].element = document.getElementById("character_beemsaManLDoor");
                        soundEffects.bonk.currentTime = 0;
                        soundEffects.bonk.pause();
                        soundEffects.bonk.play();
                    }
                }
                ingameCharacters[i].killTimer += dt * (ingameCharacters[i].difficulty / 10 + 1);
                if (ingameCharacters[i].killTimer >= ingameCharacters[i].killTime && !doors[0]) {
                    die(ingameCharacters[i]);
                    return;
                }
            }
        } else if (ingameCharacters[i].name == "beemsaManRDoor") {
            if (cams.opened) {
                if (!ingameCharacters[i].camFrame) {
                    if (Math.random() > 0.66) {ingameCharacters[i].moveTimer += ingameCharacters[i].moveTime / 1.5}
                    ingameCharacters[i].camFrame = true;
                }
            } else {
                ingameCharacters[i].camFrame = false;
            }
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                if (!cams.opened) {
                    if (!doors[1]) {
                        ingameCharacters[i].element.style.display = "block";
                        ingameCharacters[i].element.style.left = 106 -mx / window.innerWidth * 33 + "vw";
                        ingameCharacters[i].element.style.top = 70 + "vh";
                        ingameCharacters[i].element.style.width = 25 + "vh";
                        ingameCharacters[i].element.style.height = 25 * 1.5 + "vh";
                    } else {
                        ingameCharacters[i].element.style.display = "none";
                    }
                } else {
                    ingameCharacters[i].element.style.display = "none";
                }
                if (doors[1]) {
                    ingameCharacters[i].leaveTimer += dt;
                    if (ingameCharacters[i].leaveTimer >= ingameCharacters[i].leaveTime) {
                        for (let a = 0; a<beemsaManCharacters.length; a++) {
                            if (beemsaManCharacters[a].name == ingameCharacters[i].name) {
                                ingameCharacters[i] = {...beemsaManCharacters[a]};
                            }
                        }
                        ingameCharacters[i].element = document.getElementById("character_beemsaManRDoor");
                        soundEffects.bonk.currentTime = 0;
                        soundEffects.bonk.pause();
                        soundEffects.bonk.play();
                    }
                }
                ingameCharacters[i].killTimer += dt * (ingameCharacters[i].difficulty / 10 + 1);
                if (ingameCharacters[i].killTimer >= ingameCharacters[i].killTime && !doors[1]) {
                    die(ingameCharacters[i]);
                    return;
                }
            }
        } else if (ingameCharacters[i].name == "beemsaManMask") {
            if (cams.opened) {
                if (!ingameCharacters[i].camFrame) {
                    if (Math.random() > 0.66) {ingameCharacters[i].moveTimer += ingameCharacters[i].moveTime / 1.5}
                    ingameCharacters[i].camFrame = true;
                }
            } else {
                ingameCharacters[i].camFrame = false;
            }
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1);
            ingameCharacters[i].element.style.display = "none";
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                soundEffects.buzz.play();
                blackTransitionOpacity = Math.random() / 3;
                ingameCharacters[i].killTimer += dt * (ingameCharacters[i].difficulty / 10 + 1);
                if (ingameCharacters[i].killTimer >= ingameCharacters[i].killTime) {
                    die(ingameCharacters[i]);
                    return;
                }
                if (mask) {
                    ingameCharacters[i].leaveTimer += dt;
                    if (ingameCharacters[i].leaveTimer >= ingameCharacters[i].leaveTime) {
                        blackTransitionOpacity = 1.25;
                        for (let a = 0; a<beemsaManCharacters.length; a++) {
                            soundEffects.buzz.currentTime = 0;
                            soundEffects.buzz.pause();
                            if (beemsaManCharacters[a].name == ingameCharacters[i].name) {
                                ingameCharacters[i] = {...beemsaManCharacters[a]};
                            }
                        }
                        ingameCharacters[i].element = document.getElementById("character_beemsaManMask");
                    }
                }
                if (!cams.opened) {
                    ingameCharacters[i].element.style.left = 45 -mx / window.innerWidth * 33 + "vw";
                    ingameCharacters[i].element.style.top = 60 + "%";
                    ingameCharacters[i].element.style.width = 30 + "vh";
                    ingameCharacters[i].element.style.height = 30 * 1.5 + "vh";
                    ingameCharacters[i].element.style.display = "block";
                    ingameCharacters[i].element.style.opacity = Math.random();
                } else {
                    ingameCharacters[i].element.style.display = "none";
                }
            }
        } else if (ingameCharacters[i].name == "beemsaManFlashlight") {
            if (cams.opened) {
                if (!ingameCharacters[i].camFrame) {
                    if (Math.random() > 0.66) {ingameCharacters[i].moveTimer += ingameCharacters[i].moveTime / 1.5}
                    ingameCharacters[i].camFrame = true;
                }
            } else {
                ingameCharacters[i].camFrame = false;
            }
            ingameCharacters[i].element.style.display = "none";
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                ingameCharacters[i].killTimer += dt * (ingameCharacters[i].difficulty / 10 + 1) 
                if (ingameCharacters[i].killTimer >= ingameCharacters[i].killTime) {
                    die(ingameCharacters[i]);
                    return;
                }
                if (!cams.opened) {
                    ingameCharacters[i].element.style.left = 65 -mx / window.innerWidth * 33 + "vw";
                    ingameCharacters[i].element.style.top = 60 + "%";
                    ingameCharacters[i].element.style.width = 30 + "vh";
                    ingameCharacters[i].element.style.height = 30 * 1.5 + "vh";
                    ingameCharacters[i].element.style.display = "block";
                } else {
                    ingameCharacters[i].element.style.display = "none";
                }
                if (keys["f"] && !cams.opened) {
                    if (!ingameCharacters[i].flashing) {
                        ingameCharacters[i].flashing = true;
                        ingameCharacters[i].flashAmount[0]++;
                        if (ingameCharacters[i].flashAmount[0] >= ingameCharacters[i].flashAmount[1]) {
                            for (let a = 0; a<beemsaManCharacters.length; a++) {
                                if (beemsaManCharacters[a].name == ingameCharacters[i].name) {
                                    ingameCharacters[i] = {...beemsaManCharacters[a]};
                                }
                            }
                            ingameCharacters[i].flashAmount = [0,7];
                            ingameCharacters[i].element = document.getElementById("character_beemsaManFlashlight");
                        }
                    }
                }
                if (!keys["f"]) {
                    ingameCharacters[i].flashing = false;
                }
            }
        } else if (ingameCharacters[i].name == "beemsaManLVent") {
            if (cams.opened) {
                if (!ingameCharacters[i].camFrame) {
                    if (Math.random() > 0.66) {ingameCharacters[i].moveTimer += ingameCharacters[i].moveTime / 1.5}
                    ingameCharacters[i].camFrame = true;
                }
            } else {
                ingameCharacters[i].camFrame = false;
            }
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && !vents[0]) {
                ingameCharacters[i].killTimer += dt * (ingameCharacters[i].difficulty / 10 + 1);
            }
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && !vents[0]) {
                ingameCharacters[i].element.style.left = 46.5 -mx / window.innerWidth * 33 + "vw";
                ingameCharacters[i].element.style.top = 65 + "vh";
            }
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && !vents[0] && !cams.opened) {
                ingameCharacters[i].element.style.display = "block";
            } else {
                ingameCharacters[i].element.style.display = "none";
            }
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && vents[0]) {
                ingameCharacters[i].leaveTimer += dt;
                if (ingameCharacters[i].leaveTimer >= ingameCharacters[i].leaveTime) {
                    for (let a = 0; a<beemsaManCharacters.length; a++) {
                        if (beemsaManCharacters[a].name == ingameCharacters[i].name) {
                            ingameCharacters[i] = {...beemsaManCharacters[a]};
                        }
                    }
                    soundEffects.bonk.currentTime = 0;
                    soundEffects.bonk.pause();
                    soundEffects.bonk.play();
                    ingameCharacters[i].element = document.getElementById("character_beemsaManLVent");
                }
            }
            if (ingameCharacters[i].killTimer >= ingameCharacters[i].killTime && !vents[1]) {
                die(ingameCharacters[i]);
                return;
            }
        } else if (ingameCharacters[i].name == "beemsaManRVent") {
            if (cams.opened) {
                if (!ingameCharacters[i].camFrame) {
                    if (Math.random() > 0.66) {ingameCharacters[i].moveTimer += ingameCharacters[i].moveTime / 1.5}
                    ingameCharacters[i].camFrame = true;
                }
            } else {
                ingameCharacters[i].camFrame = false;
            }
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && !vents[1]) {
                ingameCharacters[i].killTimer += dt * (ingameCharacters[i].difficulty / 10 + 1);
            }
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && !vents[1]) {
                ingameCharacters[i].element.style.left = 86.4 -mx / window.innerWidth * 33 + "vw";
                ingameCharacters[i].element.style.top = 36 + "vh";
            }
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && !vents[1] && !cams.opened) {
                ingameCharacters[i].element.style.display = "block";
            } else {
                ingameCharacters[i].element.style.display = "none";
            }
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime && vents[1]) {
                ingameCharacters[i].leaveTimer += dt;
                if (ingameCharacters[i].leaveTimer >= ingameCharacters[i].leaveTime) {
                    for (let a = 0; a<beemsaManCharacters.length; a++) {
                        if (beemsaManCharacters[a].name == ingameCharacters[i].name) {
                            ingameCharacters[i] = {...beemsaManCharacters[a]};
                        }
                    }
                    soundEffects.bonk.currentTime = 0;
                    soundEffects.bonk.pause();
                    soundEffects.bonk.play();
                    ingameCharacters[i].element = document.getElementById("character_beemsaManRVent");
                }
            }
            if (ingameCharacters[i].killTimer >= ingameCharacters[i].killTime && !vents[1]) {
                die(ingameCharacters[i]);
                return;
            }
        } else if (ingameCharacters[i].name == "beemsaManTimer") {
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                ingameCharacters[i].killTimer -= dt;
                document.getElementById("beemsaTimer").style.display = "block";
                document.getElementById("beemsaTimer").textContent = "Beemsa man: " + ingameCharacters[i].killTimer.toFixed(2) + "s";
                if (ingameCharacters[i].killTimer < 0) {
                    if (vents[1]) {
                        ingameCharacters[i].moveTimer = 0;
                        ingameCharacters[i].killTimer = 10;
                        soundEffects.bonk.currentTime = 0;
                        soundEffects.bonk.pause();
                        soundEffects.bonk.play();
                    } else {
                        die(ingameCharacters[i]);
                        return;
                    }
                }
            } else {
                document.getElementById("beemsaTimer").style.display = "none";
            }
        } else if (ingameCharacters[i].name == "beemsaKidSpawner") {
            ingameCharacters[i].moveTimer += dt * (ingameCharacters[i].difficulty / 5 + 1) * aggression;
            if (ingameCharacters[i].moveTimer >= ingameCharacters[i].moveTime) {
                ingameCharacters[i].moveTimer = 0;
                ingameCharacters.push({name: "bk" + ingameCharacters[i].bksAdded});
                const bk = document.createElement("img");
                bk.draggable = false;
                bk.style = "position: absolute; left: 0; top: 0; transform: translate(-50%, -50%); display: none;";
                bk.id = "character_bk" + ingameCharacters[i].bksAdded;
                bk.dataset.value = ingameCharacters[i].bksAdded;
                bk.src = ingameCharacters[i].img;
                ingameCharacters[i].bkElements.push([bk, Math.random() * 50 + 25, Math.random() * 50 + 25, Math.round(Math.random() * 8), 0, bk.dataset.value]);
                document.getElementById("ingameCharacters").appendChild(ingameCharacters[i].bkElements[ingameCharacters[i].bkElements.length-1][0]);
                ingameCharacters[i].bksAdded++;
            }
            for (let a = 0; a<ingameCharacters[i].bkElements.length; a++) {
                ingameCharacters[i].bkElements[a][4] += dt;
                if (ingameCharacters[i].bkElements[a][4] >= 30) {
                    //die(ingameCharacters[i]);
                    //return;
                }
                ingameCharacters[i].bkElements[a][0].style.display = "none";
                if (ingameCharacters[i].bkElements[a][3] === cams.cam) {
                    ingameCharacters[i].bkElements[a][0].style.display = "block";
                    ingameCharacters[i].bkElements[a][0].style.left = ingameCharacters[i].bkElements[a][1] * document.getElementById("cameraImage").getBoundingClientRect().width / window.innerWidth - camX - window.innerHeight/1080 + "vw";
                    ingameCharacters[i].bkElements[a][0].style.top = ingameCharacters[i].bkElements[a][2] + "vh";
                    ingameCharacters[i].bkElements[a][0].style.width = 20 + "vh";
                    ingameCharacters[i].bkElements[a][0].style.height = 20 * 1.5 + "vh";
                }
                if (removebkNumber[1]) {
                    if (ingameCharacters[i].bkElements[a][0].dataset.value == removebkNumber[0]) {
                        const index = ingameCharacters.findIndex(c => c.name === "bk" + ingameCharacters[i].bkElements[a][0].dataset.value);
                        ingameCharacters.splice(index, 1);
                        ingameCharacters[i].bkElements[a][0].remove();
                        ingameCharacters[i].bkElements.splice(a, 1);
                        soundEffects.bonk.currentTime = 0;
                        soundEffects.bonk.pause();
                        soundEffects.bonk.play();
                        return;
                    }
                }
            }
            removebkNumber[1] = false;
        }
    }
    document.getElementById("blackTransition").style.opacity = blackTransitionOpacity;
    blackTransitionOpacity -= dt;
    power -= powerDrain * dt / 3;
}
let bgPos = [0,0];
let hyperModeChange = false;
let aggressiveModeChange = false;
function menu(dt) {
    if (!firstFrame[0]) {
        hopelessBeemsuit = false;
        easycide = false;
        beemsaMan = false;
        document.getElementById("deathAnimation").style.display = "none";
        document.getElementById("menu").style.display = "block";
        document.getElementById("ingame").style.display = "none";
        bgPos[0] = 0;
        bgPos[1] = 0;
        firstFrame[0] = true;
        firstFrame[1] = false;
        firstFrame[2] = false;
        firstFrame[3] = false;
        blackTransitionOpacity = 1.5;
        buttonHeld = null;
    }
    menuStaticTimer[0] += dt;
    if (menuStaticTimer[0] >= menuStaticTimer[1]) {
        document.getElementById("menuStatic").style.opacity = 0;
    } else {
        document.getElementById("menuStatic").style.opacity = 1;
    }
    if (hyperModeChange != document.getElementById("hyperCB").checked) {
        if (document.getElementById("hyperCB").checked) {
            menuStaticTimer[0] = 0;
            document.getElementById("menu").style.filter = "sepia(200%) hue-rotate(280deg) contrast(200%)";
        } else {
            menuStaticTimer[0] = 0;
            document.getElementById("menu").style.filter = "";
        }
    }
    if (aggressiveModeChange != document.getElementById("aggressiveCB").checked) {
        if (document.getElementById("aggressiveCB").checked) {
            menuStaticTimer[0] = 0;
            document.getElementById("characters").style.filter = "contrast(2) saturate(2) grayscale(100%)";
        } else {
            menuStaticTimer[0] = 0;
            document.getElementById("characters").style.filter = "";
        }
    }
    aggressiveModeChange = document.getElementById("aggressiveCB").checked;
    hyperModeChange = document.getElementById("hyperCB").checked;
    blackTransitionOpacity -= dt;
    bgPos[0] += dt * 100;
    bgPos[1] += dt * 100;
    if (menuClicking) {
        menuClickingTimer -= dt;
        timerBeforeAdd -= dt;
        if (menuClickingTimer < 0 && timerBeforeAdd < 0 && buttonHeld != null) {
            if (buttonHeld.classList.contains("downArrow")) {
                if (characters[buttonHeld.dataset.value].difficulty > 0) {
                    characters[buttonHeld.dataset.value].difficulty--;
                }
            }
            if (buttonHeld.classList.contains("upArrow")) {
                if (characters[buttonHeld.dataset.value].difficulty < 20) {
                    characters[buttonHeld.dataset.value].difficulty++;
                }
            }
            for (let i = 0; i<characters.length; i++) {
                document.getElementById(i).innerText = characters[i].difficulty;
            }
            timerBeforeAdd = 0.05;
        }
    }
    document.getElementById("menuBackground").style.backgroundPositionX = bgPos[0] + "px";
    document.getElementById("menuBackground").style.backgroundPositionY = bgPos[1] + "px";
    document.getElementById("menuBackground2").style.backgroundPositionX = bgPos[0]*2 + "px";
    document.getElementById("menuBackground2").style.backgroundPositionY = bgPos[1]*2 + "px";
    document.getElementById("blackTransition").style.opacity = blackTransitionOpacity;
}
let deathFrame2 = false;
let deathCounter = 0;
let ingameTimeCounter = [0,0];
function dead(dt) {
    if (!firstFrame[2]) {
        deathCounter++;
        if (ingameTimeCounter[1] < 10) {
            document.getElementById("timeCounter").textContent = "Ingame: " + ingameTimeCounter[0] + ":0" + Math.floor(ingameTimeCounter[1]);
        } else {
            document.getElementById("timeCounter").textContent = "Ingame: " + ingameTimeCounter[0] + ":" + Math.floor(ingameTimeCounter[1]);
        }
        document.getElementById("deathCounter").textContent = "Deaths: " + deathCounter;
        saveProgress();
        document.getElementById("beemsaManTimer").style.display = "none";
        firstFrame[0] = false;
        firstFrame[1] = false;
        firstFrame[2] = true;
        firstFrame[3] = false;
        document.getElementById("deathAnimation").style.display = "block";
        document.getElementById("killAnim").style.display = "none";
        document.getElementById("ingame").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("deathImage").src = death.image;
        document.getElementById("gameOverTime").textContent = document.getElementById("timeUI").textContent;
        blackTransitionOpacity = 0;
        document.getElementById("blackTransition").style.opacity = blackTransitionOpacity;
        deathFrame2 = false;
        for (let key in soundEffects) {
            soundEffects[key].pause();
            soundEffects[key].currentTime = 0;
        }
        for (let i = 0; i<ingameCharacters.length; i++) {
            if (ingameCharacters[i].name == killer) {
                if (ingameCharacters[i].killSound != undefined)
                    ingameCharacters[i].killSound.play();
            }
        }
    }
    beemsaManLastMinute = false;
    beemsaManFakeTimer = 0;
    death.frame[0] += dt;
    death.shakeSpeed[0] += dt;
    document.getElementById("deathText").style.opacity = death.textOpacity;
    if (death.shakeSpeed[0] >= death.shakeSpeed[1]) {
        death.shakeSpeed[0] = 0;
        document.getElementById("deathImage").style.transform = `translate(${Math.random()*5-2.5}%,${Math.random()*5-2.5}%)`;
    }
    if (death.frame[0] >= death.frame[1]) {
        document.getElementById("killAnim").style.display = "block";
        document.getElementById("killAnim").style.backgroundColor = `rgb(${death.red},0,0)`;
        death.red -= dt * 255;
        if (death.red < 0) {
            death.textOpacity += dt;
        }
        if (!deathFrame2 && death.red < 50) {
            for (let a = 0; a<ingameCharacters.length; a++) {
                if (ingameCharacters[a].name == killer) {
                    if (ingameCharacters[a].killSound != undefined)
                        ingameCharacters[a].voiceLine.play();
                }
            }
            deathFrame2 = true;
        }
    }
    if (death.transition) {
        blackTransitionOpacity += dt;
        if (blackTransitionOpacity >= 1) {
            scene = "menu";
        }
        document.getElementById("blackTransition").style.opacity = blackTransitionOpacity;
    }
}
let sixAmOpacity = 0;
let sixAmFirstFrame = false;
function checkIfAchievement(name, number) {
    if (document.getElementById("csCenterText").textContent == name) {
        achievementNames[number][2] = true;
        for (let i = 0; i<achievementNames.length-1; i++) {
            if (achievementNames[i][2])
                document.getElementById("AC_" + (i+1)).style.display = "inline-block";
        }
    }
}
achievementNames = [
    ["AC_1", "Beat Easycide, pretty easy right?", false, "Easycide Conquered"],
    ["AC_2", "Beat Hyper Easycide, now its a bit harder", false, "ez Hypercide basically"],
    ["AC_3", "Beat Aggressive Easycide, thats kinda hard", false, "Ts hard achievement"],
    ["AC_4", "Beat Hyper Aggressive Easycide, thats hard", false, "Almost there!"],
    ["AC_5", "Beat Easycide all challenges, thats really hard", false, "The hardest max mode of Easycide"],
    ["AC_6", "Beat Poikacide, the base max mode", false, "Congrats on the base max mode"],
    ["AC_7", "Beat Hyper Poikacide, the base max mode but buffed", false, "Peakcide"],
    ["AC_8", "Beat Aggressive Poikacide, the base max mode but everyone is like 1.5x faster", false, "Hardcide"],
    ["AC_9", "Beat Genopoikacide, dang now thats a max mode.", false, "Ts impossible lowk idk how you did ts"],
    ["AC_10", "Beat Silent Pneogenopoikacide All Challenges, How.?", false, "Wtf.?"],
    ["AC_11", "Beemsa Man", false],
    ["AC_12", "Hyper Beemsa Man", false],
    ["AC_13", "Aggressive Beemsa Man", false],
    ["AC_14", "Hyper Aggressive Beemsa Man", false],
    ["AC_15", "Hyper Aggressive Beemsa Man Long Nights", false],
    ["AC_16", "Eternal Beemsa Man", false],
    ["AC_17", "Hyper Eternal Beemsa Man", false],
    ["AC_18", "Aggressive Eternal Beemsa Man", false],
    ["AC_19", "Hyper Aggressive Eternal Beemsa Man", false],
    ["AC_20", "Hyper Aggressive Eternal Beemsa Man Long Nights", false],
    ["AC_21", "Beat Hopeless Beemsuit, the hardest max mode. How the hell did you even do this :sob:", false],
];
function sixAm(dt) {
    console.log(document.getElementById("csCenterText").textContent);
    if (!sixAmFirstFrame) {
        checkIfAchievement(" Easycide", 0);
        checkIfAchievement(" Hyper Easycide", 1);
        checkIfAchievement("Aggressive Easycide", 2);
        checkIfAchievement("Aggressive Hyper Easycide", 3);
        checkIfAchievement("Aggressive Hyper Easycide Long Nights", 4);
        checkIfAchievement(" Poikacide", 5);
        checkIfAchievement(" Hyper Poikacide", 6);
        checkIfAchievement("Aggressive Poikacide", 7);
        checkIfAchievement("Aggressive Hyper Poikacide", 8);
        checkIfAchievement("Aggressive Hyper Poikacide Long Nights", 9);
        checkIfAchievement(" Beemsa Man", 10);
        checkIfAchievement(" Hyper Beemsa man", 11);
        checkIfAchievement("Aggressive Beemsa man", 12);
        checkIfAchievement("Aggresssive Hyper Beemsa man", 13);
        checkIfAchievement("Aggressive Hyper Beemsa man Long Nights", 14);
        checkIfAchievement(" Eternal Beemsa Man", 15);
        checkIfAchievement(" Hyper Eternal Beemsa man", 16);
        checkIfAchievement("Aggressive Eternal Beemsa man", 17);
        checkIfAchievement("Aggressive Hyper Eternal Beemsa man", 18);
        checkIfAchievement("Aggressive Hyper Eternal Beemsa man Long Nights", 19);
        checkIfAchievement("Hopeless Beemsuit", 20);
    }
    document.getElementById("beemsaManTimer").style.display = "none";
    soundEffects.alarm.play();
    sixAmOpacity += dt / 3;
    blackTransitionOpacity += dt / 3;
    document.getElementById("blackTransition").style.opacity = blackTransitionOpacity;
    document.getElementById("6AM").style.opacity = sixAmOpacity;
    saveProgress();
    if (sixAmOpacity >= 1.1) {
        sixAmFirstFrame = false;
        scene = "menu";
        document.getElementById("6AM").style.opacity = 0;
    }
}
let cutsceneTime = [0,1.5];
let textScale = 10000;
let textFade = 1;
let ifHardestMaxMode = false;
function cutsceneToNight(dt) {
    if (!firstFrame[3]) {
        firstFrame[0] = false;
        firstFrame[1] = false;
        firstFrame[2] = false;
        firstFrame[3] = true;
        document.getElementById("menu").style.display = "none";
        document.getElementById("cutscene").style.display = "block";
        cutsceneTime = [0,2];
        textScale = 10000;
        textFade = 1;
        document.getElementById("csCenterText").style.opacity = 1;
        soundEffects.lightSwitch.play();
        document.getElementById("csCenterText").textContent = "";
        if (document.getElementById("aggressiveCB").checked) {
            document.getElementById("csCenterText").textContent = "Aggressive";
        }
        if (document.getElementById("hyperCB").checked) {
            document.getElementById("csCenterText").textContent = document.getElementById("csCenterText").textContent + " Hyper";
        }
        let cAmount = 0;
        for (let i = 0; i<characters.length; i++) {
            if (characters[i].difficulty == 20) {
                cAmount++;
            }
        }
        document.getElementById("csCenterText").style.fontFamily = "cursive";
        document.getElementById("csCenterText").style.color = "white";
        if (beemsaMan) {
            if (document.getElementById("eternalBM").checked)
                document.getElementById("csCenterText").textContent = document.getElementById("csCenterText").textContent + " Eternal";
            document.getElementById("csCenterText").textContent = document.getElementById("csCenterText").textContent + " Beemsa Man";
            document.getElementById("csCenterText").style.fontFamily = "intenseFont";
            document.getElementById("csCenterText").style.color = "red";
        } else if (easycide) {
            document.getElementById("csCenterText").textContent = document.getElementById("csCenterText").textContent + " Easycide";
            document.getElementById("csCenterText").style.fontFamily = "intenseFont";
            document.getElementById("csCenterText").style.color = "lightblue";
        } else {
            if (cAmount == 20) {
                document.getElementById("csCenterText").textContent = document.getElementById("csCenterText").textContent + " Poikacide";
            } else {
                document.getElementById("csCenterText").textContent = document.getElementById("csCenterText").textContent + " Custom Night";
            }
        }
        if (document.getElementById("LNCB").checked) {
            document.getElementById("csCenterText").textContent = document.getElementById("csCenterText").textContent + " Long Nights";
        }
        if (document.getElementById("hyperCB").checked && document.getElementById("aggressiveCB").checked && cAmount == 20) {
            document.getElementById("csCenterText").textContent = "Genopoikacide";
        }
        if (document.getElementById("hyperCB").checked && document.getElementById("aggressiveCB").checked && document.getElementById("LNCB").checked && cAmount == 20) {
            document.getElementById("csCenterText").textContent = "Silent Pneogenopoikacide All Challenges";
            document.getElementById("csCenterText").style.fontFamily = "intenseFont";
            document.getElementById("csCenterText").style.color = "red";
            ifHardestMaxMode = true;
        } else {
            ifHardestMaxMode = false;
        }
        if (hopelessBeemsuit) {
            document.getElementById("csCenterText").textContent = "Hopeless Beemsuit";
            document.getElementById("csCenterText").style = "position: absolute; left: 50%; top: 50%; transform:translate(-50%, -50%); color: white; z-index: 100; white-space: nowrap; background: -webkit-linear-gradient(90deg,rgba(255, 0, 0, 1) 0%,rgba(255, 154, 0, 1) 10%,rgba(208, 222, 33, 1) 20%,rgba(79, 220, 74, 1) 30%,rgba(63, 218, 216, 1) 40%,rgba(47, 201, 226, 1) 50%,rgba(28, 127, 238, 1) 60%,rgba(95, 21, 242, 1) 70%,rgba(186, 12, 248, 1) 80%,rgba(251, 7, 217, 1) 90%,rgba(255, 0, 0, 1) 100%);-webkit-background-clip: text; -webkit-text-fill-color: transparent;"
            document.getElementById("csCenterText").style.fontFamily = "intenseFont";
        }
    }
    cutsceneTime[0] += dt;
    document.getElementById("csCenterText").style.fontSize = textScale + 500 + "%";
    textScale /= dt * 175;  
    if (cutsceneTime[0] >= cutsceneTime[1] / 2) {
        textFade -= dt;
        document.getElementById("csCenterText").style.opacity = textFade;
    }
    if (cutsceneTime[0] >= cutsceneTime[1]) {
        startNight();
    }
}
let bmcFrame = false;
let bmcLine = 0;
let bmcDialogue = [
    "Hi",
    "Hello.",
    "I am beems.",
    "You are the player.",
    "You beat beemsa man....",
    "How?",
    "Why?",
    "What do you gain from this?",
    "Oh i forgot",
    "List points, right?",
    "you boutta get a hella load of list points 😭😭😭😭😭",
    "Think about it. You just beat the hardest mode.",
    "Or did you.?",
    "Theres still Beemsa man all challenges which is..... something...",
    "Thats probably impossible anyway but.",
    "Maybe in an alternate universe its possible",
    "Maybe..",
    "just maybe",
    "...",
];
let bmcTimer = 0;
document.getElementById("bcButton").addEventListener("click", (e) => {
    bmcLine++;
    document.getElementById("bcText").textContent = bmcDialogue[bmcLine];
});
function beemsaManCompleted(dt) {
    if (!bmcFrame) {
        document.getElementById("beemsaManTimer").style.display = "none";
        bmcFrame = true;
        blackTransitionOpacity = 1
        document.getElementById("ingame").style.display = "none";
        document.getElementById("blackTransition").style.opacity = blackTransitionOpacity;
        soundEffects.alarm.play();
        document.getElementById("beemsCutscene").style.display = "block";
    }
    bmcTimer += dt;
    if (bmcTimer >= 5) {
        blackTransitionOpacity -= dt / 2;
        soundEffects.bmc.play();
        soundEffects.bmc.volume = 0.3;
    }
    document.getElementById("blackTransition").style.opacity = blackTransitionOpacity;
}
function saveProgress() {
    localStorage.setItem("data", JSON.stringify({
        deaths: deathCounter,
        ingameTimeCounter: ingameTimeCounter,
        achievementNames: achievementNames,
    }));
}
function loadProgress() {
    let data = JSON.parse(localStorage.getItem("data"));
    if (data == undefined) return;
    if (data.deaths != undefined) deathCounter = data.deaths;
    if (data.ingameTimeCounter != undefined) ingameTimeCounter = data.ingameTimeCounter;
    if (data.achievementNames != undefined) achievementNames = data.achievementNames;
    for (let i = 0; i<achievementNames.length; i++) {
        if (achievementNames[i][2])
            document.getElementById("AC_" + (i+1)).style.display = "inline-block";
    }
    if (ingameTimeCounter[1] < 10) {
        document.getElementById("timeCounter").textContent = "Ingame: " + ingameTimeCounter[0] + ":0" + Math.floor(ingameTimeCounter[1]);
    } else {
        document.getElementById("timeCounter").textContent = "Ingame: " + ingameTimeCounter[0] + ":" + Math.floor(ingameTimeCounter[1]);
    }
    document.getElementById("deathCounter").textContent = "Deaths: " + deathCounter;
}
loadProgress();
let lastTime = 0;
function update(ct) {
    const dt = (ct - lastTime) / 1000;
    lastTime = ct;
    if (scene == "menu")
        menu(dt); else
    if (scene == "ingame")
        ingame(dt); else
    if (scene == "dead")
        dead(dt); else
    if (scene == "6AM")
        sixAm(dt); else
    if (scene == "cutscene")
        cutsceneToNight(dt); else
    if (scene == "beemsa man completed")
        beemsaManCompleted(dt);
    requestAnimationFrame(update);
}
requestAnimationFrame(update);