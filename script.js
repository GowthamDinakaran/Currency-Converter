function convertCurrency() {
  const inr = parseFloat(document.getElementById('inr').value);
  const currency = document.getElementById('currency').value;
  const result = document.getElementById('conversion-result');

  if (!inr || inr <= 0) {
    result.textContent = 'Please enter a valid INR amount.';
    result.style.color = 'black';
    return;
  }

  let converted = 0;
  let symbol = '';

  switch (currency) {
    case 'USD':
      converted = inr / 83;
      symbol = '$';
      break;
    case 'EUR':
      converted = inr / 89;
      symbol = '€';
      break;
    case 'GBP':
      converted = inr / 104;
      symbol = '£';
      break;
  }

  result.textContent = `Converted Amount: ${symbol}${converted.toFixed(2)}`;
}
