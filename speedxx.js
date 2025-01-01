function so88() {
    h5gg.clearResults();
    h5gg.searchNumber('4333543704410193920', 'I64', '0x100000000', '0x160000000');
    h5gg.searchNearby('0.01', 'F32', '0x8');
    h5gg.searchNearby('0.0219~0.02975', 'F32', '0x32')
    h5gg.searchNearby('0.1035~0.1070', 'F32', '0x4');
    h5gg.searchNearby('2.802597e-45', 'F32', '0x4');
    h5gg.searchNumber('0.1035~0.1070', 'F32', '0x100000000', '0x160000000');
    h5gg.editAll('1.875', "F32");
}
function m100() {
    h5gg.clearResults();
    // Thử mã tốc độ mới
    h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000'); // Mã gốc để tìm speed
    alert('Done Find Speed_(' + h5gg.getResultsCount() + '/1)');

}

function m101() {
    h5gg.editAll('4366458311853765201', 'I64'); // Mã cho tốc độ siêu nhanh x50 (giá trị giả định)
    alert('Enable Speed X8');


}
function m102() {
    h5gg.editAll('4397530849764387586', 'I64'); // Quay lại mã tốc độ bình thường
    alert('Remove Speed');


}
function AimFor() {
    modifyValue(1077936128, -20000, 'A04'); 
    modifyValue(1069547520, 1148829696, 'A10')}
}

function s101s() {
    h5gg.clearResults();
    h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 36);
        var dizhi1 = (Number(addr1) + 40);



        {
            h5gg.setValue(dizhi0, 0.01, "F32");
            h5gg.setValue(dizhi1, 0.01, "F32");

        }
    }
function so89() {
    h5gg.clearResults();
    h5gg.searchNumber('72340173878198272', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('72340172821233664', 'I64');



	}

function sk() {
    h5gg.clearResults();
    var hk1 = prompt("請輸入想要的靈敏");
    h5gg.searchNumber('4417130516484980736', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;
        var dizhi0 = (Number(addr1) + -4);
        var dizhi1 = (Number(addr1) + -8);
        var dizhi2 = (Number(addr1) + -12);
        var dizhi3 = (Number(addr1) + -0);




        {
            h5gg.setValue(dizhi0, hk1, "F32");
            h5gg.setValue(dizhi1, hk1, "F32");
            h5gg.setValue(dizhi2, hk1, "F32");
            h5gg.setValue(dizhi3, hk1, "F32");

        }
    }


	}
