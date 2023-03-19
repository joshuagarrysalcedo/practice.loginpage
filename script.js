// Get the html element
const htmlElement = document.documentElement;
const toggleTheme = document.getElementById('toggleTheme')
const toggleLabel = document.querySelector('.form-check-label');
const loginButtonModal = document.getElementById('login-button-modal');
const toggleIcon = document.getElementById('toggleIcon');

// Change the value of the data-bs-theme attribute

// loginButtonModal = addEventListener("click", ()=>{
//
// })

toggleTheme.addEventListener('change', ()=>{
    console.log(htmlElement.getAttribute('data-bs-theme'))
    if(htmlElement.getAttribute('data-bs-theme') === 'dark'){

        toggleIcon.classList.remove('bi-moon-fill');
        toggleIcon.classList.add('bi-brightness-high');
        htmlElement.setAttribute('data-bs-theme', 'light');
    }
    else{
        toggleIcon.classList.remove('bi-brightness-high');
        toggleIcon.classList.add('bi-moon-fill');

        htmlElement.setAttribute('data-bs-theme', 'dark');
    }
})

