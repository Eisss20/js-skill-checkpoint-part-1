// Question #3
let userPassword = ""

function checkPasswordStrength (x) {
 x = x.length;
    if (x < 6) {
        return "Weak";
    } else if (x >= 6 && x <= 10 ) {
       return "Medium";
    } else if (x > 10) {
       return "Strong"; 
    }  else {
        return "none";
       } 

}
    
console.log((checkPasswordStrength(userPassword)))
