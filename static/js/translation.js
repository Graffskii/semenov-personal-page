
const btn = document.querySelector('#changeLang');
const allLang = ['EN','RU'];

btn.addEventListener('click', changeURLLang);

function changeURLLang() {
	if (btn.textContent == 'EN') {btn.textContent = 'RU';}
	else if (btn.textContent == 'RU') {btn.textContent = 'EN';}
	let lang;
	if (btn.textContent == 'EN') {lang = 'RU';}
	else { lang = 'EN';}
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}

function changeLanguage() {
	let hash = window.location.hash;
	console.log("hash");
	console.log(hash);
	hash = hash.substr(1);

	if ((!allLang.includes(hash))){
		location.href = window.location.pathname + '#RU';
		hash = 'RU';
		location.reload();
	}
	if (hash == 'EN') {btn.textContent = 'RU';}
	else if(hash == 'RU'){btn.textContent = 'EN';}

	for(let key in langArr){
		let elem = document.querySelector('.'+key);
		if(elem){
			if (key == "inputText") {continue;}
			elem.innerHTML = langArr[key][hash];
		}
	}
	document.getElementsByClassName('inputName')[0].placeholder = langArr['inputName'][hash];
	document.getElementsByClassName('inputEmail')[0].placeholder = langArr['inputEmail'][hash];
	document.getElementsByClassName('inputText')[0].placeholder = langArr['inputText'][hash];
}
changeLanguage();