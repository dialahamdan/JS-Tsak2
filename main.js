var rates = {
    dollar: 1.5, 
    dinar: 0.71, 
    nis: 3.25 
};

document.querySelector('.registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var amount = document.querySelector('input[name="amount"]').value;
    var exchange = document.querySelector('select[name="exchange"]').value;

    var result = amount * rates[exchange];
    document.querySelector('.result').textContent = 'The converted amount is: ' + result;
});