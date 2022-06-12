var session_lang=localStorage.getItem("language");
function changeLanguage(lang) {
    localStorage.setItem("language",lang);
    funEng()
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
      word10: "Email",
      word11: "Password",
      word12: "Repeat The Password",
      word13: "Registration Date",
      word14: "Name",
      word15: "Country",
      word16: "City",
      word17: "Phone Number",
      word18: "Register",
      word19: "Auth",
      word20: "Registration",
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
      word10: "იმეილი",
      word11: "პაროლი",
      word12: "გაიმეორეთ პაროლი",
      word13: "რეგისტრაციის თარიღი",
      word14: "სახელი",
      word15: "ქვეყანა",
      word16: "ქალაქი",
      word17: "ტელეფონის ნომერი",
      word18: "რეგისტრაცია",
      word19: "ავტორიზაცია",
      word20: "რეგისტრაცია",
    }
  }

function funEng(){
    var session_lang=localStorage.getItem("language");
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
      trans16.textContent = language.eng.word16;
      trans17.textContent = language.eng.word17;
      trans18.textContent = language.eng.word18;
      trans20.textContent = language.eng.word20;
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
      trans16.textContent = language.geo.word16;
      trans17.textContent = language.geo.word17;
      trans18.textContent = language.geo.word18;
      trans20.textContent = language.geo.word20;
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
  trans16.textContent = language.eng.word16;
  trans17.textContent = language.eng.word17;
  trans18.textContent = language.eng.word18;
  trans20.textContent = language.eng.word20;
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
  trans16.textContent = language.geo.word16;
  trans17.textContent = language.geo.word17;
  trans18.textContent = language.geo.word18;
  trans20.textContent = language.geo.word20;
}

function checkmail() {
  var ps = document.getElementById("ps").value
  var ps2 = document.getElementById("ps2").value
  let tx1 = document.getElementById("tx1")
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let usercheck = document.getElementById("inp1").value;
  let tx = document.getElementById("tx")
  

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


}

setInterval(() => {
    var ps = document.getElementById("ps").value

    var pw = document.querySelector(".pw");
    var vstrong = /[-+_!@#$;'%^^&*/?!.,]/g;
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
    if (ps.match(vstrong) && ps.match(vstrong2) && ps.match(vstrong3) && ps.match(vstrong4)) {
        pw.style.color = "#1e7c10"
        if (session_lang === "eng")
        {
            document.querySelector(".pw").innerHTML = "Very Strong"
        }

        else
        {
            document.querySelector(".pw").innerHTML = "ძალიან ძლიერი"
        }
        
    }
    else if (ps.match(strong) && ps.match(strong2) && ps.match(strong3)) {
        pw.style.color = "#2cb117"
        if (session_lang === "eng")
        {
            document.querySelector(".pw").innerHTML = "Strong"
        }

        else
        {
            document.querySelector(".pw").innerHTML = "ძლიერი"
        }
        
    }
    else if (ps.match(medium3) && ps.match(medium4) || ps.match(medium5) && ps.match(medium4)) {
        pw.style.color = "gray"
        if (session_lang === "eng")
        {
            document.querySelector(".pw").innerHTML = "Medium"
        }

        else
        {
            document.querySelector(".pw").innerHTML = "საშუალო"
        }
    }
    else if (ps.match(weak)) {
        pw.style.color = "#e40808"
        if (session_lang === "eng")
        {
            document.querySelector(".pw").innerHTML = "Weak"
        }

        else
        {
            document.querySelector(".pw").innerHTML = "სუსტი"
        }
    }
    else if (ps == "") {
        document.querySelector(".pw").innerHTML = ""
    }
}, 100);





var myDate = document.querySelector(".dt");
var today = new Date();
if ((today.getMonth() + 1) > 9) {
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  myDate.setAttribute("value", date)

}
else {
  var date = today.getFullYear() + '-' + "0" + (today.getMonth() + 1) + '-' + today.getDate();
  myDate.setAttribute("value", date)
}
var today = new Date();





