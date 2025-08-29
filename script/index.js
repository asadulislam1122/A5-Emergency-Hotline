// hart icon
const hartCount = document.getElementById("hart-count");
let count = 0;

const hearts = document.querySelectorAll(".fa-heart");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    count++;
    hartCount.textContent = count;
  });
});
// ********************************************************************************
// document.getElementById("call-btn").addEventListener("click", function () {

let coins = 100;
const callBtn = document.getElementsByClassName("call-btn");

for (let callButton of callBtn) {
  callButton.addEventListener("click", function () {
    const cardTaitle =
      callButton.parentNode.parentNode.children[1].children[0].innerText;

    const cardNumber =
      callButton.parentNode.parentNode.children[1].children[2].innerText;

    const coinCount = document.getElementById("coin-count");

    if (coins < 20) {
      alert("❌ পর্যাপ্ত coin নেই!");
      return;
    }

    alert(cardTaitle + " (" + cardNumber + ")");
    coins -= 20;
    coinCount.innerText = coins;
  });
}
