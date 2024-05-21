const coinIcon = document.getElementById("coin");
const tossBtn = document.getElementById("toss-button");
const result = document.querySelector(".result");

coinIcon.insertAdjacentElement("afterend", result);

tossBtn.addEventListener("click", () => {
    tossBtn.disabled = true;
    tossCoinFunction();
});

function tossCoinFunction() {
    const randomVal = Math.random();
    const faceCoin = randomVal < 0.5 ? "Head" : "Tail";
    const imageUrl = faceCoin === "Head" ? "img/Head.png" : "img/Tail.png";

    coinIcon.classList.add("flip");

    setTimeout(() => {
        coinIcon.innerHTML = `<img src="${imageUrl}" alt="${faceCoin}">`;
        coinIcon.classList.remove("flip");

        let resultText = "";
        if (faceCoin == "Head") {
            resultText = "唔緊要 聽日先做 下世大把時間";
        } else {
            resultText = "今日做";
        }

        setTimeout(() => {
            // result.textContent = `Result: ${faceCoin}`;
            result.textContent = resultText;
            result.style.opacity = 1;
            tossBtn.disabled = false;
        }, 500);
    }, 1000);
}
