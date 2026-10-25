/*
TO-DO list
	<?xml?>
	<todo>
        <n1> so like find a way to reduce all these variables </n1> DONE (49 to about 20)
        <n2> add ascendance </n2> --done!
        <n3> finish ascendence </n3> --done!
        <n4> add transcendence </n4> --done!
		<n4.5> REDUCE THE BUGS WHICH IVE BEEN GOING meh. TO </n4.5> --i-dont-know-how-but-i-managed-to-get-it--done!
        <n5> add descendence </n5>   --pending
        <n6> add omniscendence </n6> --pending
   	   	<n7> add universalascentranscendescenomniscenhyperultramegaexpoprestigification (unp for short u for really short) </n7>
    </todo>
*/
let goals = [5000, 100000, 10000000, 10000000000];
let i = 0;
let checkedAllMilestones = false;
let score = 0;
let maxScore = 0;
let luck = 0;
let luckBoost = 0;
let num = 0;
let numBonus = 0;
let addend = 0;
let addendBonus = 0;
let canClick = true;
let maxLuckMetersRolled = 0;
let ascensions = 0;
let ascensionShards = 0;
let ascensionShardBoost = 1;
let transcendenceCrystals = 0;
let maxCrystals = 2;
let garunteedCrystals = 0;
let clickerUpgradeBought = false;
let criticalEvent = false;
let idle = false;
let idleWait = 10000;
let idleGain = 1000;
let idleUpg = 10000;
let purchasedIdle = 0;
let idleInterval;
let oldScore = score;
let clicker = document.getElementById("imagee");
class Milestone {
	constructor(goalScore, message, image) {
		this.goalScore = goalScore;
		this.message = message;
		this.image = image;
		this.reached = false;
	}
	check(score) {
		if (score >= this.goalScore && !this.reached && !checkedAllMilestones) {
			alert(this.message);
			this.reached = true;
			clicker.src = this.image;
		}
	}
	checkWithoutMessage(score){
		if (score >= this.goalScore && !this.reached){
			this.reached = true;
			clicker.src = this.image;
		}
	}
}

let milestones = [
	new Milestone(goals[0], "Level 2 unlocked: Gold coin!", "coin1.png"),
	new Milestone(goals[1], "Level 3 unlocked: Iron!", "Fe.png"),
	new Milestone(goals[2], "Level 4 unlocked: Gold!\nThe end is near...", "goldCoin.png"),
	new Milestone(goals[3], "Level 5 unlocked: Diamond!\nThis is the last level\nCheck the ascension Shop :U","gem.png")
];

function addPoints() {
	if (canClick == false) {
		return;
	}
		canClick = false;
		oldScore = score;

	if (score >= maxScore) {
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
	}else if (maxScore >= goals[0]){
		levels[1].rollLuck(50, 1, 30, 45, 49);
		clicker.src = "coin1.png";
	}else {
		levels[0].rollLuck(15, 1, 9, 12, 14);
		clicker.src = "nickel.png";
	}
	if (clickerUpgradeBought){
		coinUpg(5,1);
	}

		let scoreAdd = 0;
	if (criticalEvent) {
		score += Math.floor(Math.random() * ((num + numBonus) * 100)) + (addend + addendBonus);
	} else {
		score += Math.floor(Math.random() * (num + numBonus)) + (addend + addendBonus);
	}

		score += Math.floor(score / 100 * ascensions)
		scoreAdd = score - oldScore;

		document.getElementById("score").textContent = "--[score: " + score + "]--";
		document.getElementById("add-display").textContent = "--[ +" + scoreAdd + " ]--";

		//MILESTONES
	for (let milestone of milestones) {
		milestone.check(score);
		if (!milestone.reached){
			i++;
		}
		if (i = milestones.length){
			checkedAllMilestones = true;
		}
	}
	if (checkedAllMilestones){
		for (milestone of milestones){
			milestone.checkWithoutMessage(score);
		} 
	}
	console.log(maxScore, score)
	setTimeout(function () {
		canClick = true;
	}, 0); // cooldown
} //addPoints() ends

	function randomEvent() {
			setTimeout(function () {
			let eventChance = Math.floor(Math.random() * 2) + 1;
			if (eventChance === 2) {
				document.getElementById("clickerSprite").classList.add("critical");
				criticalEvent = true
				setTimeout(function () {
					criticalEvent = false;
					document.getElementById("clickerSprite").classList.remove("critical");
				}, 2000)
			}
			randomEvent();
		}, 60000)
	}

	randomEvent();