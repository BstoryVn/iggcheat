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
    alert('Done Find Speed_(' + h5gg.getResultsCount() + '/1)');

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
document.addEventListener("DOMContentLoaded", function () {
    var dragItem = document.getElementById("ayimgui");
    var offsetX, offsetY, isDragging = false;

    dragItem.addEventListener("mousedown", function (e) {
        isDragging = true;
        offsetX = e.clientX - dragItem.offsetLeft;
        offsetY = e.clientY - dragItem.offsetTop;
        dragItem.style.cursor = "grabbing"; // Change cursor when dragging
    });

    document.addEventListener("mousemove", function (e) {
        if (!isDragging) return;
        dragItem.style.left = e.clientX - offsetX + "px";
        dragItem.style.top = e.clientY - offsetY + "px";
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;
        dragItem.style.cursor = "grab"; // Reset cursor
    });
});
