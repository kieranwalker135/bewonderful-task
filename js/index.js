// Shrinking header

// Grab the header.
const header = document.getElementsByClassName('site-header');

// On scroll, add or remove a "shrink" class.
window.addEventListener('scroll', function() {
	if (window.scrollY > 200) {
		header[0].classList.add('shrink')
	} else {
		header[0].classList.remove('shrink')
	}
});

// AOS Init

AOS.init();