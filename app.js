sal({
    threshold: 1,
    once: false,
  });
  
function toggleClassName() {
    let sidebar = document.querySelector('.sidebar');
    let wrapper = document.querySelector('.wrapper');
    let toggle = document.querySelector('.toggle');

    sidebar.classList.toggle('active');
    wrapper.classList.toggle('active');
    toggle.classList.toggle('active');
}

window.addEventListener('scroll', function(){
    const header = document.querySelectorAll('header'); //error, querySelector is not finding the header element
    header.classlist.toggle("sticky", window.scrollY > 0 );
})