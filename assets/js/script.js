const aboutPage = document.getElementById("about");
const projectsPage = document.getElementById("projects");
const contactPage = document.getElementById("contact");
const introPage = document.getElementById("intro");
//delayLoop function and (modified) display function courtesy of Travis Horn | https://travishorn.com/delaying-foreach-iterations-2ebd4b29ad30#:~:text=Now%20you%20can%20use%20delayLoop,to%20delay%20between%20each%20iteration.
const delayLoop = (fn, delay) => {
  return (x, i) => {
    setTimeout(() => {
      fn(x);
    }, i * delay);
  };
};

const typeWriter = (target, text, speed) => {
  const output = document.getElementById(target);
  let arr = text.split("");
  const display = s => output.innerHTML += s;
  arr.forEach(delayLoop(display, speed))
}


document.addEventListener("DOMContentLoaded", function(){
  for (let i = 1; i < 6; i++){
    if (i < 4){
      document.getElementById("t" + i).innerHTML += `&nbsp`;
    }
    if(i > 3){
      document.getElementById("t" + i).innerHTML += `&nbsp&nbsp&nbsp`
    }
  }
  setTimeout(()=>{typeWriter("t1", "Web Developer", 20)}, 500);
  $("header").fadeIn(2000)
  setTimeout(()=>{typeWriter("t2", "Problem Solver", 20)}, 1000) //700 = 14 * timeinterval
  setTimeout(()=>{typeWriter("t3", "Creative Thinker", 20)}, 1500) //*16
  setTimeout(()=>{typeWriter("t4", "Making cool creations,", 50)}, 2000)
  setTimeout(()=>{typeWriter("t5", "One line at a time", 50)}, 3500)
})

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
