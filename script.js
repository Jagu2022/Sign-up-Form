document.addEventListener("DOMContentLoaded", function(){
  let password = document.querySelector("#password").value;
  console.log(password)
  let currectPassword = document.querySelector('#confirm_password').value;
  let Error = document.querySelector('#error');
  if(password == '' && currectPassword == ''){
    Error.innerHTML = '*password do not matching'
  }else if(password === currectPassword){
    Error.innerHTML=''
  }
})