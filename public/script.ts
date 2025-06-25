const registrierung = document.getElementById("registrationForm") as HTMLFormElement | null;

if (!registrierung) {
  console.error("Formular mit der ID 'registrationForm' wurde nicht gefunden.");
} else {
  registrierung.addEventListener("submit", async (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById("username") as HTMLInputElement | null;
    const passwordInput = document.getElementById("password") as HTMLInputElement | null;
    const emailInput = document.getElementById("email") as HTMLInputElement | null;

    if (!usernameInput || !passwordInput || !emailInput) {
      alert("Ein oder mehrere Eingabefelder fehlen!");
      return;
    }

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const email = emailInput.value.trim();

    if (!username || !password || !email) {
      alert("Bitte alle Felder ausfüllen!");
      return;
    }

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        window.location.href = "login.html";
      } else {
        const data = await response.json();
        alert(`Registrierung fehlgeschlagen: ${data.error || "Unbekannter Fehler"}`);
      }
    } catch (error) {
      console.error("Fehler bei der Registrierung:", error);
      alert("Fehler bei der Registrierung. Bitte versuche es erneut.");
    }
  });
}