export function validateURL(url) {
	// Regular expressions for each social media platform
	const regexPatterns = {
		Facebook: /https?:\/\/(?:www\.)?facebook\.com\//,
		Github: /https?:\/\/(?:www\.)?github\.com\//,
		Instagram: /https?:\/\/(?:www\.)?instagram\.com\//,
		Reddit: /https?:\/\/(?:www\.)?reddit\.com\//,
		TikTok: /https?:\/\/(?:www\.)?tiktok\.com\//,
		LinkedIn: /https?:\/\/(?:www\.)?linkedin\.com\//,
		Twitter: /https?:\/\/(?:www\.)?twitter\.com\//,
		WhatsApp: /https?:\/\/(?:www\.)?wa\.me\//,
		Youtube: /https?:\/\/(?:www\.)?youtube\.com\//
	};

	for (const [platform, regexPattern] of Object.entries(regexPatterns)) {
		if (url.match(regexPattern)) {
			return { valid: true, platform: platform };
		}
	}

	return { valid: false, platform: null };
}
