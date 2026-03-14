let usd = document.querySelector("#input");
let eur = document.querySelector("#inputt");

usd.addEventListener("input", () => {
  let usdd = usd.value;
  let e = usdd * 0.8;
  eur.value = e;
  // ----------------------FORMULA--------------------------------------------
  // EUR=USD×0.87
});
eur.addEventListener("input", () => {
  let euro = eur.value;
  let u = euro * 1.14;
  usd.value = u;
});
