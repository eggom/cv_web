(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 950);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }

    //===== WOW Scroll Spy
    //var wow = new WOW({
        //disabled for mobile
    //    mobile: false
    //});
    //wow.init();

})();