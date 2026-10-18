function upd(){
    document.getElementById("asDisplay").textContent = "--[ Ascensions: " + ascensions + " --]";
    document.getElementById("asCdisplay").textContent = "--[ Ascension Coins: " + ascensionShards + " --]";
    document.getElementById("score").textContent = "--[score: " + score + "]--";
    document.getElementById("trShDisplay").textContent = "[ Transcendence Crystals: " + transcendenceCrystals + " ]";
}

function updScore() {
    document.getElementById("score").textContent = "--[score: " + score + "]--";
}

function updTr() {
    document.getElementById("trShDisplay").textContent = "[ Transcendence Shards: " + transcendenceCrystals + " ]";
}

function openShop() {
    document.getElementById("shopPanel").style.right = "0";
    document.getElementById("shopPanel").classList.remove("reality");
}

function openAsShop() {
    document.getElementById("ascendShop").style.right = "calc(50% - 400px)";
    document.getElementById("ascendShop").classList.remove("reality");
    ascendShop.classList.add("open");
}

function closeShop() {
    document.getElementById("shopPanel").style.right = "-350px";
    document.getElementById("shopPanel").classList.add("reality");
}

function closeAsShop() {
    document.getElementById("ascendShop").style.right = "-800px";
    document.getElementById("ascendShop").classList.add("reality");
    ascendShop.classList.remove("open");
}

function openTr() {
    document.getElementById("transcensionShop").classList.add("open");
}

function closeTr() {
    document.getElementById("transcensionShop").classList.remove("open");
}

function callout() {
    alert(score);
}

function addScore() {
    prompt("how much score would you like to add?");
    alert("you were tricked >:D")
}

function addLuck() {
    prompt("how much luck would you like to add?");
    alert("tricked again >:D")
}

function ascend() {
    if (score >= 1000000000000) {
        score = 0;
        numBonus = 1;
        addBonus = 1;
        level = 1;
        updScore();
        ascended = true;
        ascensions += 1;
        ascensionShards += ascensionShardBoost;
        document.getElementById("asDisplay").textContent = "--[Ascensions: " + ascensions + "]--"
        document.getElementById("asCdisplay").textContent = "--[Ascension coins: " + ascensionShards + "]--"
        closeAsShop();
        updateMysteryUpgrade();
        upd();
    }
}

function upgAsC() {
    if (ascensionShards > 2) {
        ascensionShards -= 3;
        ascensionShardBoost += 1;
    }
    else {
        alert("YOURE TOO BROKE GO AND GET A DAMN JOB INSTEAD OF PLAYING THESE WEB GAAMES YOU FOOL");
    }
    upd();
}

function upgLuck() {
    if (ascensionShards > 2) {
        ascensionShards -= 3;
        luckBoost += 1
    }
    else {
        alert("YOURE TOO BROKE GO AND GET A DAMN JOB INSTEAD OF PLAYING THESE WEB GAAMES YOU FOOL");
    }
    upd();
}

function transcend() {
    if (ascensionShards >= 10){
        ascensionShards -= 10;
        let CrystalChance = Math.floor(Math.random() * maxCrystals) + 1;
        transcendenceCrystals += CrystalChance;
        document.getElementById("transcensionOpen").hidden = false;
        document.getElementById("transcensionShop").hidden = false;
    }
    upd();
}

const mysteryUpgrade = document.querySelector(".mysteryUpgrade");
const mysteryButton = mysteryUpgrade.querySelector(".upgradeBuy");

function updateMysteryUpgrade() {
    const unlocked = ascensions >= 15;

    mysteryUpgrade.classList.toggle("unlocked", unlocked);
    mysteryButton.disabled = !unlocked;
    mysteryButton.textContent = unlocked ? "BUY" : "LOCKED";
    document.querySelector(".mysteryUpgrade .upgradeName").textContent = "TRANSCENDENCE COINS";
    document.querySelector(".mysteryUpgrade .upgradeCost").textContent = "10 Ascension Coins";
    document.querySelector(".mysteryUpgrade .upgradeDesc").textContent = "Thou shall TRANSCEND beyond the sky.\nconverts 10ascension coins to transcension coins  ";
    document.querySelector(".mysteryUpgrade .upgradeBuy").onclick = transcend;
}