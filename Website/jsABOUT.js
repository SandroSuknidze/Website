var session_lang = localStorage.getItem("language");
function changeLanguage(lang) {
    localStorage.setItem("language", lang);
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
        word10: "ABOUT US",
        word11: "Business and Technology University represents higher education and research unit that integrates business and modern digital technologies. Teaching, education and research activities are held by consolidating students, academic staff and researchers.",
        word12: "ABOUT US"
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
        word10: "ჩვენს შესახებ",
        word11: "ბიზნესისა და ტექნოლოგიების უნივერსიტეტი წარმოადგენს უმაღლეს საგანმანათლებლო და კვლევით ერთეულს. სივრცე, სადაც ინტეგრირდება ბიზნესი და თანამედროვე ციფრული ტექნოლოგიები  სტუდენტების, აკადემიური პერსონალისა და მკვლევარების გაერთიანებით, უნივერსიტეტში ხდება სწავლა, სწავლება, კვლევა.",
        word12: "ჩვენს შესახებ",
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
}