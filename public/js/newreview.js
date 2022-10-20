const newReviewHandler = async (event) => {
    event.preventDefault();
  
    const review = document.querySelector('#content').value.trim();
  
    if (review) {
      const response = await fetch('/api/newreview', {
        method: 'POST',
        body: JSON.stringify({ review }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('New review has been added')
        document.location.replace('/');
      } else {
        alert('Failed to create new review');
      }
    }
  };
  
  document
    .querySelector('.addReview-form')
    .addEventListener('submit', newReviewHandler);
  