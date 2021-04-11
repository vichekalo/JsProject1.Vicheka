//1. Search
const search=document.querySelector('#SearchFood');
search.addEventListener('keyup',function(e){
    let text=search.value.toLowerCase();
    let items=document.querySelectorAll('li');
    for (let item of items){
        let title=item.firstElementChild.textContent.toLocaleLowerCase();
        if (title.indexOf(text)===-1){
            item.style.display='none';
        }else{
            item.style.display='block';
        }
    }
})
//2. Delete and 3.Edit 
let Child = '';
function deleteBook(event){
    if (event.target.className==='delete'){
         event.target.parentElement.remove();
    }
    if (event.target.className==='edit'){
        let Edit = event.target.parentElement;
        Child = Edit.children;
        document.querySelector('.quantity').value = parseInt(Child[1].textContent.slice(9,Child[1].textContent.length));
    }
}
let bookList = document.querySelector(".List-of-food ul");
let bookLists = document.querySelector(".addmore");
bookList.addEventListener("click", deleteBook);
bookLists.addEventListener("click", deleteBook);
// update 
const update=document.getElementById('updateId');
update.addEventListener('click',function(){
    console.log(Child);
    Child[1].textContent = 'Quantity:' + document.querySelector('.quantity').value;
    document.querySelector('.quantity').value = '';

})
//4. Hide and Show btn before when click on btn contact
function beforeSubmit(){
    let x=document.getElementById("connect");
    if (window.getComputedStyle(x).display==="none"){
        x.style.display="block";
    }
}
let beforesubmit=document.getElementById("contact");
beforesubmit.addEventListener("click",beforeSubmit);
//. hide and show btn before submit when click on btn Submit data
function resultofsubmit(){
    var y=document.getElementById("resultkoko");
    if (window.getComputedStyle(y).display==="none"){
        y.style.display="block";
    }
}
let aftersubmit=document.getElementById("applyButton");
aftersubmit.addEventListener("click",resultofsubmit);
//. Afer submit
function submitData() {
    // 1- get values from forms
    let username=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    let resultGender="";
    let genders=document.querySelectorAll('input[name=genderSelect]');
    for (let gender of genders){
      if (gender.checked){
        resultGender=gender.value;
      }
    }
    //  change labels on right side
    document.getElementById("getUsername").textContent = username;
    document.getElementById("getEmail").textContent=email;
    document.getElementById("getGender").textContent=resultGender;
  }
let applyButton = document.getElementById("applyButton");
applyButton.addEventListener("click", submitData);
//5. select and 6.add 
function addfood(){
    let ChooseFood=document.getElementById('name-food');
    let name = document.createElement('span');
    name.id = 'chooseFood';
    name.textContent = ChooseFood.value;
    let quant = document.createElement('span');
    quant.id = 'quantoffood';
    quant.textContent = 'Quantity:' + document.querySelector('.quantity').value;
    let Delete = document.createElement('span');
    Delete.className = 'delete';
    Delete.textContent = 'delete';
    let Edit = document.createElement('span');
    Edit.className = 'edit';
    Edit.textContent = 'edit';
    let P = document.createElement('p');
    P.appendChild(name);
    P.appendChild(quant);
    P.appendChild(Edit);
    P.appendChild(Delete);
    document.querySelector('.addmore').appendChild(P);

    document.querySelector('.quantity').value = '';
}
let addvalue=document.querySelector(".add");
addvalue.addEventListener("click",addfood);

//7.DESCRIPTION WHEN MOUSE OVER 
//pizza
function mouseover(){
    let mouse=document.getElementById("pizza");
    if (window.getComputedStyle(mouse).display==="none"){
        mouse.style.display="block";
    }
}
let overNameOfFood=document.getElementsByClassName("name");
overNameOfFood[0].addEventListener("mouseover",mouseover);

function notMouseOver(){
    let notmouse=document.getElementById("pizza");
    if (window.getComputedStyle(notmouse).display=="block"){
        notmouse.style.display="none";
    }
}
let notoverNameofFood=document.getElementsByClassName("name");
notoverNameofFood[0].addEventListener('mouseleave',notMouseOver);
//hamburger
function hamburger(){
    let ham=document.getElementById("hamburger");
    if (window.getComputedStyle(ham).display==="none"){
        ham.style.display="block";
    }
}
let hamover=document.getElementsByClassName('name');
hamover[1].addEventListener("mouseover",hamburger);

function nothambuger(){
    let notham=document.getElementById("hamburger");
    if (window.getComputedStyle(notham).display=="block"){
        notham.style.display="none";
    }
}
let notoverham=document.getElementsByClassName('name');
notoverham[1].addEventListener('mouseleave',nothambuger);
// sushi
function sushi(){
    let su=document.getElementById("sushi");
    if (window.getComputedStyle(su).display==="none"){
        su.style.display="block";
    }
}
let sushiover=document.getElementsByClassName('name');
sushiover[2].addEventListener("mouseover",sushi);

function notsushi(){
    let notsu=document.getElementById("sushi");
    if (window.getComputedStyle(notsu).display=="block"){
        notsu.style.display="none";
    }
}
let notoversushi=document.getElementsByClassName('name');
notoversushi[2].addEventListener('mouseleave',notsushi);

// steak
function steak(){
    let steaks=document.getElementById("steak");
    if (window.getComputedStyle(steaks).display==="none"){
        steaks.style.display="block";
    }
}
let steakover=document.getElementsByClassName('name');
sushiover[3].addEventListener("mouseover",steak);

function notsteak(){
    let notsteaks=document.getElementById("steak");
    if (window.getComputedStyle(notsteaks).display=="block"){
        notsteaks.style.display="none";
    }
}
let notoversteak=document.getElementsByClassName('name');
notoversteak[3].addEventListener('mouseleave',notsteak);
//Macarons
function macarons(){
    let macaron=document.getElementById("macarons");
    if (window.getComputedStyle(macaron).display==="none"){
        macaron.style.display="block";
    }
}
let macaronsover=document.getElementsByClassName('name');
macaronsover[4].addEventListener("mouseover",macarons);

function notmacarons(){
    let notmacaron=document.getElementById("macarons");
    if (window.getComputedStyle(notmacaron).display=="block"){
        notmacaron.style.display="none";
    }
}
let notovermacarons=document.getElementsByClassName('name');
notovermacarons[4].addEventListener('mouseleave',notmacarons);

//Freid Chicken
function freidChicken(){
    let chicken=document.getElementById("freid-chicken");
    if (window.getComputedStyle(chicken).display==="none"){
        chicken.style.display="block";
    }
}
let chickenover=document.getElementsByClassName('name');
chickenover[5].addEventListener("mouseover",freidChicken);

function notfreidChicken(){
    let notchicken=document.getElementById("freid-chicken");
    if (window.getComputedStyle(notchicken).display=="block"){
        notchicken.style.display="none";
    }
}
let notoverchicken=document.getElementsByClassName('name');
notoverchicken[5].addEventListener('mouseleave',notfreidChicken);
//Pasta
function pastas(){
    let pasta=document.getElementById("pasta");
    if (window.getComputedStyle(pasta).display==="none"){
        pasta.style.display="block";
    }
}
let pastaover=document.getElementsByClassName('name');
pastaover[6].addEventListener("mouseover",pastas);

function notpastas(){
    let notpasta=document.getElementById("pasta");
    if (window.getComputedStyle(notpasta).display=="block"){
        notpasta.style.display="none";
    }
}
let notoverpasta=document.getElementsByClassName('name');
notoverpasta[6].addEventListener('mouseleave',notpastas);
// Greek Salad
function greeksalad(){
    let salad=document.getElementById("greek-salad");
    if (window.getComputedStyle(salad).display==="none"){
        salad.style.display="block";
    }
}
let saladover=document.getElementsByClassName('name');
pastaover[7].addEventListener("mouseover",greeksalad);

function notgreeksalad(){
    let notsalad=document.getElementById("greek-salad");
    if (window.getComputedStyle(notsalad).display=="block"){
        notsalad.style.display="none";
    }
}
let notoversalad=document.getElementsByClassName('name');
notoverpasta[7].addEventListener('mouseleave',notgreeksalad);