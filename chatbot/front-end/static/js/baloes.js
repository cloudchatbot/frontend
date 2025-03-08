function initChat() {
    const input = document.querySelector("#input");
    const sendButton = document.querySelector("#sendButton");
    const chatContainer = document.querySelector(".main-container .chat-container");
    const mainContainer = document.querySelector(".main-container");
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    })
    sendButton.addEventListener("click", sendMessage)
    
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
}

window.addEventListener("load", () => {
    initChat();
});