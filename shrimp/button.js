
let ebimoney = 500000;
const cost1 = 500;
const cost2 = 50000;
const cost3 = 100000;
const messageDisplayTime = 1000; //メッセージを表示する時間
let firebaseData;
window.addEventListener('DOMContentLoaded',async()=>{//データベースからの読み込み
    await new Promise((resolve)=>setTimeout(resolve,500));//500msの遅延を意図的に.ログインまでの時間を稼ぐ
    firebaseData = await window.load();
    ebimoney = firebaseData.count;
    document.querySelector("#money").textContent = ebimoney;
})

document.getElementById("stage1button").addEventListener("click", function() {
    const messageElement = document.getElementById("message");
    if(ebimoney >= cost1) {
        ebimoney -= cost1;
        document.getElementById("ebimoney").innerText = money;
        document.getElementById("message").innerText = "";
        window.save(ebimoney,firebaseData.clickValue);//えびまよのデータを保存
        window.location.href = "stage1.html";
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
        window.save(ebimoney,firebaseData.clickValue);//えびまよのデータを保存
        window.location.href = "stage2.html";
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
        window.save(ebimoney,firebaseData.clickValue);//えびまよのデータを保存
        window.location.href = "stage3.html";
    }else {
        document.getElementById("message").innerText = "えびまよが不足しています";

        setTimeout( () => {
            messageElement.innerText = "";
        }, messageDisplayTime);
    }
});