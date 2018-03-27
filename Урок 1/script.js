//Задание 1

var mainList = {
	open: true;
};

mainList.budget = prompt("Ваш бюджет?");
mainList.nameShop = prompt("Название вашего магазина?");
mainList.shopGoods = [, , ];
mainList.employers = {};
mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

console.log("Бюджет на 1 день:" + mainList.budget/30 + " Типы продаваемых товаров: " + mainList.shopGoods + " в магазине " + mainList.nameShop);

//Задание 2

var num = 33721;
	numProd = 3*3*7*2*1;
console.log(numProd);
console.log(numProd**3);
