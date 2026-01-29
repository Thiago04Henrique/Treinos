// DOM = Document Object Manager

const adviceButton = document.querySelector("button");

const adviceId = document.querySelector('.advice-id');

const adviceText = document.querySelector('blockquote');

window.onload = () => {
    getAdvice();
};

adviceButton.addEventListener("click", getAdvice);

async function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(response => response.json())
        .then(data => {
        })
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    const advice = data.slip;
    renderAdvice(advice.advice, advice.id);

}

function renderAdvice(advice, id) {
    adviceText.innerHTML = `"${advice}"`;
    adviceId.innerHTML = `Conselho #${id}`
};