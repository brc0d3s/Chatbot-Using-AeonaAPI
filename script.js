const url = 'https://aeona3.p.rapidapi.com/?text=%3CREQUIRED%3E&userId=12312312312';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ede76660d1msh5d7c3d8712b9d9dp1d466cjsna6de839e8f7d',
        'X-RapidAPI-Host': 'aeona3.p.rapidapi.com'
    }
};

async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    const chatDisplay = document.getElementById('chat-display');
    const userMessage = `<div class="message user">${userInput}</div>`;
    chatDisplay.innerHTML += userMessage;

    try {
        const response = await fetch(proxyUrl + url + '&text=' + userInput, options);
        const result = await response.text();
        const botMessage = `<div class="message bot">${result}</div>`;
        chatDisplay.innerHTML += botMessage;
    } catch (error) {
        console.error(error);
    }

    document.getElementById('user-input').value = '';
}
