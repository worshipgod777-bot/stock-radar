(function () {
  function addCursor() {
    const chart = document.querySelector("canvas");
    if (!chart || chart.dataset.cursorReady) return;

    chart.dataset.cursorReady = "1";

    const box = chart.parentElement;
    box.style.position = "relative";

    const lineX = document.createElement("div");
    const lineY = document.createElement("div");

    Object.assign(lineX.style, {
      position: "absolute",
      top: "0",
      bottom: "0",
      width: "1px",
      background: "#ffffff88",
      pointerEvents: "none",
      display: "none"
    });

    Object.assign(lineY.style, {
      position: "absolute",
      left: "0",
      right: "0",
      height: "1px",
      background: "#ffffff88",
      pointerEvents: "none",
      display: "none"
    });

    box.append(lineX, lineY);

    chart.addEventListener("pointermove", function (e) {
      const rect = chart.getBoundingClientRect();
      lineX.style.left = (e.clientX - rect.left + chart.offsetLeft) + "px";
      lineY.style.top = (e.clientY - rect.top + chart.offsetTop) + "px";
      lineX.style.display = "block";
      lineY.style.display = "block";
    });

    chart.addEventListener("pointerleave", function () {
      lineX.style.display = "none";
      lineY.style.display = "none";
    });
  }

  setInterval(addCursor, 1000);
})();
