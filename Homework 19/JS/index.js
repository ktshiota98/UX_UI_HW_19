console.log("Your index.js file is loaded correctly!");
var portfolio= $("li");
$("portfolio").click(function() {
    $('html, body').animate({
        scrollTop: $(".myWork").offset().top
    }, 5000);
});