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
        word10: "Study",
        word11: "FACULTY OF BUSINESS AND TECHNOLOGIES",
        word12: "The faculty strives to provide the opportunities to gain education, which meets worldwide recognized, modern standards; to train competitive and highly- qualified specialists at Bachelor’s, Master’s and Doctoral programs; to create student-centered academic environment, provide academic freedom and ensure student competitiveness on international employment market.",
        word13: "Students are offered programs at three educational stages:",
        word14: "Undergraduate Programs",
        word15: "Master's Programs",
        word16: "PHD Programs",
        word17: "Undergraduate Programs",
        word18: "Business Administration (Management) Unified National Examination Code: 1950101 Academic Degree and Qualification Awarded: Bachelor of Business Administration (BBA in Management) Program Volume: 240 credits (ECTS) Program Fee: 2250 GEL Program Status: Accredited",
        word19: "Program",
        word20: "Diploma from the University of Chichester",
        word21: "Diploma from Staffordshire University",
        word22: "Diploma from Bragancha Polytechnic Institute",
        word23: "International certification",
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
        word10: "სწავლება",
        word11: "ბიზნესისა და ტექნოლოგიების ფაკულტეტი",
        word12: "ფაკულტეტის მიზანია მსოფლიოში აღიარებული, თანამედროვე სტანდარტების შესაბამისი განათლების მიღების შესაძლებლობის უზრუნველყოფა. კონკურენტუნარიანი და მაღალკვალფიციური სპეციალისტების მომზადება საბაკალავრო, სამაგისტრო და სადოქტორო საფეხურებზე. სტუდენტზე ორიენტირებული აკადემიური გარემოს შექმნა, აკადემიური თავისუფლების ხელშეწყობა და სტუდენტთა კონკურენტუნარიანობის უზრუნველყოფა დასაქმების საერთაშორისო ბაზარზე.",
        word13: "სტუდენტებისთვის შეთავაზებულია საგანმანათლებლო პროგრამები უმაღლესი განათლების სამივე საფეხურზე:",
        word14: "ბაკალავრიატი",
        word15: "მაგისტრატურა",
        word16: "დოქტორანტურა",
        word17: "ბაკალავრიატი",
        word18: "ბიზნესის ადმინისტრირება (მენეჯმენტი) ერთიანი ეროვნული გამოცდების კოდი: 1950101 მისანიჭებელი აკადემიური ხარისხი და კვალიფიკაცია: ბიზნესის ადმინისტრირების ბაკალავრი მენეჯმენტში (BBA in Management) პროგრამის მოცულობა: 240 კრედიტი (ECTS) პროგრამის საფასური: 2250 ლარი პროგრამის სტატუსი: აკრედიტებული",
        word19: "პროგრამა",
        word20: "ჩიჩესტერის უნივერსიტეტის დიპლომი",
        word21: "სტეფორდშირის უნივერსიტეტის დიპლომი",
        word22: "ბრაგანჩას პოლიტექნიკური ინსტიტუტის დიპლომი",
        word23: "საერთაშორისო სერტიფიცირება",
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
        trans17.textContent = language.eng.word17;
        trans18.textContent = language.eng.word18;
        trans19.textContent = language.eng.word19;
        trans20.textContent = language.eng.word20;
        trans21.textContent = language.eng.word21;
        trans22.textContent = language.eng.word22;
        trans23.textContent = language.eng.word23;

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
        trans19.textContent = language.geo.word19;
        trans20.textContent = language.geo.word20;
        trans21.textContent = language.geo.word21;
        trans22.textContent = language.geo.word22;
        trans23.textContent = language.geo.word23;
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
    trans19.textContent = language.eng.word19;
    trans20.textContent = language.eng.word20;
    trans21.textContent = language.eng.word21;
    trans22.textContent = language.eng.word22;
    trans23.textContent = language.eng.word23;
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
    trans19.textContent = language.geo.word19;
    trans20.textContent = language.geo.word20;
    trans21.textContent = language.geo.word21;
    trans22.textContent = language.geo.word22;
    trans23.textContent = language.geo.word23;

}



function AJAX(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    if (xhr.status === 200) {
        console.log(xhr.responseText);
        cb(xhr.responseText)
    }
}
fetch('http://youtube.com/youtube.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(JSON.stringify(myJson));
    });

