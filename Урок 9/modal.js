window.onload = function()
{
a = document.getElementById("a");
b = document.getElementById("b");
} 

//показываем окно функции "showA"
function showA()
{
//Задаем прозрачность и блокируем дисплей
//элемента "b"
b.style.filter = "alpha(opacity=80)";
b.style.opacity = 0.8;
b.style.display = "block";
// Задаем блокироваку и отступ сверху в 200px
//элемента "a"
a.style.display = "block";
a.style.top = "200px";
}

//Вызываем функцию "hideA", которая будет скрывать 
//окно для элементов "a" и "b"
function hideA()
{
b.style.display = "none";
a.style.display = "none";
}      