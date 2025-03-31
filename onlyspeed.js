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
