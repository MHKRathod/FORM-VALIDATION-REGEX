

let formdata = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptymessage = document.querySelectorAll(".empty-field");
let showPasswordBtn = document.querySelector(".btn");
let firstName,lastName,email,password;
let fnflag,lnflag,emflag,pwdflag;
let fntarget,lntarget,emtarget,pwdtarget;
let field;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


for (let errorMessage of errorMessages){
  errorMessage.classList.add("d-none");
}

for(let message of emptymessage){
  message.classList.add("d-none");
}


formdata.addEventListener("keyup", (e) => {
  e.preventDefault();
  field = e.target.dataset.key;
  switch (field){
    case "firstName":
      firstName = e.target.value;
      fntarget = e.target;
      break;
    case "lastName":
      lastName = e.target.value;
      lntarget =e.target;
      break;
    case "email":
      email = e.target.value;
      emtarget = e.target;
      break;
    case "password":
      password = e.target.value;
      pwdtarget= e.target;
      break;   
    default:
      firstName = lastName = email = password = "";
      break;   
  }
})


submitButton.addEventListener("click",(e) => {
  e.preventDefault();
  console.log(firstName,lastName,email,password)
 if(firstName){
   if(!nameRegex.test(firstName)) {
    fntarget.classList.add("error")
    errorMessages[0].classList.remove("d-none")
    console.log("name must contain only aplhabets")
    fnflag = false;
   }else{
    fntarget.classList.remove("error")
    errorMessages[0].classList.add("d-none");
    console.log("good to go")
    fnflag=true;
   }
  }else{
    emptymessage[0].classList.remove("d-none");
    console.log("please fill this field");
  }

 if(lastName){
  if (!nameRegex.test(lastName)){
    lntarget.classList.add("error")
    errorMessages[1].classList.remove("d-none")
    console.log("name must contain only aplhabets")
    lnflag = false;
  }else{
    lntarget.classList.remove("error")
    errorMessages[1].classList.add("d-none");
    console.log("good to go")
    lnflag = true;
   }
  }else{
    emptymessage[1].classList.remove("d-none");
    console.log("please fill this field");
  }

if(email){
  if(!emailRegex.test(email)){
    emtarget.classList.add("error")
    errorMessages[2].classList.remove("d-none")
    console.log("invalid email id")
    emflag=false;
  }else{
    emtarget.classList.remove("error")
    errorMessages[2].classList.add("d-none");
    console.log("good to go")
    emflag=true;
  }
}else{
  emptymessage[2].classList.remove("d-none");
  console.log("please fill this field");
}
if(password){
  if(!pwdRegex.test(password)){
    pwdtarget.classList.add("error")
    errorMessages[3].classList.remove("d-none")
    console.log("password incorrect")
    pwdflag=false;
  }else{
    pwdtarget.classList.remove("error")
    errorMessages[3].classList.add("d-none");
    console.log("good to go")
    pwdflag=true;
  }
}else{
  emptymessage[3].classList.remove("d-none");
  console.log("please fill this field");
}
if(fnflag && lnflag && emflag && pwdflag){
  fntarget.value = lntarget.value = emtarget.value = pwdtarget.value = "";
  window.location.href = "success.html";
}


});

showPasswordBtn.addEventListener("click" , (e) => {
  e.preventDefault();
  if(pwdtarget.getAttribute("type")===("text")){
     pwdtarget.setAttribute("type","password");
  }else{
    pwdtarget.setAttribute("type","text");
  }
})


