function tinhToan() {
    // Lấy giá trị từ các ô nhập liệu
    let a = parseFloat(document.getElementById("numA").value);
    let b = parseFloat(document.getElementById("numB").value);

    // Tính toán các phép toán
    let tong = (a + b).toFixed(2);
    let hieu = (a - b).toFixed(2);
    let tich = (a * b).toFixed(2);
    let thuong = b !== 0 ? (a / b).toFixed(2) : "Không thể chia cho 0";

    // Khai báo biến c và thực hiện các phép so sánh
    let c = a > b;
    let soSanhLonHon = `${a} > ${b} : ${c}`;
    c = a < b;
    let soSanhNhoHon = `${a} < ${b} : ${c}`;
    c = a >= b;
    let soSanhLonHonBang = `${a} >= ${b} : ${c}`;
    c = a <= b;
    let soSanhNhoHonBang = `${a} <= ${b} : ${c}`;

    // Hiển thị kết quả
    document.getElementById("result").innerHTML = `
        Tổng: ${tong} <br>
        Hiệu: ${hieu} <br>
        Tích: ${tich} <br>
        Thương: ${thuong} <br><br>
        So sánh: <br>
        ${soSanhLonHon} <br>
        ${soSanhNhoHon} <br>
        ${soSanhLonHonBang} <br>
        ${soSanhNhoHonBang}
    `;
}