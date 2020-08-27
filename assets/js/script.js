let aboutPage = document.getElementById("about");
let projectsPage = document.getElementById("projects");
let contactPage = document.getElementById("contact");
let badge = document.getElementById("badge");


$(function () {
  // Grab the template script
  var theTemplateScript = $("#project-template").html();
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);
  //display the template in html
  $('#grid').html(theTemplate(repository)); 
});

document.addEventListener("click", function(event){
  if(event.target.matches("#about-nav")){
    aboutPage.style.display = "block";
    projectsPage.style.display = "none";
    contactPage.style.display = "none";
  }
  if(event.target.matches("#projects-nav")){
    aboutPage.style.display = "none";
    projectsPage.style.display = "block";
    contactPage.style.display = "none";
  } 
  if(event.target.matches("#contact-nav")){
    aboutPage.style.display = "none";
    projectsPage.style.display = "none";
    contactPage.style.display = "block";
  }
  // if(event.target.matches("#resume-nav")){
  //   badge.style.top = "10%";
  // }
})
