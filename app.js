if (localStorage.getItem("mode") == null) {
    localStorage.setItem("mode", "dark");
}

var today = new Date();

var dialog = setInterval('check("dialog","07/23/2018", "08/01/2019")', 500);
var spacetimer = setInterval('check("spacetimer","02/14/2021", today)', 500);

var total = setInterval('checkWithoutTime("experience")', 500);
// var description_total = setInterval('checkWithoutTime("desc_exp")', 500);

function check(id, startTime, endTime) {
    if (chkObject(id) == true) {
        document.getElementById(id).innerText = WorkedTime(new Date(startTime), new Date(endTime));
    }
    else {
        // window.alert('false');
    }
}

function checkWithoutTime(id) {
    if (chkObject(id) == true) {
        var time = WorkedTime(new Date("02/14/2021"), new Date(today));
        document.getElementById(id).innerText = 1 + Number(time.split(' ', 1)[0]) + " years " + time.substring(6);
        total = window.clearInterval(total)
    }
    else {
        window.alert('false');
    }
}

function chkObject(elemId) {
    return (document.getElementById(elemId)) ? true : false;
}

function WorkedTime(date_1, date_2) {

    //convert to UTC
    var date2_UTC = new Date(Date.UTC(date_2.getUTCFullYear(), date_2.getUTCMonth(), date_2.getUTCDate()));
    var date1_UTC = new Date(Date.UTC(date_1.getUTCFullYear(), date_1.getUTCMonth(), date_1.getUTCDate()));


    var yAppendix, mAppendix, dAppendix;


    //--------------------------------------------------------------
    var days = date2_UTC.getDate() - date1_UTC.getDate();
    if (days < 0) {

        date2_UTC.setMonth(date2_UTC.getMonth() - 1);
        days += DaysInMonth(date2_UTC);
    }
    //--------------------------------------------------------------
    var months = date2_UTC.getMonth() - date1_UTC.getMonth();
    if (months < 0) {
        date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
        months += 12;
    }
    //--------------------------------------------------------------
    var years = date2_UTC.getFullYear() - date1_UTC.getFullYear();

    if (years > 1) yAppendix = " years ";
    else yAppendix = " year ";
    if (months > 1) mAppendix = " months ";
    else mAppendix = " month ";
    if (days > 1) dAppendix = " days ";
    else dAppendix = " day ";

    var time;

    if (months < 1)
        time = years + yAppendix;
    else
        time = years + yAppendix + " and " + months + mAppendix;

    return time;
}


function DaysInMonth(date2_UTC) {
    var monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
    var monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
    var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
    return monthLength;
}

function LightMode() {
    $("body").removeClass("dark");
    $("body").addClass("light");

    //toggle switch
    // var blacktoggle = document.getElementById('blackToggle');
    // var whitetoggle = document.getElementById('whiteToggle');
    var toggle = document.getElementById('toggle');

    if (toggle.innerText === ".light_mode()") {
        toggle.innerText = ".dark_mode()";
        localStorage.setItem("mode", "light");
    }

    // if (blacktoggle.style.display === "none") {
    //     whitetoggle.style.display = "none";
    //     blacktoggle.style.display = "block";
    // }

    //dark mode elements
    const darkBg = Array.from(document.getElementsByClassName('background'));
    const darkFg = Array.from(document.getElementsByClassName('foreground'));
    const darkCr = Array.from(document.getElementsByClassName('current'));
    const darkCm = Array.from(document.getElementsByClassName('comment'));
    const darkCy = Array.from(document.getElementsByClassName('cyan'));
    const darkGr = Array.from(document.getElementsByClassName('green'));
    const darkOr = Array.from(document.getElementsByClassName('orange'));
    const darkPi = Array.from(document.getElementsByClassName('pink'));
    const darkPu = Array.from(document.getElementsByClassName('purple'));
    const darkRe = Array.from(document.getElementsByClassName('red'));
    const darkYe = Array.from(document.getElementsByClassName('yellow'));

    darkBg.forEach(elems => {
        elems.classList.remove('background');
        elems.classList.add('background-light');
    });
    darkFg.forEach(elems => {
        elems.classList.remove('foreground');
        elems.classList.add('foreground-light');
    });
    darkCr.forEach(elems => {
        elems.classList.remove('current');
        elems.classList.add('current-light');
    });
    darkCm.forEach(elems => {
        elems.classList.remove('comment');
        elems.classList.add('comment-light');
    });
    darkCy.forEach(elems => {
        elems.classList.remove('cyan');
        elems.classList.add('cyan-light');
    });
    darkGr.forEach(elems => {
        elems.classList.remove('green');
        elems.classList.add('green-light');
    });
    darkOr.forEach(elems => {
        elems.classList.remove('orange');
        elems.classList.add('orange-light');
    });
    darkPi.forEach(elems => {
        elems.classList.remove('pink');
        elems.classList.add('pink-light');
    });
    darkPu.forEach(elems => {
        elems.classList.remove('purple');
        elems.classList.add('purple-light');
    });
    darkRe.forEach(elems => {
        elems.classList.remove('red');
        elems.classList.add('red-light');
    });
    darkYe.forEach(elems => {
        elems.classList.remove('yellow');
        elems.classList.add('yellow-light');
    });
}

function DarkMode() {
    $("body").removeClass("light");
    $("body").addClass("dark");

    //toggle switch
    // var blacktoggle = document.getElementById('blackToggle');
    // var whitetoggle = document.getElementById('whiteToggle');
    var toggle = document.getElementById('toggle');

    if (toggle.innerText === ".dark_mode()") {
        toggle.innerText = ".light_mode()";
        localStorage.setItem("mode", "dark");
    }

    // if (whitetoggle.style.display === "none") {
    //     blacktoggle.style.display = "none";
    //     whitetoggle.style.display = "block";
    // }

    //light mode elements
    const lightBg = Array.from(document.getElementsByClassName('background-light'));
    const lightFg = Array.from(document.getElementsByClassName('foreground-light'));
    const lightCr = Array.from(document.getElementsByClassName('current-light'));
    const lightCm = Array.from(document.getElementsByClassName('comment-light'));
    const lightCy = Array.from(document.getElementsByClassName('cyan-light'));
    const lightGr = Array.from(document.getElementsByClassName('green-light'));
    const lightOr = Array.from(document.getElementsByClassName('orange-light'));
    const lightPi = Array.from(document.getElementsByClassName('pink-light'));
    const lightPu = Array.from(document.getElementsByClassName('purple-light'));
    const lightRe = Array.from(document.getElementsByClassName('red-light'));
    const lightYe = Array.from(document.getElementsByClassName('yellow-light'));

    lightBg.forEach(elems => {
        elems.classList.remove('background-light');
        elems.classList.add('background');
    });
    lightFg.forEach(elems => {
        elems.classList.remove('foreground-light');
        elems.classList.add('foreground');
    });
    lightCr.forEach(elems => {
        elems.classList.remove('current-light');
        elems.classList.add('current');
    });
    lightCm.forEach(elems => {
        elems.classList.remove('comment-light');
        elems.classList.add('comment');
    });
    lightCy.forEach(elems => {
        elems.classList.remove('cyan-light');
        elems.classList.add('cyan');
    });
    lightGr.forEach(elems => {
        elems.classList.remove('green-light');
        elems.classList.add('green');
    });
    lightOr.forEach(elems => {
        elems.classList.remove('orange-light');
        elems.classList.add('orange');
    });
    lightPi.forEach(elems => {
        elems.classList.remove('pink-light');
        elems.classList.add('pink');
    });
    lightPu.forEach(elems => {
        elems.classList.remove('purple-light');
        elems.classList.add('purple');
    });
    lightRe.forEach(elems => {
        elems.classList.remove('red-light');
        elems.classList.add('red');
    });
    lightYe.forEach(elems => {
        elems.classList.remove('yellow-light');
        elems.classList.add('yellow');
    });

}

function ModeChange() {

    if ($("body").hasClass("dark")) {
        LightMode();
    } else {
        DarkMode();
    }
}

$(function () {

    if (localStorage.getItem("mode") === "light") {
        LightMode();
    }

});