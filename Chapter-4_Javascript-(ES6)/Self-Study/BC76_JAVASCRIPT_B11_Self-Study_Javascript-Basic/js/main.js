// Tính năng cơ bản trong Javascript nói riêng cũng như lặp trình nói chung

// ---------------- Khai báo biến var ----------------
// Kiểu dữ liệu cơ bản (primitive value): number, string, boolean, undefine, null,...
// Trong javascript sẽ không khai báo kiểu dữ liệu tuy nhiên js sẽ tự hiểu kiểu dữ liệu đó khi được gán giá trị cho nó
var num = 1; // Số number: lương, số giờ làm, giá tiền,...
var title = "Cybersoft developer"; // Chuỗi string trong dấu '': Họ tên, địa chỉ, thông tin cá nhân,...
var result = true; // Dữ liệu logic boolean nhận giá trị true hoặc false để xử lý các tác vụ yêu cầu điều kiện
var name1; // Dữ liệu undefine chưa khai báo giá trị hoặc giá trị không xác định
var info = null; // Null là đại diện cho một giá trị không tồn tại

// Hiển thị dữ liệu trên console của trình duyệt
// console.log()
console.log(num);

// Hiển thị kiểu dữ liệu
console.log(typeof num);
console.log(typeof title);
console.log(typeof result);
console.log(typeof name1);
console.log(typeof info); // Các kiểu dữ liệu null sẽ hiển thị bằng object
console.log(info === null); // Cách kiểm tra dữ liệu có null không sử dụng boolean để kiểm tra bằng toán tử điều kiện

// ---------------- Toán tử ----------------
// Toán tử dùng để tính toán dữ liệu
var soHang1 = 5;
var soHang2 = 11;

// Toán tử +
var tong = soHang1 + soHang2;

// Toán tử *
var tich = soHang1 * soHang2;

// Toán tử /
var thuong = soHang2 / soHang1;

// Toán tử -
var hieu = soHang2 - soHang1;

// Toán tử % (chia lấy dư)
var chiaDu = soHang2 % soHang1;

console.log("Tổng =", tong);
console.log("Tích =", tich);
console.log("Thương =", thuong);
console.log("Hiệu =", hieu);
console.log("Dư =", chiaDu);

// + chuỗi
var bienA = "5";
var bienB = "10";
console.log(bienA + bienB);

// Đối với các phép tính số học như + - * / thì trong js xử lý giống hệt các phép tính của toán
// JS hỗ trợ toán tử % (chia lấy dư) để lấy kết quả phần dư xử lý
// Trong JS đặc biệt đối với phép cộng thì js xử lý + 2 số (number) thì ra giá trị tổng, tuy nhiên cộng 2 chuỗi thì sẽ cộng 2 chuỗi lại với nhau

// Toán tử tăng giảm biến
// ++, --
var i = 0;

i = i + 1; // i = 1
i++; // i = 2
i++; // i = 3

console.log(i);

// Các toán tử thu gọn
var x = 5;
var y = 10;

// x += y;
// x -= y;
// x *= y;
x /= y;
y %= x;

console.log(x);
console.log(y);

// ---------------- Khai báo biến const (hằng số) ----------------
// Hằng số là biến khai báo sẽ không thể gán lại giá trị thường sử dụng các giá trị quan trọng không được tự ý thay đổi, ví dụ: thông tin của backend, biến cấu hình hệ thống,...
//  Hằng số nên đặt tên biến là các chữ cái IN HOA
const HE_SO_LUONG = 5;
// HE_SO_LUONG = 10;

// ---------------- Mô hình 3 khối ----------------
// Đầu vào --> Xử lý --> Đầu ra

// Bài toán ứng dụng tính lương nhân viên làm trên 1 tháng (28 ngày). Dựa trên lương cơ bản là 20$ 1 ngày.
// Input: đầu vào
var luong1Ngay = 20;
var soNgayLam = 28;

// Output: đầu ra
var luong = 0;

// Xử lý : tính lương trên số ngày làm việc
luong = soNgayLam * luong1Ngay;

console.log("Tổng lương =", luong);

// Viết chương trình cho phép người dùng nhập vào chiều dài và chiều rộng của màn hình. Tính chu vi và diện tích màn hình
// Input
var chieuDai = 10;
var chieuRong = 5;

// Output
var chuVi = 0;
var dienTich = 0;

// Xử lý: Tính chu vi và diện tích
chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuDai * chieuRong;

console.log("Chu vi =", chuVi, "cm");
console.log("Diện Tích =", dienTich, "cm");

// Viết chương trình tính nhập vào số nguyên dương n với 3 ký số, tính và xuất tổng 3 ký số của n
// Input
var soNguyenDuong = 459;

// Output
tong3KySo = 0;

// Xử lý
// Math.floor hàm JS làm tròn số thành số nguyên
var hangTram = Math.floor(soNguyenDuong / 100);
var hangChuc = Math.floor(soNguyenDuong / 10) % 10;
var hangDonVi = soNguyenDuong % 10;

tong3KySo = hangTram + hangChuc + hangDonVi;
console.log("Tổng 3 ký số =", tong3KySo);

// ---------------- Truy xuất thẻ thông qua id ----------------
// DOM: Document Object Model
var tagH3 = document.getElementById("title");

// .innerHTML -> Là phần nội dung phần tử ở giữa 2 thẻ đóng mở HTML
tagH3.innerHTML = "Cybersoft.edu.vn";

// .value -> Phần nội dung của thẻ input thường chứa giá trị người dùng nhập vào
var tagInput = document.getElementById("txt");
tagInput.value = "Hello thành cybersoft";

// Truy xuất đến giá trị value của thẻ
var tagInputNumber = document.getElementById("number");
console.log(tagInputNumber.value);
// alert(tagInputNumber.value);

// .src -> Là nội dung đường dẫn
var tagImg = document.getElementById("hinhAnh");
tagImg.src = "./../img/images(1).jpg";

// ---------------- Sự kiện và hàm cơ bản ----------------
/**
 * Định nghĩa hàm: dùng để thực thi 1 loại hành được động xử lý và trả về giá trị mà người dùng mong muốn
 */

function sayHello() {
  alert("Xin chào mọi người");
}

// Lệnh gọi hàm
// sayHello();

//.onclick -> Gọi sự kiện qua javascript
document.getElementById("btnHello").onclick = function () {
  sayHello();
};

// Bài tập 1 - Hiển thị thông tin người dùng nhập
/**
 * Viết chương trình yêu cầu người dùng nhập vào 1 giá trị và khi người dùng bấm hiển thị thì giá trị đó sẽ được in ra tại thẻ span#ketQuaHienThi
 */

// handleEvent: Xử lý sự kiện
// Cách 1: xử lý onlick bằng JS
document.getElementById("btnHienThi").onclick = function () {
  var giaTriNhap = document.getElementById("giaTriNhap").value;

  // console.log(giaTriNhap);

  var ketQuaHienThi = document.getElementById("ketQuaHienThi");

  ketQuaHienThi.innerHTML = giaTriNhap;
};

// Cách 2: Xử lý sử dụng function gắn vào onlick trong html
function hienThiThongTin() {
  var giaTriNhap = document.getElementById("giaTriNhap").value;
  var ketQuaHienThi = document.getElementById("ketQuaHienThi");

  ketQuaHienThi.innerHTML = giaTriNhap;
}

// Bài tập: nhập vào số tiền lương (1h) và số giờ làm in ra tổng lương bằng số giờ nhân tiền lương
document.getElementById("btnTinhTienLuong").onclick = function () {
  // Input: tienLuong1h: number | soGioLam: number
  // * 1 dùng để ép kiểu dữ liệu về là số
  var tienLuong1h = document.getElementById("tienLuong1h").value * 1;
  var soGioLam = document.getElementById("soGioLam").value * 1;

  // Output: tongLuong: number
  var tongLuong = 0;

  // Progress
  tongLuong = tienLuong1h * soGioLam;

  // toLocaleString() hàm dùng để hiện thị số tiền ngăn cách có dấu ,
  document.getElementById("tongLuong").innerHTML = tongLuong.toLocaleString();
};

// Bài tập xây dựng form thông báo đăng nhập
document.getElementById("btnDangNhap").onclick = function () {
  // Input
  var taiKhoan = document.getElementById("taiKhoan").value;
  var matKhau = document.getElementById("matKhau").value;

  // Output
  var thongBao = "";

  // Progress
  // String template `` là truyền 1 chuỗi string khi cần gán biến giá trị vào sẽ thêm bằng cách ${}
  thongBao = `Tài khoản: ${taiKhoan}
  <br> Mật khẩu: ${matKhau}`;

  var ketQuaDangNhap = document.getElementById("ketQuaDangNhap");
  ketQuaDangNhap.innerHTML = thongBao;

  //.style --> thay đổi style của css
  // ketQuaDangNhap.style.backgroundColor = "green";
  // ketQuaDangNhap.style.display = "block";
  // ketQuaDangNhap.style.padding = "15px";
  // ketQuaDangNhap.style.color = "#fff";
  // ketQuaDangNhap.style.margin = "15px";

  // .className --> dùng để trích xuất class của thuộc tính
  // Có thể lấy hoặc ghi đè toàn bộ giá trị của thuộc tính class
  ketQuaDangNhap.className = "bg-success p-2 m-2 text-white d-block";
};

// Bài tập: tính tiền tip
document.getElementById("btnTinhTienTip").onclick = function () {
  var tongTienThanhToan =
    document.getElementById("tongTienThanhToan").value * 1;

  var phanTramTip = document.getElementById("phanTramTip").value;

  var soNguoiTip = document.getElementById("soNguoiTip").value * 1;

  var tienTipTrenNguoi = 0;

  tienTipTrenNguoi = (tongTienThanhToan * (phanTramTip / 100)) / soNguoiTip;

  document.getElementById("tienTipTrenNguoi").innerHTML =
    tienTipTrenNguoi + "$";
};

// Case Study: Tính doanh thu rạp phim
/**
  Input: 
  - tenPhim
  - soVeNguoiLon
  - soVeTreEm
  - phanTramTuThien

  Giả định vé trẻ em 3$ và người lớn 5$

  Output:
  - tongSoVeDaBan
  - doanhThuDaBan
  - phanTramTuThien
  - tongTienTrichTuThien
  - tongDoanhThu
 */

document.getElementById("btnTinhTienPhim").onclick = function () {
  var tenPhim = document.getElementById("tenPhim").value;

  var soVeNguoiLon = document.getElementById("veNguoiLon").value * 1;
  var soVeTreEm = document.getElementById("veTreEm").value * 1;
  var phanTramTuThien = document.getElementById("phanTramTuThien").value * 1;

  var tongSoVeDaBan = soVeNguoiLon + soVeTreEm;
  var doanhThuDaBan = soVeNguoiLon * 5 + soVeTreEm * 3;
  var tongTienTrichTuThien = Math.floor(
    doanhThuDaBan * (phanTramTuThien / 100),
  );
  var tongDoanhThu = doanhThuDaBan - tongTienTrichTuThien;

  document.getElementById("kqDoanhThuRapPhim").innerHTML = `
    Tên phim: ${tenPhim} 
  <br>
  Số vé đã bán: ${tongSoVeDaBan}
  <br>
  Doanh Thu: ${doanhThuDaBan}
  <br>
  Trích % từ thiện: ${phanTramTuThien}%
  <br>
  Tổng tiền trích từ thiện: ${tongTienTrichTuThien}
  <br>
  Tổng doanh thu sau khi trừ: ${tongDoanhThu}
  `;
};

// ---------------- Toán tử luận lý (true false) ----------------
var a = 5;
var b = 10;
var c = "5";

console.log("a =", a, "b =", b, "c =", c);
console.log("Bé hơn | a < b:", a < b);
console.log("Lơn hơn | a > b:", a > b);
console.log("Bằng | a == b:", a == b);
console.log("Khác | a != b:", a != b);
console.log("Bé hơn hoặc bằng | a <= b", a <= b);
console.log("Lớn hơn hoặc bằng | a >= b", a >= b);
console.log("So sánh | a == c", a == c);

// So sánh === sẽ so sánh luôn cả kiểu dữ liệu (typeof a: number , typeof c: string)
console.log("So sánh | a === c", a === c);

// ---------------- Toán tử Logic ----------------
var dk1 = true;
var dk2 = true;
var dk3 = false;

console.log("dk1 :", dk1, "dk2 :", dk2, "dk3 :", dk3);

// && true khi tất cả đều đúng
console.log("dk1 && dk2 && dk3 :", dk1 && dk2 && dk3);

// || true khi 1 trong các điều kiện đúng
console.log("dk1 || dk2 || dk3 :", dk1 || dk2 || dk3);

// Gán giá trị ngược lại (!)
console.log("!dk1 :", !dk1);

// ---------------- Cấu trúc điều kiện (If else) ----------------
// Tính giá trị tuyệt đối của 1 số
function tinhGiaTriTuyetDoi(so) {
  if (so < 0) {
    so = -so;
  }

  // Return sẽ trả lại giá trị cho function
  return so;
}

document.getElementById("btnTinhGiaTriTuyetDoi").onclick = function () {
  var iSo = document.getElementById("iSo").value * 1;

  var kq = tinhGiaTriTuyetDoi(iSo);

  document.getElementById("kqGiaTriTuyetDoi").innerHTML = kq;
};

// Chương trình cho phép nhập vào 1 số => In ra màn hình cho biết số đó là số chẵn hay số lẽ
document.getElementById("btnKqSoChanLe").onclick = function () {
  // Input: number
  var iSo = document.getElementById("iSo-2").value * 1;

  // Output: string
  var ketQua = "";

  // Progress
  if (iSo % 2 == 0) {
    ketQua = "Số chẵn";
  } else {
    ketQua = "Số lẽ";
  }

  document.getElementById("kqSoChanLe").innerHTML = ketQua;
};

// Nhập vào điểm trung bình. Nếu lớn hơn hoặc = 5 thì in ra đậu ngược lại bé hơn 5 in ra rớt
document.getElementById("btnXepLoai").onclick = function () {
  // Input
  var diemTb = document.getElementById("diemTb").value * 1;

  // Output
  var xepLoai = "";

  // Progress
  if (diemTb >= 5) {
    xepLoai = "Đã đậu";
  } else {
    xepLoai = "Đã rớt";
  }

  document.getElementById("kqXepLoai").innerHTML = xepLoai;
};

// Cho người dùng nhập vào 2 số. Tìm số lớn nhất và in ra kết quả
document.getElementById("btnTimSo").onclick = function () {
  // Input: Số thứ 1 và số thứ 2 (number)
  var soThu1 = document.getElementById("iSoThu1").value * 1;
  var soThu2 = document.getElementById("iSoThu2").value * 1;

  // Ouput: ketQua (string)
  var ketQua = soThu1;
  if (ketQua < soThu2) {
    ketQua = soThu2;
  }

  document.getElementById("kqTimSo").innerHTML = "Số lớn nhất là: " + ketQua;
};

// Viết chương trình cho phép người dùng nhập vào số giờ làm và tiền công 1 giờ Yêu cầu: Tính tiền công dựa trên số giờ làm theo công thức sau
document.getElementById("btnTinhTienLuong2").onclick = function () {
  /**
   * Input:
    Số giờ làm (number)
    Tiên công 1h (number)
   */
  var soGioLam = document.getElementById("soGioLamTrenTuan").value * 1;
  var tienCong1h = document.getElementById("tienCong1h").value * 1;

  // Output: Tiền lương (number)
  var tienLuong = 0;

  // Progress
  if (soGioLam <= 40) {
    tienLuong = soGioLam * tienCong1h;
  } else {
    tienLuong = 40 * tienCong1h + (soGioLam - 40) * tienCong1h * 1.5;
  }

  document.getElementById("kqTienLuong").innerHTML =
    "Tổng lương của bạn là: " +
    tienLuong.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
};

// Viết chương trình cho phép người dùng nhập vào điểm toán, điểm lý, điểm hóa. Yêu cầu in ra điểm trung bình và xếp loại
document.getElementById("btnTinhDiemTb").onclick = function () {
  /**
   * Input
    Điểm toán (number)
    Điểm lý (number)
    Điểm hóa (number)
   */
  var diemToan = document.getElementById("diemToan").value * 1;
  var diemLy = document.getElementById("diemLy").value * 1;
  var diemHoa = document.getElementById("diemHoa").value * 1;

  /**
   * Output
    Điểm trung bình (number)
    Xếp Loại (string)
   */
  var diemTb = Math.floor((diemToan + diemLy + diemHoa) / 3);
  var xepLoai = "";

  // Progress
  if (diemTb < 5) {
    xepLoai = "Không đạt";
  } else if (5 <= diemTb && diemTb < 8) {
    xepLoai = "Đạt";
  } else {
    xepLoai = "Giỏi";
  }

  document.getElementById("kqDiemTb").innerHTML =
    "Điểm Tb: " + diemTb + "đ - Xếp loại: " + xepLoai;
};

/**
  Biểu thứ 3 ngôi

  if(đk === true){
    xu_ly = gia_tri; (1)
  }else{
    xu_ly = gia_tri; (2)  
  }
  
  dk === true ? xu_ly1 : xu_ly2
 */

var num = 5;
var output = "";

// if (num % 2 === 0) {
//   output = "Số chẵn";
// } else {
//   output = "Số lẻ";
// }

output = num % 2 === 0 ? "Số chẵn" : "Số lẻ";

console.log("Output", output);

// Viết chương trình đọc các số từ 1 - 4
document.getElementById("btnDocSo").onclick = function () {
  var soDem = document.getElementById("nhapSo").value * 1;

  var ketQua = "";

  switch (soDem) {
    case 1:
      {
        ketQua = "Số một";
      }
      break;
    case 2:
      {
        ketQua = "Số hai";
      }
      break;
    case 3:
      {
        ketQua = "Số ba";
      }
      break;

    case 4:
      {
        ketQua = "Số bốn";
      }
      break;
    default: {
      ketQua = "Vui lòng nhập từ 1 - 4";
    }
  }

  document.getElementById("kqDocSo").innerHTML = ketQua;
};
