document.addEventListener('DOMContentLoaded', () => {
    const btnSbm = document.getElementById('btn-submit');
    const form = document.getElementById('new-user-form');
    const message = document.getElementsByClassName('user-email-confirmation-message')[0];
    const errorMessage = document.getElementsByClassName('user-sign-up-error')[0];
    const sendBtn = document.querySelector('.button-send');


    btnSbm.addEventListener('click', async () => {
        const userName = document.getElementById('user-name').value;
       const userEmail = document.getElementById('user-email').value;
       const userPassword = document.getElementById('user-password').value;

        let response = await fetch('/users/add', {
            method: 'post',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({name: userName, email: userEmail, password: userPassword})
        });

        if (response.status === 200) {
            form.style.display = 'none';
            sendBtn.style.display = 'none';
           // message.style.display = 'block';
            window.location = 'http://localhost:3000'

        } else {
            response = await response.text();
            errorMessage.innerText = response;
            errorMessage.style.display = 'block';
        }
    });
});