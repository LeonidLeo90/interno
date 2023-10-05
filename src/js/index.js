
import mobileNav from './modules/mobile-nav.js';

mobileNav();

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

new AirDatepicker('#date');


const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	grabCursor: true,
	slideToClickedSlide: false,
	slidesPerView: 5,
	speed: 800,
	centeredSlides: false,
	loop: true,
	rewind: true,

	autoplay: {
		// Пауза между прокруткой
		delay: 5000,
		// Закончить на последнем слайде
		stopOnLastSlide: false,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 4,
		},
		1140: {
			slidesPerView: 5,
		}
	},
});

/*burger*/

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
	e.preventDefault();
	// Переключаем стили элементов при клике
	popup.classList.toggle("open");
	hamb.classList.toggle("active");
	body.classList.toggle("noscroll");
	renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
	popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
	link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
	popup.classList.remove("open");
	hamb.classList.remove("active");
	body.classList.remove("noscroll");
}

//бургер

$(document).ready(function () {
	$('.navigation_list .search').click(function (e) {
		if ($('.gmg-header-menu-content .header-search').hasClass('search-open')) {
			$('.gmg-header-menu-content .header-search').removeClass('search-open');
			$('#icon-search').show();
			$('#icon-close').hide();
		}
		else {
			$('.gmg-header-menu-content .header-search').addClass('search-open');
			$('#icon-search').hide();
			$('#icon-close').show();
		}
		e.preventDefault();
	});
});