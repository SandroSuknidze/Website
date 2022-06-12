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
        word10: "Library",
        word11: "MIT – Technology-Review",
        word12: "Founded at Massachusetts University of Technology in 1899, it is an independent media company. Their interviews, live broadcasts, and podcasts have always been unbiased and focused on current world technology processes, their impact on business, politics, and the economy.",
        word13: "Harvard Business Review",
        word14: "Harvard Business Publishing was founded in 1994 as a non-profit organization affiliated with Harvard University. The mission of the publishing house is to improve management in daily life.",
        word15: "MIT Sloan Management Review",
        word16: "The base aims to explore how leadership and management are transformed in today’s changing world. Tips help leaders seize exciting opportunities and cope with modern challenges.",
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
        word10: "ბიბლიოთეკა",
        word11: "MIT – ტექნიკა-მიმოხილვა",
        word12: "დაარსდა მასაჩუსეტსის ტექნოლოგიების უნივერსიტეტში 1899 წელს და წარმოადგენს დამოუკიდებელ მედია კომპანიას.მათი ინტერვიუები, პირდაპირი ჩართვები და პოტკასტები ყოველთვის მიუკერძოებელია და ეთმობა მსოფლიოში მიმდინარე თანამედროვე ტექნოლოგიურ პროცესებს, მათ გავლენას ბიზნესზე, პოლიტიკასა და ეკონომიკაზე.",
        word13: "ჰარვარდის ბიზნეს მიმოხილვა",
        word14: "ჰარვარდის ბიზნეს გამომცემლობა 1994 წელს დაარსდა,როგორც ჰარვარდის უნივერსიტეტის დაქვემდებარებაში არსებული არაკომერციული ორგანიზაცია. გამომცემლობის მისიაა ყოველდღიურ ცხოვრებაში მართვის მენეჯმენტის გაუმჯობესება",
        word15: "MIT სლოუნის მენეჯმენტის მიმოხილვა",
        word16: "ბაზის მიზანია გამოიკვლიოს, თუ როგორ გარდაიქმნება ლიდერობა და მენეჯმენტი დღევანდელ ცვალებად სამყაროში. რჩევები ეხმარება ლიდერებს აითვისონ საინტერესო შესაძლებლობები და გაუმკლავდნენ თანამედროვე გამოწვევებს.",
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
        trans16.textContent = language.eng.word16;
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
}