// Number format

const numberDefaults = () => {
	//Number.prototype.wuiDefaults.numberPrefix = "";
	//Number.prototype.wuiDefaults.numberSufix = "";
	//Number.prototype.wuiDefaults.thousandsSeparator = ",";
	Number.prototype.wuiDefaults.decimalLength = 2;
	//Number.prototype.wuiDefaults.decimalSeparator = ".";
}

const numberFormatting = () => {
	const inputValue = 1234.567;
	const output = document.body.querySelector(".my-output.number");
	const outputValue = inputValue.wuiToString({ numberPrefix: "$ " });
	output.innerHTML = ""
		+ `input value  : ${inputValue}<br>`
		+ `output value : ${outputValue}`;
}

// Email validation

const emailValidation = () => {
	const email = "test@example.com";
	const output = document.body.querySelector(".my-output.email");
	const valid = email.wuiValidateEmail();
	output.innerHTML = ""
		+ `input value : ${email}<br>`
		+ `valid       : ${valid}`;
}

// Local date/time formatting

const localDateFormatting = () => {
	const inputValue = "2023-12-31";
	const inputFormat = "yyyy-mm-dd";
	const date = new Date().wuiLoad(inputValue, inputFormat);
	const output = document.body.querySelector(".my-output.localDate");
	const format = "dd/mm/yyyy hh:MM [GMT]zz";
	const outputValue = date.wuiToString(format, { utc: false });
	output.innerHTML = ""
		+ `input value   : ${inputValue}<br>`
		+ `input format  : ${inputFormat}<br>`
		+ `local date    : ${date}<br>`
		+ `output format : ${format}<br>`
		+ `output value  : ${outputValue}`;
}

const utcDateFormatting = () => {
	const inputValue = "2023-12-31";
	const inputFormat = "yyyy-mm-dd";
	const date = new Date().wuiLoad(inputValue, inputFormat);
	const output = document.body.querySelector(".my-output.utcDate");
	const format = "dd/mm/yyyy hh:MM [GMT]zz";
	const outputValue = date.wuiToString(format, { utc: true });
	output.innerHTML = ""
		+ `input value   : ${inputValue}<br>`
		+ `input format  : ${inputFormat}<br>`
		+ `utc date      : ${date}<br>`
		+ `output format : ${format}<br>`
		+ `output value  : ${outputValue}`;
}

// Init

window.addEventListener("DOMContentLoaded", () => {
	numberDefaults();
	numberFormatting();
	emailValidation();
	localDateFormatting();
	utcDateFormatting();
});