function changeText() {
    const message = document.getElementById("message");
    message.textContent = "The message has been changed dynamically!";
  }
  
  
    if (existingElement) {
      existingElement.remove();
    } else {
      const newElement = document.createElement("p");
      newElement.id = "dynamicElement";
      newElement.textContent = "This is a new element added with JavaScript.";
      newElement.style.color = "green";
      container.appendChild(newElement);
    }
  
  