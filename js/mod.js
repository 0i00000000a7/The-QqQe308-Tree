let modInfo = {
	name: "QqQe308树",
	id: "the QqQe308 Tree",
	author: "010000000a7",
	pointsName: "QqQe308",
	modFiles: ["layers/QqQe308.js", "tree.js"],

	discordName: "010000000a7",
	discordLink: "https://space.bilibili.com/518373506",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "QqQe308",
	name: "QqQe308",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>vQqQe308</h3><br>
		- 添加QqQe308<br>
		- 添加QqQe308维度`

let winText = `恭喜! 你达到了当前的残局! `

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints()) return new Decimal(0)
	let gain = buyableEffect("QqQe308", 11).add(1)
	return gain.max(0)
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(1e38)
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
function formatGain(a,e,res) {
    FPS = 1 / diff
    const g = Decimal.add(a,e.div(FPS))

    if (g.neq(a)) {
        if (a.gte("10^^12")) {
            var oom = n(g).slog(10).sub(n(a).slog(10)).mul(FPS)
            if (oom.gte(1e-3)) return "" + oom.format() + " 数量级^^2/秒)"
        }

        if (a.gte('ee100')) {
            var tower = Math.floor(n(a).slog(10).toNumber() - 1.3010299956639813);
    
            var oom = n(g).iteratedlog(10,tower).sub(n(a).iteratedlog(10,tower)).mul(FPS), rated = false;
    
            if (oom.gte(1)) rated = true
            else if (tower > 2) {
                tower--
                oom = n(g).iteratedlog(10,tower).sub(n(a).iteratedlog(10,tower)).mul(FPS)
                if (oom.gte(1)) rated = true
            }
    
            if (rated) return "" + oom.format() + " 数量级^"+tower+"/秒"
        }
    
        if (a.gte(1e100)) {
            const oom = g.div(a).log10().mul(FPS)
            if (oom.gte(1)) return "" + oom.format() + " 数量级/秒"
        }
    }

    return "" + (e.lt(0) ? "" : "") + format(e) + res + "/秒"
}
const n = x => new Decimal(x)
Decimal.prototype.scale = function(s, p, mode, rev = false) {
    s = n(s)
    p = n(p)
    var x = this
    if(x.gte(s)) {
      if([0, "pow"].includes(mode)) x = rev ? x.div(s).root(p).mul(s) : x.div(s).pow(p).mul(s)
      if([1, "exp"].includes(mode)) x = rev ? x.div(s).max(1).log(p).add(s) : Decimal.pow(p, x.sub(s)).mul(s)
      if([2, "dil"].includes(mode)) {
        let s10 = s.log10()
        x = rev ? n(10).pow(x.log10().div(s10).root(p).mul(s10)) : n(10).pow(x.log10().div(s10).pow(p).mul(s10))
      }
      if([3, "alt_exp"].includes(mode)) x = rev ? x.div(s).max(1).log(p).add(1).mul(s) : Decimal.pow(p, x.div(s).sub(1)).mul(s)
    }
    return x
  }
  
const double_limit = n(2).pow(1024)