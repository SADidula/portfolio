$(function () {
    if (localStorage.getItem("mode") === "light") {

        $("body").removeClass("dark");
        $("body").addClass("light");
        
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

});