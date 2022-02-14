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


document.querySelector('.calc-body').addEventListener('click', (event) => {
    const numInput = document.getElementById('typed-numbers');
    const calc = event.target.innerText;
    if (!isNaN(parseInt(calc))) {
        numInput.value += event.target.innerText;
    } else {
        if (calc == 'C') {
            numInput.value = '';
        }
    }
})