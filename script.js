/*Pre Loader*/
var preloader=document.getElementById('loading');
function preLoader(){
  preloader.style.display="none";
}



//for top black header
//created this object for storing the values i need to change
var para_values=[
  {
    content:"Free shipping over RS 699 "
  },
  {
    content:"Exclusive Sale For special Season  <a href=plants.html style=color:white>SHOP NOW</a>"
  }
];

//created function to print the values on screen
//fetching data from html
function showVal(index){
var val=document.getElementsByClassName("header-para")[0];
console.log(val);
val.innerHTML = para_values[index].content;
}

showVal(0);//called for visibility on the screen

//function for changing the content
function textChange(){
var index=0;
var intrvl=setInterval(() =>{
    index=index+1;
    if(index == para_values.length){
        index=0;
    }
    showVal(index)
},2000)
}

textChange();

//faq page

let accordionBody = document.getElementsByClassName('accordion-body');

for(let i=0 ; i <  accordionBody.length ; i++){
  accordionBody[i].addEventListener('click', ()=>{
    accordionBody[i].classList.toggle('active')
   
  });
}
 

//contact us page
let formBtn = document.querySelector('#formBtn');

formBtn.addEventListener('click', function check_condition(){
let formName = document.querySelector('#formName').value;
let formEmail = document.querySelector('#formEmail').value;
let formTel = document.querySelector('#formTel').value;
let formTxt = document.querySelector('#formText').value;
let popup = document.querySelector('.pop-up');

if(formName.length === 0){
  alert("Kindly enter your name");
}
else if(formEmail.length === 0){
  alert("Kindly enter your Email");
}
else if(formTel.length === 0){
  alert("Kindly enter your Number");
}
else if(formTxt.length === 0){
  alert("Kindly write your Message");
}
else{
popup.style.transform="scale(1)";
}
});

let popupBtn=document.querySelector('#popbtn');
let popup = document.querySelector('.pop-up');
popupBtn.addEventListener('click', function close(){
popup.style.transform="scale(0)"
location.reload();
});









