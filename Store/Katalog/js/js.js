$('.sl').slick({
 	asNavFor: '.sl2',
 });
$('.sl2').slick({
 	autoplaySpeed: 7000,
 	asNavFor: '.sl',
 	slidesToShow:7,
 	centerMode: true,
 	centerPadding: '40px',
 	focusOnSelect: true,
 	arrows: false,
 });
$("#buy_car").click(function() {
    $("#buy").removeClass("buyF").addClass("buyN");
});
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }