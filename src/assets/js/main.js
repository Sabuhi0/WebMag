
/* === Search-Form === */

// Add
document.querySelector(".search-btn").addEventListener("click", function() {
    const headerSearchForm = document.querySelector(".header-search-form");
    headerSearchForm.classList.add("active")
});

// Remove
document.querySelector(".search-close").addEventListener("click", function() {
    const headerSearchForm = document.querySelector(".header-search-form");
    headerSearchForm.classList.remove("active")
});

//* === Aside-Section === */

// Click-Button Aside Add
document.querySelector(".aside-btn").addEventListener("click", function() {
    const headerSearchForm = document.querySelector(".aside-items");
    headerSearchForm.classList.add("active")
});

// Click-Button Aside Remove
document.querySelector(".nav-aside-close").addEventListener("click", function() {
    const headerSearchForm = document.querySelector(".aside-items");
    headerSearchForm.classList.remove("active")
});

// Aside Remove
const headerSearchForm = document.querySelector("#nav-aside")
headerSearchForm.addEventListener("click",(e)=>{
    headerSearchForm.classList.remove("active")
})

//* === Shadow === */

// Add
document.querySelector(".aside-btn").addEventListener("click", function() {
    const headerSearchForm = document.querySelector("#nav-aside");
    headerSearchForm.classList.add("active")
    headerSearchForm.style.backgroundColor="rgba(33,38,49,.5)"
});

// Remove
document.querySelector(".nav-aside-close").addEventListener("click", function() {
    const headerSearchForm = document.querySelector("#nav-aside");
    headerSearchForm.classList.remove("active")
});