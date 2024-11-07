const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// Function to display a specific post
function displayPost(postId) {
  const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  const post = storedPosts.find(post => post.id === postId);

  if (post) {
    document.getElementById('postTitle').textContent = post.title;
    document.getElementById('postContent').textContent = post.content;

    // Added event listener to the edit button
    document.getElementById('editButton').addEventListener('click', () => {

    });

    // Added event listener to the delete button
    document.getElementById('deleteButton').addEventListener('click', () => {
      const confirmed = confirm('Are you sure you want to delete this post?');
      if (confirmed) {
        const filteredPosts = storedPosts.filter(post => post.id !== postId);
        localStorage.setItem('blogPosts', JSON.stringify(filteredPosts));
        window.location.href = 'index.html'; // Redirect to the index page
      }
    });
  } else {
    // Handle the case where the post is not found
    console.error('Post not found');
  }
}

function displayPosts(posts) {
  const postList = document.getElementById('postList');
  posts.forEach(post => {
    const listItem = document.createElement('li');

    const link = document.createElement('a');
    link.href = `post.html?id=${post.id}`; 
    listItem.appendChild(link);

    postList.appendChild(listItem);
  });
}

function editPost(postId) {
  const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  const postIndex = storedPosts.findIndex(post => post.id === postId);

  if (postIndex !== -1) {
    // Replace the title and content with the new values
    storedPosts[postIndex].title = document.getElementById('postTitle').textContent;
    storedPosts[postIndex].content = document.getElementById('postContent').textContent

    // Save the updated posts back to local storage
    localStorage.setItem('blogPosts', JSON.stringify(storedPosts));

    // Redirect to the post page or display a success message
    window.location.href = `post.html?id=${postId}`;
  }
}

// Get the post ID from the URL
const urlParams = new URLSearchParams(window.search);
const postId = urlParams.get('id');

// Display the post (assuming you only need one displayPosts function)
displayPost(postId);


// Function to save a new post from new-post.html
function saveNewPost(event) {
    event.preventDefault();
    console.log("Form submitted"); // This is to make sure the function is triggered via the console
}

