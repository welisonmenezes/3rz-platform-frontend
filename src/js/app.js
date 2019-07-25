(function(){

	function appDropdown() {
		var elements = document.querySelectorAll('.wm-dropdown');
		var total = elements.length;
		if (total) {
			for (var i = 0; i < total; i++) {
				elements[i].addEventListener('click', function(event) {
					event.stopPropagation();
					var element = this;
					if (element.classList.contains('opened')) {
						_closeAllDropdowns();
						_dynamicTabindex(element, false);
					} else {
						_closeAllDropdowns();
						element.classList.add('opened');
						_dynamicTabindex(element, true);
					}
				});
			}
		}
		
		document.addEventListener('click', function(event) {
			_closeAllDropdowns();
		});
	}
	appDropdown();

	function _closeAllDropdowns() {
		var elements = document.querySelectorAll('.wm-dropdown');
		var total = elements.length;
		if (total) {
			for (var i = 0; i < total; i++) {
				elements[i].classList.remove('opened');
				_dynamicTabindex(elements[i], false);
			}
		}
	}

	function _dynamicTabindex(parent, active) {
		var tabs = parent.querySelectorAll('.dynamic-tabindex');
		var total = tabs.length;
		var value = (active) ? '0' : '-2';
		if (total) {
			for (var i = 0; i < total; i++) {
				tabs[i].setAttribute('tabindex', value);
			}
		}
	}

	function accessibilityCustomFields() {
		var elements = document.querySelectorAll('.wm-dropdown, .hidden-input, .wm-custom-checkbox, .wm-custom-radio, .toggle-mbl-menu, .wm-tab-header');
		var total = elements.length;
		if (total) {
			for (var i = 0; i < total; i++) {
				elements[i].addEventListener('keypress', function(event) {
					if (event.keyCode === 13) {
						this.click();
						return false;
					}
				});
			}
		}
	}
	accessibilityCustomFields();

	function changeHeaderStyle() {
 		var element = document.getElementById('sct-header');
 		if (element) {
 			window.onscroll = function() {
	 			var nVScroll = document.documentElement.scrollTop || document.body.scrollTop;
	 			if (nVScroll > 30) {
	 				element.classList.add('scrolled');
	 			} else {
	 				element.classList.remove('scrolled');
	 			}
	 		}
 		}
 	}
 	changeHeaderStyle();

 	function toggleMblMenu() {
 		var elements = document.querySelectorAll('.toggle-mbl-menu');
		var total = elements.length;
		if (total) {
			var header = document.getElementById('sct-header');
			for (var i = 0; i < total; i++) {
				elements[i].addEventListener('click', function(event) {
					event.stopPropagation();
					if(header.classList.contains('opened')) {
						header.classList.remove('opened');
					} else {
						header.classList.add('opened');
					}
				});
			}

			document.addEventListener('click', function(event) {
				header.classList.remove('opened');
			});
		}
	}
	toggleMblMenu();

	function onShowDetail() {
		var elements = document.querySelectorAll('.on-show-detail');
		var total = elements.length;
		if (total) {
			var detail = document.querySelector('.detail-item-wrap');
			for (var i = 0; i < total; i++) {
				elements[i].addEventListener('click', function(event) {
					event.stopPropagation();
					detail.classList.add('opened');
					detail.style.top = event.target.offsetTop + 'px';
				});
			}
		}
	}
	onShowDetail();

	function onCloseDetail() {
		var elements = document.querySelectorAll('.on-close-detail');
		var total = elements.length;
		if (total) {
			for (var i = 0; i < total; i++) {
				elements[i].addEventListener('click', function(event) {
					event.stopPropagation();
					event.target.parentElement.parentElement.parentElement.classList.remove('opened');
				});
			}
		}
	}
	onCloseDetail();

	function toggleFilterForm() {
 		var elements = document.querySelectorAll('.toggle-filter-form');
		var total = elements.length;
		if (total) {
			var filter = document.querySelector('.form-filter .mbl-ligth-box');
			for (var i = 0; i < total; i++) {
				elements[i].addEventListener('click', function(event) {
					event.stopPropagation();
					if(filter.classList.contains('opened')) {
						filter.classList.remove('opened');
					} else {
						filter.classList.add('opened');
					}
				});
			}
		}
	}
	toggleFilterForm();


	function wmTab() {
 		var elements = document.querySelectorAll('.wm-tab-header');
		var total = elements.length;
		if (total) {
			for (var i = 0; i < total; i++) {
				elements[i].addEventListener('click', function(event) {
					event.stopPropagation();
					var tabBody = this.parentElement.querySelector('.wm-tab-body');
					var bodyH = tabBody.querySelector('div').offsetHeight;
					if(tabBody.classList.contains('opened')) {
						tabBody.classList.remove('opened');
						tabBody.style.height = 0;
					} else {
						tabBody.classList.add('opened');
						tabBody.style.height = bodyH + 'px';
					}
				});
			}
		}
	}
	wmTab();

	function copyDepositAddress() {
		var elements = document.querySelectorAll('.on-copy-input');
		var total = elements.length;
		if (total) {
			for (var i = 0; i < total; i++) {
				elements[i].addEventListener('click', function(event) {
					event.stopPropagation();
					var idInput = this.getAttribute('data-target');
					if(idInput) {
						var copyText = document.getElementById('depositAddress');
						if(copyText){
							removeElementsByClass('.text-copy-successfully');
							copyText.select();
							document.execCommand('copy');
							createElement('P', 'successfully copied', 'text-copy-successfully', this);
						}
						
					}
				});
			}
		}
	}
	copyDepositAddress();

	function removeElementsByClass(classValue) {
		var elements = document.querySelectorAll(classValue);
		var total = elements.length;
		if (total) {
			for (var i = 0; i < total; i++) {
				elements[i].parentElement.removeChild(elements[i]);
			}
		}
	}

	function createElement(element, text, classValue, parent) {
		var node = document.createElement(element);
		node.setAttribute('class', classValue);
		var textnode = document.createTextNode(text);
		node.appendChild(textnode);
		parent.parentElement.appendChild(node);
	}

})();