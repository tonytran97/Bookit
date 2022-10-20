var upVoteButtons = document.querySelectorAll('.up-vote');
var downVoteButtons = document.querySelectorAll('.down-vote');

for (var i = 0; i < upVoteButtons.length; i++) {
  upVoteButtons[i].addEventListener('click', function() {
    swal("Thanks for the upvote on this review", "Unfortunately, this feature isn't ready yet", "info");
  });
};

for (var i = 0; i < downVoteButtons.length; i++) {
  downVoteButtons[i].addEventListener('click', function() {
    swal("Can't downvote me if this feature isn't available yet", "Nice try", "error");
  });
};