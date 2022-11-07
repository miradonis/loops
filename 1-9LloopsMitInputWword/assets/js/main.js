let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']


const chooseTheWord = (event) => {
    event.preventDefault();
    const inputNumber = Number(document.getElementById("userNumber").value);
    console.log(inputNumber);

    let i = 0;

    while (i < words.length) {
        
        if (words[i].length === inputNumber) {
            document.getElementById("rightWord").innerHTML += words[i];
        }
        i++;
    }
}

