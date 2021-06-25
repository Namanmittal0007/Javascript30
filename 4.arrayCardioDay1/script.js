const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array.prototype.filter()  
// (filter out, reduces the orignal number of entries)
// 1. Filter the list of inventors for those who were born in the 1500's

// const fifteenthCen = inventors.filter(function(inventor){
//     if(inventor.year>=1500 && inventor.year<1600){
//         return true;
//     }
// });

const fifteenthCen = inventors.filter(inventor => (inventor.year>=1500 && inventor.year<1600));
console.table(fifteenthCen);

// Array.prototype.map()     
// (maintains the original number of entries, just give the desired field as result)
// 2. Give us an array of the inventors first and last names 
const fullnames = inventors.map( inventor => `${inventor.first} ${inventor.last}`);
console.log(fullnames);

// Array.prototype.sort()
// (same number of entries but in a sorted form)
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsByBirth = inventors.sort((a,b) => a.year>b.year?1:-1);
console.table(inventorsByBirth);

// Array.prototype.reduce()
// (reduce to a single output by performing cal. on some particular fields)
// 4. How many years did all the inventors live all together?
const totalAge = inventors.reduce((total,inventor) =>{
    return total + (inventor.passed-inventor.year);
    },0);
console.log(totalAge)

// 5. Sort the inventors by years lived
const inventorsByYearsLived = inventors.sort((a, b) => (a.passed-a.year) > (b.passed-b.year) ? -1 : 1);
console.table(inventorsByYearsLived); 

  
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    
    
//   const listofplaces = document.querySelector('.mw-category');
//   const listofa = Array.from(listofplaces.querySelectorAll('a'));
//   const de = listofa
//                     .map( item => item.textContent)
//                     .filter(streetname => streetname.includes('de'));
//   console.log(de);

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];
  
// 7. sort Exercise
// Sort the people alphabetically by last name
const lastnamesorted = people.sort( (p1,p2) =>{ 
    const [p1last, p1first] = p1.split(', ');
    const [p2last, p2first] = p2.split(', ');
    return p1last>p2last ? 1 : -1 ;
    });
console.log(lastnamesorted);
  

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const sum = data.reduce((obj, item) => {
    if(!obj[item]){
        obj[item]=0;
    }
    obj[item]++;
    return obj;
},{});
console.log(sum);
  