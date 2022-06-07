const chaine="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_@*";
var mot2passe="", j=chaine.length;
const pw =document.getElementById("input");

function generatePassword(){
    mot2passe="";
for( let i = 0 ; i<10; i++){
    let index = Math.floor(Math.random()*(j-1));
    console.log("the current index is: ",index);
    
    mot2passe +=chaine.charAt(index);  
}

return mot2passe;
}
const create = document.getElementById('generer');
create.addEventListener("click", function () {

    var randomPass = generatePassword();
    pw.value = randomPass;
    
}

);

