let ebimoney = 1000;
const cost1 = 500;
const cost2 = 50000;
const cost3 = 100000;

const messageDisplayTime = 1000; //メッセージを表示する時間

document.getElementById("stage1button").addEventListener("click", function() {
    const messageElement = document.getElementById("message");

    if(ebimoney >= cost1) {
        ebimoney -= cost1;
        document.getElementById("ebimoney").innerText = money;
        document.getElementById("message").innerText = "";

        window.location.href = "prc.html";
    }else {
        document.getElementById("message").innerText = "えびまよが不足しています";

        setTimeout( () => {
            messageElement.innerText = "";
        }, messageDisplayTime);
    }
});

document.getElementById("stage2").addEventListener("click", function() {
    const messageElement = document.getElementById("message");

    if(ebimoney >= cost2) {
        ebimoney -= cost2;
        document.getElementById("ebimoney").innerText = money;
        document.getElementById("message").innerText = "";

        window.location.href = "";
    }else {
        document.getElementById("message").innerText = "えびまよが不足しています";

        setTimeout( () => {
            messageElement.innerText = "";
        }, messageDisplayTime);
    }
});

document.getElementById("stage3").addEventListener("click", function() {
    const messageElement = document.getElementById("message");

    if(ebimoney >= cost3) {
        ebimoney -= cost3;
        document.getElementById("ebimoney").innerText = money;
        document.getElementById("message").innerText = "";

        window.location.href = "";
    }else {
        document.getElementById("message").innerText = "えびまよが不足しています";

        setTimeout( () => {
            messageElement.innerText = "";
        }, messageDisplayTime);
    }
});