var cartQuantity =  [0,0,0,0,0];
var cartPrice = [0,0,0,0,0];

function addToCart(i){
       cartQuantity [i] = cartQuantity[i] + Number(document.getElementById('quantity_' + i).value);
     cartPrice[i] = cartPrice[i] + Number(document.getElementById('quantity_' + i).value) * Number(document.getElementById('price_' + i).innerText);
};
function showCart(){
    document.getElementById("cartQuantity").innerHTML = "Total Quantity is " + addArrayValues(cartQuantity);
    document.getElementById("cartPrice").innerHTML = "Total Price is " +  addArrayValues(cartPrice);
};

function addArrayValues(arrayName) {
    x=0;
    for (i=0;i<arrayName.length;i++){
       x = x + Number(arrayName[i]); 
    }
    return x;
};

$(document).ready (function(){
    $("#butto").click(function(){
        $("#cartPrice,#cartQuantity").css("display","block");
   });
});

