 let nav = document.getElementById("nav")
 let cross = document.getElementById("cross")
 let burger = document.getElementById("burger")
 let burger1 = document.getElementById("burger1")
 let up = document.querySelector(".up")
 let blog = document.getElementById("blog")
 let blog1 = document.getElementById("blog1")
 let nav1 = document.getElementById("nav1")
 let nav2 = document.getElementById("nav2")


blog.addEventListener('click',()=>{
    nav1.style.display = "block"
    blog1.style.display = "block"
    blog.style.display = "none"
})
blog1.addEventListener('click',()=>{
    nav1.style.display = "none"
    blog1.style.display = "none"
    blog.style.display = "block"
})

 console.log("priyatam")
 burger.addEventListener('click',()=>{
     nav.style.display = 'block';
     
     nav.style.right = '0rem';
     burger.style.display = 'none';
 })
 cross.addEventListener('click',()=>{
    nav.style.right = '-28rem';
    burger.style.display = 'block';
    nav.style.display = 'none';
})
burger1.addEventListener('click',()=>{
    nav.style.display = 'block';
    
    nav.style.right = '0rem';
    burger1.style.display = 'none';
})
cross.addEventListener('click',()=>{
   nav.style.right = '-28rem';
   burger1.style.display = 'block';
   nav.style.display = 'none';
})
window.addEventListener('scroll',function(){
    if (window.pageYOffset > 100){
        up.classList.add('active')
     }
     else{
        up.classList.remove('active')
     }
});

up.addEventListener('click',()=>{
    window.scrollTo(
        {
         top:0,
         left:0,
         behavior:'smooth'
        }
     )
})