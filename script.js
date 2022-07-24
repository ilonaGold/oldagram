const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        didLike: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        didLike: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        didLike: false
    }
]

const postContent = document.querySelector(".post-content");

function rest() {
    postContent.innerHTML = "";
}

function renderPosts() {
    for (let i = 0; i < posts.length; i++) {
        postContent.innerHTML += `
            <section class="user-info">
                <div class="user-pic">
                    <img src="${posts[i].avatar}" class="user-avatar" alt="avatar">
                </div>
                <div class="user-descr">
                    <span class="user-full-name">${posts[i].name}</span>
                    <span class="user-location">${posts[i].location}</span>
                </div>
            </section>
            <section class="main-image">
                <img src="${posts[i].post}" class="post-image" alt="painter's self-portrait">
            </section>
            <section class="post-body">
                <div class="icons">
                    <img ondblclick="addLikes(${i})" src="images/${posts[i].didLike ? 'red-heart.png' : 'icon-heart.png'}" class="icon icon-heart" alt="heart icon">
                    <img src="images/icon-comment.png" class="icon icon-comment" alt="comment icon">
                    <img src="images/icon-dm.png" class="icon icon-share" alt="share icon">
                </div>
                <p class="likes-count">${posts[i].likes}</p>
                <p class="username-caption">
                    <span class="username">${posts[i].username}</span>
                    <span class="comment">${posts[i].comment}</span>
                </p>
            </section>
        `;
     }
}

renderPosts();

const likes = document.getElementsByClassName("icon-heart");
let likesCount = document.querySelectorAll(".likes-count");

let addLikes = (i) => {
    if (posts[i].didLike === false) {
        posts[i] = {
            ...posts[i],
            likes: posts[i].likes + 1,
            didLike: true
        }
    } else {
        posts[i] = {
            ...posts[i],
            likes: posts[i].likes - 1,
            didLike: false
        }
    }
    rest();
    renderPosts();
}
