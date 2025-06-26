/*


Eine Lokale Webpage über node Express
mit Registrierungsformular, Nutzername, passwort, mail,
das bei erfolgreicher registrierung die Daten in eine Lokale JSON Datei speichert
und einen weiterleitet zur Login seite.
Dort, wenn man sich anmeldet werden die Daten die man eingibt mit den Daten in der
JSON Datei verglichen, und sollten diese übereinstimmen wird dem Nutzer Zugang gewährt.
Falls nicht, erscheint ein Alert "Die Daten stimmen nicht überein".
Nach Erfolgreichem Login, wird man auf eine "Sie wurden Erfolgreich angemeldet"-Seite weitergeleitet.
*/

//Here we declare a variable that with "document.getElementById" and ("ID-Name") that we
//want it to get a Document Type, with the specific ID of the document and save it as HTMLFormElement OR | null
const registrierung = document.getElementById(
  "registrationForm"
) as HTMLFormElement | null;

//If there is NO ! document type with that ID, we want it to throw an Error
if (!registrierung) {
  throw new Error("Formular mit der ID registrationForm wurde nicht gefunden.");
} else {
  registrierung.addEventListener("submit", async (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById(
      "username"
    ) as HTMLInputElement | null;
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement | null;
    const emailInput = document.getElementById(
      "email"
    ) as HTMLInputElement | null;

    if (!usernameInput || !passwordInput || !emailInput) {
      alert("Kein Feld darf leer bleiben!");
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
    const response = await fetch("/register",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password, email}),
    })
    if (response.ok){
        window.location.href ="login.html";
    }
    else {
        const data = await response.json();   
        alert(`Registrierung Fehlgeschlagen: ${data.error || "Unbekannter Fehler!"}`);
    }
    } 
    catch (error){
    console.error ("Fehler bei der Registrierung:", error);
    alert ("Irgendwas läuft schief...");
  }
});
}
