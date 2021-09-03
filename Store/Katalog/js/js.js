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
