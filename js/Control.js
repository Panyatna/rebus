function checkAnswer() {
    let value = document.getElementById("1").value;
    let trueword = "синтаксис";
    if (trueword == value.toLowerCase()) {
        showRes(true);

    } else {
        showRes(false);
    }
}

function showRes(win) {
    let finish = document.createElement("DIV");
    finish.className = "results";
    finish.style.zIndex = 1;
    document.body.appendChild(finish);
    let message = document.createElement("DIV");
    message.className = "message";
    if (win) {
        message.innerHTML = "Поздравляем, все верно!";
    }
    else {
        message.innerHTML = "Неверно, попробуй еще!";
        setTimeout(() => {
            document.body.removeChild(finish);
        }, 2000);
    }
    finish.appendChild(message);
}