/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
} from './modules';

import BurgerMenu from './modules/BurgerMenu';

// import Tabs from 'modules/Tabs';

// import { MousePRLX } from './libs/parallaxMouse'

// import AOS from 'aos'

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();

/* Добавление класса touch для HTML если браузер мобильный */
// addTouchClass();

/* Добавление loaded для HTML после полной загрузки страницы */
// addLoadedClass();

/* Модуль для работы с меню (Бургер) */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();

/** Параллакс мышей */
// const mousePrlx = new MousePRLX({});

/** Фиксированный header */
// headerFixed();

/**
 *  Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
// togglePopupWindows();

// =======================================================================================================
// const tabs = new Tabs('default-tabs', {});

/*Динамический адаптив ===================================================================================
* Что бы перебросить блок в другой блок, повешай на него атрибут:
* data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
*/
/*Расскоментировать для использования*/
import { useDynamicAdapt } from './modules/dynamicAdapt.js'
useDynamicAdapt()
// =======================================================================================================

/* Валидация формы =======================================================================================
* В константу записывает нужную форму
* В переменную formNAME передаем форму
* В переменную popupTranks передаем окно благодарности
* Добавить класс _email на input type='mail'
* Добавить каласс _req на input которые нужно проверить
* Добавить класс .popup-thanks для модального окна спасибо
  Раскоментировать для использования
*/ 
// import { validForm } from './modules/validFrom.js'
// const popupTranks = document.querySelector('.popup-thanks')
// const formNAME = document.getElementById('form-NAME')
// validForm(fromName, popupTranks)
// =======================================================================================================

const scrollingText = document.querySelector('.line-header');

        scrollingText.addEventListener('mouseenter', () => {
            scrollingText.style.animationPlayState = 'paused';
        });

        scrollingText.addEventListener('mouseleave', () => {
            scrollingText.style.animationPlayState = 'running';
        });


const slider = new Swiper('.slider__swiper', {
  speed: 800,
  spaceBetween: 20,
  slidesPerView: 1.2,
  modules: [Autoplay, Navigation, Pagination],
  autoplay: {
    delay: 2500,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  loop: true,
  initialSlide: 1,
  breakpoints: {
    420: {
      slidesPerView: 1.71,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    670: {
      slidesPerView: 3,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    950: {
      slidesPerView: 4,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    1150: {
        slidesPerView: 4,
        spaceBetween: 40,
        slideToClickedSlide: true,
    }
  },
});


function toggleActiveClassRemov(elements) {
  elements.forEach(function(element) {
    element.addEventListener('click', function() {
      elements.forEach(function(el) {
        if (el !== element) {
          el.classList.remove('_active');
        }
      });
      element.classList.toggle('_active');
    });
  });
}

function toggleOpenClass(elements) {
  elements.forEach(function(element) {
    element.addEventListener('click', function() {
      elements.forEach(function(el) {
        if (el !== element) {
          el.parentElement.classList.remove('_open');
        }
      });
      element.parentElement.classList.toggle('_open');
    });
  });
}

const rigionTitle = document.querySelectorAll('.rigion__title');
toggleOpenClass(rigionTitle);
const searchItem = document.querySelectorAll('.search__item');
toggleOpenClass(searchItem);


//изменение выподающего списка
const rigionItems = document.querySelectorAll('.rigion__item')
if (rigionItems.length > 0) {
  rigionItems.forEach(item => {
    item.addEventListener('click', () => {
      const text = item.textContent.trim();
      const titleElement = item.closest('.rigion').querySelector('.rigion__title');
      
      if (titleElement) {
        titleElement.textContent = text;
        titleElement.parentElement.classList.remove('_open');
      }
    });
  });
}