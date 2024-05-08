document.addEventListener("DOMContentLoaded", function() {
	var header = document.querySelector('.header');
	var profileinfo = document.querySelector('.profile-info');
	var toggleButton = document.getElementById('toggleButton');
	
	toggleButton.addEventListener('click', function() {
	  if (header.style.left === '-306px') {
		 header.style.left = '0px';
	  } else {
		 header.style.left = '-306px';
	  }
	//   if (profileinfo.style.left === '-306px') {
	// 	profileinfo.style.left = '28px';
	//   } else {
	// 	profileinfo.style.left = '-306px';
	//   }
	});
	window.addEventListener('resize', function() {
		if (window.innerWidth >= 1023.98) {
		  header.style.left = '0px';
		} else {
		  header.style.left = '-306px';
		}
		// if (window.innerWidth >=1023.98){
		// 	profileinfo.style.left = '28px';
		// } else {
		// 	profileinfo.style.left = '-306px';
		// }
	 });
 });