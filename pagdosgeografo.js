document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("videoPlaneta");
  const btnPlay = document.getElementById("btnPlay");
  const btnEntrar = document.getElementById("btnEntrar");

  btnPlay.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      btnPlay.textContent = "❚❚";
    } else {
      video.pause();
      btnPlay.textContent = "▶";
    }
  });

   btnEntrar.addEventListener("click", function () {
    window.location.href = "geografo.html"; // <-- esta línea reemplaza al alert()
  });
});