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
    
    
        // Validate title and content
        if (title.trim() === '' || content.trim() === '') {
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
        window.location.href = 'index.html'; // Replace with your desired redirect URL
        // Or display a success message:
        // alert('Post saved successfully!');
    });