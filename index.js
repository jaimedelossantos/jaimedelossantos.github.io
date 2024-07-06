function updateOrder() {
    var prices = [900000, 600000, 100000, 2000000, 6000000, 800000];
    var quantities = [
        document.getElementById('qty1').value,
        document.getElementById('qty2').value,
        document.getElementById('qty3').value,
        document.getElementById('qty4').value,
        document.getElementById('qty5').value,
        document.getElementById('qty6').value
    ];

    var orderList = '';
    var total = 0;

    for (var i = 0; i < quantities.length; i++) {
        if (quantities[i] > 0) {
            orderList += 'Item ' + (i + 1) + ': ₱' + prices[i] + ' x ' + quantities[i] + ' = ₱' + (prices[i] * quantities[i]) + '\n';
            total += prices[i] * quantities[i];
        }
    }

    document.getElementById('carts').value = orderList;
    document.getElementById('total').value = 'Total: ₱' + total;
    calculateChange();
}

function calculateChange() {
    var total = parseFloat(document.getElementById('total').value.replace('Total: ₱', '')) || 0;
    var cash = parseFloat(document.getElementById('cash').value) || 0;
    var change = cash - total;

    document.getElementById('change').value = 'Change: ₱' + (change >= 0 ? change : 0);
}
