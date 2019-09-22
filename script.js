var pizzas =    [   "Cheese",
                    "Hawaiian",
                    "BBQ Chicken",
                    "Cheech's Pizza",
                    "Vegan Pizza",
                    "Veggie Pizza"
                ]


function listPizza() {
    for (var i = 0; i < pizzas.length; i++)
    {
        document.write("<option value='" + i + "'>" + pizzas[i] + "</option>");
        console.log("<option onclick='listPizza(this)' value='" + i + "'>" + pizzas[i] + "</option>");
    }
}