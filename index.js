*const btnLike1 = document.getElementById("btnLike1")
const count1 = document.getElementById("count1")

function countLike1() {
  let likeCounts = parseInt(count1.value) + 1
  count1.textContent = likeCounts.toString()
}
btnLike1.addEventListener("click", countLike1)


const btnLike2 = document.getElementById("btnLike2")
const count2 = document.getElementById("count2")

function countLike2() {
  let likeCounts = parseInt(count2.value) + 1
  count2.textContent = likeCounts.toString()
}
btnLike2.addEventListener("click", countLike2)


const btnDislike1 = document.getElementById("btnDislike1")
const count3 = document.getElementById("count3")

function countDislike1() {
  let DislikeCounts = parseInt(count3.value) + 1
  count3.textContent = DislikeCounts.toString()
}
btnDislike1.addEventListener("click", countDislike1)




const btnDislike2 = document.getElementById("btnDislike2")
const count4 = document.getElementById("count4")

function countDislike2() {
  let DislikeCounts = parseInt(count4.value) + 1
  count4.textContent = DislikeCounts.toString()
}
btnDislike2.addEventListener("click", countDislike2)


const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")
function submitComment(){
  commentbox.textContent += comment.value.toString() + "\n"
}
submit.addEventListener("click",submitComment)
*/

var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var product3 = document.getElementById("product3");
var qty3 = document.getElementById("qty3");
var price3 = document.getElementById("price3");

var product4 = document.getElementById("product4");
var qty4 = document.getElementById("qty4");
var price4 = document.getElementById("price4");

var product5 = document.getElementById("product5");
var qty5 = document.getElementById("qty5");
var price5 = document.getElementById("price5");

var product6 = document.getElementById("product6");
var qty6 = document.getElementById("qty6");
var price6 = document.getElementById("price6");

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder(){
    carts.textContent = "";
    var totalPrice = 0;

    if (parseFloat(qty1.value) > 0){
        var order = qty1.value.toString() + ' pc/s x '+ price1.textContent + '------'+ product1.textContent + '------ Php' + (parseFloat(qty1.value) * parseFloat(price1.textContent)) + '\n';
        carts.textContent += order;
        var qty = parseFloat(qty1.value);
        var price = parseFloat(price1.textContent);
        totalPrice += qty * price;
    }
    if (parseFloat(qty2.value) > 0){
        var order = qty2.value.toString() + ' pc/s x '+ price2.textContent + '------'+ product2.textContent + '------ Php' + (parseFloat(qty2.value) * parseFloat(price2.textContent)) + '\n';
        carts.textContent += order;
        var qty = parseFloat(qty2.value);
        var price = parseFloat(price2.textContent);
        totalPrice += qty * price;
    }
    if (parseFloat(qty3.value) > 0){
        var order = qty3.value.toString() + ' pc/s x '+ price3.textContent + '------'+ product3.textContent + '------ Php' + (parseFloat(qty3.value) * parseFloat(price3.textContent)) + '\n';
        carts.textContent += order;
        var qty = parseFloat(qty3.value);
        var price = parseFloat(price3.textContent);
        totalPrice += qty * price;
    }
    if (parseFloat(qty4.value) > 0){
        var order = qty4.value.toString() + ' pc/s x '+ price4.textContent + '------'+ product4.textContent + '------ Php' + (parseFloat(qty4.value) * parseFloat(price4.textContent)) + '\n';
        carts.textContent += order;
        var qty = parseFloat(qty4.value);
        var price = parseFloat(price4.textContent);
        totalPrice += qty * price;
    }
    if (parseFloat(qty5.value) > 0){
        var order = qty5.value.toString() + ' pc/s x '+ price5.textContent + '------'+ product5.textContent + '------ Php' + (parseFloat(qty5.value) * parseFloat(price5.textContent)) + '\n';
        carts.textContent += order;
        var qty = parseFloat(qty5.value);
        var price = parseFloat(price5.textContent);
        totalPrice += qty * price;
    }
    if (parseFloat(qty6.value) > 0){
        var order = qty6.value.toString() + ' pc/s x '+ price6.textContent + '------'+ product6.textContent + '------ Php' + (parseFloat(qty6.value) * parseFloat(price6.textContent)) + '\n';
        carts.textContent += order;
        var qty = parseFloat(qty6.value);
        var price = parseFloat(price6.textContent);
        totalPrice += qty * price;
    }
    total.value = '₱ ' + totalPrice.toFixed(2);
}

function calculateChange() {
  let totalPrice = parseFloat(total.value.replace('₱ ', ''));
  let cashTendered = parseFloat(cash.value);
  if (!isNaN(totalPrice) && !isNaN(cashTendered) && cashTendered >= totalPrice) {
      let changeAmount = cashTendered - totalPrice;
      change.value = '₱ ' + changeAmount.toFixed(2);
  } else {
      change.value = '';
  }
}

function purchaseButton() {
    let totalPrice = parseFloat(total.value.replace('₱ ', ''));
    let cashTendered = parseFloat(cash.value);
    if (cashTendered >= totalPrice) {
        alert('Thank you for your purchase');
    } else {
        alert('Insufficient Cash, please enter the right amount');
    }
}

qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
qty3.addEventListener("keyup", addOrder);
qty4.addEventListener("keyup", addOrder);
qty5.addEventListener("keyup", addOrder);
qty6.addEventListener("keyup", addOrder);

cash.addEventListener("keyup", calculateChange);

document.getElementById('purchaseButton').addEventListener('click', purchaseButton);
