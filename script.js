
/* =========================
   ENTER WEBSITE
========================= */

function enterSite() {

    document.getElementById("intro").style.display = "none";

    document.getElementById("main").classList.remove("hidden");

    window.scrollTo(0, 0);

    createStars();

}



/* =========================
   QUIZ
========================= */

function quizAnswer(answer) {

    const result =
        document.getElementById("quizResult");

    if (answer === "A") {

        result.innerHTML =
            "Cute? Maybe... but I don't believe the quiet part. 👀";

    }

    else if (answer === "B") {

        result.innerHTML =
            "CORRECT 💀 Chaotic energy detected.";

    }

    else {

        result.innerHTML =
            "100% CORRECT 🎤 Main character confirmed.";

    }

}



/* =========================
   BIRTHDAY WISH
========================= */

function makeWish() {

    const message =
        document.getElementById("wishMessage");

    message.innerHTML =
        "✨ Wish received. Sending it to the universe... 💙";

    createConfetti();

}



/* =========================
   SECRET BUTTON
========================= */

let secretClicks = 0;

function secretMessage() {

    secretClicks++;

    const result =
        document.getElementById("secretResult");

    if (secretClicks === 1) {

        result.innerHTML =
            "I literally told you NOT to press it 😭";

    }

    else if (secretClicks === 2) {

        result.innerHTML =
            "Again?! You really don't listen 💀";

    }

    else {

        result.innerHTML =
            "Okay fine... HAPPY BIRTHDAY, YOU ICON! 💙🎀";

        createConfetti();

    }

}



/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const emojis = [
        "💙",
        "💗",
        "✨",
        "🎀",
        "★",
        "✦"
    ];

    for (let i = 0; i < 45; i++) {

        const item =
            document.createElement("div");

        item.innerHTML =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];

        item.style.position = "fixed";

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.top = "-30px";

        item.style.fontSize =
            Math.random() * 15 + 15 + "px";

        item.style.zIndex = "9999";

        item.style.pointerEvents = "none";

        document.body.appendChild(item);


        const animation =
            item.animate(

                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)",
                        opacity: 1
                    },

                    {
                        transform:
                            "translateY(110vh) rotate(720deg)",
                        opacity: 0
                    }
                ],

                {
                    duration:
                        Math.random() * 2500 + 2000,

                    easing: "linear"
                }

            );


        animation.onfinish = function () {

            item.remove();

        };

    }

}



/* =========================
   BACKGROUND SPARKLES
========================= */

function createStars() {

    for (let i = 0; i < 20; i++) {

        const star =
            document.createElement("div");

        star.innerHTML =
            Math.random() > 0.5
                ? "✦"
                : "✧";

        star.style.position = "fixed";

        star.style.left =
            Math.random() * 100 + "vw";

        star.style.top =
            Math.random() * 100 + "vh";

        star.style.color =
            Math.random() > 0.5
                ? "#168cff"
                : "#ff4da6";

        star.style.opacity = "0.4";

        star.style.pointerEvents = "none";

        star.style.zIndex = "0";

        document.body.appendChild(star);

    }

}

