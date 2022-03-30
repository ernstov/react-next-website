import { headerHeight, headerHeightMd } from "../configs/appConfig"

export const randomIntFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getUrlParam = (paramName) => {
	const urlString = window.location;
	const url = new URL(urlString);

	return url.searchParams.get(paramName);
}

export const isWrap = () => {
	const wrap = getUrlParam("wrap");

	if (wrap) {
		return JSON.parse(wrap);
	} else {
		return true;
	}
}

export const cutOffString = (text) => {
	if (text.length <= 100) return text
	return text.slice(0, 100) + "..."
}

export const diffTimeString = (text) => {
	let newText = text.replace(' hours', 'h').replace(' minutes', 'm').replace(' days', 'd')
	return newText
}

export const validateEmail = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export const filterIt = (array, value, key) => {
	return array.filter(key
		? a => a[key] === value
		: a => Object.keys(a).some(k => a[k] === value)
	);
}

export const dateFormat = function () {
	var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var _ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d: d,
				dd: pad(d),
				ddd: dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m: m + 1,
				mm: pad(m + 1),
				mmm: dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy: String(y).slice(2),
				yyyy: y,
				h: H % 12 || 12,
				hh: pad(H % 12 || 12),
				H: H,
				HH: pad(H),
				M: M,
				MM: pad(M),
				s: s,
				ss: pad(s),
				l: pad(L, 3),
				L: pad(L > 99 ? Math.round(L / 10) : L),
				t: H < 12 ? "a" : "p",
				tt: H < 12 ? "am" : "pm",
				T: H < 12 ? "A" : "P",
				TT: H < 12 ? "AM" : "PM",
				Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

dateFormat.masks = {
	"default": "ddd mmm dd yyyy HH:MM:ss",
	shortDate: "m/d/yy",
	mediumDate: "mmm d, yyyy",
	longDate: "mmmm d, yyyy",
	fullDate: "dddd, mmmm d, yyyy",
	shortTime: "h:MM TT",
	mediumTime: "h:MM:ss TT",
	longTime: "h:MM:ss TT Z",
	isoDate: "yyyy-mm-dd",
	isoTime: "HH:MM:ss",
	isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

dateFormat.i18n = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};


export const isObjectEmpty = (obj) => {
	return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export const cleanText = (str) => {
	return str.replace(/<\/?[^>]+(>|$)/g, "")
}

export const mode = (arr) => {
	return arr.sort((a, b) =>
		arr.filter(v => v === a).length
		- arr.filter(v => v === b).length
	).pop();
}

export const convertToSlug = (Text, id) => {
	return `${Text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}${id ? `-${id}` : ""}`
}

export const getIdFromSlug = (slug) => {
	return slug.split("-").pop()
}

export const isEmpty = (obj) => {
	return Object.keys(obj).length === 0;
}

export const getSkeletonVariant = (pages, nextPage) => {
	if (nextPage.includes("news/")) return "article"

	return filterIt(pages, nextPage == "/" ? "/" : nextPage.replace("/", ""), "link")[0]?.skeleton
}

export const getSidebarAvailability = (pages, nextPage) => {

	if (nextPage.includes("news/")) return false

	return filterIt(pages, (nextPage == "/" || nextPage == "") ? "/" : nextPage.replace("/", ""), "link")[0]?.isSidebar
}

export const filterItIndex = (array, value, key) => {
	let index = -1;

	array.forEach((item, i) => {
		if (index == -1) {
			item[key] == value ? index = i : index = -1;
		}
	})

	return index;
}

export const sortArrayOfObjects = (array, key) => {
	return array.sort((a, b) => b[key] - a[key]);
}

export const filterBySourceBias = (array, name) => {
	return array.filter((article) => (article.overallBiasRating == name))
}

export const excludeByKey = (array, key, value) => {
	return array.filter((article) => (article[key] != value))
}

export const numberWithCommas = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const filterItFull = (array, value, key) => {
	return array.filter(key
		? a => a[key].toLowerCase().indexOf(value.toLowerCase()) !== -1
		: a => Object.keys(a).some(k => a[k].toLowerCase().indexOf(value.toLowerCase()) !== -1)
	);
}

export const parseStripeSubscriptionStatus = (value) => {
	if (!value) {
		return 'INACTIVE'
	}

	const status = value.toUpperCase().replace(/-/g, ' ')
	return status === 'TRIALING' ? 'TRIAL' : status
}

export const isSmoothScroll = () => {
	const smooth = getUrlParam("smooth");

	if (smooth) {
		return JSON.parse(smooth);
	} else {
		return true;
	}
}

export const scrollTo = (elmId, isWrap, scrollB) => {
	const elm = document.querySelector(`#${elmId}`)
	if (elm) {
		const position = elm.getBoundingClientRect().top

		if (window.innerWidth > 880) {
			scrollB.current.scrollbar.scrollTo(0, window.pageYOffset + calcPosition(position, isWrap), 1000)
		} else {
			window.scrollTo({
				top: window.pageYOffset + calcPosition(position, isWrap),
				behavior: "smooth"
			})
		}
	}
}

export const calcPosition = (position, isWrap) => {
	if (window.innerWidth > 879) {
		return isWrap ? position - headerHeight - 50 : position
	} else {
		return isWrap ? position - headerHeightMd : position
	}
}

export const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getOffset = (el) => {
	const rect = el?.getBoundingClientRect();
	return rect ? {
		left: rect.left + window.scrollX,
		top: rect.top + window.scrollY
	} : {};
}

export const languages = [
	{
		"code": "us",
		"lang": "en",
		"country": "United States"
	},
	{
		"code": "gb",
		"lang": "en",
		"country": "Great Britain"
	},
	{
		"code": "de",
		"lang": "de",
		"country": "Germany"
	},
	{
		"code": "it",
		"lang": "it",
		"country": "Italy"
	},
	{
		"code": "fr",
		"lang": "fr",
		"country": "France"
	},
	{
		"code": "nl",
		"lang": "nl",
		"country": "Netherlands"
	},
	{
		"code": "se",
		"lang": "sv",
		"country": "Sweden"
	},
	{
		"code": "dk",
		"lang": "da",
		"country": "Denmark"
	},
	{
		"code": "fi",
		"lang": "fi",
		"country": "Finland"
	},
	{
		"code": "hu",
		"lang": "hu",
		"country": "Hungary"
	},
	{
		"code": "no",
		"lang": "no",
		"country": "Norway"
	},
	{
		"code": "pl",
		"lang": "pl",
		"country": "Poland"
	},
	{
		"code": "pt",
		"lang": "pt",
		"country": "Portugal"
	},
	{
		"code": "ru",
		"lang": "ru",
		"country": "Russia"
	},
	{
		"code": "ua",
		"lang": "uk",
		"country": "Ukraine"
	},
	{
		"code": "ch",
		"lang": "en",
		"country": "Switzerland"
	},
	{
		"code": "br",
		"lang": "pt",
		"country": "Brazil"
	},
	{
		"code": "nz",
		"lang": "en",
		"country": "New Zealand"
	},
	{
		"code": "mx",
		"lang": "es",
		"country": "Mexico"
	},
	{
		"code": "au",
		"lang": "en",
		"country": "Australia"
	}
]

export const setCookie = (name, value, days) => {
	let expires = "";
	if (days) {
		let date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
export const getCookie = (name) => {
	let nameEQ = name + "=";
	let ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}
export const eraseCookie = (name) => {
	document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}