let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'INna', 'Ivan', 'Alex', 'Olga', 'Ann'],
    employersNames = [];

employers.forEach((value ,index) => {
    if (employers[index].length > 0 && employers[index].length != '') {
        employersNames.push(employers[index]);
    }
});
employersNames.forEach((value ,index) => {
    employersNames[index] = employersNames[index].toLowerCase().trim();
});

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
}

function calcCash(own = 0) {
    let everyCash = Array.prototype.slice.call(arguments);
    let mass = [...everyCash[1]];
    mass.forEach((n) => {own += +n});
    return own;
}

let money = calcCash(null, sponsors.cash);

function makeBusiness(owner, director = 'Victor', cash, emp) {
    let sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
    console.log(`We have a business. Owner: ${owner} , director:  ${director}. Our budget:  ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log(`Note. Be careful with  ${sponsors.eu[0]}. It's a huge risk.`);
}

makeBusiness.apply(null, ['Sam', undefined, money, employersNames]);