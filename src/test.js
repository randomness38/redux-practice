/* Using .reduce()
 *
 * Using the musicData array and .reduce():
 *   - Return the total number of sales
 *   - Store the returned data in a new 'totalAlbumSales' variable
 *
 * Notes:
 *   - Do not delete the 'musicData' variable
 *   - Do not alter any of the 'musicData' content
 *   - Do not format the sales number; leave it as a long string of digits
 */

//reduce 만 사용해서 Array Total 구하기
const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const test = musicData.reduce( (accumulator, currentValue ) => {
    return accumulator + currentValue.sales
},0)

console.log('reduce : ' + test)

//  filter() &&  reduce() 함께 사용하기

/* Combining .filter() and .reduce()
 *
 * Using the musicData array, filter(), and reduce():
 *   - Filter the musicData array down to just the albums that have a
 *     combined artist + name string length of less than 25 characters
 *     (for example, looking at the first album it would be "Adele25" which
 *     has a length of 7, so it should be included)
 *   - Then, on the array returned from filter(), call reduce()
 *   - The value returned reduce() returns the total number of sales
 *   - Store that returned number in a new totalAlbumSales variable
 *
 * Note:
 *   - You can chain the operations!
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 *   - Do not format the sales number; leave it as a long string of digits
 */

const musicData2 = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const test2 = musicData2.filter( data =>
    data.artist.length + data.name.length < 25)
    .reduce( (accumulator, currentValue ) => {
    return accumulator + currentValue.sales} ,0)

console.log('filter + reduce : ' + test2)


// Array - Array 구조에서 조건에 따라 새로운 Object 만들기
// reduce() && map()

/* Popular Ice Cream Totals Quiz
 *
 * Using the data array and .reduce():
 *   - Return an object where each property is the name of an ice cream flavor
 *     and each value is an integer that's the total count of that flavor
 *   - Store the returned data in a new iceCreamTotals variable
 *
 * Notes:
 *   - Do not delete the data variable
 *   - Do not alter any of the data content
 */
const data = [
    { name: 'Tyler', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
    { name: 'Richard', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
    { name: 'Amanda', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
    { name: 'Andrew', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
    { name: 'David', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
    { name: 'Karl', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
];

// Obj = 정리해서 리턴할 오브젝트, curr 을 돌리면서 업데이트 되는 정보를 Obj 업데이트 한다.
// 오브젝트에 등록되어 있으면 +1 , 등록되어 있지 않으면 1로 등록 하는거
// 발상은 쉽지 않은데 정형화해서 코드로 구현하는 습관이 들지 않아서 어려웠던 것 같음

const iceCreamTotals = data.reduce( (Obj, curr) => {
    curr.favoriteIceCreams.map( IceCream => {
        if( IceCream in Obj){
            Obj[IceCream]++
        } else {
            Obj[IceCream] = 1;
        }
    })
    return Obj
}, {});
console.log(iceCreamTotals)


