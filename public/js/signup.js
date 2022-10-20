const signup = async (event) => {
      // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

    // Make a POST request to destroy the session on the back end
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      alert('New user has been created');
      document.location.replace('/login');
      
    } else {
      alert(response.statusText);
    }
    
  };
  
  document.querySelector('#sign-up').addEventListener('click', signup);
  