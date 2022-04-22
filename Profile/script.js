var ic1 = new ImageCollection([
  "images/code1.jpg",
  "images/code2.jpg",
  "images/code3.jpg",
  "images/code4.jpg",
  "images/code5.jpg",
]);
//picture button
function ImageCollection(images) {
  this.images = images;
  this.i = 0;
  this.next = function (imgId) {
    var img = document.getElementById(imgId);
    this.i++;
    if (this.i == images.length) this.i = 0;
    img.src = images[this.i];
  };
  this.prev = function (imgId) {
    var img = document.getElementById(imgId);
    this.i--;
    if (this.i <= 0) this.i = images.length - 1;
    img.src = images[this.i];
  };
}
// matrix button
function enterMatrix() {
  document.getElementById("softbody").style.backgroundImage =
    "url(./images/matrix.gif)";
}
