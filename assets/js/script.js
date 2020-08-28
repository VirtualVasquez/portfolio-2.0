let aboutPage = document.getElementById("about");
let projectsPage = document.getElementById("projects");
let contactPage = document.getElementById("contact");
let badge = document.getElementById("badge");

//delayLoop function and (modified) display function courtesy of Travis Horn | https://travishorn.com/delaying-foreach-iterations-2ebd4b29ad30#:~:text=Now%20you%20can%20use%20delayLoop,to%20delay%20between%20each%20iteration.
const delayLoop = (fn, delay) => {
  return (x, i) => {
    setTimeout(() => {
      fn(x);
    }, i * delay);
  };
};

function typeWriter(target, text, speed){
  const output = document.getElementById(target);
  let arr = text.split("");
  const display = s => output.innerHTML += s;
  arr.forEach(delayLoop(display, speed))
}



document.addEventListener("DOMContentLoaded", function(){
  
  typeWriter("t1", "Web Developer", 50)
  typeWriter("t2", "Problem Solver", 50)
  typeWriter("t3", "Creative Thinker", 50)
  typeWriter("t4", "Making cool creations with clean code", 20)
  

})
//   p.then((message) = > {
//     console.log("This is in the then" +  message)
//   }).catch((message) => {
//     console.log("this is in the catch" + message)
//   })

// });



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
