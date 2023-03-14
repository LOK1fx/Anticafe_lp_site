const trigger = document.querySelector('.trigger');
const nav = document.querySelector('.full-screen-nav');
const backdrop = document.querySelector('.backdrop');

let isMenuOpened = false

trigger.addEventListener('click', () => on_trigger_clicked());
backdrop.addEventListener('click', () => nav.classList.remove('open-nav'));

function on_trigger_clicked()
{
    isMenuOpened = !isMenuOpened

    if (isMenuOpened)
    {
        nav.classList.add('open-nav')
    }
    else
    {
        nav.classList.remove('open-nav')
    }
}