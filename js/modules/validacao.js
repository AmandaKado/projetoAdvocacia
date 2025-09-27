export default function initValidarFormulario() {

    const form = document.querySelector('.formularioContato');
    const emailField = document.getElementById('email');
    const requiredFields = form.querySelectorAll('[required]');

    function showError(field, message) {
        const formGroup = field.parentElement;
        const errorMessage = formGroup.querySelector('.errorMessage');
        formGroup.classList.add('error');
        errorMessage.innerText = message;
    }

    function clearError(field) {
        const formGroup = field.parentElement;
        const errorMessage = formGroup.querySelector('.errorMessage');
        formGroup.classList.remove('error');
        errorMessage.innerText = '';
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function checkEmailField() {
        clearError(emailField);
        if (emailField.value === '') {
            showError(emailField, 'O campo e-mail é obrigatório.');
            return false;
        } else if (!validateEmail(emailField.value)) {
            showError(emailField, 'Por favor, insira um e-mail válido.');
            return false;
        }
        return true;
    }

    function checkRequiredFields() {
        let allValid = true;
        requiredFields.forEach(field => {
            clearError(field); 
            if (field.value.trim() === '') {
                showError(field, 'O campo com seu nome é obrigatório.');
                allValid = false;
            }
        });
        return allValid;
    }

    function handleFormSubmit(event) {
        event.preventDefault(); 
        const areRequiredFieldsValid = checkRequiredFields();
        const isEmailValid = checkEmailField();
        if (areRequiredFieldsValid && isEmailValid) {
            alert('Formulário enviado com sucesso!');
            form.submit();
        }
    }

    if (form && emailField && requiredFields.length) {
        form.addEventListener('submit', handleFormSubmit);
        emailField.addEventListener('blur', checkEmailField);
    }

    function sendEmail() {

        const serviceID = 'service_dfmoyk5';
        const templateID = 'template_4tel1jiD';
        const publicKey = 'ePTGjJknY8Jqe_Y8p';

        emailjs.sendForm(serviceID, templateID, form, publicKey)
        .then(() => {
            sendButton.innerText = 'Enviado com Sucesso!';
            sendButton.style.backgroundColor = '#27ae60';
            form.reset();
            
            setTimeout(() => {
                sendButton.innerText = 'Enviar Mensagem';
                sendButton.style.backgroundColor = '';
                sendButton.disabled = false;
            }, 5000);

        }, (err) => {
            sendButton.innerText = 'Erro ao Enviar';
            sendButton.style.backgroundColor = '#c0392b'; 
            alert('Ocorreu um erro inesperado. Por favor, tente novamente.\n\n' + JSON.stringify(err));
            sendButton.disabled = false;
        });
    } 

    function handleFormSubmit(event) {
        event.preventDefault(); 
        
        const areRequiredFieldsValid = checkRequiredFields();
        const isEmailValid = checkEmailField();

        if (areRequiredFieldsValid && isEmailValid) {
            sendButton.innerText = 'Enviando...';
            sendButton.disabled = true;
            sendEmail();
        }
    }

    if (form) {
        form.addEventListener('submit', handleFormSubmit);
        emailField.addEventListener('blur', checkEmailField);
    }
}

}