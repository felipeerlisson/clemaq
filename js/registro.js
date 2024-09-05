function validarCampos(){

    //validação do campo Nome
    var Nome = document.getElementById('Nome').value;
    var SobreNome = document.getElementById('Sobrenome').value;
    var senha = document.getElementById('Senha').value;
    var confirmarSenha = document.getElementById('ConfirmarSenha').value;
    var email = document.getElementById('Email').value;
    var celular = document.getElementById('celular').value;
    

    var validado = true;
    
    if(Nome === "" || Nome === null || Nome > 100){
        document.getElementById('Nome').classList.add('is-invalid');
        var txtValidacaoNome = document.getElementById('boxValNomeInvalid');
        txtValidacaoNome.innerHTML = '<p>Nome inválido! </p>'
        validado = false;
    }
    else{
        document.getElementById('Nome').classList.remove('is-invalid');
        document.getElementById('Nome').classList.add('is-valid');
    };

    if(SobreNome === "" || SobreNome === null){
        document.getElementById('Sobrenome').classList.add('is-invalid');
        var txtValidacaoSobrenome = document.getElementById('boxValSobreNomeInvalid');
        txtValidacaoSobrenome.innerHTML = '<p>Usuário inválido! </p>'
        validado = false;
    }
    else{
        document.getElementById('Sobrenome').classList.remove('is-invalid');
        document.getElementById('Sobrenome').classList.add('is-valid');
    };

    
    if (validateEmail(email)) {
        document.getElementById('Email').classList.remove('is-invalid');
        document.getElementById('Email').classList.add('is-valid');
    }
    else {
        document.getElementById('Email').classList.add('is-invalid');
        var txtValidacaoEmail = document.getElementById('boxValEmailInvalid');
        txtValidacaoEmail.innerHTML = '<p>Email inválido! </p>'
        validado = false;
    };
    
    if(celular === "" || celular === null){
        document.getElementById('celular').classList.add('is-invalid');
        var txtValidacaoCelular = document.getElementById('boxValCelularInvalid');
        txtValidacaoCelular.innerHTML = '<p>Número inválido! </p>'
        validado = false;
    }
    else{
        document.getElementById('celular').classList.remove('is-invalid');
        document.getElementById('celular').classList.add('is-valid');
    };

    
    if(senha === confirmarSenha && confirmarSenha && senha){
        document.getElementById('Senha').classList.remove('is-invalid');
        document.getElementById('ConfirmarSenha').classList.remove('is-invalid');
        document.getElementById('Senha').classList.add('is-valid');
        document.getElementById('ConfirmarSenha').classList.add('is-valid');
    }
    else{
        document.getElementById('Senha').classList.add('is-invalid');
        document.getElementById('ConfirmarSenha').classList.add('is-invalid');
        var txtValidacaoSenha = document.getElementById('boxValSenhaInvalid');
        txtValidacaoSenha.innerHTML = '<p>Senhas não coincidem! </p>';
        validado = false;
    }
    
    return validado;

}

function registrar(){

    var nome = document.getElementById('Nome').value;
    var sobrenome = document.getElementById('Sobrenome').value;
    var email = document.getElementById('Email').value;
    var senha = document.getElementById('Senha').value;
    var confirmarSenha = document.getElementById('ConfirmarSenha').value;
    var celular = document.getElementById('celular').value;
    celular = celular.replace(/[^0-9,]*/g, '').replace(',', '.');
    var codusuario = Math.floor(Math.random() * 1000000);
    console.log("CELULAR:",celular);

    if(validarCampos()){
        $.ajax({
            method: 'POST',
            url: 'register.php',
            data:{
                codusuario:codusuario,
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                celular:celular,
                senha: senha
            }

    });
    }
    
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token; 
    var profile = googleUser.getBasicProfile();

    var id = profile.getId(); // Do not send to your backend! Use an ID token instead.
    var nome = profile.getName();
    var imagem = profile.getImageUrl();
    var email = profile.getEmail(); // This is null if the 'email' scope is not present.
    console.log(imagem)

    if(nome !== ''){
        //se encontrar usuario 
        $.post("conexaogoogle.php", {nome: nome, email: email, imagem: imagem, id_token: id_token}, function(data){
           if (data === '"erro"') {
            window.location.href = "http://localhost/EloFast/404.html";
           } else {
            window.location.href = "http://localhost/EloFast/indexpainel.php";
           }
        });
        
    }else{//se nao encontrar usuario
        window.location.href = "http://localhost/EloFast/404.html";
    }
  }