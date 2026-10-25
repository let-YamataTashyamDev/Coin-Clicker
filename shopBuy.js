class upg {
	constructor(cost, numGain, addendGain) {
		this.cost = cost;
		this.numGain = numGain;
		this.addendGain = addendGain;
	}
	buyOne() {
		if (score >= this.cost) {
			score -= this.cost;
			numBonus += this.numGain;
			addendBonus += this.addendGain;
			updScore();
			alert("Upgrade Purchased Successfully.");
		}
	}
	buyTen() {
		let totalCost = this.cost * 10 * 0.9;
		if (score >= totalCost) {
			score -= totalCost;
			numBonus += this.numGain * 10;
			addendBonus += this.addendGain * 10;
			updScore();
			alert("Purchase successful");
		}
	}
	buyMax() {
		let maxUpg = Math.floor(score / this.cost);
		if (maxUpg > 0) {
			let totalCost = this.cost * maxUpg * 0.9;
			score -= totalCost;
			numBonus += this.numGain * maxUpg;
			addendBonus += this.addendGain * maxUpg;
			updScore();
			alert(maxUpg + " upgrades bought successfully");
		}
	}
}

window.upgrades = [
	new upg(1000, 1, 10),
	new upg(10000, 15, 150),
	new upg(1000000, 15000, 100000)
]

function addIdle() {
	if (!idle){
		idleInterval = setInterval(function () {
			score += idleGain;
			updScore();
		}, idleWait)
		idle = true;
	} else {
		alert("you have already purchased idle")
	}
	upd();
	updScore();
}

function restartIdle() {
    clearInterval(idleInterval);

    idleInterval = setInterval(function () {
        score += idleGain;
		updScore();
    }, idleWait);
}

function upgIdle() {
	if (ascensionShards < 7){
		return;
	}
	ascensionShards-=7;
	purchasedIdle++;
	if (purchasedIdle%5 === 0 && purchasedIdle !== 0){
		idleWait -= 100;
		restartIdle();
	}
	idleGain += idleUpg;
	idleUpg *= 1.1;
	idleUpg = Math.floor(idleUpg);
	upd();
	updScore();
}

function buytrascBoost(){
	if (transcendenceCrystals > 1){
		transcendenceCrystals -= 2;
		ascensionShardBoost += 2;
	}
	upd();
}