//Bai 01: Tinh tong mang
export function sumArray(arr) {
    let sum = 0; //Buoc 1: tao bien tong

    for (let i = 0; i < arr.length; i++) {
       sum = sum + arr[i]; //Buoc 2: cong tung phan tu     
    }

    return sum; //Buoc 3: tra ket qua
}

//Bai 2: 
export function countOccurrences(arr, value) { // 2 1243242
    let count = 0; //Buoc 1: tao bien dem

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            count++; //Buoc 2: tang bien dem neu phan tu bang gia tri can dem
        }
    }

    return count; //Buoc 3: tra ket qua
}

//Bai 3:
export function removeDuplicates(arr) {
    let uniqueArr = []; //Buoc 1: tao mang chua phan tu khong trung lap

    for(let i=0; i < arr.length; i++) { // 0 1 2 3 2 3 4 5
        if(!uniqueArr.includes(arr[i])) { //Kiem tra phan tu arr[i] co trong uniqueArr chua
            uniqueArr.push(arr[i]); 
        }
    }
    return uniqueArr; //Buoc 3: tra ket qua
}

// bai 4: tinh tong cac so le trong mang
export function flattenArray(arr) {
    let flatArr = []; //Buoc 1: tao mang rong de chua phan tu sau khi lam phang
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            flatArr.push(arr[i][j]); // Buoc 2: them phan tu vao flatArr. // arr[0]
        }
    }
    return flatArr; // Buoc 3: tra ket qua
}

//bai 5: isSymmetric
export function isSymmetric(arr) {
   for(let i = 0; i < arr.length / 2; i++) {
        if(arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
