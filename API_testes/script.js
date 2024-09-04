const formulario = document.querySelector("form");
const iNome = document.querySelector(".nome");
const iEmail = document.querySelector(".email");
const iSenha = document.querySelector(".senha");
const iTel = document.querySelector(".tel");

function cadastrar(){
    fetch("http://localhost8080/cadastrar",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method:"POST",
            body: JSON.stringify({
                nome: iNome.value,
                email: iEmail.value,
                senha: iSenha.value,
                telefone: iTel.value})
        })
        .then(function(res){console.log(res)})
        .catch(function(res){console.log(res)})
};
function linpar(){
    iNome.value = "";
    iEmail.value = "";
    iSenha.value = "";
    iTel.value = "";
}
formulario.addEventListener('submit', function(event){
    event.preventDefault();
    
    cadastrar();
    linpar();
});