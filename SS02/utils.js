// Bài 1: Tính tổng mảng
export function sumArray(arr) {
  let sum = 0;          // Bước 1: tạo biến tổng

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; // Bước 2: cộng từng phần tử
  }

  return sum;           // Bước 3: trả kết quả
}