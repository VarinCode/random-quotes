const quotation = document.querySelector('#quotation');
const name = document.querySelector('#author');

(function(){
	quotation.textContent = 'Press the button to find cool quotes.';
})();

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '033424c2e0msh75b7c318f2705bbp1e00b1jsne4c89a49621a',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
}

const fetchData = async () => {
    const data = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	await data.json()
		.then(res => {
			if(typeof res.content === 'undefined'){
				quotation.innerHTML = 'Something went wrong, please try again!'
				name.textContent = ``;	
			} else {
				quotation.innerHTML = `" ${res.content} "`;	
				name.innerHTML = `- ${res.originator.name}`;	
			}

        })
		.catch((rej) => console.error(rej));   
}

window.addEventListener('click' , () => { fetchData() });