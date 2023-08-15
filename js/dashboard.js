const button = document.getElementById("button-deposit");
button.addEventListener("click", function () {
  let inputValue = document.getElementById("input-amount").value;
  let parseinputValue = parseFloat(inputValue);
  let depositValue = document.getElementById("deposit-value");
  let depositText = depositValue.innerText;
  let totalDepositValue = parseFloat(depositText);
  let convertTotaldeop = totalDepositValue + parseinputValue;
  depositValue.innerText = convertTotaldeop;
  let withdrawValue = document.getElementById("Withdraw-value");
  let withdrawValuetext = withdrawValue.innerText;
  let withdrawValueparse = parseFloat(withdrawValuetext);
  let converTotalWith = withdrawValueparse + parseinputValue;
  withdrawValue.innerText = converTotalWith;
});
const buttonWithdraw = document.getElementById("Withdraw-button");
buttonWithdraw.addEventListener("click", function () {
  let withd = document.getElementById("Withdraw-much");
  let withdd = withd.innerText;
  let parsewithval = parseFloat(withdd);
  let within = document.getElementById("withinput").value;
  let withind = parseFloat(within);
  let totalinD = parsewithval + withind;
  withd.innerText = totalinD;
  let withbal = document.getElementById("Withdraw-value");
  let withtext = withbal.innerText;
  let withpar = parseFloat(withtext);

  if (within > withtext) {
    alert("oi beta tor baper bank e taka nai");
  } else {
    const withtotalValue = withpar - withind;
    withbal.innerText = withtotalValue;
    return;
  }
  return;
});
