window.addEventListener("load", () => {
    const input = document.querySelector(".input-container input");
    const sendButton = document.querySelector(".input-container button");
    const chatContainer = document.querySelector(".chat-container");
   
    const mainContainer = document.querySelector(".main-container")
    sendButton.addEventListener("click",  sendMessage)
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendMessage()
    })
    
    function sendMessage() {
        const messageText = input.value.trim();
        if (messageText === "") return;
    
        createMessageBubble(messageText, "mensagens-usuario");
    
        setTimeout(() => {
            createMessageBubble("Eu sou um bot! Como posso ajudar?", "mensagens-bot");
        }, 1000);
    
        input.value = "";
        mainContainer.classList.add("validat-mensagem")
    }

        
    
       
   
    function createMessageBubble(text, className) {
        const messageBubble = document.createElement("div");
        messageBubble.classList.add("chat-baloes", className);
        messageBubble.textContent = text;
        chatContainer.appendChild(messageBubble);
  
        
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    
});



