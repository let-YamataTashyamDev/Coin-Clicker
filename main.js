/*
TO-DO list
	<?xml?>
	<todo>
        <n1> so like find a way to reduce all these variables </n1> DONE (49 to about 20)
        <n2> add ascendance </n2> --done!
        <n3> finish ascendence </n3> --done!
        <n4> add transcendence </n4> --done!
		<n4.5> REDUCE THE BUGS WHICH IVE BEEN GOING meh. TO </n4.5> --surprisingly-done!
        <n5> add descendence </n5>   --pending
        <n6> add omniscendence </n6> --pending
   	   	<n7> add universalascentranscendescenomniscenhyperultramegaexpoprestigification (unp for short u for really short) </n7>
    </todo>
*/

let goals = [5000, 100000, 10000000, 10000000000,];
let level = 1;
let score = 0;
let luck = 0;
let luckBoost = 0;
let jackpotBoost = 0;
let numBonus = 0;
let addendBonus = 0;
let num = 0;
let addend = 0;
let canClick = true;
let maxLuckMetersRolled = 0;
let ascensions = 0;
let ascensionShards = 0;
let criticalEvent = false;
let ascensionShardBoost = 1;
let ascended = false;
let transcendenceCrystals = 0;
let maxCrystals = 2;
let maxScore = 0;
let garunteedCrystals = 0;
let purchasedTrEvent = false;
class Milestone {	
	constructor(goalScore, message, image) {
		this.goalScore = goalScore;
		this.message = message;
		this.image = image;
		this.reached = false;
	}
	check(score) {
		if (score >= this.goalScore && !this.reached) {
			alert(this.message);
			this.reached = true;
			document.getElementById("imagee").src = this.image;
		}
	}
}

let milestones = [
	new Milestone(5000, "Level 2 unlocked: Gold coin!", "coin1.png"),
	new Milestone(100000, "Level 3 unlocked: Iron!", "Fe.png"),
	new Milestone(10000000, "Level 4 unlocked: Gold!", "goldCoin.png"),
	new Milestone(1000000000000, "Level 5 unlocked: Diamond!\nThis is the last level", "gem.png")
];

function addPoints() {
	if (canClick == false) {
		return;
	}
	canClick = false;
	let oldScore = score;
	let clicker = document.getElementById("imagee");

	if (score > maxScore) {
		maxScore = score;
	}
		if (maxScore >= goals[3]) {
			levels[4].rollLuck(200, 1, 100, 175, 199);
			document.getElementById("goal").textContent = 1000000000000;
			clicker.src = "gem.png";
		}else if (maxScore >= goals[2]) {
			levels[3].rollLuck(100, 1, 50, 90, 99);
			clicker.src = "goldCoin.png";
		}else if (maxScore >= goals[1]) {
			levels[2].rollLuck(75, 1, 45, 70, 74);
			clicker.src = "Fe.png";
		}else if (maxScore >= goals[0]) {
			levels[1].rollLuck(50, 1, 30, 45, 49);
			clicker.src = "coin1.png";
			reachedlvl1 = false;
		}else {
			levels[0].rollLuck(15, 1, 9, 12, 14);
			clicker.src = "nickel.png";
		}

	let scoreAdd = 0;
	if (criticalEvent) {
		score += Math.floor(Math.random() * ((num + numBonus) * 100)) + (addend + addendBonus);
		score += Math.floor(score / 100 * ascensions)
		scoreAdd = score - oldScore;
	} else {
		score += Math.floor(Math.random() * (num + numBonus)) + (addend + addendBonus);
		score += Math.floor(score / 100 * ascensions)
		scoreAdd = score - oldScore;
		console.log(scoreAdd);
	}
	document.getElementById("score").textContent = "--[score: " + score + "]--";
	document.getElementById("add-display").textContent = "--[ +" + scoreAdd + " ]--";

	//MILESTONES
	for (let milestone of milestones) {
		milestone.check(score);
	}
	setTimeout(function () {
		canClick = true;
	}, 300); // cooldown

} //addPoints() ends

	function randomEvent() {
		let evChance = 25;
		if (purchasedTrEvent) {
			evChance = 50;
		} else {
			evChance = 25;
		}
			setTimeout(function () {
				let eventChance = Math.floor(Math.random() * evChance) + 1;
				if (eventChance == 25) {
					document.getElementById("clickerSprite").classList.add("critical");
					criticalEvent = true
					setTimeout(function () {
						criticalEvent = false;
						document.getElementById("clickerSprite").classList.remove("critical");
					}, 20000)
				} else if (purchasedTrEvent && eventChance == 50) {
					let Crystal = new Element;
					Crystal.textContent = "<|>";
					Crystal.clientWidth = "64";
					Crystal.clientHeight = "64";
					Crystal.style
				}
				randomEvent();
			}, 60000)
		}

	randomEvent();