const generateBtn = document.querySelector('.generate-btn');
generateBtn.addEventListener('click', () => {
    generatePin();
})

function generatePin() {
    let randomNumber = Math.round(Math.random() * 10000);
    if ((randomNumber + '').length == 4) {
        document.getElementById('generated-pin').value = randomNumber;
    } else {
        return generatePin();
    }
}