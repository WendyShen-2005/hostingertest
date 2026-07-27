const URL_START = 'http://[::1]:1337';

var meowHTML = ''

document.getElementById('cute-click-btn').addEventListener('click', async () => {
    try {
        // Call backend endpoint
        const response = await fetch(`${URL_START}/cats`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.text();
        meowHTML += `${data}<br/>`
        document.getElementById('output').innerHTML = meowHTML;
    } catch (error) {
        document.getElementById('output').innerHTML = 'Error: ' + error.message;
    }
});