const login = document.querySelector('#login');
  login.addEventListener('click', function(){
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    
    if(username == "Nurfajriah Halimatuz Zahra" && password == "NICE"){
      document.body.innerHTML="<h1>Anda Berhasil Login</h1>"
    }else{
      alert('password/username salah')
    }
  })