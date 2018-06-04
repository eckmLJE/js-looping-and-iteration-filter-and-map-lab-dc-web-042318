// Code your solution here:
[ 
{ name: 'Sally',   revenue: 400 },
{ name: 'Annette', revenue: 200 },
{ name: 'Jim',     revenue: 150 },
{ name: 'Sally',   revenue: 200 }
]

// This function takes an array of driver JavaScript objects as the first argument and a string called revenue as the second argument. It returns an array of driver objects that have a revenue attribute that's greater than the passed-in revenue argument.

function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(driver => driver.revenue > revenue)
}

// This function works the same way as driversWithRevenueOver(). The difference is that it returns an array of strings representing the name of each driver who has a revenue greater than the specified amount. For example, driverNamesWithRevenueOver(drivers, 2000) will return ['Sammy'], as Sammy is the name of the matching driver object with a revenue greater than 2000.

function driverNamesWithRevenueOver(drivers, revenue) {
    const driverArray = driversWithRevenueOver(drivers,revenue)
    return driverArray.map(driver => driver.name)
}

// This function takes an array of driver objects as the first argument and a JavaScript object that specifies an attribute and corresponding value. For example, exactMatch(drivers, { revenue: 3000 }) will return all drivers whose revenue attribute equals 3000, and exactMatch(drivers, { name: 'Bob' }) will return all drivers whose name attribute equals Bob.

function exactMatch(drivers, obj) {
    if (Object.keys(obj)[0] === "name") {
        const driverArray = drivers.filter(driver => driver.name === obj.name)
        return driverArray
    } else if (Object.keys(obj)[0] === "revenue") {
        const driverArray = drivers.filter(driver => driver.revenue === obj.revenue)
        return driverArray
    } else {
        return "Not an attribute of Drivers"
    }
}

// This function works the same way as the exactMatch() function, except that instead of returning an array of driver objects, it returns an array of strings with each element in the array corresponding to the matching driver's name. For example, exactMatchToList(drivers, { revenue: 2000 }) will return ['Sammy'], as Sammy is the name of the matching driver object.

function exactMatchToList(drivers, obj) {
    if (Object.keys(obj)[0] === "name") {
        const driverArray = drivers.filter(driver => driver.name === obj.name)
        return driverArray.map(driver => driver.name)
    } else if (Object.keys(obj)[0] === "revenue") {
        const driverArray = drivers.filter(driver => driver.revenue === obj.revenue)
        return driverArray.map(driver => driver.name)
    } else {
        return "Not an attribute of Drivers"
    }
}