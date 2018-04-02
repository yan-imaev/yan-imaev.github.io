
var money, name, time, price;

function start() {
	money = prompt("Ваш бюджет?");

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет?");
	}

	name = prompt("Название вашего магазина?").toUpperCase();
	time = 19;
}

//start();

var mainList = {
budget : money,
daybudget : function daybudget () {
						console.log("Eжедневный бюджет " + mainList.budget / 30);
					},
nameShop : name,
shopGoods : [],
employers : [],
open : false,
chooseGoods: function chooseGoods() {
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
			},
workTime:   function workTime(time) {
				time = prompt("Сколько время у вас на часах?");
			if (time > 8 && time < 20) {
				console.log('GET TIME FOR JS');
				mainList.open = true;
			  } else if (time > 20 && time < 24) {
					console.log('So far');
				} else {
						console.log('Maybe u want to sleep?');
				  };
			},
discountPrice:  function discountPrice() {
					let price = prompt("Сколько стоит ваш товар?");
					if (mainList.discount == true) {
						price = price * 0.8;
						return price;
					} else {
						return price;
					}
				},
headHunter : function headHunter() {
				for (let i = 0; i < 4; i++) {
					let a = prompt("Имя сотрудника");
					mainList.employers[i] = a;
					if ((typeof(a) === 'string') && (typeof(a) != null) && a !='' && a.length < 50) {
						console.log('Сотрудник на работе.');
						mainList.employers[i] = a;
					} else {
						i = i - 1;
					}
				}
			},

shopItems : [],

chooseShopItems : function chooseShopItems () {
		let items = function() {
				for (let i = 0; i < 4; i++) {
					let a = prompt("Перечислите товары через запятую!");
					mainList.employers[i] = a;
					if ((typeof(a) === 'string') && (typeof(a) != null) && a !='') {
						mainList.employers[i] = a;
					} else {
						i = i - 1;
					}
				}
		};
		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("Подождите еще ",""));
		mainList.shopItems.sort();
	}
};


mainList.shopItems.forEach(function(item,i) {
	console.log("У нас вы можете купить: " + (i + 1) + item);
});

for (let key in mainList.shopItems) {
	console.log("Наш магазин включает в себя: " + mainList.shopItems[key]);
};

console.log(mainList);
