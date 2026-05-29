document.addEventListener("DOMContentLoaded", () => {
    const mainEmoji = document.getElementById('mainEmoji');
    const githubBtn = document.getElementById('githubBtn');
    const githubText = document.getElementById('githubText');
    const gmailBtn = document.getElementById('gmailBtn');
    const linkedinBtn = document.getElementById('linkedinBtn');
    mainEmoji.addEventListener('click', () => {
        mainEmoji.classList.remove('girar');
        void mainEmoji.offsetWidth;
        mainEmoji.classList.add('girar');
    });

    const handleAction = (emoji, link, textElement = null, newText = "") => {
        const originalEmoji = "👾";
        const originalText = textElement ? textElement.innerText : "";

        mainEmoji.innerText = emoji;
        if (textElement) textElement.innerText = newText;

        setTimeout(() => {
            window.open(link, '_blank');
            mainEmoji.innerText = originalEmoji;
            if (textElement) textElement.innerText = originalText;
        }, 500);
    };

    githubBtn.addEventListener('click', () => {
        handleAction('🚀', 'https://github.com/Thiago04Henrique', githubText, 'Redirecionando...');
    });

    gmailBtn.addEventListener('click', () => {
        handleAction('✉️', 'https://mail.google.com/mail/?view=cm&fs=1&to=th.limasilva01@gmail.com');
    });

    linkedinBtn.addEventListener('click', () => {
        handleAction('💼', 'https://www.linkedin.com/in/Thiago04Henrique');
    });
});