var countDA = 1;
var countRV = 1;
var countKM = 1;
var flag = true;
clickBlur(1);

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
var flagActive = false;

function clickBlur(index) {
    for (var i = 1; i <= 6; i++) {
        if (index === i) {
            document.getElementsByClassName("showtheature__img" + i)[0].style.opacity = "1";
            flagActive = true;
        } else {
            document.getElementsByClassName("showtheature__img" + i)[0].style.opacity = "0.5";
        }
    }
}

function hoverBlur(index) {
    var status;
    var count = 0;
    document.getElementsByClassName("showtheature__img" + index)[0].style.opacity = "1";
    for (var i = 1; i <= 6; i++) {
        status = document.getElementsByClassName("showtheature__img" + i)[0].style.opacity;
        if (status === "1") {
            count++;

        }
    }
    if (count === 1) {
        flagActive = true;
    } else {
        flagActive = false;
    }

}

function xoaBlur(index) {
    if (!flagActive) {
        document.getElementsByClassName("showtheature__img" + index)[0].style.opacity = "0.5";
    }

}