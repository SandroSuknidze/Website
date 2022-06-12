var session_lang = localStorage.getItem("language");
function changeLanguage(lang) {
  localStorage.setItem("language", lang);
  funEng();
}

var language = {
  eng: {
    word1: "Home",
    word2: "Study",
    word3: "Library",
    word4: "About",
    word5: "Contact",
    word6: "Login",
    word7: "Sign Up",
    word8: "The University of Business and Technology was founded on September 16, 2016.",
    word9: "Copyright © 2021 - BTU",
    word10: "BTU",
    word11: "BTU University",
    word12: "500 Women In Technology",
    word13: "4962 Number Of Students",
    word14: "345 Courses And Trainings",
    word15: "342 Partners",
    word16: "Date:",
    word17: "Time:",
  },
  geo: {
    word1: "მთავარი",
    word2: "სწავლება",
    word3: "ბიბლიოთეკა",
    word4: "შესახებ",
    word5: "კონტაქტი",
    word6: "შესვლა",
    word7: "რეგისტრაცია",
    word8: "ბიზნესისა და ტექნოლოგიების უნივერსიტეტი 2016 წლის 16 სექტემბერს დაარსდა.",
    word9: "ქოფირაით © 2021 - ბთუ",
    word10: "ბთუ",
    word11: "ბთუ უნივერსიტეტი",
    word12: "500 ქალი ტექნოლოგიებში",
    word13: "4962 სტუდენტი",
    word14: "345 კურსი და ტრენინგი",
    word15: "342 პარტნიორი",
    word16: "თარიღი:",
    word17: "დრო:",
  }
}

function funEng() {
  var session_lang = localStorage.getItem("language");
  if (session_lang === "eng") {
    trans1.textContent = language.eng.word1;
    trans2.textContent = language.eng.word2;
    trans3.textContent = language.eng.word3;
    trans4.textContent = language.eng.word4;
    trans5.textContent = language.eng.word5;
    trans6.textContent = language.eng.word6;
    trans7.textContent = language.eng.word7;
    trans8.textContent = language.eng.word8;
    trans9.textContent = language.eng.word9;
    trans10.textContent = language.eng.word10;
    trans11.textContent = language.eng.word11;
    trans12.textContent = language.eng.word12;
    trans13.textContent = language.eng.word13;
    trans14.textContent = language.eng.word14;
    trans15.textContent = language.eng.word15;
    ajax.textContent = language.eng.word16;
    ajax2.textContent = language.eng.word17;
  }

  if (session_lang === "geo") {
    trans1.textContent = language.geo.word1;
    trans2.textContent = language.geo.word2;
    trans3.textContent = language.geo.word3;
    trans4.textContent = language.geo.word4;
    trans5.textContent = language.geo.word5;
    trans6.textContent = language.geo.word6;
    trans7.textContent = language.geo.word7;
    trans8.textContent = language.geo.word8;
    trans9.textContent = language.geo.word9;
    trans10.textContent = language.geo.word10;
    trans11.textContent = language.geo.word11;
    trans12.textContent = language.geo.word12;
    trans13.textContent = language.geo.word13;
    trans14.textContent = language.geo.word14;
    trans15.textContent = language.geo.word15;
    ajax.textContent = language.geo.word16;
    ajax2.textContent = language.geo.word17;
  }
}


if (session_lang === "eng") {
  trans1.textContent = language.eng.word1;
  trans2.textContent = language.eng.word2;
  trans3.textContent = language.eng.word3;
  trans4.textContent = language.eng.word4;
  trans5.textContent = language.eng.word5;
  trans6.textContent = language.eng.word6;
  trans7.textContent = language.eng.word7;
  trans8.textContent = language.eng.word8;
  trans9.textContent = language.eng.word9;
  trans10.textContent = language.eng.word10;
  trans11.textContent = language.eng.word11;
  trans12.textContent = language.eng.word12;
  trans13.textContent = language.eng.word13;
  trans14.textContent = language.eng.word14;
  trans15.textContent = language.eng.word15;
  ajax.textContent = language.eng.word16;
  ajax2.textContent = language.eng.word17;
}

if (session_lang === "geo") {
  trans1.textContent = language.geo.word1;
  trans2.textContent = language.geo.word2;
  trans3.textContent = language.geo.word3;
  trans4.textContent = language.geo.word4;
  trans5.textContent = language.geo.word5;
  trans6.textContent = language.geo.word6;
  trans7.textContent = language.geo.word7;
  trans8.textContent = language.geo.word8;
  trans9.textContent = language.geo.word9;
  trans10.textContent = language.geo.word10;
  trans11.textContent = language.geo.word11;
  trans12.textContent = language.geo.word12;
  trans13.textContent = language.geo.word13;
  trans14.textContent = language.geo.word14;
  trans15.textContent = language.geo.word15;
  ajax.textContent = language.geo.word16;
  ajax2.textContent = language.geo.word17;
}

function checkmail() {
  var ps = document.getElementById("ps").value
  var ps2 = document.getElementById("ps2").value
  let tx1 = document.getElementById("tx1")
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let usercheck = document.getElementById("inp1").value;
  let tx = document.getElementById("tx")

  var vstrong = /[-+_!@#$%^&*/?!.,]/g;
  var vstrong2 = /[a-z]/g;
  var vstrong3 = /[A-Z-0-9]/g;
  var vstrong4 = /[a-zA-Z0-9]/g;
  var strong = /[a-z]/g;
  var strong2 = /[A-Z]/g;
  var strong3 = /[0-9]/g;
  var medium3 = /[a-z]/g;
  var medium4 = /[0-9]/g;
  var medium5 = /[A-Z]/g;
  var weak = /[a-z]/g;

  if (usercheck.match(mailformat)) {
    tx.style.display = "none";
  }
  else {
    tx.style.display = "block";
  }

  if (ps == ps2) {
    tx1.style.display = "none";
  }

  else {
    tx1.style.display = "block";
  }


  if (ps.match(vstrong) && ps.match(vstrong2) && ps.match(vstrong3) && ps.match(vstrong4)) {
    console.log("very strong")
  }
  else if (ps.match(strong) && ps.match(strong2) && ps.match(strong3)) {
    console.log("strong")
  }
  else if (ps.match(medium3) && ps.match(medium4) || ps.match(medium5) && ps.match(medium4)) {
    console.log("medium")
  }
  else if (ps.match(weak)) {
    console.log("weak")
  }
}










var getJSON = function (url, callback) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function () {
    callback(null, xhr.response);
  };
  xhr.send();
};

getJSON('http://time.jsontest.com', function (err, data) {

  var text = `${data.date}`
  var text2 = `${data.time + " (GMT)"}`

  document.querySelector("#aja").innerHTML = text;
  document.querySelector("#aja2").innerHTML = text2;

});



var k = 1;
fun(k);
setInterval(next, 4000)


function next() {
  fun(k += 1)
}

function previous() {
  fun(k -= 1)
}


function fun(n) {
  var image = document.getElementsByClassName("image");

  if (n > image.length) {
    k = 1;
  }

  if (n < 1) {
    k = image.length;
  }

  for (i = 0; i < image.length; i++) {
    image[i].style.display = "none";
  }

  image[k - 1].style.display = "block";
  image[k - 1].style.display += "active";

}

