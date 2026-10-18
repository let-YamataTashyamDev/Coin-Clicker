/*
TO-DO list
	<?xml?>
	<todo>
        <n1> so like find a way to reduce all these variables </n1> DONE (49 to about 20)
        <n2> add ascendance </n2> --done!
        <n3> finish ascendence </n3> --done!
        <n4> add transcendence </n4> --done!
        <n5> add descendence </n5>   --pending
        <n6> add omniscendence </n6> --pending
   	   	<n7> add universalascentranscendescenomniscenhyperultramegaexpoprestigification (unp for short u for really short) </n7>
    </todo>
*/

let goals = [5000, 100000, 10000000, 1000000000000];
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
	new Milestone(1000000000000, "Level 5 unlocked: Diamond!", "gem.png")
];

	function getLevel() {
		if (score < 5000) {
			return 1;
		}
		if (score < 100000) {
			return 2;
		}
		if (score < 10000000) { // 10,000,000 ten million
			return 3;
		}
		if (score < 1000000000000) {  // 1,000,000,000 a BILLION
			return 4;
		}
		else {               // 1,000,000,000,000 A TRILLION
			return 5;
		}
	}

	function addPoints() {
		if (canClick == false) {
			return;
		}
		canClick = false;
		let oldScore = score;
		let clicker = document.getElementById("imagee")
		if (ascended) {
			level = 1; ascended = false;
		}
		else {
			level = getLevel();
		}
		if (level == 1) {
			levels[0].rollLuck(15, 1, 9, 12, 14);
			clicker.src = "nickel.png";
		}
		if (level == 2) {
			levels[1].rollLuck(50, 1, 30, 45, 49);
			clicker.src = "coin1.png";
		}
		if (level == 3) {
			levels[2].rollLuck(75, 1, 45, 70, 74);
			clicker.src = "Fe.png";
		}
		if (level == 4) {
			levels[3].rollLuck(100, 1, 50, 90, 99);
			clicker.src = "goldCoin.png";
		}
		if (level == 5) {
			levels[4].rollLuck(200, 1, 100, 175, 199);
			document.getElementById("goal").textContent = 1000000000000;
			clicker.src = "gem.png";
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
		}, 300);

	} //addPoints() ends

	function randomEvent() {
		setTimeout(function () {
			let eventChance = Math.floor(Math.random() * 25) + 1;
			if (eventChance == 25) {
				document.getElementById("clickerSprite").classList.add("critical");
				criticalEvent = true
				setTimeout(function () {
					criticalEvent = false;
					document.getElementById("clickerSprite").classList.remove("critical");
				}, 20000)
			}
			randomEvent();
		}, 60000)
	}
	randomEvent();