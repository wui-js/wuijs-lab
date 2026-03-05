const wuiComponents = {};

const init = () => {
	const themes = new WUIPluginThemes();
	wuiComponents.selectpicker = new WUISelectpicker({
		selector: ".wui-selectpicker.my-selectpicker",
		value: "2"
	});
	Object.values(wuiComponents).forEach((component) => {
		component.init();
	});
	themes.setScheme("dark");
}

window.addEventListener("wuiLoad", init);