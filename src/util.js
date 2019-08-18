export default {
    formatCurrency: (num) => {
        const currency = `$${Number(num.toFixed(2)).toLocaleString()}`;
        return currency;
    }
}