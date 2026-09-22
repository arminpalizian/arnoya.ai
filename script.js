(function(){
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => link.addEventListener('click', function(e){
    const id = this.getAttribute('href');
    const target = document.querySelector(id);
    if(!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth', block:'start'});
  }));
})();
