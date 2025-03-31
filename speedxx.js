function so88() {

        h5gg.clearResults();
        h5gg.searchNumber('914000001','I32','0x100000000', '0x200000000');
        h5gg.editAll('914047001', 'I32'); 
        h5gg.clearResults();

}
function m100() {
    h5gg.clearResults();
    // Thử mã tốc độ mới
    h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000'); // Mã gốc để tìm speed


}

function mod6() {
    h5gg.clearResults();
    h5gg.searchNumber('909000001','I32','0x100000000', '0x160000000');
    h5gg.editAll('909035007', 'I32');

    h5gg.clearResults();


}

function m102() {
    h5gg.editAll('4397530849764387586', 'I64'); // Quay lại mã tốc độ bình thường
    alert('Remove Speed');


}
function m101(input)
{
 var m101 = document.getElementById('m101');
    if (m101.checked) {
    h5gg.editAll('4366458311853765201', 'I64');
}
else {
    h5gg.editAll('4397530849764387586', 'I64');

}
}

