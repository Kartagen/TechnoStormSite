let obj = { baza: 0 };
document.getElementById("nov1").onclick = function () {
  obj.baza = 1;
  localStorage.setItem("baza", 1);
};

document.getElementById("nov2").onclick = function () {
  obj.baza = 2;
  localStorage.setItem("baza", 2);
};

document.getElementById("nov3").onclick = function () {
  obj.baza = 3;
  localStorage.setItem("baza", 3);
};
document.getElementById("nov4").onclick = function () {
  obj.baza = 4;
  localStorage.setItem("baza", 4);
};
