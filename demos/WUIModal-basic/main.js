const init = () => {
	const button = document.querySelector(".my-button");
	const output = document.body.querySelector(".my-output");
	const modal = new WUIModal({
		selector: ".wui-modal.my-modal",
		//openDelay: 200,
		//onStartOpen: null,
		onOpen: () => {
			output.textContent = `Modal opened"`;
		},
		//onMaximize: null,
		//onScrolling: null,
		//onStartClose: null,
		onClose: () => {
			output.textContent = `Modal closed"`;
		}
		//onBack: null
	});
	modal.init();
	button.addEventListener("click", () => {
		modal.open();
	});
}

window.addEventListener("DOMContentLoaded", init);