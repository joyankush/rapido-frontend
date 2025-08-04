document.getElementById("login-form")?.addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // 🔐 Check for admin login
  if (email === "demo@gmail.com" && password === "112233") {
    alert("Welcome Admin!");
    window.location.href = "admin-dashboard.html";
    return;
  }

  // 👤 Continue with normal user login
  try {
    const res = await fetch("https://rapido-backend-1omf.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Login successful!");
      window.location.href = "profile.html";
    } else {
      alert(data.message || "Login failed.");
    }
  } catch (err) {
    alert("Server error. Please try again.");
    console.error(err);
  }
});
