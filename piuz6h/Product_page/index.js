let baza = parseInt(localStorage.getItem("baza"), 10);
let obj2 = { num: 1 };
let mImg = document.getElementById("mImg");
let sImg1 = document.getElementById("sImg10");
let sImg2 = document.getElementById("sImg20");
let sImg3 = document.getElementById("sImg30");
let sImg4 = document.getElementById("sImg40");
mImg.src = "../img/" + baza + "_1.jpg";
sImg1.src = "../img/" + baza + "_1.jpg";
sImg2.src = "../img/" + baza + "_2.jpg";
sImg3.src = "../img/" + baza + "_3.jpg";
sImg4.src = "../img/" + baza + "_4.jpg";
document.getElementById("left").onclick = function () {
  obj2.num -= 1;
  if (obj2.num === 0) {
    obj2.num = 4;
  }
  mImg.src = "../img/" + baza + "_" + obj2.num + ".jpg";
  console.log(obj2.num);
};
document.getElementById("right").onclick = function () {
  obj2.num += 1;
  if (obj2.num === 5) {
    obj2.num = 1;
  }
  mImg.src = "../img/" + baza + "_" + obj2.num + ".jpg";
};
document.getElementById("sImg10").onclick = function () {
  mImg.src = "../img/" + baza + "_1.jpg";
};
document.getElementById("sImg20").onclick = function () {
  mImg.src = "../img/" + baza + "_2.jpg";
};
document.getElementById("sImg30").onclick = function () {
  mImg.src = "../img/" + baza + "_3.jpg";
};
document.getElementById("sImg40").onclick = function () {
  mImg.src = "../img/" + baza + "_4.jpg";
};
document.getElementById("body").onload = function () {
  let n = document.getElementById("nazva");
  let con = document.getElementById("connection");
  let col = document.getElementById("color");
  let s1 = document.getElementById("spec1");
  let s2 = document.getElementById("spec2");
  let s3 = document.getElementById("spec3");
  let s4 = document.getElementById("spec4");
  let cntr = document.getElementById("country");
  if (baza === 1) {
    n.innerHTML = "Гарнітура дротова TechnoStorm Cloud II Red";
    con.innerHTML = "Інтерфейс під'єднання: 3.5 mm (mini-Jack)";
    col.innerHTML = "Колір: Red";
    s1.innerHTML = "Імпеданс, Ом: 60";
    s2.innerHTML = "Діапазон частот навушників, Гц: 15 - 25 000 Гц";
    s3.innerHTML = "Чутливість навушників, дБ: 98 ± 3";
    s4.innerHTML = "Чутливість мікрофона, дБ: -39 ± 3";
    cntr.innerHTML = "Країна-виробник: Китай";
  }
  if (baza === 2) {
    n.innerHTML = "Миша TechnoStorm Y 400 USB black";
    con.innerHTML = "Інтерфейс під'єднання: USB";
    col.innerHTML = "Колір: Black";
    s1.innerHTML = "Тип датчика: оптичний";
    s2.innerHTML = "Максимальна роздільна здатність сенсора, dpi: 3600";
    s3.innerHTML = "Кількість кнопок: 6";
    s4.innerHTML = "Розмір: середній";
    cntr.innerHTML = "Країна-виробник: Китай";
  }
  if (baza === 3) {
    n.innerHTML = "Миша TechnoStorm M42 RGB USB Black";
    con.innerHTML = "Інтерфейс під'єднання: USB";
    col.innerHTML = "Колір: Black";
    s1.innerHTML = "Тип датчика: оптичний";
    s2.innerHTML = "Максимальна роздільна здатність сенсора, dpi: 16000";
    s3.innerHTML = "Кількість кнопок: 6";
    s4.innerHTML = "Розмір: середній";
    cntr.innerHTML = "Країна-виробник: Китай";
  }
  if (baza === 4) {
    n.innerHTML = "Клавіатура дротова TechnoStorm Alloy Origins 60 HX";
    con.innerHTML = "Інтерфейс під'єднання: USB";
    col.innerHTML = "Колір: Black";
    s1.innerHTML = "Розкладка: Eng/Ru";
    s2.innerHTML = "Корпус: Металевий";
    s3.innerHTML = "Кількість кнопок: 61";
    s4.innerHTML = "Ресурс кнопок: 80 млн";
    cntr.innerHTML = "Країна-виробник: Китай";
  }
};
