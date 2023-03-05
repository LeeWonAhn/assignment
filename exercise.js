//Exercise 1
console.log("Exercise 1");
//Question 1
console.log("Ques 1");
var s1 = new String("Tiên học lễ, Hậu học văn");
console.log("So luong ky tu: " + s1.length);
//Question 2
console.log("Ques 2");
var s2 = new String("cách tốt nhất để làm mọi thứ là ngừng nói và làm ngay bây giờ");
var splitedWord = s2.split(" "); // tách các từ trong chuỗi
var capitalizedWords = splitedWord.map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); }); // viết hoa chữ cái đầu của mỗi từ
var capitalizedStr = capitalizedWords.join(" "); // ghép các từ lại thành chuỗi mới
console.log(capitalizedStr);
//Question 3
console.log("Ques 3");
var s3 = new String("Họ* đi đôi *ới hàn*");
var newS1 = s3.replace("*", "c");
var newS2 = newS1.replace("*", "v");
var finalS = newS2.replace("*", "h");
console.log(finalS);
//Exercise 2
console.log("Exercise 2");
//Question 1
// console.log("Question 1");
var numbers = [10, 6, 8, 9, 3];
// Sắp xếp mảng giảm dần
numbers.sort(function (a, b) {
    return (a > b ? -1 : 1);
});
// console.log("Mang sau khi sap lai: ");
// console.log(numbers);
// // Lấy ra phần tử nhỏ nhất
// numbers.pop();
// console.log("So be nhat trong mang la: ");
// console.log(numbers);
// var min = Math.min(...numbers); // sử dụng toán tử spread để truyền mảng vào phương thức Math.min()
var min = numbers.pop();
console.log("Giá trị nhỏ nhất trong mảng là: " + min); // in ra giá trị nhỏ nhất
