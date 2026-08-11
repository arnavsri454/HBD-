const loader = document.getElementById("loader");
const envelopeSection = document.getElementById("envelopeSection");
const envelope = document.getElementById("envelope");

const beginBtn = document.getElementById("beginBtn");

const storySection = document.getElementById("storySection");
const storyText = document.getElementById("storyText");

const loveSection = document.getElementById("loveSection");
const loveText = document.getElementById("loveText");
// ===========================
// DEV MODE
// ===========================

const DEV_MODE = true;

//function devStart(fn){

 //   loader.style.display = "none";

  //  envelopeSection.style.display = "none";

  //  fn();

//}
//devStart(showVoiceSection());

const scenes = [
    "Hi",
    "Too Formal 😂",
    "Hii Anvesha ❤️",
    "Today is 12 August.",
   "Which means...",
    "It's your birthday ✨",
    "Your first birthday with me.",
    "And I wanted this one to be a little extra special.",
    "And I wanted to do something a little different this year.",
    "I could have just sent a message.",
    "Or a paragraph.",
    "Or maybe 20 paragraphs.",
    "(you know me 😂)",
    "But some people deserve a little more ",
    "Not because websites are special",
    "But because you are.",
    "So before we celebrate...",
    "There are a few things I want to tell you."
];

const loveMessages = [
    "Your care ❤️",
    "Your understanding 🤍",
    "The way you support me 🌸",
    "Your simplicity ✨",
    "Your love 💕",
    "And honestly...",
    "Everything about you ❤️"
];

const wishes = [
    "✨ May you succeed in everything you dream of.",
    "✨ May every hardship become a lesson that makes you stronger.",
    "✨ May you get everything your heart truly wants.",
    "✨ May happiness always find its way to you.",
    "✨ May you always be surrounded by love."
];
let candleBlown = false;


// ---------------- LOADER ----------------

setTimeout(() => {
    loader.style.display = "none";
    envelopeSection.classList.remove("hidden");
}, 3500);


// ---------------- ENVELOPE ----------------

envelope.addEventListener("click", () => {
    envelope.classList.toggle("open");
});

beginBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    startStory();
});


// ---------------- STORY ----------------

function startStory() {

    envelopeSection.style.display = "none";
    storySection.style.display = "flex";

    let index = 0;

    function nextScene() {

        storyText.classList.remove("show");

        setTimeout(() => {

            storyText.innerHTML = scenes[index];
            storyText.classList.add("show");

            index++;

            if (index < scenes.length) {
                setTimeout(nextScene, 2800);
            } else {
                setTimeout(showLoveSection, 3000);
            }

        }, 400);
    }

    nextScene();
}


// ---------------- LOVE SECTION ----------------

function showLoveSection() {

    storySection.style.display = "none";
    loveSection.style.display = "flex";

    loveText.innerHTML = `
        <h2>Things I Love About You ❤️</h2>

        <div id="loveList"></div>

        <button id="continueBtn" style="display:none;">
            Continue ➜
        </button>
    `;

    const loveList = document.getElementById("loveList");

    let i = 0;

    function addLove() {

        const p = document.createElement("p");

        p.className = "love-item";
        p.innerHTML = loveMessages[i];

        loveList.appendChild(p);

        setTimeout(() => {
            p.classList.add("show");
        }, 100);

        i++;

        if (i < loveMessages.length) {

            setTimeout(addLove, 1800);

        } else {

            setTimeout(() => {

                document.getElementById("continueBtn")
                    .style.display = "inline-block";

            }, 1500);
        }
    }

    addLove();

    document.getElementById("continueBtn")
        .addEventListener("click", showWishSection);
}


// ---------------- WISHES ----------------

function showWishSection() {

    loveSection.style.display = "none";

    const wishSection = document.getElementById("wishSection");

    wishSection.style.display = "flex";

    const wishContent =
        document.getElementById("wishContent");

    wishContent.innerHTML = `
        <h2>My Wishes For You ❤️</h2>

        <div id="wishCards"></div>

        <button id="wishContinue" style="display:none;">
            Continue ➜
        </button>
    `;

    const container =
        document.getElementById("wishCards");

    let i = 0;

    function addWish() {

        const card = document.createElement("div");

        card.className = "wish-card";
        card.innerHTML = wishes[i];

        container.appendChild(card);

        setTimeout(() => {
            card.classList.add("show");
        }, 100);

        i++;

        if (i < wishes.length) {

            setTimeout(addWish, 1800);

        } else {

            setTimeout(() => {

                document.getElementById("wishContinue")
                    .style.display = "inline-block";

            }, 1500);
        }
    }

    addWish();

    document.getElementById("wishContinue")
        .addEventListener("click", showAnniversarySection);
}


// ---------------- ANNIVERSARY ----------------

function showAnniversarySection() {

    document.getElementById("wishSection")
        .style.display = "none";

    const section =
        document.getElementById("anniversarySection");

    section.style.display = "flex";

    const content =
        document.getElementById("anniversaryContent");

    content.innerHTML = `
        <h2 class="anni-title">
            27 March ❤️
        </h2>

        <div id="anniLines"></div>

        <button id="anniContinue" style="display:none;">
            Continue ➜
        </button>
    `;

    const lines = [
        "Before 27 March...",
        "You were someone special.",
        "After 27 March...",
        "You became my Partner ❤️",
        "And every day since then...",
        "Has been a little brighter ✨"
    ];

    const container =
        document.getElementById("anniLines");

    let i = 0;

    function nextLine() {

        const div = document.createElement("div");

        div.className = "anni-line";
        div.innerHTML = lines[i];

        container.appendChild(div);

        setTimeout(() => {
            div.classList.add("show");
        }, 100);

        i++;

        if (i < lines.length) {

            setTimeout(nextLine, 1800);

        } else {

            setTimeout(() => {

                document.getElementById("anniContinue")
                    .style.display = "inline-block";

            }, 1500);
        }
    }

    nextLine();

    document.getElementById("anniContinue")
        .addEventListener("click", showChalakiSection);
}


// ---------------- CHALAKI ----------------

function showChalakiSection() {

    document.getElementById("anniversarySection")
        .style.display = "none";

    const section =
        document.getElementById("chalakiSection");

    section.style.display = "flex";

    const content =
        document.getElementById("chalakiContent");

    content.innerHTML = `
        <h2 class="chalaki-title">
            One Important Question 😏
        </h2>

        <p class="chalaki-sub">
            Who will pay the bill?
        </p>

        <button class="choice-btn" id="option1">
            Me 😎
        </button>

        <button class="choice-btn" id="option2">
            No, Me 😤
        </button>

        <div id="resultText"></div>

        <button id="chalakiContinue" style="display:none;">
            Continue ➜
        </button>
    `;

    document.getElementById("option1")
        .addEventListener("click", showResult);

    document.getElementById("option2")
        .addEventListener("click", showResult);
}

function showResult() {

    document.getElementById("resultText").innerHTML = `
        Wrong Answer 😂
        <br><br>
        The Chalaki War Continues ❤️
    `;

    document.getElementById("chalakiContinue")
        .style.display = "inline-block";

    document.getElementById("chalakiContinue")
        .addEventListener("click", showCakeIntro);
}


// ---------------- CAKE INTRO ----------------

function showCakeIntro() {

    document.getElementById("chalakiSection")
        .style.display = "none";

    const section =
        document.getElementById("cakeIntroSection");

    section.style.display = "flex";

    const content =
        document.getElementById("cakeIntroContent");

    const lines = [
        "And now... ❤️",
        "It's finally time...",
        "To celebrate your birthday 🎂",
        "Make a wish ✨"
    ];

    let i = 0;

    function nextLine() {

        content.innerHTML = `
            <div class="cake-line show">
                ${lines[i]}
            </div>
        `;

        i++;

        if (i < lines.length) {

            setTimeout(nextLine, 2500);

        } else {

            setTimeout(showCakeSection, 2500);
        }
    }

    nextLine();
}

function askMic(){

    navigator.mediaDevices.getUserMedia({audio:true})
    .then(()=>{

        alert("Microphone Allowed");

    })
    .catch(err=>{

        alert(err);

    });

}

function startMicDetection(){

    console.log("🎤 startMicDetection called");

    if(!navigator.mediaDevices){
        console.log("❌ mediaDevices not available");
        alert("Browser does not support microphone.");
        return;
    }

    if(!navigator.mediaDevices.getUserMedia){
        console.log("❌ getUserMedia not available");
        alert("getUserMedia not supported.");
        return;
    }

    navigator.mediaDevices.getUserMedia({ audio:true })

    .then((stream)=>{

        console.log("✅ STREAM RECEIVED");
        alert("🎤 Microphone Connected");

        const audioContext =
            new (window.AudioContext || window.webkitAudioContext)();

        const analyser =
            audioContext.createAnalyser();

        const microphone =
            audioContext.createMediaStreamSource(stream);

        microphone.connect(analyser);

        analyser.fftSize = 256;

        const dataArray =
            new Uint8Array(analyser.frequencyBinCount);

        function detect(){

            analyser.getByteFrequencyData(dataArray);

            let volume = 0;

            for(let i=0;i<dataArray.length;i++){
                volume += dataArray[i];
            }

            volume =
                volume / dataArray.length;

            console.log("Volume:", Math.round(volume));

            // Blow detected
            if(volume > 50){

                console.log("🌬️ Blow detected!");

                stream.getTracks().forEach(track=>{
                    track.stop();
                });

                blowCandle();

                return;
            }

            requestAnimationFrame(detect);
        }

        detect();

    })

    .catch((err)=>{

        console.log("❌ MIC ERROR:", err);
        alert("Mic Error: " + err.name);

    });
}
// ---------------- CAKE ----------------


function showCakeSection() {

    document.getElementById("cakeIntroSection").style.display = "none";
    document.getElementById("cakeSection").style.display = "flex";

    startMicDetection();

    const flame = document.getElementById("flame");

    flame.onclick = null;

    flame.addEventListener("click", blowCandle, {
        once: true
    });
}
function blowCandle() {

    if(candleBlown) return;

    candleBlown = true;

    document.getElementById("flame").style.display = "none";
    document.getElementById("cakeInstruction").style.display = "none";
    document.getElementById("wishDone").style.display = "block";

    setTimeout(showFireworksSection,3000);
}




// ---------------- FLOATING HEARTS ----------------

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}, 1200);



function showFireworksSection(){

    console.log("FIREWORKS OPENED");

    document.getElementById("cakeSection")
        .style.display = "none";

    document.getElementById("fireworksSection")
        .style.display = "flex";

    startFireworks();

    const voiceBtn =
        document.getElementById("voiceBtn");

    if(voiceBtn){

        voiceBtn.onclick = () => {

    console.log("Voice button clicked");

    showVoiceSection();

};

    }
}
function startFireworks(){

    const canvas =
        document.getElementById("fireworksCanvas");

    const ctx =
        canvas.getContext("2d");

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

    function burst(){

        const x =
            Math.random()*canvas.width;

        const y =
            Math.random()*canvas.height*0.6;

        for(let i=0;i<40;i++){

            const particle =
                document.createElement("div");

            particle.style.position="absolute";

            particle.style.left=x+"px";
            particle.style.top=y+"px";

            particle.style.width="6px";
            particle.style.height="6px";

            particle.style.background=
                `hsl(${Math.random()*360},100%,60%)`;

            particle.style.borderRadius="50%";

            particle.style.pointerEvents="none";

            particle.style.zIndex="2";

            document
                .getElementById("fireworksSection")
                .appendChild(particle);

            const angle =
                Math.random()*Math.PI*2;

            const distance =
                100 + Math.random()*150;

            particle.animate([
                {
                    transform:"translate(0,0)",
                    opacity:1
                },
                {
                    transform:
                    `translate(
                    ${Math.cos(angle)*distance}px,
                    ${Math.sin(angle)*distance}px
                    )`,
                    opacity:0
                }
            ],{
                duration:1200
            });

            setTimeout(()=>{
                particle.remove();
            },1200);
        }
    }

    burst();

const fireworkInterval = setInterval(burst,800);

window.fireworkInterval = fireworkInterval;
}
function showVoiceSection(){
    if(window.fireworkInterval){
    clearInterval(window.fireworkInterval);
}

    document
    .getElementById("fireworksSection")
    .style.display="none";

    const section =
        document.getElementById("voiceSection");

    const content =
        document.getElementById("voiceContent");

    section.style.display="flex";

    content.innerHTML=`

        <div>

            <h1 class="voice-title">
                One More Thing ❤️
            </h1>

            <p class="voice-sub">
                Before we continue...
                I wanted you to hear this.
            </p>

            <button id="playVoiceBtn">
                ▶ Play Voice Note
            </button>

            <br>

            <button id="voiceContinue">
                Continue ➜
            </button>

            <audio
            id="voiceAudio"
            src="audio/anvesha-voice.mp3">
            </audio>

        </div>

    `;

    document
    .getElementById("playVoiceBtn")
    .addEventListener("click",()=>{

        const audio =
            document.getElementById("voiceAudio");

        audio.play();

        document
        .getElementById("voiceContinue")
        .style.display="inline-block";
    });

    document
    .getElementById("voiceContinue")
    .addEventListener("click", showGiftSection);
}
