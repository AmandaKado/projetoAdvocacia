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

}