//gift.js
function showGiftSection(){

    document
        .getElementById("voiceSection")
        .style.display = "none";

    const section =
        document.getElementById("giftSection");

    const content =
        document.getElementById("giftContent");

    section.style.display = "flex";

    content.innerHTML = `

        <h1 class="gift-title">
            One Last Gift ❤️
        </h1>

        <p class="gift-sub">
            I made something
            especially for you.
        </p>

        <div class="gift-container">

            <div class="gift-box">

                <div class="gift-lid"></div>

                <div class="gift-ribbon-v"></div>

                <div class="gift-ribbon-h"></div>

                <div class="gift-body"></div>

            </div>

        </div>

        <p class="gift-note">
            Tap the gift to open it 🎁
        </p>

    `;

    document
        .querySelector(".gift-box")
        .addEventListener("click", openGift);

}
function openGift(){

    const box =
        document.querySelector(".gift-box");

    box.classList.add("opened");

    setTimeout(()=>{

           openUkuleleGift();

    },1800);

}
function openUkuleleGift(){

    document
        .getElementById("giftSection")
        .style.display = "none";

    document
        .getElementById("ukuleleSection")
        .style.display = "flex";

    const content =
        document.getElementById("ukuleleContent");

    content.style.opacity = "0";

    setTimeout(()=>{

        content.innerHTML = `

        <div class="video-card fade-in">

            <video
                id="ukuleleVideo"
                playsinline
                controls
                preload="auto">

                <source
                src="video/ukulele-birthday.mp4"
                type="video/mp4">

            </video>

            <button
                id="finalContinue"
                style="display:none;">

                Continue ➜

            </button>

        </div>

        `;

        const video =
            document.getElementById("ukuleleVideo");

        video.play().catch(err => console.log(err));

        video.onended = ()=>{

            document
                .getElementById("finalContinue")
                .style.display="inline-block";

        };

        document
            .getElementById("finalContinue")
            .addEventListener("click", showFinalSection);

        content.style.opacity = "1";

    },700);
}

function showFinalSection(){

    alert("Final Section Coming Soon ❤️");

}