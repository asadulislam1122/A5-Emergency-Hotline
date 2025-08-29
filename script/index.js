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

// copy button
const copyCounts = document.getElementById("copy-count");
let counts = 0;

const copys = document.querySelectorAll(".copy-btn");

copys.forEach((copy) => {
  copy.addEventListener("click", () => {
    counts++;
    copyCounts.textContent = counts;
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
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      return;
    }

    alert("📞 Calling " + cardTaitle + " (" + cardNumber + ")");
    coins -= 20;
    coinCount.innerText = coins;

    // history add korbo

    // bortoman somoi
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    // ***********************************
    const historyCointainer = document.getElementById("history-cointainer");
    // console.log(historyCointainer);
    const newHistory = document.createElement("div");
    newHistory.innerHTML = ` <div class="flex justify-start items-center p-4 mt-3 gap-7">
              <div>
                <p class="text-[18px] font-semibold font-hind">
                  ${cardTaitle}
                </p>
                <p class="text-[18px] text-gray-500 font-semibold font-hind"> ${cardNumber} </p>
              </div>
              <div class="text-[18px] font-semibold font-hind">${time}</div>
            </div>`;
    historyCointainer.append(newHistory);
  });
}

// clear button
document.getElementById("clear-btn").addEventListener("click", function () {
  const historyCointainer = document.getElementById("history-cointainer");
  historyCointainer.innerHTML = "";
});
