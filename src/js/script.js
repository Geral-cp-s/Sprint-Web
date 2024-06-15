/*================================================= SHOW MENU =========================================================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
 
 
 /* =========================================== Função da página login =============================================== */
 
 function validar(){
 
     //declarando as variaveis 
     let usuario =document.getElementById("usuario").value;
     let senha =document.getElementById("senha").value;
   
     if(usuario ==="adm@gmail.com" && senha ==="123"){
         window.open("perfil.html")
     }else{
         alert("usuario e/ou senha inválidos")
     }
   }
 
 /* =========================================== Função da página registre-se ========================================== */
 
 function validateForm() {
     var firstName = document.getElementById('first-name').value;
     var lastName = document.getElementById('last-name').value;
     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;
     var confirmPassword = document.getElementById('confirm-password').value;
     var country = document.getElementById('country').value;
 
     if (!firstName || !lastName || !email || !password || !confirmPassword || !country) {
         alert('Por favor, preencha todos os campos.');
         return false;
     }
 
     if (password !== confirmPassword) {
         alert('As senhas não coincidem.');
         return false;
     }
     
 
     window.open("acesso.html")
     alert('Registro realizado com sucesso!');
 }