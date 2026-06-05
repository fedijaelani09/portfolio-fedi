function toggleMenu(){
  document.querySelector(".sidebar").classList.toggle("active");
}

// smooth scroll
document.querySelectorAll("a[href^='#']").forEach(a=>{
  a.addEventListener("click",e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute("href"))?.scrollIntoView({
      behavior:"smooth"
    });
  });
});

// scroll reveal (simple zen fade)
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("fade");
    }
  });
});

document.querySelectorAll(".reveal").forEach(el=>{
  observer.observe(el);
});
