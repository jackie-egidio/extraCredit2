function calculate() {
    // declare all variables
    var numDogs, numFries, numSodas;
    const DISCOUNT = .1;
    const TAX = .0625;

    // gets quantities
    numDogs = document.getElementById('hotDogQuantity').value;
    numDogs = parseInt(numDogs);
    numFries = document.getElementById('friesQuantity').value;
    numFries = parseInt(numFries);
    numSodas = document.getElementById('sodaQuantity').value;
    numSodas = parseInt(numSodas);

    write = document.getElementById('results');

    // calculates subtotal and writes current info
    var subTotal = (numDogs * 3.75) + (numFries * 2) + (numSodas * 1.8);
    write.innerHTML = "Hotdogs: " + numDogs + "<br />Fries: " + numFries;
    write.innerHTML += "<br />Drinks: " + numSodas + "<br />Subtotal: $" + subTotal.toFixed(2);

    // checks for discount
    if (subTotal > 20) 
    {
        write.innerHTML += "<br />Discount applied: $" + (subTotal * DISCOUNT).toFixed(2);
        subTotal = (subTotal - (subTotal * DISCOUNT));
        write.innerHTML += "<br />Subtotal after discount: $" + subTotal.toFixed(2);
    }

    // calculates tax
    write.innerHTML += "<br />Tax: $" + (subTotal * TAX).toFixed(2);
    subTotal = (subTotal + (subTotal * TAX));

    // writes final total to doc
    write.innerHTML += "<br />Total: $" + subTotal.toFixed(2);
}
