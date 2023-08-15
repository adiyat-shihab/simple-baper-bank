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
