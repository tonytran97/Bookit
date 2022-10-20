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

  var upVoteButtons = document.querySelectorAll('.up-vote');
  var downVoteButtons = document.querySelectorAll('.down-vote');

  for (var i = 0; i < upVoteButtons.length; i++) {
    upVoteButtons[i].addEventListener('click', function() {
      swal("Thanks for the upvote on this review", "Unfortunately, this feature isn't ready yet", "info");
    });
  };

  for (var i = 0; i < downVoteButtons.length; i++) {
    downVoteButtons[i].addEventListener('click', function() {
      swal("Nice try", "Can't downvote me if this feature isn't available yet", "error");
    });
  };

  document
    .querySelector('.addReview-form')
    .addEventListener('submit', newReviewHandler);
  