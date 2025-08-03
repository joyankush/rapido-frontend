document.getElementById("booking-form")?.addEventListener("submit", async function(e) {
  e.preventDefault();
  const pickup = document.getElementById("pickup").value;
  const drop = document.getElementById("drop").value;

  const res = await fetch("https://rapido-backend-1omf.onrender.com/api/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pickup, drop })
  });

  const data = await res.json();
  alert(data.message);
});
