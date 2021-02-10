var nom = document.querySelector("#nom");
var res = document.querySelector("#res");
var email = document.querySelector("#email");
var age = document.querySelector("#age");
var d1 = document.querySelector("#d1");
var fr = document.querySelector("#fr");
var ar = document.querySelector("#ar");
var eng = document.querySelector("#eng");
var r = /^[A-Z]+$/;
var cb = document.querySelectorAll('input[type="checkbox"]:checked').length;
function valider(){
    d1.setAttribute("style","color: red");
    if(nom.value.match(r) && res.value.match(r))
    {
    }
    else
    {
        d1.innerHTML +="==> Nom et Résidence est obligatoire et ne doit pas contenir que des caractères miniscule...<br>"
    }
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))
    {
    }
    else
    {
        d1.innerHTML += "==> Le format de l email doit être correcte fini par un .com ou .ma seulement...<br>"
    }
    if(age.value<18)
    {
        d1.innerHTML += "==> Age doit être un chiffre d abord et aussi supérieur a 18 ans...<br>"
    }
    if(fr.checked && ar.checked || fr.checked && eng.checked || eng.checked && ar.checked || fr.checked && eng.checked )
    {}
    else
    {
        d1.innerHTML += "==>  Au moins deux langues doit être cocher pour les langues(checkbox)..."
    }
    if(d1.innerHTML == "")
    {
        d1.setAttribute("style","color: black");
        d1.innerHTML += `Nom :${nom.value} <br>Residence :${res.value}<br>Email :${email.value} <br>Langue parle :`;
        if(fr.checked){d1.innerHTML +=`${fr.value} `}
        if(eng.checked){d1.innerHTML +=`${eng.value} `}
        if(ar.checked){d1.innerHTML +=`${ar.value} `}
    }
    
    

}
function validerRemove(){
    d1.innerHTML = "";
}