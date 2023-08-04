const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: Dark)");
const themeToggle = document.getElementById('theme-toggle')


// Match the icon to the theme. This only works on page reload.
if (prefersDarkScheme.matches) {
   
   themeToggle.innerHTML = `<span class="material-symbols-outlined">
     dark_mode
    </span>`
    document.body.classList.toggle("dark-theme")
 }

 else {
       themeToggle.innerHTML = `<span class="material-symbols-outlined">
        light_mode
        </span>`
        document.body.classList.toggle("light-theme")
     }

// listen for change to system theme and update accordingly
 window.matchMedia('(prefers-color-scheme: dark)')
     .addEventListener('change',({ matches }) => {
 if (matches) {
   themeToggle.innerHTML = `<span class="material-symbols-outlined">
   dark_mode
  </span>`
  document.body.classList.replace("light-theme", "dark-theme")
 } else {
   themeToggle.innerHTML = `<span class="material-symbols-outlined">
   light_mode
   </span>`
   document.body.classList.replace("dark-theme", "light-theme")
 }
})


// Listen for a click on the button 
themeToggle.addEventListener("click", function() {

    if (prefersDarkScheme.matches) {

        if (document.body.classList.contains("light-theme")){
            themeToggle.innerHTML = `<span class="material-symbols-outlined">
             dark_mode
             </span>`
             document.body.classList.replace("light-theme", "dark-theme")
            
        }
        
        else {
            themeToggle.innerHTML = `<span class="material-symbols-outlined">
            light_mode
           </span>`
           document.body.classList.replace("dark-theme", "light-theme")
        }
       
      }
     
      else {

        if(document.body.classList.contains("dark-theme")){
            themeToggle.innerHTML = `<span class="material-symbols-outlined">
             light_mode
             </span>`
             document.body.classList.replace("dark-theme", "light-theme")
        }
            else {
                themeToggle.innerHTML = `<span class="material-symbols-outlined">
                dark_mode
                </span>`
                document.body.classList.replace("light-theme", "dark-theme")
            }
          
          }

})



