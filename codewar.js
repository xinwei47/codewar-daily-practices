// IQ Test

function iqTest(numbers) {
    const numArr = numbers.split(' ').map(i => parseInt(i))
    const oddIndArr = [];
    const evenIndArr = [];
    for (let i = 0; i < numArr.length; i++) {
        if ((numArr[i] % 2) === 0) {
            evenIndArr.push(i + 1);
        }
        else {
            oddIndArr.push(i + 1);
        }
    }
    if (oddIndArr.length > evenIndArr.length) return evenIndArr[0];
    else return oddIndArr[0];
}

// Vasya - Clerk

// test: tickets([ 25, 25, 25, 25, 50, 100, 50 ])

function tickets(peopleInLine) {
    // console.log(peopleInLine) //print test inputs in codewars

    let bill25 = 0;
    let bill50 = 0;

    for (let i = 0; i < peopleInLine.length; i++) {
        if (peopleInLine[i] === 25) {
            bill25++;
        } else if (peopleInLine[i] === 50) {
            if (bill25 >= 1) {
                bill50++;
                bill25--;
            } else return 'NO';
        } else if (peopleInLine[i] === 100) {
            if (bill25 >= 1 && bill50 >= 1) {
                bill50--;
                bill25--;
            }
            else if (bill25 >= 3) {
                bill25 = bill25 - 3;
            } else return 'NO';
        }
    }
    return 'YES';
}


// Persistent Bugger

// persistence(39) === 3 because 3*9 = 27, 2*7 = 14, 1*4=4; 3 times of calculation

function persistence(num) {
    let i = 0;
    while (num > 9) {
        const numStrArr = [...num.toString()]
        const numArr = numStrArr.map(i => i = parseInt(i))
        num = numArr.reduce((prod, ele) => prod * ele);
        i++;
    }
    return i;
}


// Keep Hydrated!

function litres(time) {
    return Math.floor(time * 0.5)
}

// Format a string of names like 'Bart, Lisa & Maggie'.

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])

function list(names) {
    let namesNew = '';
    for (let i = 0; i < names.length; i++) { //length = 3
        // console.log(names[i].name)
        if (i === names.length - 2) { //length = 1
            namesNew += names[i].name + ' & '
        } else if (i === names.length - 1) {
            namesNew += names[i].name
        }
        else {
            namesNew += names[i].name + ', '
        }
    }
    return namesNew;
}

// Replace With Alphabet Position

// alphabetPosition("The sunset sets at twelve o' clock.")

function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const textArr = text.toLowerCase().split(' ')
    let strNew = '';
    for (let item of textArr) {
        strNew += item
    }
    let alphaInd = '';
    for (let char of strNew) {
        if (alphabet.indexOf(char) !== -1) {
            alphaInd += (alphabet.indexOf(char) + 1) + ' '
        }
    }
    return alphaInd.trim();
}


// Duplicate Encoder

// once: (; twice:)
// "Success"  =>  ")())())"

function duplicateEncode(word) {
    word = word.toLowerCase();
    let strNew = '';
    for (let char of word) {
        let charInd = word.indexOf(char)
        if (word.indexOf(char, charInd + 1) !== -1) {
            strNew += ')';
        } else {
            strNew += '(';
        }
    }
    return strNew;
}

// Highest and Lowest

// highAndLow("1 2 3 4 5") return "5 1"

function highAndLow(numbers) {
    const numArr = numbers.split(' ').map(i => parseInt(i))
    let high = numArr.reduce((max, num) => {
        if (max < num) return num;
        else return max;
    })
    let low = numArr.reduce((low, num) => {
        if (low > num) return num;
        else return low;
    })
    return `${high} ${low}`;
}

// ****** alternative solution ******
function highAndLow2(numbers) {
    numArr = numbers.split(' ').map(i => parseInt(i));
    return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
}


// Mumbling

// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
function accum(s) {
    const sArr = [...s]
    let sNew = '';
    for (let i = 0; i < sArr.length; i++) {
        sNew += sArr[i].toUpperCase() + sArr[i].toLowerCase().repeat(i) + '-'
    }
    return sNew.slice(0, -1)
}


// Vowel Count
// Return the number (count) of vowels (a, e, i, o, u) in the given string.

// getCount('abracadabra')

function getCount(str) {
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const strArr = [...str];

    for (let i = 0; i < strArr.length; i++) {
        if (vowels.indexOf(strArr[i].toLowerCase()) !== -1) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

// Friend or Foe?
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

function friend(friends) {
    const friendReal = [];
    for (let friend of friends) {
        if (friend.length === 4) {
            friendReal.push(friend)
        }
    }
    return friendReal;
}

// ****** Better Solution ******
function friend(friends) {
    return friends.filter(n => n.length === 4)
}

// Array.diff
// arrayDiff([1,2,2,2,3,5,5],[2,5,5]) == [1,3]

// arrayDiff([16,-11,3,-15,-11,-6,-12,-7,-12,-14,13,-1,-7,7],[-12,-15,-1,16,-11,-11,-6])

function arrayDiff(a, b) {
    for (let i = 0; i < b.length; i++) {
        while (a.indexOf(b[i]) !== -1) {
            a.splice(a.indexOf(b[i]), 1)
        }
    }
    return a;
}

// ******* alternative solution *******
function array_diff2(a, b) {
    return a.filter(e => !b.includes(e));
}


// String incrementer
// foo -> foo1
// foobar23 -> foobar24
// foo099 -> foo100

function incrementString(str) {

    const charArr = [...str].filter(i => isNaN(parseInt(i)));
    let intArr = [...str].filter(i => isNaN(parseInt(i)) === false);
    intArr = intArr.map(i => parseInt(i));

    if (intArr.length !== 0) {
        if (intArr[0] === 0) {
            while (intArr[0] === 0) {
                charArr.push(intArr[0]);
                intArr.splice(0, 1);
            }
            return charArr.join('') + (parseInt(intArr.join('')) + 1)
        } else {
            return charArr.join('') + (parseInt(intArr.join('')) + 1)
        }
    } else {
        return str + 1;
    }
}

// Highest Scoring Word
// high('man i need a taxi up to ubud') => taxi

function high(x) {
    const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const xArr = x.split(' ');
    let scoreArr = [];

    for (let i of xArr) {
        let score = 0;
        strArr = [...i];
        for (let j of strArr) {
            score += alphabetArr.indexOf(j) + 1
        }
        scoreArr.push(score)
    }
    return xArr[scoreArr.indexOf(Math.max(...scoreArr))];
}

// ********* INCOMPLETE *********
// Maximum subarray sum

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) => should be 6: [4, -1, 2, 1]


const maxSequence = function (arr) {

    if (arr.every(i => i > 0)) return arr.reduce((sum, i) => sum += i)
    else {
        let maxNum = Math.max(...arr)
        console.log(maxNum);

        const subArr = [];
        let sum = maxNum;
        while (sum > Math.sum(...subArr))
            sum += arr[arr.indexOf(maxNum) + 1];

    }
}

// Detect Pangram

function isPangram(string) {
    const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const strArr = string.toLowerCase().split(' ')
    const letterArr = []
    let res = Boolean;

    for (let i of strArr) {
        letterArr.push(...i)
    }

    for (let j of alphabetArr) {
        if (letterArr.indexOf(j) === -1) {
            res = false;
            break;
        }
        else res = true;
    }
    return res;
}

// Alternative solution
function isPangram2(string) {
    string = string.toLowerCase();
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every(i => {
        return string.indexOf(i) !== -1;
    })
}

// Find the odd int
// [1,1,2,-2,5,2,4,4,-1,-2,5] => -1

function findOdd(arr) {
    const arrSort = arr.sort();
    let cnt = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arrSort[i] === arrSort[i + 1]) cnt++;
        else {
            if (cnt % 2 === 1) return (arrSort[i]);
            cnt = 1;
        }
    }
}

// Dashatize it
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
    const numArr = num.toString().split('');
    let str = '';
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 === 1) {
            if (numArr[i + 1] % 2 === 0) {
                str += '-' + numArr[i] + '-';
            } else if (i === 0) {
                str += numArr[i] + '-';
            } else {
                str += '-' + numArr[i];
            }
        } else str += numArr[i];
    }
    return str;
}

// Highest Rank Number in an Array
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// My solution:
function highestRank(arr) {
    const arrSorted = arr.sort((a, b) => a - b);

    const result = [];
    let cnt = 1;
    for (let i = 0; i < arrSorted.length; i++) {
        if (arrSorted[i] === arrSorted[i + 1]) {
            cnt++;
        } else {
            result.push([arrSorted[i], cnt]);
            cnt = 1;
        }
    }
    const getMax = result.reduce((max, subArr) => Math.max(max, subArr[1]), 0);
    let highestRankNum;
    result.forEach(subArr => {
        if (subArr[1] === getMax) {
            highestRankNum = subArr[0];
        }
    })
    return highestRankNum;
}


// More solutions 
function highestRank1(arr) {
    // sort array in descending order by frequency
    return arr.sort((a, b) => arr.filter(i => i === b).length - arr.filter(i => i === a).length)[0];
}

// console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]))



// Extract the domain name from a URL
// My solution
function domainName(url) {
    if (/www./.test(url)) {
        return url
            .match(/\..*\./)[0]
            .split('.')[1]
    } else if (/(http|https)\:\/\//.test(url)) {
        return url
            .match(/\/.*?\./)[0]
            .split(/(\/\/|\.)/)[2]
    } else {
        return url
            .split(/\./)[0]
    }
}

// other solutions #1
function domainName1(url) {
    return url
        .replace('http://', '')
        .replace('https://', '')
        .replace('www.', '')
        .split('.')[0];
};

// other solutions #2
function domainName2(url) {
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

// console.log(domainName("https://youtube.com"))


// Break camelCase
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// My solution
function solution(str) {
    return str
        .match(/[a-z]+|[A-Z][a-z]+/g)
        .join(' ')
}

// More solutions
function solution1(string) {
    return (string.replace(/([A-Z])/g, ' $1'));
}

// console.log(solution('identifier'))



// Counting Duplicates
// Count alphabets and digits that occur more than once in the string. Ignore cases
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times

function duplicateCount(str) {
    const arr = str
        .toLowerCase()
        .split('')
    return arr
        .filter(i => {
            return arr.filter(j => j === i).length >= 2
        })
        .reduce((arrDedup, el) => {
            if (!arrDedup.includes(el)) arrDedup.push(el)
            return arrDedup
        }, []).length

}

console.log(duplicateCount("Indivisibilities"))