const date = new Date();
const dateFormatter = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
console.log(dateFormatter.format(date)); // "15 October 2024"