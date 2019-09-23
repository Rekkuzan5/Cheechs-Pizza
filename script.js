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

function listQuantity() {
    for (var i = 1; i <= 10; i++)
    {
        document.write("<option value='" + i + "'>" + i + "</option>");

    }
}

function orderNow() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var type = document.getElementById("pizzaType");
    var typeText = type.options[type.selectedIndex].text;
    var pizzaQuantity = document.getElementById("pizzaQuant").value;

    var pizzaPrice = 8.99;
    var tax = .076;

    var price = (pizzaQuantity * pizzaPrice);
    var calculatedTax = price * tax;
    var totalPrice = price + calculatedTax;

    var string = "Customer Name: " + name + "<br/>" + "Customer Phone: " + phone +
                    "<br/>" + "Number of Pizzas: " + pizzaQuantity + "<br/>" + "Type of Pizza: " + typeText + "<br/>" +
                    "Price: $" + totalPrice.toFixed(2);
    
    document.getElementById("summary").innerHTML = string;
}

