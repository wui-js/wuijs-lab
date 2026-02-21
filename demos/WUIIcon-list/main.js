const init = () => {
	const iconList = document.getElementById("iconList");
	const results = new Set();
	for (const sheet of document.styleSheets) {
		let rules;
		try {
			rules = sheet.cssRules;
		} catch (e) {
			continue;
		}
		if (!rules) continue;
		for (const rule of rules) {
			if (rule.selectorText) {
				const selectors = rule.selectorText.split(",");
				for (let selector of selectors) {
					selector = selector.trim();
					if (selector.startsWith(".wui-icon")) {
						const match = selector.match(/\.wui-icon\./);
						if (match) {
							results.add(match[0].substring(1));
						}
					}
				}
			}
		}
	}
	Array.from(results).sort().forEach(className => {
		const iconBox = document.createElement("div");
		const icon = document.createElement("div");
		icon.className = `wui-icon ${className}`;
		iconBox.className = "my-icon";
		iconBox.appendChild(icon);
		iconList.appendChild(iconBox);
	});
}

window.addEventListener("DOMContentLoaded", init);