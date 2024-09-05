
function enviar(){
  
    var email = document.getElementById('Email').value;

    if (validateEmail(email)) {
        document.getElementById('Email').classList.remove('is-invalid');
        document.getElementById('Email').classList.add('is-valid');
    }
    else {
        document.getElementById('Email').classList.add('is-invalid');
        var txtValidacaoEmail = document.getElementById('boxValEmailInvalid');
        txtValidacaoEmail.innerHTML = '<p>Email inválido! </p>';

        console.log(email);
    };

}








function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }