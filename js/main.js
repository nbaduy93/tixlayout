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