addLayer("mp", {
    name: "mega", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
   branches: ['sp'],
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(0),
    }},
    color: "#ff8800",
    requires: 1e16,    // Can be a function that takes requirement increases into account
    resource: "mega points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1);
       


        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(0.65);
        return exp
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "M: Reset for mega points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade('up', 21)},
    
    upgrades: {
    11: {
        title: "Mega Upgrade 11",
        description: "^1.005 points, X200 points",
        cost: new Decimal(1),
        
    },
   
}
})
