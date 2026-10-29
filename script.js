const enterbutton =document.querySelector(".enter-button");
const opening =document.getElementById("opening");
const movie =document.getElementById("movie");
const profile=document.getElementById("profile");
enterbutton.addEventListener("click", function() {
  movie.classList.remove("hidden");
  movie.innerHTML =`
    <video id="opening-video" autoplay playsinline controls>
      <source src="videos/opening-movie.mp4" type="video/mp4">
    </video>`;
  const video=document.getElementById("opening-video");
  video.addEventListener("ended", function() {
    opening.classList.add("hidden");
    profile.classList.remove("hidden");});
  video.play().catch(function (error) {
    console.log("動画の再生には失敗しました:",error);
  });
});
console.log("JavaScriptは動いている！")