let toggleBtn=()=>{
    let nav_items=document.querySelectorAll('.nav-links');
    console.log(nav_items)
    
   

    nav_items.forEach(nav => nav.classList.toggle('navbarToggleShow'));
    
    
   

}
document.querySelector('.toggleBtn i').addEventListener('click', toggleBtn);


