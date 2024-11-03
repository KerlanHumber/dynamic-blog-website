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

    displayPosts(storedPosts);