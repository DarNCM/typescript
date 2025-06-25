const elementID = document.getElementById("loginForm") as HTMLFormElement;

elementID.addEventListener("submit", async (e) => {
  e.preventDefault(); // wichtig, sonst reload!

  const username = (document.getElementById("username") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;

  try {
    const res = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      // Login erfolgreich
      window.location.href = "erfolg.html";
    } else {
      // Login fehlgeschlagen
      alert("Login fehlgeschlagen: Benutzername oder Passwort falsch.");
    }
  } catch (error) {
    console.error("Fehler beim Login:", error);
    alert("Ein Fehler ist aufgetreten.");
  }
});