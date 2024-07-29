const inputValue = document.getElementById("user-input");

// Adding event listeners for number buttons
document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "NaN" || inputValue.innerText === "Error") {
            inputValue.innerText = "";
        }
        if (inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerHTML.trim();
    });
});

// Adding event listeners for operation buttons
document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        const lastValue = inputValue.innerText.substring(inputValue.innerText.length - 1);

        if (e.target.innerHTML === "=") {
            if (!isNaN(lastValue)) {
                try {
                    let expression = inputValue.innerText.replace(/×/g, '*').replace(/÷/g, '/');
                    inputValue.innerText = eval(expression);
                } catch (error) {
                    inputValue.innerText = "Error";
                }
            }
        } else if (e.target.innerHTML === "AC") {
            inputValue.innerText = 0;
        } else if (e.target.innerHTML === "DEL") {
            inputValue.innerText = inputValue.innerText.substring(0, inputValue.innerText.length - 1);
            if (inputValue.innerText.length === 0) {
                inputValue.innerText = 0;
            }
        } else {
            if (!isNaN(lastValue) || lastValue === "") {
                inputValue.innerText += e.target.innerHTML;
            }
        }
    });
});

