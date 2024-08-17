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
const form = document.getElementById('registerForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput =  document.getElementById('password');
const checkboxInput = document.getElementById('terms');

//Formulier valideren
function formValidation (){
  let isValid =  true;

  if(usernameInput.value === ''){
    alert(`Username is required`);
    isValid =  false;
  } if (emailInput.value === ''){
    alert(`Email is required`);
    isValid = false;
  } if (passwordInput.value === ''){
    alert(`Password is required`);
    isValid = false;
  } if (!checkboxInput.checked){
    alert(`Please agree to the terms & conditions`);
    isValid = false;
  }
return isValid;

}


//Gebruik maken van een constante

const API = 'https://jsonplaceholder.typicode.com/posts';

//Event aan een element koppelen

form.addEventListener('submit', async (event) =>{
  event.preventDefault();

  if(formValidation()){
    const userInfo = {
      username: usernameInput.value,
      email: emailInput.value,
      password : passwordInput.value
    };

    // fetch om data op te halen en async & await
    
    try{
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      });
      const inputedData = await response.json();

      //JSON manipuleren en weergeven
      console.log('Registered user:', inputedData);
      alert(`User ${inputedData.username} sucessfully registered!`);

      //Gebruik van local storage
      localStorage.setItem('user', JSON.stringify(userInfo));

    } catch(error){
      console.error('Error:', error);
    }
  }
});






