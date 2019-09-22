var pizzas =    [   "Cheese",
                    "Hawaiian",
                    "BBQ Chicken",
                    "Cheech's Pizza",
                    "Vegan Pizza",
                    "Veggie Pizza"
                ]


function listPizza() {
     var select = document.getElementById("pizzas");
    for (var i = 0; i < pizzas.length; i++)
    {
       var el = document.getElementById("value");
        el.innerHTML = pizzas[i];
        el.option = pizzas[i];
    }
}