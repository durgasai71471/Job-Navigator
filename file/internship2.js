function showCards(branch) {
    const cards = document.querySelectorAll(`#${branch} .card-container .card`);
    cards.forEach((card) => {
        card.style.display = 'block';
    });
}

function flipCard(card) {
    card.classList.toggle('flipped');
}

function goBack() {
    window.location.href = 'intership1.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const selectedBranch = localStorage.getItem('selectedBranch');
    const branchContainer = document.getElementById(selectedBranch);
    branchContainer.style.display = 'block';
    showCards(selectedBranch);
    
    const cards = document.querySelectorAll(`#${selectedBranch} .card-container .card`);
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            flipCard(card);
        });
    });
});
