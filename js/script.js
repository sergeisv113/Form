let cooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0],
    nameInput = document.getElementsByClassName('contactform_name')[0],
    phoneInput = document.querySelector('contactform_phone'),
    mailInput = document.querySelectorAll('.contactform_mail')[0],
    modal = document.querySelector('.modal'),
    closeBtn = document.querySelector('.close');
    text = document.getElementsByName('message')[0];

// console.log(heading); [h2.text-center.wow.pulse]
// console.log(heading[0]); <h2 class="text-center wow pulse" data-wow-duration="2s" data-wow-iteration="2">Все включено</h2>
function hover() {
    heading.textContent = 'Действительно всё!';
}
cooseBtn.addEventListener('mouseenter', hover);
cooseBtn.addEventListener('mouseleave', function () {
    heading.textContent = 'Всё включено!';
});
receiveBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});
nameInput.addEventListener('input', function () {
    text.value = `Меня зовут ${nameInput.value}. И я хочу спросить: `
});