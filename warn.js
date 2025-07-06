let armed = false;

function armCloseWarning() {
  if (!armed) {
    window.addEventListener("beforeunload", function (e) {
      e.preventDefault();
      e.returnValue = "";
    });
    armed = true;
    console.log("Close warning armed.");
  }
}

window.addEventListener("click", armCloseWarning);
window.addEventListener("keydown", armCloseWarning);
window.addEventListener("mousemove", armCloseWarning)


function activateWarning() {
  window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = "";
  });
  console.log("✅ Tab close warning armed");
}

// Activate warning after *any real interaction*
window.addEventListener("click", activateWarning, { once: true });
window.addEventListener("mousemove", activateWarning, { once: true });
window.addEventListener("keydown", activateWarning, { once: true });
