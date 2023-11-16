const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const snap = document.querySelector(".snap");
const download = document.querySelector(".download");
let sound  = document.querySelector(".sound");
navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  video.srcObject = stream;
  video.play();
});
let image_data_url;
let count = 0;
snap.addEventListener("click", () => {
  video.classList.toggle("effect");
  sound.play()
  sound.currentTime = 0;
  setTimeout(() => video.classList.toggle("effect"), 300);
  canvas
    .getContext("2d")
    .drawImage(video, 0, 0, canvas.width, canvas.height);
  image_data_url = canvas.toDataURL("myPicture/png");
  count++;
});
download.addEventListener("click", (e) => {
  if (count === 0) {
    e.preventDefault();
    return alert("Please take photo before you can download");
  }
  download.href = image_data_url;
  download.download = "myPicture";
});