var remainSecond = 0; //Kalan sure
var objInterval; // Interval sayac objesi
var startButton = document.querySelector("#btnStart");
var endButton = document.querySelector("#btnEnd");
var objCountDown = document.querySelector('.dvCountDown');
var trCountDown = document.querySelector('#trCountDown');
var txtSecond = document.querySelector('#txtSecond');

endButton.style.display = "none";

startButton.addEventListener("click", () => {
    let second = txtSecond.value;
    if (second == "") {
        alert("Gecersiz Sayi");
        return;
    }
    toggleInputs("hide");
    second = Math.floor(second);
    remainSecond = second;
    objInterval = setInterval(() => {
        countDown();
    }, 1000); // Her saniye calisacak
    console.log("Geri sayim basladi...");
});

endButton.addEventListener("click", () => {
    toggleInputs("show");
    resetCountDown();
});

function toggleInputs(showHide) {
    startButton.style.display = (showHide == "hide" ? "none" : "block");
    if (showHide == "hide") {
        txtSecond.setAttribute("disabled", "true");
    } else {
        txtSecond.removeAttribute("disabled");
    }
    endButton.style.display = (showHide == "show" ? "none" : "block");
}

function countDown() {
    let minute = Math.floor(remainSecond / 60);
    let second = (remainSecond - (minute * 60));
    if (second < 10) {
        second = "0" + second;
    }
    objCountDown.innerHTML = minute + ":" + second;
    if (remainSecond == 0) {
        resetCountDown();
    }
    remainSecond = remainSecond - 1;
}

function resetCountDown() {
    toggleInputs("show");
    clearInterval(objInterval);
    objCountDown.innerHTML = "00:00";
    console.log("Geri sayim bitti...");
}