//Задание 1
var money = prompt("Ваш бюджет?");
var name = prompt("Название вашего магазина?");
var time = 19;


var mainList = {
};

mainList.budget = money;
mainList.nameShop = name;
mainList.shopGoods = [];
mainList.employers = {};
mainList.open = true;

//ЦИКЛ FOR ИЗ УРОКА
/*
for (let i = 0; i < 4; i++) {
	a = prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
	if((typeof(a) === 'string') && (typeof(a) === null) && a !='' && a.length < 50) {
		console.log('All good!');
		mainList.shopGoods[i] = a;
	} else {
		console.log('ERROR')
	}
}

var i = 0;


//ЦИКЛ WHILE
while (i < 4) {
	a = prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
		if((typeof(a) === 'string') && (typeof(a) === null) && a !='' && a.length < 50) {
		console.log('All good!');
		mainList.shopGoods[i] = a;
	} else {
		console.log('ERROR');
	}
	i++
}
*/

//ЦИКЛ DO WHILE
/*
var i = 0;

do {
	a = prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
		if((typeof(a) === 'string') && (typeof(a) === null) && a !='' && a.length < 50) {
		console.log('All good!');
		mainList.shopGoods[i] = a;
	} else {
		console.log('ERROR')
	}
	i++
} while (i < 4);

/*
if (time < 0) {
	console.log('Error of time');
} else if (time > 8 && time < 20) {
	console.log('GET TIME FOR JS');
  } else if (time < 24 ) {
		console.log('So far');
	} else {
			console.log('Maybe u want to sleep?');
	  };
*/

//console.log("В магазине " + name + " скидка " + (money/2) + " рублей, на перечисленные товары: " + mainList.shopGoods);
console.log(mainList);
//mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
//mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
//mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

//console.log("Бюджет на 1 день:" + mainList.budget/30 + " Типы продаваемых товаров: " + mainList.shopGoods + " в магазине " + mainList.nameShop);


