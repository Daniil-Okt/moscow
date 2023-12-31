import Popup from './Popup.js';
const buttonMenuText = document.querySelector('.button-menu__text');
class BurgerMenu extends Popup {
  constructor() {
    super();

    this.burgerButton = document.querySelector('.icon-menu');
    
  }

  /**
   * Initialize the menu functionality.
   */
  init() {
    
    if (this.burgerButton) {
      document.addEventListener('click', ({ target }) => {
        if (target.closest('.icon-menu')) {
          this.html.classList.toggle('menu-open');
          this.toggleBodyLock(this.html.classList.contains('menu-open'));
        }
      });
    }
  }

  /**
   * Open the menu.
   */
  
  menuOpen() {
    this.toggleBodyLock(true);
    this.html.classList.add('menu-open');
    buttonMenuText.textContent = 'Закрыть';
  }

  /**
   * Close the menu.
   */
  menuClose() {
    this.toggleBodyLock(false);
    this.html.classList.remove('menu-open');
    buttonMenuText.textContent = 'Меню';
  }
}

export default BurgerMenu;