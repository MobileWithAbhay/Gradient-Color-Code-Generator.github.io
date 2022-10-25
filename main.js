const htmlBody = document.querySelector(".mainbox");  
 const color1 = document.querySelector(".color1");  
 const color2 = document.querySelector(".color2");  
 const currentSelection = document.querySelector(".current-bg");  
 const copyProperty = document.querySelector(".copy-property");  
 const randomButton = document.querySelector(".random-btn");  
 function setGradient() {  
      htmlBody.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;  
      currentSelection.textContent = `${htmlBody.style.background};`;  
 }  
 function generateRandom() {  
      const randomColor1 = Math.random().toString(16).slice(2, 8).toUpperCase();  
      const randomColor2 = Math.random().toString(16).slice(2, 8).toUpperCase();  
      color1.value = `#${randomColor1}`;  
      color2.value = `#${randomColor2}`;  
      setGradient();  
 }  
 function copyText() {  
      const text = currentSelection.innerText;  
      let temp_element = document.createElement("textarea");  
      document.body.appendChild(temp_element);  
      temp_element.value = text;  
      temp_element.select();  
      document.execCommand("copy");  
      document.body.removeChild(temp_element);  
 }  
 window.addEventListener("load", setGradient);  
 color1.addEventListener("input", setGradient);  
 color2.addEventListener("input", setGradient);  
 copyProperty.addEventListener("click", copyText);  
 randomButton.addEventListener("click", generateRandom);   
