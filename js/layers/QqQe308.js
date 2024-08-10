addLayer("QqQe308", {
    name: "QqQe308", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Q", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		    points: new Decimal(0),
		    dimensions: (function(){
		      let dim = [null]
		      for (let i = 1; i <= 8; i++) dim.push(n(0))
		      return dim
		    }())
    }},
    color: "#4BDC13",
    image: "/resources/QqQe308.png",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "QqQe308", // Name of prestige currency
    baseResource: "QqQe308", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "custom", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    getResetGain() {
      return player.points.div(30.8).root(3.08).floor()
    },
    canReset() {
      return player.points.gte(30.8)
    },
    prestigeNotify() {
      return true
    },
    getNextAt() {
      let a = this.getResetGain()
      return a.add(1).mul(30.8).pow(30.8)
    },
    update(diff) {
      for (let i = 1; i < 8; i++) player.QqQe308.dimensions[i] = player.QqQe308.dimensions[i].add(buyableEffect(this.layer, i + 11))
      player.QqQe308.points = player.points
    },
    tabFormat: {
      "维度": {
        content: [
          "main-display",
          ["display-text",
            function() {
              return `你正在获取 ${formatGain(player.points, getPointGen()," QqQe308")}`
            }
          ],
          "buyables",
        ]
      },
    },
    buyables: {
      11: {
        cost(x) {
          let basecost = n(10)
          let costmul = n(1e3)
          return basecost.mul(costmul.pow(x)).scale(double_limit, 2, "dil")
        },
        canAfford() {
          return player.points.gte(this.cost(getBuyableAmount(this.layer, this.id)))
        },
        displayText() {
          return `
            你的第一QqQe308维度每秒(总计)生产${formatWhole(this.effect())}个QqQe308<br>
            数量：${formatWhole(player.QqQe308.dimensions[parseInt(this.id)-10].add(getBuyableAmount("QqQe308", this.id).mul(10)))}(${formatWhole(getBuyableAmount(this.layer, this.id))})<br>
            价格：${formatWhole(this.cost(getBuyableAmount(this.layer, this.id)))} QqQe308
          `
        },
        title() {
          return `第一QqQe308维度<br><span style="font-size: 10px">` + this.displayText() + "</span>"
        },
        effect() {
          let x = player.QqQe308.dimensions[parseInt(this.id)-10].add(getBuyableAmount("QqQe308", this.id).mul(10))
          let eff = n(2).pow(getBuyableAmount(this.layer, this.id)).mul(x)
          return eff
        },
        buy() {
          let x = getBuyableAmount(this.layer, this.id)
          if (!this.canAfford()) return
          player.points = player.points.sub(this.cost(x))
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        maxBuy() {
          if (!this.canAfford()) return
          let basecost = n(10)
          let costmul = n(1e3)
          let x = player.points.div(basecost).scale(double_limit, 2, "dil", true).log(costmul).floor()
          player.points = player.points.sub(this.cost(x.sub(1)))
          setBuyableAmount(this.layer, this.id, x)
        }
      },
      12: {
        cost(x) {
          let basecost = n(100)
          let costmul = n(1e4)
          return basecost.mul(costmul.pow(x)).scale(double_limit, 2, "dil")
        },
        canAfford() {
          return player.points.gte(this.cost(getBuyableAmount(this.layer, this.id)))
        },
        displayText() {
          return `
            你的第二QqQe308维度每秒(总计)生产${formatWhole(this.effect())}个第一QqQe308维度<br>
            数量：${formatWhole(player.QqQe308.dimensions[parseInt(this.id)-10].add(getBuyableAmount("QqQe308", this.id).mul(10)))}(${formatWhole(getBuyableAmount(this.layer, this.id))})<br>
            价格：${formatWhole(this.cost(getBuyableAmount(this.layer, this.id)))} QqQe308
          `
        },
        title() {
          return `第二QqQe308维度<br><span style="font-size: 10px">` + this.displayText() + "</span>"
        },
        effect() {
          let x = player.QqQe308.dimensions[parseInt(this.id)-10].add(getBuyableAmount("QqQe308", this.id).mul(10))
          let eff = n(2).pow(getBuyableAmount(this.layer, this.id)).mul(x)
          return eff
        },
        buy() {
          let x = getBuyableAmount(this.layer, this.id)
          if (!this.canAfford()) return
          player.points = player.points.sub(this.cost(x))
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        maxBuy() {
          if (!this.canAfford()) return
          let basecost = n(100)
          let costmul = n(1e4)
          let x = player.points.div(basecost).scale(double_limit, 2, "dil", true).log(costmul).floor()
          player.points = player.points.sub(this.cost(x.sub(1)))
          setBuyableAmount(this.layer, this.id, x)
        }
      },
      13: {
        cost(x) {
          let basecost = n(1e4)
          let costmul = n(1e5)
          return basecost.mul(costmul.pow(x)).scale(double_limit, 2, "dil")
        },
        canAfford() {
          return player.points.gte(this.cost(getBuyableAmount(this.layer, this.id)))
        },
        displayText() {
          return `
            你的第三QqQe308维度每秒(总计)生产${formatWhole(this.effect())}个第二QqQe308维度<br>
            数量：${formatWhole(player.QqQe308.dimensions[parseInt(this.id)-10].add(getBuyableAmount("QqQe308", this.id).mul(10)))}(${formatWhole(getBuyableAmount(this.layer, this.id))})<br>
            价格：${formatWhole(this.cost(getBuyableAmount(this.layer, this.id)))} QqQe308
          `
        },
        title() {
          return `第三QqQe308维度<br><span style="font-size: 10px">` + this.displayText() + "</span>"
        },
        effect() {
          let x = player.QqQe308.dimensions[parseInt(this.id)-10].add(getBuyableAmount("QqQe308", this.id).mul(10))
          let eff = n(2).pow(getBuyableAmount(this.layer, this.id)).mul(x)
          return eff
        },
        buy() {
          let x = getBuyableAmount(this.layer, this.id)
          if (!this.canAfford()) return
          player.points = player.points.sub(this.cost(x))
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        maxBuy() {
          if (!this.canAfford()) return
          let basecost = n(1e4)
          let costmul = n(1e5)
          let x = player.points.div(basecost).scale(double_limit, 2, "dil", true).log(costmul).floor()
          player.points = player.points.sub(this.cost(x.sub(1)))
          setBuyableAmount(this.layer, this.id, x)
        }
      },
      14: {
        cost(x) {
          let basecost = n(1e6)
          let costmul = n(1e6)
          return basecost.mul(costmul.pow(x)).scale(double_limit, 2, "dil")
        },
        canAfford() {
          return player.points.gte(this.cost(getBuyableAmount(this.layer, this.id)))
        },
        displayText() {
          return `
            你的第四QqQe308维度每秒(总计)生产${formatWhole(this.effect())}个第三QqQe308维度<br>
            数量：${formatWhole(player.QqQe308.dimensions[parseInt(this.id)-10].add(getBuyableAmount("QqQe308", this.id).mul(10)))}(${formatWhole(getBuyableAmount(this.layer, this.id))})<br>
            价格：${formatWhole(this.cost(getBuyableAmount(this.layer, this.id)))} QqQe308
          `
        },
        title() {
          return `第四QqQe308维度<br><span style="font-size: 10px">` + this.displayText() + "</span>"
        },
        effect() {
          let x = player.QqQe308.dimensions[parseInt(this.id)-10].add(getBuyableAmount("QqQe308", this.id).mul(10))
          let eff = n(2).pow(getBuyableAmount(this.layer, this.id)).mul(x)
          return eff
        },
        buy() {
          let x = getBuyableAmount(this.layer, this.id)
          if (!this.canAfford()) return
          player.points = player.points.sub(this.cost(x))
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        maxBuy() {
          if (!this.canAfford()) return
          let basecost = n(1e6)
          let costmul = n(1e6)
          let x = player.points.div(basecost).scale(double_limit, 2, "dil", true).log(costmul).floor()
          player.points = player.points.sub(this.cost(x.sub(1)))
          setBuyableAmount(this.layer, this.id, x)
        }
      },
      15: {
        cost(x) {
          let basecost = n(1e9)
          let costmul = n(1e8)
          return basecost.mul(costmul.pow(x)).scale(double_limit, 2, "dil")
        },
        canAfford() {
          return player.points.gte(this.cost(getBuyableAmount(this.layer, this.id)))
        },
        displayText() {
          return `
            你的第五QqQe308维度每秒(总计)生产${formatWhole(this.effect())}个第四QqQe308维度<br>
            数量：${formatWhole(player.QqQe308.dimensions[parseInt(this.id)-10].add(getBuyableAmount("QqQe308", this.id).mul(10)))}(${formatWhole(getBuyableAmount(this.layer, this.id))})<br>
            价格：${formatWhole(this.cost(getBuyableAmount(this.layer, this.id)))} QqQe308
          `
        },
        title() {
          return `第五QqQe308维度<br><span style="font-size: 10px">` + this.displayText() + "</span>"
        },
        effect() {
          let x = player.QqQe308.dimensions[parseInt(this.id)-10].add(getBuyableAmount("QqQe308", this.id).mul(10))
          let eff = n(2).pow(getBuyableAmount(this.layer, this.id)).mul(x)
          return eff
        },
        buy() {
          let x = getBuyableAmount(this.layer, this.id)
          if (!this.canAfford()) return
          player.points = player.points.sub(this.cost(x))
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        maxBuy() {
          if (!this.canAfford()) return
          let basecost = n(1e9)
          let costmul = n(1e8)
          let x = player.points.div(basecost).scale(double_limit, 2, "dil", true).log(costmul).floor()
          player.points = player.points.sub(this.cost(x.sub(1)))
          setBuyableAmount(this.layer, this.id, x)
        }
      },
      16: {
        cost(x) {
          let basecost = n(1e13)
          let costmul = n(1e10)
          return basecost.mul(costmul.pow(x)).scale(double_limit, 2, "dil")
        },
        canAfford() {
          return player.points.gte(this.cost(getBuyableAmount(this.layer, this.id)))
        },
        displayText() {
          return `
            你的第六QqQe308维度每秒(总计)生产${formatWhole(this.effect())}个第五QqQe308维度<br>
            数量：${formatWhole(player.QqQe308.dimensions[parseInt(this.id)-10].add(getBuyableAmount("QqQe308", this.id).mul(10)))}(${formatWhole(getBuyableAmount(this.layer, this.id))})<br>
            价格：${formatWhole(this.cost(getBuyableAmount(this.layer, this.id)))} QqQe308
          `
        },
        title() {
          return `第六QqQe308维度<br><span style="font-size: 10px">` + this.displayText() + "</span>"
        },
        effect() {
          let x = player.QqQe308.dimensions[parseInt(this.id)-10].add(getBuyableAmount("QqQe308", this.id).mul(10))
          let eff = n(2).pow(getBuyableAmount(this.layer, this.id)).mul(x)
          return eff
        },
        buy() {
          let x = getBuyableAmount(this.layer, this.id)
          if (!this.canAfford()) return
          player.points = player.points.sub(this.cost(x))
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        maxBuy() {
          if (!this.canAfford()) return
          let basecost = n(1e13)
          let costmul = n(1e10)
          let x = player.points.div(basecost).scale(double_limit, 2, "dil", true).log(costmul).floor()
          player.points = player.points.sub(this.cost(x.sub(1)))
          setBuyableAmount(this.layer, this.id, x)
        }
      },
      17: {
        cost(x) {
          let basecost = n(1e18)
          let costmul = n(1e12)
          return basecost.mul(costmul.pow(x)).scale(double_limit, 2, "dil")
        },
        canAfford() {
          return player.points.gte(this.cost(getBuyableAmount(this.layer, this.id)))
        },
        displayText() {
          return `
            你的第七QqQe308维度每秒(总计)生产${formatWhole(this.effect())}个第六QqQe308维度<br>
            数量：${formatWhole(player.QqQe308.dimensions[parseInt(this.id)-10].add(getBuyableAmount("QqQe308", this.id).mul(10)))}(${formatWhole(getBuyableAmount(this.layer, this.id))})<br>
            价格：${formatWhole(this.cost(getBuyableAmount(this.layer, this.id)))} QqQe308
          `
        },
        title() {
          return `第七QqQe308维度<br><span style="font-size: 10px">` + this.displayText() + "</span>"
        },
        effect() {
          let x = player.QqQe308.dimensions[parseInt(this.id)-10].add(getBuyableAmount("QqQe308", this.id).mul(10))
          let eff = n(2).pow(getBuyableAmount(this.layer, this.id)).mul(x)
          return eff
        },
        buy() {
          let x = getBuyableAmount(this.layer, this.id)
          if (!this.canAfford()) return
          player.points = player.points.sub(this.cost(x))
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        maxBuy() {
          if (!this.canAfford()) return
          let basecost = n(1e18)
          let costmul = n(1e12)
          let x = player.points.div(basecost).scale(double_limit, 2, "dil", true).log(costmul).floor()
          player.points = player.points.sub(this.cost(x.sub(1)))
          setBuyableAmount(this.layer, this.id, x)
        }
      },
      18: {
        cost(x) {
          let basecost = n(1e24)
          let costmul = n(1e15)
          return basecost.mul(costmul.pow(x)).scale(double_limit, 2, "dil")
        },
        canAfford() {
          return player.points.gte(this.cost(getBuyableAmount(this.layer, this.id)))
        },
        displayText() {
          return `
            你的第八QqQe308维度每秒(总计)生产${formatWhole(this.effect())}个第七QqQe308维度<br>
            数量：${formatWhole(player.QqQe308.dimensions[parseInt(this.id)-10].add(getBuyableAmount("QqQe308", this.id).mul(10)))}(${formatWhole(getBuyableAmount(this.layer, this.id))})<br>
            价格：${formatWhole(this.cost(getBuyableAmount(this.layer, this.id)))} QqQe308
          `
        },
        title() {
          return `第八QqQe308维度<br><span style="font-size: 10px">` + this.displayText() + "</span>"
        },
        effect() {
          let x = player.QqQe308.dimensions[parseInt(this.id)-10].add(getBuyableAmount("QqQe308", this.id).mul(10))
          let eff = n(2).pow(getBuyableAmount(this.layer, this.id)).mul(x)
          return eff
        },
        buy() {
          let x = getBuyableAmount(this.layer, this.id)
          if (!this.canAfford()) return
          player.points = player.points.sub(this.cost(x))
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        maxBuy() {
          if (!this.canAfford()) return
          let basecost = n(1e24)
          let costmul = n(1e18)
          let x = player.points.div(basecost).scale(double_limit, 2, "dil", true).log(costmul).floor()
          player.points = player.points.sub(this.cost(x.sub(1)))
          setBuyableAmount(this.layer, this.id, x)
        }
      },
    },
})
