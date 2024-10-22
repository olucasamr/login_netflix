const visibilityBtn = document.querySelector('.Visibility');
const inputPassword = document.querySelector('#Pass');
const saberMais = document.querySelector('.SaibaMais'), textoDoSaberMais = document.querySelector('.ReCap');
const menuHamburguer = document.querySelector('.MenuHamb');


visibilityBtn.addEventListener('click', () => {
    let currentType = inputPassword.getAttribute('type');

    if(currentType === 'password'){
        inputPassword.removeAttribute('type');
        inputPassword.setAttribute('type', 'text');
        visibilityBtn.style.backgroundImage = 'url(./assets/icons8-visível-24.png)';
    }

    else{
        inputPassword.setAttribute('type', 'password');
        visibilityBtn.style.backgroundImage = 'url(./assets/icons8-invisível-30.png)';
    }
})

saberMais.addEventListener('click', () => {
    textoDoSaberMais.innerHTML = '<p>As informações recolhidas pelo Google reCAPTCHA estão sujeitas à <a href="https://policies.google.com/privacy" target="_blank">Política de Privacidade</a> e <a href="https://policies.google.com/terms" target="_blank">Termos de Uso</a>, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).</p>';

    saberMais.style.display = 'none';
})