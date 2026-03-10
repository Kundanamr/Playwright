////Add browser action in your test in Browser or UI


const { test } = require('@playwright/test');

test('Triangle type check', async ({ page }) => {

    await page.goto('https://google.com');

    let a = 10, b = 10, c = 10;

    if (a === b && b === c && c === a) {
        console.log("Equilateral Triangle");
    }
    else if (a === b || b === c || c === a) {
        console.log("Isosceles Triangle");
    }
    else {
        console.log("Triangle is scalene");
    }

});