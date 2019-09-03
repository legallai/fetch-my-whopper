document.querySelector('.getWhopper').addEventListener('click', () => {
    dateFormat = new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' });
    timeFormat = new Intl.DateTimeFormat('fr-FR', { hour: 'numeric', minute: '2-digit' });
    
    fetch('/whopper', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            storeNumber: document.querySelector('.storeNumber').value, // you'll find the real infos or your receipt
            date: dateFormat.format(new Date()), // DD/MM/YYYY
            time: timeFormat.format(new Date())
        })
    }).then(res => res.text())
    .then(response => {
        document.querySelector('.result').innerText = response;
    });
});
