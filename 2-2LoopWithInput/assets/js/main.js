
const loopArray = ["L", "p"];

const addLetterO = () => {
    let number = 0;

    const inputUser = Number(document.getElementById("inputUser").value);
    console.log(inputUser);

    if (inputUser === 0) {
        console.log("Nix 0");
        document.getElementById("output").innerHTML = "Gib eine andere Zahl ein";
    } else if (inputUser % 2 == 0) {
        while (number < inputUser) {
            loopArray.splice(1, 0, "o");
            number ++ ;
        }
        document.getElementById("output").innerHTML = loopArray.join(" ");
    } else {
        // o und 0 sollen abwechselnd vorkommen
        document.getElementById("output").innerHTML = "Keine Ahnung wie es weiter geht";
    }
}
