


const addLetterO = () => {
    const loopArray = ["L", "p"];
    let number = 0;

    const inputUser = Number(document.getElementById("inputUser").value);
    const output = document.getElementById("output");

    if (inputUser === 0) {
        output.innerHTML = "Nix NULL";
    } else if (inputUser % 2 == 0) {
        while (number < inputUser) {
            loopArray.splice(1, 0, "o");
            number ++ ;
        }
        output.style.color = "#64f71b";
        output.innerHTML = loopArray.join("");
    } else {
        while (number < inputUser) {
            if (number % 2 === 0) {
                loopArray.splice(1, 0, "o");
                number++;
            } else {
                loopArray.splice(1, 0, "0");
                number++;
            }
        }
        output.style.color = "#64f71b";
        output.innerHTML = loopArray.join("");       
    }
}
