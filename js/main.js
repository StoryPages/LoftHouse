const navBtn = document.querySelector('.nav-icon-btn')
const navIcon = document.querySelector('.nav-icon')
const nav = document.querySelector('.header__top-row')

navBtn.onclick = function () {
	navIcon.classList.toggle('nav-icon--active')
	nav.classList.toggle('header__top-row--mobile')
	document.body.classList.toggle('no-scroll')
}

/* Phone Mask */

mask('[data-tel-input]')

// Удаляем "+" если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]')
phoneInputs.forEach(input => {
	input.addEventListener('input', () => {
		if (input.value == '+') input.value = ''
	})

	input.addEventListener('blur', () => {
		if (input.value == '+') input.value = ''
	})
})

/* Yandex Map */

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init)
function init() {
	// Создание карты.
	var myMap = new ymaps.Map('map', {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [59.943543, 30.338928],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 16,
	})
	var myPlacemark = new ymaps.Placemark(
		[59.943543, 30.338928],
		{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Наб. реки Фонтанки 10-15</div>
					<div class="balloon__contacts">
						<a href="tel:+78121234567">+8 (812) 123-45-67</a>
					</div>
			</div>
			`,
		},
		{
			iconLayout: 'default#image',
			iconImageHref: './../image/map/location-pin.svg',
			iconImageSize: [40, 40],
			iconImageOffset: [-20, -40],
		}
	)

	myMap.controls.remove('geolocationControl')
	myMap.controls.remove('searchControl')
	myMap.controls.remove('trafficControl')
	myMap.controls.remove('typeSelector')
	myMap.controls.remove('rulerControl')
	myMap.behaviors.disable(['scrollZoom'])

	myMap.geoObjects.add(myPlacemark)
	myPlacemark.balloon.open()
}
