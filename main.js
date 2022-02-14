const generateBtn = document.querySelector('.generate-btn');
generateBtn.addEventListener('click', () => {
    generatePin();
})

function generatePin() {
    let randomNumber = Math.round(Math.random() * 10000);
    document.getElementById('generated-pin').value = randomNumber;
}