'use strict'

import { animeList } from './db/animes.js'

// get main section
const Main = document.getElementById('Main-Section')
const navbarLinks = document.querySelectorAll('.navbar-link')

// add class active for the current page link
navbarLinks.forEach((link) => {
	if (link.href === window.location.href) {
		link.classList.add('active')
	}
})

// display anime list
const currentPath = window.location.pathname.split('/').pop()

if (currentPath === 'anime-list.html') {
	const animeListHTML = animeList.map(
		({ name, image, currently_watching, completed }) => `
		<figure class="anime">
			<img src="${image}" alt="${name}" loading="lazy" />
			<h2>${name}</h2>
			${
				currently_watching
					? `<p class="${currently_watching ? 'is-currently-watching' : ''}">Currently Watching</p>`
					: ''
			}
			<p class="${completed ? 'is-completed' : ''}">
				${completed ? 'Completed' : 'Pending...'}
			</p>
		</figure>
	`
	)

	Main.innerHTML = animeListHTML.join('')
}
