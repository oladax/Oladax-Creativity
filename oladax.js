//harmburger menu for drop down and cancle.
// accessing d menu-div

const menu_div = document.querySelector('.menu-div');
const menu = document.querySelector('.menu');
const xmark = document.querySelector('.xmark');
const menu_div_links = document.querySelectorAll('.menu-div li a');



  menu.onclick = () => {
    if(menu.style.display ='block'){
      menu_div.classList.toggle('active')
      menu.classList.toggle('active')
      menu.style.display = 'none'
      xmark.style.display = 'block'
    }
  
  }
  
  xmark.onclick = () => {
    if(xmark.style.display ='block'){
      menu_div.classList.toggle('active')
      xmark.classList.toggle('active')
      xmark.style.display = 'none'
      menu.style.display = 'block'
    }
  }



  //for input values
  //styles collections
 const Senators = document.querySelector('.Senator');
 const Agbadas = document.querySelector('.Agbada');
 const Danshiki = document.querySelector('.Danshiki');
 const Asooke = document.querySelector('.Aso-oke');
 const inputstyle = document.getElementById('styles')


 function style_btn (){

  tasks= inputstyle.value;
  styles = tasks.toLowerCase();
  if (styles == ''){
    alert('Input field is empty!')
}else if (styles == 'senator' || styles == 'senators'){
  Agbadas.style.display = "none";
    Danshiki.style.display = "none";
    Asooke.style.display = "none";
    Senators.style.display = "flex";
}else if (styles == 'danshiki' || styles == 'danshikis'){
  Agbadas.style.display = "none";
    Senators.style.display = "none";
    Asooke.style.display = "none";
    Danshiki.style.display = "flex";
}else if (styles == 'agbada' || styles == 'agbadas'){
  Agbadas.style.display = "flex";
    Senators.style.display = "none";
    Asooke.style.display = "none";
    Danshiki.style.display = "none";
}else if (styles == 'asooke' || styles == 'asookes'){
  Agbadas.style.display = "none";
    Senators.style.display = "none";
    Asooke.style.display = "flex";
    Danshiki.style.display = "none";
}else if(styles.slice(0) == 'd' || styles.slice(1)  == 'a' ) 
{
 Agbadas.style.display = "none";
 Senators.style.display = "none";
 Asooke.style.display = "none";
 Danshiki.style.display = "flex";

}else if(styles.slice(0) == 'a' || styles.slice(1)  == 'g' ) 
{
 Agbadas.style.display = "flex";
 Senators.style.display = "none";
 Asooke.style.display = "none";
 Danshiki.style.display = "none";

}else if(styles.slice(1) == 's' || styles.slice(2)  == 'o' ) 
{
 Agbadas.style.display = "none";
 Senators.style.display = "none";
 Asooke.style.display = "flex";
 Danshiki.style.display = "none";

}else if(styles.slice(0) == 's' || styles.slice(1)  == 'e'){
  Agbadas.style.display = "none";
  Danshiki.style.display = "none";
  Asooke.style.display = "none";
  Senators.style.display = "flex";

 }
else{
  Agbadas.style.display = "none";
  Senators.style.display = "flex";
  Asooke.style.display = "none";
  Danshiki.style.display = "none";
  alert('Enter a correct keywords!')
 }
}



  function input(){
    tasks= inputstyle.value;
    styles = tasks.toLowerCase();

   if(styles.slice(0) == 's' || styles.slice(1)  == 'e'){
    Agbadas.style.display = "none";
    Danshiki.style.display = "none";
    Asooke.style.display = "none";
    Senators.style.display = "flex";

   }else if(styles.slice(0) == 'd' || styles.slice(1)  == 'a' ) 
   {
    Agbadas.style.display = "none";
    Senators.style.display = "none";
    Asooke.style.display = "none";
    Danshiki.style.display = "flex";

   }else if(styles.slice(0) == 'a' || styles.slice(1)  == 'g' ) 
   {
    Agbadas.style.display = "flex";
    Senators.style.display = "none";
    Asooke.style.display = "none";
    Danshiki.style.display = "none";

   }else if(styles.slice(1) == 's' || styles.slice(2)  == 'o' ) 
   {
    Agbadas.style.display = "none";
    Senators.style.display = "none";
    Asooke.style.display = "flex";
    Danshiki.style.display = "none";

   }else{
    Agbadas.style.display = "none";
    Senators.style.display = "flex";
    Asooke.style.display = "none";
    Danshiki.style.display = "none";
   }
  }

  
// form
 

//OK button for successful emails
function OK (){
    pop_up.classList.add('disappear')
    email.value = ''
    firstname.value = ''
    secondname.value = ''
    phone.value = ''
    textare.value = ''
}





