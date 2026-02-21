const init = () => {
	const element = document.getElementById("myElement");
	const fadeinLink = document.querySelector(".my-link.fadein");
	const fadeoutLink = document.querySelector(".my-link.fadeout");
	const options = {
		delay: 200,
		//display: "block"
	};
	fadeinLink.addEventListener("click", () => {
		element.wuiFadein(options);
		// or alternatively
		//WUIFade.in(element, options);
	});
	fadeoutLink.addEventListener("click", () => {
		element.wuiFadeout(options);
		// or alternatively
		//WUIFade.out(element, options);
	});
}

window.addEventListener("DOMContentLoaded", init);