// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";



//persodo
// 1. กำหนดฟังชั่น เพื่อคำนวนหา ผลรวมทั้งหมด นำมาคิด promotion
// 2. ทำการ loop ผลลัพท์ในตระกร้าแต่ละอัน เพื่อนำค่า Price*QTY (ผลรวมราคาทั้งหมดไปทำif-else)
// 3. หลังจากได้ผลรวม เอาราคาทั้งหมด มาเทียบ ด้วยการใช้ If-else ว่าราคานั้นจะได้ส่วนลดที่เท่าไหร่  เพื่อกำหนดส่วนลด    




// function calculateTotalPrice.length (x),(y) {
// //let x = products[x].quantity;
// //let y = products[y].price;


function calculateTotalPrice.length (x),(y) {

let result = 0 
for (let i=0; i<products.length;i++) {
  result = products[i].quantity * products[i].price 
      console.log(result);
    }

    if (promotionCode === "SALE20") {
        result *= 0.8;   
    } else if (promotionCode==="SALE50") {
        result *= 0.5; 
    }
  
    return result;
}






