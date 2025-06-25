interface RegistrationData {
    username: string;
    password: string;
    email: string;
  }
  
  const form = document.getElementById('registrationForm') as HTMLFormElement;
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const data: RegistrationData = {
      username: (document.getElementById('username') as HTMLInputElement).value,
      password: (document.getElementById('password') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
    };

    console.log('Registrierungsdaten:', data);
    // Hier kannst du die Daten z.B. an einen Server schicken
  });