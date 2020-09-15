console.log('OhanaEng Validator running...');

var buttonFound = false;

setInterval(function () {
	if (!buttonFound) {
		var allButtons = document.querySelectorAll('button.slds-button_brand');
		allButtons.forEach(function (btn) {
			if (btn.innerText === 'Begin Process') btn.click();
		});
	}
}, 500);
