function toggleDiv() {

    if ($(window).width() < 768) {

        $("nav.navbar-default").hide();

    } else {

        $("nav.navbar-default").show();

    }

}

$(document).ready(function () {
    toggleDiv();

    $(window).resize(function () {
        toggleDiv();
    });

});
