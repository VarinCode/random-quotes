const quotation = document.querySelector('#quotation');
const name = document.querySelector('#author');
const btn = document.querySelector('button');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '033424c2e0msh75b7c318f2705bbp1e00b1jsne4c89a49621a',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
}

const fetchData = async() => {
    const data = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options);
    try {
        return await data.json();
    } catch {
        throw new Error('The api data cannot be retrieved or an error occurred.');
    }

}
window.addEventListener('load', () => { quotation.textContent = 'Press the button to find cool quotes.' });
btn.addEventListener('click', () => {
    fetchData()
        .then(res => {
            if (typeof res.content === 'undefined') {
                alert(`Something went wrong, please try again!`);
            } else {
                quotation.innerHTML = `" ${res.content} "`;
                name.innerHTML = `- ${res.originator.name}`;
            }
        })
        .catch((rej) => console.error(rej));
});