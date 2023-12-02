//your code here
let item = document.querySelector('#item-name-input');
let price = document.querySelector('#item-price-input');
let btn = document.querySelector('#add');
let tbody = document.querySelector('tbody');
let total = document.querySelector('#total');
let arr = [];
btn.addEventListener('click', () => {
	let itemName = item.value;
	let itemPrice = parseInt(price.value);
	if(isNaN (itemPrice)){
		alert('Not a valid Number');
		return;
	}
	arr.push(itemPrice);
	let tr = document.createElement('tr');
	let td1 = document.createElement('td');
	td1.innerText = itemName;
	let td2 = document.createElement('td');
	td2.innerText = itemPrice;
	tr.append(td1, td2);
	tbody.append(tr);
	item.value = "";
	price.value = "";
	let sum = arr.reduce((i,j) => i+j, 0);
	total.innerText = sum;
	
})

