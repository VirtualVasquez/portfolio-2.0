$('.carousel').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  dots:false,
  arrows:false,
  draggable: false
});

$('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.carousel').slick('slickGoTo', slideno -1);
});

$(function () {
  // Grab the template script
  var theTemplateScript = $("#project-template").html();
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);
  //display the template in html
  $('.content-placeholder').html(theTemplate(repository));
});
