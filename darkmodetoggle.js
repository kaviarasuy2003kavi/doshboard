 
const btn = document.getElementById("toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

 
btn.addEventListener("click", function() {
  
  if (theme.getAttribute("href") == "style.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "dark-theme.css";
 
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "style.css";
  }
});