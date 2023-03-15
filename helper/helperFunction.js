export function formatDate(str) {
	const date = new Date(str);
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	return date.toLocaleDateString("en-US", options);
}


export function urlFromString(inputString) {
	return inputString.toString().toLowerCase().replace(/ /g, '-');
}