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
      word20: "Facebook",
      word21: "LinkedIn",
      word22: "Instagram",
      word23: "Youtube",
      word24: "Tbilisi 0162, Georgia I. Chavchavadze Avenue N82",
      word25: "Contact",
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
      word20: "ფეისბუკი",
      word21: "ლინკედინი",
      word22: "ინსტაგრამი",
      word23: "იუთუბი",
      word24: "თბილისი 0162, საქართველო ი.ჭავჭავაძის გამზირი N82",
      word25: "კონტაქტი",
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
      trans20.textContent = language.eng.word20;
      trans21.textContent = language.eng.word21;
      trans22.textContent = language.eng.word22;
      trans23.textContent = language.eng.word23;
      trans24.textContent = language.eng.word24;
      trans25.textContent = language.eng.word25;
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
      trans20.textContent = language.geo.word20;
      trans21.textContent = language.geo.word21;
      trans22.textContent = language.geo.word22;
      trans23.textContent = language.geo.word23;
      trans24.textContent = language.geo.word24;
      trans25.textContent = language.geo.word25;
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
  trans20.textContent = language.eng.word20;
  trans21.textContent = language.eng.word21;
  trans22.textContent = language.eng.word22;
  trans23.textContent = language.eng.word23;
  trans24.textContent = language.eng.word24;
  trans25.textContent = language.eng.word25;
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
  trans20.textContent = language.geo.word20;
  trans21.textContent = language.geo.word21;
  trans22.textContent = language.geo.word22;
  trans23.textContent = language.geo.word23;
  trans24.textContent = language.geo.word24;
  trans25.textContent = language.geo.word25;
}