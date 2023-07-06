
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createBoldText("Sajda Kabir's Website");
  await delay(700);
  createText("Type cd for a list of commands");
  createText("Type clear to clear terminal");
 
  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/sajda";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "cd"){
    trueValue(value);
    createText("Type a command:");
    createCode("about", "Who am i and what do i do.");
    createCode("projects", "My github page with my projects. Follow me there :)");
    createCode("social -a", "All my social networks.");
    createCode("Other commands:", "email github inspiration linkedin twitter");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "projects" || value === "cd projects"){
    trueValue(value);
    createText("<a href='https://github.com/sajdakabir' target='_blank'><i class='fab fa-github white'></i> github.com/sajdakabir</a>")
  }
  else if(value === "about" || value === "cd about"){
    trueValue(value);
    createText("Hi👋, my name is Sajda Kabir!")
    createText("I am a Backend Developer. I create, find, and fix bugs.")
    createText("I've met some pretty cool people through the internet, so if you're here, reach out on any of the social media listed!")
  }
  else if(value === "inspiration" || value === "cd inspiration"){
    trueValue(value);
    createText("Health + Productivity + Mindset:")
    createText("Naval Ravikant, Andrew Huberman, Sam Altman, Paul Graham, Alex Hormozi, Tom Bileau, David Goggins, Ryan Holiday, Patrick Bet-David")
  }
  else if(value === "twitter" || value === "cd twitter") {
      window.location.href = "https://twitter.com/sajdakabir";
  }
  else if(value === "github" || value === "cd github") {
      window.location.href = "https://github.com/sajdakabir";
  }
else if(value === "linkedin" || value === "cd linkedin") {
    window.location.href = "https://www.linkedin.com/in/sajdakabir";
}
  else if (value === "email"|| value === "cd email") {
      var subject = encodeURIComponent("Saying Hello!");
      var body = encodeURIComponent("Sup! My name is"); 
      var mailtoLink = "mailto:sajda.kbir@gmail.com?subject=" + subject + "&body=" + body; // 
  
      window.location.href = mailtoLink;

  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/sajdakabir' target='_blank'><i class='fab fa-github white'></i> github.com/sajdakabir</a>")
    createText("<a href='https://www.linkedin.com/in/sajdakabir/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/sajdakabir</a>")
    createText("<a href='https://twitter.com/sajdakabir' target='_blank'><i class='fab fa-twitter white'></i> twitter.com/sajdakabir</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}
function createBoldText(text, classname){
  const h1 = document.createElement("h1");
  
  h1.innerHTML =
  text
  ;
  app.appendChild(h1);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();