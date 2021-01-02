const signup= document.querySelector('.signup');
const login= document.querySelector('.login');
const front=document.querySelector('.front');
const back=document.querySelector('.back');

login.addEventListener('click',()=>{
    front.style.transform="rotateY(180deg)";
    back.style.transform="rotateY(360deg)";
})
signup.addEventListener('click',()=>
{
    back.style.transform="rotateY(180deg)";
    front.style.transform="rotateY(0deg)";
})