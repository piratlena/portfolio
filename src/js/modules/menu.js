const menu = (triggerSelector, closeSelector, menuSelector, activeClass) => {

    const trigger = document.querySelector(triggerSelector),
          close = document.querySelector(closeSelector),
          menuBlock = document.querySelector(menuSelector);

    trigger.addEventListener('click', (e) => {
        e.preventDefault();

    menuBlock.classList.add(activeClass);
    });

    close.addEventListener('click', (e) => {
        e.preventDefault();

    menuBlock.classList.remove(activeClass);
    });
}

export default menu;