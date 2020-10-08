var countDA = 1;
var countRV = 1;
var countKM = 1;
var flag = true;

function xemThem(count, id, btnId) {
    count++;
    if (count > 3) {
        flag = false;
    };
    if (!flag) {
        count = 1;
        document.getElementById(id + 2).style.display = "none";
        document.getElementById(id + 3).style.display = "none";
        flag = true;
        document.getElementById(btnId).setAttribute('href', "#" + id + count);
        return count;
    }
    document.getElementById(id + count).style.display = "block";
    document.getElementById(btnId).setAttribute('href', "#" + id + count);
    return count;
}

function xemThemDienAnh24h() {
    countDA = xemThem(countDA, "dienAnh24hContent", "btnReadMore_DA");
}

function xemThemReView() {
    countRV = xemThem(countRV, "reViewContent", "btnReadMore_RV");
}

function xemThemKhuyenMai() {
    countKM = xemThem(countKM, "khuyenMaiContent", "btnReadMore_KM");
}
/**
 * B1: Khi forcus, hover vào thì đổi màu
 * B2: thay đổi trạng thái của div .showtheature__img thêm vào 1 class mới
 * B3: move class chuẩn cho .showtheature__img của tất cả trang khác
 * 
 */
// document.querySelectorAll("#showtimes__myTab .nav-item>.nav-link")[0].addEventListener("click", function() {
//     console.log(123);
// });
function xoaBlur(index) {
    // for (var i = 1; i <= 6; i++) {
    //     if (index === i) {
    //         document.getElementsByClassName("showtheature__img" + i)[0].style.opacity = "1";
    //     } else {
    //         document.getElementsByClassName("showtheature__img" + i)[0].style.opacity = "0.5";
    //     }
    // }
}

function xoaBlur1() {
    xoaBlur(1);
}

function xoaBlur2() {
    xoaBlur(2);
}

function xoaBlur3() {
    xoaBlur(3);
}

function xoaBlur4() {
    xoaBlur(4);
}

function xoaBlur5() {
    xoaBlur(5);
}

function xoaBlur6() {
    xoaBlur(6);
}