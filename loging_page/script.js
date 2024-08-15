//Elementen selecteren

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login_link');
const registerLink = document.querySelector('.register_link');
const loginBtn =  document.querySelector('.login_nav');
const closeBtn = document.querySelector('.close_icon');

//Event aan een element koppelen
registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
});

loginBtn.addEventListener('click', ()=>{
  wrapper.classList.add('active-login');
});

closeBtn.addEventListener('click', ()=> {
  wrapper.classList.remove('active-login');
});


//REGISTER FORM FUNCTIONEEL MAKEN

const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput =  document.getElementById('password');
const checkboxInput = document.getElementById('terms');

//Formulier valideren
function formValidation (){
  let isValid =  true;

  if(usernameInput.input === ''){
    alert(`Username is required`);
    isValid =  false;
  } else if (emailInput.value() === ''){
    alert(`Email is required`);
    isValid = false;
  } else if (passwordInput.value() === ''){
    alert(`Password is required`);
    isValid = false;
  } else if (!checkboxInput.checked){
    alert(`Please agree to the terms & conditions`);
    isValid = false;
  }
return isValid;

}


//Gebruik maken van een constante








