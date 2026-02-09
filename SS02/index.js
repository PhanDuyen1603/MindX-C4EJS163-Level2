import {sumArray, countOccurrences, removeDuplicates, flattenArray,isSymmetric} from './utils.js';

const myArray = [1, 3, 4, 3];
const total = sumArray(myArray);
console.log(`Tổng của mảng là: ${total}`);

const valueToCount = 3;
const count = countOccurrences(myArray, valueToCount);
console.log(`Giá trị ${valueToCount} xuất hiện ${count} lần trong mảng.`);

const uniqueArray = removeDuplicates(myArray);
console.log(`Mảng sau khi xóa phần tử trùng lặp: ${uniqueArray}`);

const nestedArray = [[1, 2], [3, 4]];
const flatArray = flattenArray(nestedArray);
console.log(`Mảng sau khi làm phẳng: ${flatArray}`);

const symmetricArray = [1, 2, 4, 3, 4, 2, 1];
const isSym = isSymmetric(symmetricArray);
console.log(`Mảng có đối xứng không? ${isSym}`);