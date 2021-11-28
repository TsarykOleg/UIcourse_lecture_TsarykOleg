'use strict'

let list1 = [
    { firstName: 'Gabriel', lastName: 'X. ', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F. ', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S. ', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B. ', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
    ]; 

    function getOldest(arr){
        const old = arr.reduce((acc, {age}) => Math.max(acc, age), 0);
        return arr.filter(({age}) => age === old);
      }

 console.log(getOldest(list1));