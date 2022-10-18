const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const author = document.querySelector('#author').value.trim();
    const cover = document.querySelector('#cover').value.trim();
    const summary = document.querySelector('#summary').value.trim();
  
  console.log(title);
  console.log(author);
  console.log(cover);
  console.log(summary);
  
    if (title && author && cover && summary) {
      const response = await fetch('/api/newread', {
        method: 'POST',
        body: JSON.stringify({ title, author, cover, summary }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('New book has been added')
        document.location.replace('/');
      } else {
        alert('Failed to add a new book');
      }
    }
  };
  
  document
    .querySelector('.addBook-form')
    .addEventListener('submit', loginFormHandler);
  