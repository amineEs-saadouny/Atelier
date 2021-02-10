var c=document.querySelector("#nom");
var s = document.querySelector("#password");
var d1=document.querySelector("#div1");
var d2=document.querySelector("#div2");
var d3=document.querySelector("#div3");

function nomevalid() {
if(c.value=="")
{
    d1.innerHTML='<span style="font-size: 90%; color: red;">pleas fill the input...</span>';
}

}
function nomevalidremove() {
    d1.innerHTML='';
    }
function passvalid(){
    if(s.value=="")
    {
        d2.innerHTML='<span style="font-size: 90%; color: red;">pleas fill the input...</span>';
    }
}
function passvalidremove(){
    d2.innerHTML='';
}
function disableVille(){
    document.querySelector("select").setAttribute("disabled","");
}
function undisableVille(){
    document.querySelector("select").removeAttribute("disabled","")
}
function optionValidatio(){
    var valo=document.querySelector("#cho").selectedIndex;
    if(valo==0)
    {
        d3.innerHTML='<span style="font-size: 90%; color: red;">pleas select a ville...</span>';
    }

}
function optionValidatioRemove(){
    d3.innerHTML='';

}
