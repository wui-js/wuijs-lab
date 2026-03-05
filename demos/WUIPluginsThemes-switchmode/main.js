const wuiComponents = {};
const wuiPlugins = {};

const init = () => {
	wuiComponents.switchbox = new WUISwitch({
		selector: ".wui-switch.my-switch",
		value: "1",
		activated: false,
		onChange: (value, activated) => {
			wuiPlugins.themes.setScheme(activated ? "dark" : "light");
		}
	});
	wuiComponents.selectpicker = new WUISelectpicker({
		selector: ".wui-selectpicker.my-selectpicker",
		value: "2"
	});
	wuiPlugins.themes = new WUIPluginThemes();
	Object.values(wuiComponents).forEach((component) => {
		component.init();
	});
}

window.addEventListener("wuiLoad", init);