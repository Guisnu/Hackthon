let user_soap_money = 0;
let soap_trade_quanty = 0;
const soap_price = 1;
const sabao_price = 1;


const form = document.querySelector("#form");
const litros = document.querySelector("#litros");
const money = document.querySelector("#money");
const buy = document.querySelector("#buy");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = Number(litros.value);
  user_soap_money += Math.round(value * soap_price);

  money.textContent = user_soap_money; 
})

buy.addEventListener("click", () => {

  if(user_soap_money < sabao_price){
    return alert("Você não tem moedas!");
  }

  user_soap_money -= sabao_price;
  soap_trade_quanty++
  
  console.log(soap_trade_quanty);
  money.textContent = user_soap_money; 

})