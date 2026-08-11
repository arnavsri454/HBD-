// =========================
// FINALE
// =========================

function showFinalSection() {

    // Hide ukulele section
    const ukuleleSection =
        document.getElementById("ukuleleSection");

    if (ukuleleSection) {
        ukuleleSection.style.display = "none";
    }

    // Create final section if it doesn't exist
    let finalSection =
        document.getElementById("finalSection");

    if (!finalSection) {

        finalSection =
            document.createElement("section");

        finalSection.id = "finalSection";

        document.body.appendChild(finalSection);
    }

    finalSection.style.display = "flex";

    finalSection.innerHTML = `

        <div class="finale-content">

            <div class="finale-heart">
                ❤️
            </div>

            <h1 class="finale-title">
                Happy Birthday Anvesha ❤️
            </h1>

            <div id="finaleText"></div>

            <div
                id="finaleLove"
                class="finale-love"
                style="display:none;"
            >
                I Love You ❤️
            </div>

        </div>

    `;

    const text =
        document.getElementById("finaleText");

    const lines = [

        "Thank you for your care.",
        "Thank you for your support.",
        "Thank you for understanding me.",
        "Thank you for forgiving me so many times.",
        "thank you for being patient with me, and giving me a chance .",
        "And thank you for being you. ❤️",

        "I hope this birthday becomes",
        "one of your happiest memories. ✨"

    ];

    let i = 0;

    function showNextLine() {

        if (i >= lines.length) {

            setTimeout(() => {

                document
                    .getElementById("finaleLove")
                    .style.display = "block";

            }, 1200);

            return;
        }

        const line =
            document.createElement("p");

        line.className = "finale-line";

        line.innerHTML = lines[i];

        text.appendChild(line);

        setTimeout(() => {

            line.classList.add("show");

        }, 100);

        i++;

        setTimeout(showNextLine, 1800);
    }

    showNextLine();
}