function create() {

    let passwordResult = "";

    let size = document.getElementById("length").value;

    let lower = document.getElementById("lowerLetters").checked;

    let upper = document.getElementById("upperLetters").checked;

    let symbol = document.getElementById("symbols").checked;

    let number = document.getElementById("numbers").checked;

    if (lower + upper + symbol + number <= 0)
        return;

    for (let i = 0; i < size; i++) {

        const temp = construct(0, 3);

        if (upper && temp == 0) {
            passwordResult = passwordResult + getUpperCase();
        }
        else if (lower && temp === 1) {
            passwordResult = passwordResult + getLowerCase();
        }
        else if (number && temp === 2) {
            passwordResult = passwordResult + construct(0, 9);
        }
        else if (symbol && temp === 3) {
            passwordResult = passwordResult + getSymbol();

        }
        else {
            i = i - 1;
        }

    }

            document.getElementById("resultOfPassword").textContent = passwordResult;

}



function getUpperCase() {

    return String.fromCharCode(construct('A'.charCodeAt(0), 'Z'.charCodeAt(0)));
}
function getLowerCase() {

    return String.fromCharCode(construct('a'.charCodeAt(0), 'z'.charCodeAt(0)));
}

function getSymbol() {
    const symbol = "~!@#%%^&*(){}<>/|";

    return symbol[construct(0, symbol.length - 1)];
}

function construct(first = 0, second = 1) {
    return Math.floor(Math.random() * (second + 1 - first) + first);
}
