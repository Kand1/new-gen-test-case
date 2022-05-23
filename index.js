// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
let testData = [requiredRange1, requiredRange2, requiredRange3];

let validCourses = (requiredRange, courses) => {
    //замена null значений
    let beginOfRequiredRange = !requiredRange[0] ? 0 : requiredRange[0];
    let endOfRequiredRange = !requiredRange[1] ? Infinity : requiredRange[1];
    return courses.filter((element) => {
        //замена null значений
        let beginOfElementRange = !element.prices[0] ? 0 : element.prices[0];
        let endOfElementRange = !element.prices[1] ? Infinity : element.prices[1];
        //диапазон курса полностью включает заданный диапазон
        if (beginOfElementRange <= beginOfRequiredRange && endOfRequiredRange <= endOfElementRange) {
            return true;
        }
        //начало диапазона курса лежит внутри заданного диапазона
        if (beginOfRequiredRange <= beginOfElementRange && beginOfElementRange <= endOfRequiredRange) {
            return true;
        }
        //конец диапазона курса лежит внутри заданного диапазона
        if (beginOfRequiredRange <= endOfElementRange && endOfElementRange <= endOfRequiredRange) {
            return true;
        }
        return false;
    });
};

let coursesSort = (courses) => {
    return courses.sort((a, b) => {
        //замена null значений
        let aStart = !a.prices[0] ? 0 : a.prices[0];
        let aEnd = !a.prices[1] ? Infinity : a.prices[1];
        let bStart = !b.prices[0] ? 0 : b.prices[0];
        let bEnd = !b.prices[1] ? Infinity : b.prices[1];
        if ((aStart - bStart) !== 0) {
            return aStart - bStart;
        }
        return aEnd - bEnd;
    });
}

testData.forEach((element, i) => {
    //красивое форматирование вывода, чтобы не разворачивать вложенные массивы в консоли
    console.log(`#${i + 1} range: ${element[0]} - ${element[1]} \n`);
    validCourses(element, courses).forEach((element) => {
        console.log(`${element.name}: ${element.prices[0]} - ${element.prices[1]} \n`)
    });
    console.log('\n');
});
console.log('Результат сортировки: \n')
coursesSort(courses).forEach((element) => {
    console.log(`${element.name}: ${element.prices[0]} - ${element.prices[1]} \n`)
});

