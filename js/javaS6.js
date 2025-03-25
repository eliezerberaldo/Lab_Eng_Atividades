document.addEventListener("DOMContentLoaded", function () {
    const calculatorContainer = document.createElement("div");
    calculatorContainer.style.display = "flex";
    calculatorContainer.style.flexDirection = "column";
    calculatorContainer.style.justifyContent = "center";
    calculatorContainer.style.alignItems = "center";
    calculatorContainer.style.height = "100vh";
    calculatorContainer.style.background = "linear-gradient(180deg, rgba(34,193,195,1) 0%, rgba(45,56,253,1) 100%)";

    const calculator = document.createElement("div");
    calculator.style.width = "300px";
    calculator.style.background = "black";
    calculator.style.padding = "20px";
    calculator.style.borderRadius = "10px";
    calculator.style.display = "grid";
    calculator.style.gridTemplateColumns = "repeat(4, 1fr)";
    calculator.style.gap = "10px";
    calculator.style.textAlign = "center";

    const display = document.createElement("div");
    display.textContent = "0";
    display.style.gridColumn = "span 4";
    display.style.background = "#333";
    display.style.color = "white";
    display.style.fontSize = "2em";
    display.style.padding = "10px";
    display.style.borderRadius = "5px";
    display.style.textAlign = "right";
    calculator.appendChild(display);

    const buttons = [
        "AC", "+/-", "%", "/",
        "7", "8", "9", "*",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "0", ".", "="
    ];

    let currentInput = "";
    let operator = "";
    let previousInput = "";

    buttons.forEach(text => {
        const button = document.createElement("button");
        button.textContent = text;
        button.style.padding = "20px";
        button.style.fontSize = "1.5em";
        button.style.border = "none";
        button.style.borderRadius = "50%";
        button.style.cursor = "pointer";
        button.style.background = text.match(/[0-9]/) ? "#444" : text === "=" ? "orange" : "#777";
        button.style.color = "white";

        if (text === "0") {
            button.style.gridColumn = "span 2";
            button.style.borderRadius = "30px";
        }

        button.addEventListener("click", () => {
            playSound();
            handleInput(text);
        });

        calculator.appendChild(button);
    });

    calculatorContainer.appendChild(calculator);
    document.body.appendChild(calculatorContainer);

    const backButton = document.createElement("button");
    backButton.textContent = "<- Voltar";
    backButton.style.marginTop = "20px";
    backButton.style.padding = "10px 20px";
    backButton.style.fontSize = "1em";
    backButton.style.border = "solid black";
    backButton.style.borderRadius = "5px";
    backButton.style.cursor = "pointer";
    backButton.style.background = "#ff5733";
    backButton.style.color = "white";
    backButton.style.background = "linear-gradient(180deg, rgba(34,193,195,1) 0%, rgba(45,56,253,1) 100%)";

    backButton.addEventListener("click", () => {
        window.location.href = "../index.html";
    });

    calculatorContainer.appendChild(backButton);

    function handleInput(value) {
        if (!isNaN(value) || value === ".") {
            if (display.textContent === "0" && value !== ".") {
                display.textContent = value;
            } else {
                display.textContent += value;
            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            if (previousInput && operator) {
                calculateResult();
            }
            previousInput = parseFloat(display.textContent); // Converte para número
            operator = value;
            display.textContent = "";
        } else if (value === "=") {
            calculateResult();
        } else if (value === "AC") {
            display.textContent = "0";
            previousInput = "";
            operator = "";
        } else if (value === "+/-") {
            if (display.textContent !== "0") {
                display.textContent = (parseFloat(display.textContent) * -1).toString();
            }
        } else if (value === "%") {
            if (previousInput && operator) {
                display.textContent = (previousInput * (parseFloat(display.textContent) / 100)).toString();
            } else {
                display.textContent = (parseFloat(display.textContent) / 100).toString();
            }
        }
    }

    function calculateResult() {
        if (previousInput !== "" && operator !== "" && display.textContent !== "") {
            let result;
            let currentValue = parseFloat(display.textContent);

            switch (operator) {
                case "+":
                    result = previousInput + currentValue;
                    break;
                case "-":
                    result = previousInput - currentValue;
                    break;
                case "*":
                    result = previousInput * currentValue;
                    break;
                case "/":
                    result = currentValue !== 0 ? previousInput / currentValue : "Erro";
                    break;
            }

            display.textContent = result.toString();
            previousInput = result;
            operator = "";
        }
    }

    function playSound() {
        const audio = new Audio("../style/beep.mp3");
        audio.play();
    }
});
