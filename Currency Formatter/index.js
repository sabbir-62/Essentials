const amount = 123456.78;
// Using Intl.NumberFormat for currency formatting
const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
console.log(formatter.format(amount)); // $123,456.78