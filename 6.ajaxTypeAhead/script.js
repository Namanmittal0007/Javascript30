const dataEndPoint = './in.json';
const cities = [];

fetch(dataEndPoint)
                    .then(rawData => rawData.json())
                    .then(data => cities.push(...data));


function matchword( wordtomatch, cities){
    return cities.filter(place => {
        let regex = new RegExp(wordtomatch, 'gi');
        return place.city.match(regex) || place.admin_name.match(regex);
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displaymatched(){
    let matches = matchword(this.value,cities);
    if(this.value===''){
        matches=[];
    }
    let list = matches.map( place => {
        const key=this.value.toLowerCase();
        const regex = new RegExp (this.value,'gi');
        const city = place.city.replace(regex,`<span class="highlight">${key}</span>`);
        const state = place.admin_name.replace(regex,`<span class="highlight">${key}</span>`);
        return `<li><span>${city}, ${state}</span><span>${numberWithCommas(place.population)}</span></li>`;
    }).join('');
    suggestions.innerHTML=list;
}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestion');

search.addEventListener('change', displaymatched);
search.addEventListener('keyup', displaymatched);

