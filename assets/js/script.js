//function to load About Me
//function to load previous projects
//function to load skill set
//function to load contact information


//nav event listeners
document.addEventListener("click", function(event){
    if(event.target.matches("#about-me")){
        document.body.style.backgroundColor = "red";
    }
    if(event.target.matches("#projects")){
        document.body.style.backgroundColor = "blue";
    } 
    if(event.target.matches("#skill-set")){
        document.body.style.backgroundColor = "green";
    } 
    if(event.target.matches("#contact")){
        document.body.style.backgroundColor = "yellow";
    } 
})