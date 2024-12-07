// Shtojmë një 'event listener' për ngjarjen 'submit' për formularin e kontaktit
document.getElementById('contactForm').addEventListener('submit', function(event) {
  
    // Merr vlerat nga fushat e formularit (emri, email-i dhe mesazhi)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Kontrollo nëse emri është bosh (nuk ka karaktere të vlefshme)
    if (name.trim() === "") {
      alert("Please enter your name."); // Shfaq mesazh nëse emri është bosh
      event.preventDefault(); // Parandalon dërgimin e formularit
      return; // Dëgjojnë të dhënat e tjera
    }
  
    // Përdorim një shprehje të rregullt (regex) për të verifikuar emailin e përdoruesit
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // Kontrollo nëse email-i është në një format të vlefshëm
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address."); // Shfaq mesazh nëse emaili është i gabuar
      event.preventDefault(); // Parandalon dërgimin e formularit
      return; // Dëgjojnë të dhënat e tjera
    }
  
    // Kontrollo nëse mesazhi është bosh
    if (message.trim() === "") {
      alert("Please enter your message."); // Shfaq mesazh nëse mesazhi është bosh
      event.preventDefault(); // Parandalon dërgimin e formularit
      return; // Dëgjojnë të dhënat e tjera
    }
  
    // Nëse të gjitha kontrollet kalohen, shfaq një mesazh për sukses
    alert("Your message has been sent!");
  });
  
  // Shtojmë një 'event listener' për ngjarjen 'submit' për formularin e login-it
  document.getElementById('loginForm').addEventListener('submit', function(event) {
  
    // Merr vlerat nga fushat e formularit të login-it (email dhe password)
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    // Përdorim një shprehje të rregullt (regex) për të verifikuar emailin e përdoruesit
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
    // Kontrollo nëse email-i është në një format të vlefshëm
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address."); // Shfaq mesazh nëse emaili është i gabuar
      event.preventDefault(); // Parandalon dërgimin e formularit
      return; // Dëgjojnë të dhënat e tjera
    }
  
    // Kontrollo nëse password-i është bosh
    if (password.trim() === "") {
      alert("Please enter your password."); // Shfaq mesazh nëse password-i është bosh
      event.preventDefault(); // Parandalon dërgimin e formularit
      return; // Dëgjojnë të dhënat e tjera
    }
  
    // Nëse të gjitha kontrollet kalohen, shfaq një mesazh për sukses
    alert("Login successful!");

    