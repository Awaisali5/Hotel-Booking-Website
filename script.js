let toggleBtn=()=>{
    let nav_items=document.querySelectorAll('.nav-links');
    console.log(nav_items)
    
   

    nav_items.forEach(nav => nav.classList.toggle('navbarToggleShow'));
    
    
   console.log('clicked');

}
document.querySelector('.toggleBtn i').addEventListener('click', toggleBtn);


