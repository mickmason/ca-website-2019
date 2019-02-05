function bcInnerNav(navContainer) {
	/* 
		Does inner navigation show/hide 
		Works on the icon in inner nav elements which have dropdowns
		The argument is the navigaiton container
	*/
	const innerNavIcons = navContainer.querySelectorAll('.bc-inner-nav-icon');
	innerNavIcons.forEach((el, idx) => {
		function innerNavToggle(target, event, cb) {
			const thisDropdown = target.parentElement.querySelector('.bc-inner-nav-dropdown');
			const thisDropdownScrollHeight = thisDropdown.scrollHeight;
			if (thisDropdown.classList.contains('active')) {
				requestAnimationFrame(() => {
					thisDropdown.style.height = thisDropdownScrollHeight + 'px';
					requestAnimationFrame(() => {
						thisDropdown.style.height = 0;		
					});
				});
				thisDropdown.addEventListener('transitionend', function(e) {
					thisDropdown.removeEventListener('transitionend', arguments.callee) ;
					cb(thisDropdown);
				});
				
			} else {
				thisDropdown.addEventListener('transitionend', function(e) {
					thisDropdown.removeEventListener('transitionend', arguments.callee) ;
					thisDropdown.style.height = 'auto';
				});
				thisDropdown.style.height = thisDropdownScrollHeight + 'px';	
				cb(thisDropdown);
				
			}
		}
		el.addEventListener('click', (e) => {
			e.preventDefault();
			innerNavToggle(el, e, (dropdown) => {
				dropdown.classList.toggle('active');
			});
		});	
	}); 
}
bcInnerNav(document.querySelector('.bc-inner-nav')); 