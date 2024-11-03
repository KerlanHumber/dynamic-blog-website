const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

function displayPosts(posts){
    const postList = document.getElementById('postList');
    posts.forEach(post => {
        const listItem = document.createElement('l1');

        const link = document.createElement('a');
        link.href = post.link;
        link.textContent = post.title;
        listItem.appendChild(link);
        postList.appendChild(listItem);
    });

    }

    document.getElementById('newPostForm').addEventListener('submit', (event) => {
        event.preventDefault();
    
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        //Validate title and content
        if (title.trim() === '' || content.trim() === ''){
            alert('Please enter a title and content for your post.');
            return;
        }
    
        const newPost = {
            title: title,
            content: content
        };
    
         // Retrieve existing posts from local storage
         const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
         
         // Add the new post to the array
         existingPosts.push(newPost);

         // Store the updated array back to local storage
         localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

         // Redirect to the index page or display a success message
         window.location.href = 'index.html';
    
    });


// Function to display a specific post
function displayPost(postId) {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const post = storedPosts.find(post => post.id === postId);

    if (post) {
        document.getElementById('postTitle').textContent = post.title;
        document.getElementById('postContent').textContent = post.content;

        // Add event listener to the edit button
        document.getElementById('editButton').addEventListener('click', () => {
            
        });
    } else {
        // Handle the case where the post is not found
        console.error('Post not found');
    }
}

// Get the post ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

// Display the post
displayPost(postId);

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
       // Or display a success message:
       // alert('Post updated successfully!');
    }
}
    