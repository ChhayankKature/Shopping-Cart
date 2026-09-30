let shoppingcart=[]


function addToCart(event){
  const button= event.target;
  const item= button.parentElement;
  console.log(item)
  const productInfo = item.querySelector('div')
  const div=productInfo.querySelectorAll('div')
  const name= div[0].innerHTML
  const amount= div[1].innerHTML
  shoppingcart.push(
    {
      name: name,
      amount: amount
    }
  )
  showCart()
}
function showCart(){
  let cartHTML= ''
  for(let i=0; i< shoppingcart.length; i++)
  {
    const shoppingcartObject= shoppingcart[i];
    const {name, amount} = shoppingcartObject;
    const html=`
    <div>
    <div>
    <div>Item: ${name}</div>
    <div>Cost: ${amount}</div>
    </div>
    <button onclick="shoppingcart.splice(${i}, 1);
    showCart()">Delete</button>
    </div>
    `
    cartHTML += html;
  }
  let total=0;
 for (let i=0; i< shoppingcart.length; i++){
    total += Number(shoppingcart[i].amount)
  }
  document.querySelector('.js-display-cart').innerHTML= cartHTML;
  document.querySelector('.js-total-display').innerHTML= `<div>Total Cost ${total} </div>`;
}

function clearCart(){
  shoppingcart.length=0;
  document.querySelector('.js-display-cart').innerHTML= '';
  document.querySelector('.js-total-display').innerHTML='';

}