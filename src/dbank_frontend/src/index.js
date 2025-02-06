import { dbank_backend } from "../../declarations/dbank_backend";

window.addEventListener("load", async () => {
  // this.alert("I'm Loaded!");
  const currentAmount = await dbank_backend.total();

  document.getElementById("value").innerText =
    Math.round(currentAmount * 100) / 100;
});

document.querySelector("form").addEventListener("submit", async (event) => {
  const button = event.target.querySelector("#submit-btn");

  const input_amount = parseFloat(
    document.getElementById("input-amount").value
  );

  const withdraw_amount = parseFloat(
    document.getElementById("withdrawal-amount").value
  );

  button.setAttribute("disabled", true);

  // topup amount
  if (document.getElementById("input-amount").value.length != 0) {
    await dbank_backend.topUp(input_amount);
  }

  // withdraw amount
  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await dbank_backend.subtract(withdraw_amount);
  }

  const currentAmount = await dbank_backend.total();

  document.getElementById("value").innerText =
    Math.round(currentAmount * 100) / 100;

  document.getElementById("input-amount").value = "";
  button.removeAttribute("disabled", true);
});
