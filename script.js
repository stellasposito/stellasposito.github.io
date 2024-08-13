const skills = ["Python", "Machine Learning", "SQL", "Power BI", "Data Visualization", "Statistics"];
const typedText = document.getElementById('typed-text');
let skillIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 10; // Velocidade da digitação mais rápida
const deletingSpeed = 5; // Velocidade da deleção mais rápida
const delayBetweenWords = 1000; // Pausa mais curta antes de começar a deletar

function type() {
    const currentSkill = skills[skillIndex];
    const speed = isDeleting ? 50 : 70; // velocidade da digitação

    if (isDeleting) {
        typedText.textContent = currentSkill.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = currentSkill.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentSkill.length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1000); // Pausa antes de começar a deletar
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
    }

    setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 1000);
});