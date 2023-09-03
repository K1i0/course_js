/* 
    Василий положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц.
    Вывести в консоль, сможет ли он купить дом за 13 500$
    через 2 года после снятия вклада. И остаток после покупки.
    Формула сложных процентов: 
        Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах 
*/

// Data
const startUpCapital = 12_000; //стартовый капитал
const percentPerAnnum = 7; //годовой процент
const ratePerMonth = (percentPerAnnum / 12) / 100; //ставка в месяц в долях
const depositTerm = 24; //срок вклада в месяцах

let totalAmount = startUpCapital * ((1 + ratePerMonth) ** depositTerm);

const houseCost = 13_500;
if (totalAmount >= houseCost) {
    console.log(`Итоговая сумма по истечении срока вклада: ${totalAmount}$`);
    console.log(`Василий может себе позволить дом за ${houseCost}$. Остаток на счете: ${totalAmount - houseCost}$`);
} else {
    console.log(`Итоговая сумма по истечении срока вклада: ${totalAmount}$`);
    console.log('Василию нужно подкопить денег');
}