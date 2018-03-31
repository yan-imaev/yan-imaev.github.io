//Задание 1
var money, name, time, price;

function start() {
	money = prompt("Ваш бюджет?");

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет?");
	}

	name = prompt("Название вашего магазина?").toUpperCase();
	time = 19;
}

start();

var dayBud = function (wallet) {
	wallet = money/30;
	return wallet;
}

var mainList = {
};

mainList.budget = money;
mainList.daybudget = dayBud();
mainList.nameShop = name;
mainList.shopGoods = [];
mainList.employers = [];
mainList.open = true;
mainList.discount = true;


//ЦИКЛ FOR ИЗ УРОКА

for (let i = 0; i < 4; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
	if ((typeof(a) === 'string') && (typeof(a) != null) && a !='' && a.length < 50) {
		console.log('All good!');
		mainList.shopGoods[i] = a;
	} else {
		i = i - 1;
	}
}

function workTime(time) {
if (time > 8 && time < 20) {
	console.log('GET TIME FOR JS');
  } else if (time > 20 && time < 24) {
		console.log('So far');
	} else {
			console.log('Maybe u want to sleep?');
	  };
}

for (let i = 0; i < 4; i++) {
	let a = prompt("Имя сотрудника");
	mainList.employers[i] = a;
	if ((typeof(a) === 'string') && (typeof(a) != null) && a !='' && a.length < 50) {
		console.log('Сотрудник на работе.');
		mainList.shopGoods[i] = a;
	} else {
		i = i - 1;
	}
}

var price = 49;
var discountPrice = function () {
	if (mainList.discount == true) {
		price = price * 0.8;
		return price;
	} else {
		return price;
	}
}

workTime(prompt("Сколько время у вас на часах?"));

console.log("В магазине " + name + "стоимость с учетом скидки " + discountPrice() + " $, на перечисленные товары: " + mainList.shopGoods);
console.log(mainList);



