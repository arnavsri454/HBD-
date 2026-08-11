/* =========================
   PASSWORD
========================= */

const passwordBtn =
    document.getElementById("passwordBtn");

const passwordInput =
    document.getElementById("passwordInput");

const passwordError =
    document.getElementById("passwordError");

const CORRECT_PASSWORD = "respiration";

function checkPassword() {

    const entered =
        passwordInput.value.trim().toLowerCase();

    if (entered === CORRECT_PASSWORD) {

        passwordError.textContent =
            "Opening your surprise... ❤️";

        passwordError.style.color =
            "#ff9fbd";

        passwordBtn.disabled = true;

        setTimeout(() => {

            window.location.href =
                "birthday.html";

        }, 700);

    } else {

        passwordError.textContent =
            "Not quite... try again ❤️";

        passwordInput.value = "";

        passwordInput.focus();

    }
}

passwordBtn.addEventListener(
    "click",
    checkPassword
);

passwordInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            checkPassword();

        }

    }
);
/* =========================
   COUNTDOWN
========================= */

function updateCountdown() {

    const now = new Date();

    let year = now.getFullYear();

    let target =
        new Date(
            year,
            7,
            12,
            0,
            0,
            0
        );

    /*
       If August 12 has already passed,
       countdown to next year's August 12.
    */

    if (now >= target) {

        target =
            new Date(
                year + 1,
                7,
                12,
                0,
                0,
                0
            );

    }


    const difference =
        target - now;


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );

    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );

    const seconds =
        Math.floor(
            (difference /
                1000) % 60
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);