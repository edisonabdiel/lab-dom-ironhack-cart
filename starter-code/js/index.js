let cartElement = document.querySelector('#cart tbody');
let calcButton = document.getElementById('calc');
let deleteButton = document.querySelector('.btn-delete');


 let calcAllHandler = () => {

  let allProductElements = document.getElementsByClassName('product')

  let price = allProductElements[0].querySelector('.pu span').innerText;
  let qty = allProductElements[0].querySelector('input').value;
  allProductElements[0].querySelector('.subtot span').innerText = Number(price) * Number(qty);

  let price1 = allProductElements[1].querySelector('.pu span').innerText;
  let qty1 = allProductElements[1].querySelector('input').value;
  allProductElements[1].querySelector('.subtot span').innerText = Number(price1) * Number(qty1);
  
  let total = document.querySelector('h2 span').innerText = (Number(price) * Number(qty)) + (Number(price1) * Number(qty1));
} 

document.getElementsByClassName("qtyInput")[0].onchange = calcAllHandler;
document.getElementsByClassName("qtyInput")[1].onchange = calcAllHandler;

calcButton.onclick = calcAllHandler;

let deleteProducts = () => {
  document.getElementById('.bubble').removeChild('allProductElements')
}

deleteButton.onClick = deleteProducts



// .cloneNode()


// querySelect