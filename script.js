
document.getElementById('chat-toggle').addEventListener('click', function () {
    const chatWindow = document.querySelector('.chat-window');
    chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
  });
  document.getElementById('chat-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && this.value.trim() !== '') {
      const message = this.value.trim();
      displayMessage(message, 'user-message');
      this.value = '';
      botTyping();
  
      setTimeout(() => {
        const botResponse = getBotResponse(message);
        removeTyping();
        displayMessage(botResponse, 'bot-message');
  
      }, 1200);
    }
  });
  

  function displayMessage(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const newMessage = document.createElement('p');
    newMessage.classList.add(sender);
    newMessage.textContent = message;
    chatMessages.appendChild(newMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  

  function botTyping() {
    const chatMessages = document.getElementById('chat-messages');
    const typing = document.createElement('p');
    typing.id = 'typing';
    typing.classList.add('bot-message');
    typing.textContent = 'DevBot is typing...';
    chatMessages.appendChild(typing);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  function removeTyping() {
    const typing = document.getElementById('typing');
    if (typing) typing.remove();
  }
  

  function getBotResponse(userMessage) {
    const responses = {
      "hello": "Hi there! 👋 What would you like to learn today?",
      "how are you?": "I'm doing great, ready to assist you! 💡",
      "what is devstarter?": "DevStarter is a coding hub with tutorials, guides, and cool projects to boost your programming skills! 🚀",
      "install python": "You can install Python from the official site: https://www.python.org/downloads/",
      "git basics": "Git helps you track code changes. Start with: git init, git add, git commit!",
      "thank you": "You're always welcome! 😊",
      "default": "Hmm, I'm not sure about that. Can you try asking something else?"
    };
  
    return responses[userMessage.toLowerCase()] || responses["default"];
  }
  
