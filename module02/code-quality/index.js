function calculateDays() {
let m = prompt('Введите порядковый номер месяца') ;
let chyslo = prompt('Введите число (день месяца)') ;
let finalresult = 0 ;
if (isNaN(Number(m)) || Number(m) > 12 || Number(m) < 1 ) {

alert('Некорректный месяц!') ;
return ;
}
if (isNaN(Number(chyslo)) || Number(chyslo) > 31 || Number(chyslo) < 1 ) {alert('Некорректное число!') ;return ;}
for (let i=1; i<=Number(m); i++) {prepareResult(i)}
finalresult += chyslo;
alert('Количество дней с начала года: ' + finalresult) ;
function prepareResult(m) {
switch (m-1) {
case 1 : finalresult += 31 ; break ;
case 2 : finalresult += 28 ; break ;
case 3 : finalresult += 31 ; break ;
case 4 : finalresult += 30 ; break ;
case 5 : finalresult += 31 ; break ;
case 6 : finalresult += 30 ; break ;
case 7 : finalresult += 31 ; break ;
case 8 : finalresult += 31 ; break ;
case 9 : finalresult += 30 ; break ;
case 10 : finalresult += 31 ; break ;
case 11 : finalresult += 30 ; break ;
case 12 : finalresult += 31 ; break ;
}}

return finalresult ;
}