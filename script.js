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
        document.getElementById("a").innerHTML = pizzas[i];
    }
}