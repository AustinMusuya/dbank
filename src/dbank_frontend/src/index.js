import { dbank_backend } from "../../declarations/dbank_backend";

const update = async () => {
  const currentAmount = await dbank_backend.total();

  document.getElementById("value").innerText =
    Math.round(currentAmount * 100) / 100;
};

window.addEventListener("load", async () => {
  // this.alert("I'm Loaded!");
  update();
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

  await dbank_backend.compound();

  update(); // funtion to update amount

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";

  button.removeAttribute("disabled", true);
});
