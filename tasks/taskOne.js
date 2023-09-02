/*
Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.
Выведете в консоль:
Boolean переменную успеете ли вы взяться за работу
Сколько вы за неё попросите?
*/

const weekDaysCount = 7;

const payRateHourUSD = 80;
const workDaysPerWeek = 5;
const workHoursPerDay = 5;
const weekendDays = 2;

const orderHours = 40;
const workDaysForOrder = 11;

let hoursAvailable = workHoursPerDay * (workDaysForOrder - weekendDays * (Math.floor(workDaysForOrder / weekDaysCount)));
console.log('Available hours: ' + hoursAvailable);

let isAcceptWork = hoursAvailable >= (orderHours);
console.log('Can I take the task to work? ' + isAcceptWork);

let price = `${orderHours * payRateHourUSD}$`;
console.log('Price for order: ' + price);