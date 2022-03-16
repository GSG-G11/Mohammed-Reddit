const userProfile = document.getElementById('profile');
const postTitle = document.getElementById('post-title');
const postContent = document.getElementById('post-content');
const addPostForm = document.getElementById('add-post-form');
const postsContainer = document.querySelector('.posts-container');
let user_id;
let user_name;

const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.className = className;
  return element;
};
const createPost = (parent, data, username, postId) => {
  const post = createElement('div', 'post');
  const postSideBar = createElement('div', 'post-side-bar');
  const upArrowSpan = createElement('span', 'up arrow');
  const upArrowIcon = createElement('i', 'fa fa-arrow-up');
  const ratingSpan = createElement('span', 'rating');
  const downArrowSpan = createElement('span', 'down arrow');
  const downArrowIcon = createElement('i', 'fa fa-arrow-down');
  const postHeader = createElement('div', 'post-header');
  const postGeneral = createElement('div', 'post-general');
  const dotsIcon = createElement('i', 'icon fa fa-ellipsis-h dots');
  const save = createElement('p', 'parag save');
  const saveIcon = createElement('i', 'icon fa fa-angle-up');
  const share = createElement('p', 'parag share');
  const shareIcon = createElement('i', 'icon fa fa-share');
  const comment = createElement('p', 'parag comment');
  const commentIcon = createElement('i', 'icon far fa-comment-alt');
  const userImageLink = createElement('a', 'user-image-link');
  const userImage = createElement('img', 'user-image');
  const postFooter = createElement('div', 'post-footer');
  const postParagraph = createElement('div', 'post-paragraph');
  const postTitle = createElement('div', 'post-title');
  const postContent = createElement('div', 'post-content');
  const userName = createElement('p', 'user-name');
  const postInformation = createElement('p', 'post-information');

  userImage.alt = 'User image';
  userImage.style.width = '20px';
  userImage.src = '../assets/user.png';

  post.appendChild(postSideBar);
  post.appendChild(postGeneral);
  postSideBar.appendChild(upArrowSpan);
  upArrowSpan.appendChild(upArrowIcon);
  postSideBar.appendChild(ratingSpan);
  postSideBar.appendChild(downArrowSpan);
  downArrowSpan.appendChild(downArrowIcon);
  postGeneral.appendChild(postHeader);
  postGeneral.appendChild(postContent);
  postGeneral.appendChild(postFooter);
  postHeader.appendChild(userImageLink);
  postHeader.appendChild(userName);
  postHeader.appendChild(postInformation);
  userImageLink.appendChild(userImage);
  postContent.appendChild(postTitle);
  postContent.appendChild(postParagraph);
  postFooter.appendChild(commentIcon);
  postFooter.appendChild(comment);
  postFooter.appendChild(shareIcon);
  postFooter.appendChild(share);
  postFooter.appendChild(saveIcon);
  postFooter.appendChild(save);
  postFooter.appendChild(dotsIcon);

  postTitle.textContent = data.title;
  postParagraph.textContent = data.content;
  postInformation.textContent = `Posted by ${user_name} at ${data.date}`;
  ratingSpan.textContent = data.vote === null ? '0' : data.vote;
  userName.textContent = username;
  comment.textContent = 'Comment';
  share.textContent = 'Share';
  save.textContent = 'Save';
  post.id = postId;
  upArrowSpan.setAttribute('onclick', 'upVote(this)');
  downArrowSpan.setAttribute('onclick', 'downVote(this)');
  parent.appendChild(post);
  return post;
};

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  fetch('/home', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
    .then((response) => response.json())
    .then((result) => {
      if (!result.data) {
        user_id = result.user_data.id;
        user_name = result.user_data.username;
        userProfile.textContent = result.user_data.username;
      } else {
        window.location.href = '/login';
      }
    })
    .catch((err) => {
      console.log(err);
    });
  fetch('/post')
    .then((response) => response.json())
    .then((result) => {
      const posts = [...result.data];
      postsContainer.textContent = '';
      posts.forEach((element) => {
        createPost(postsContainer, element, element.username, element.id);
      });
    })
    .catch((err) => {
      // postsContainer.textContent = 'No posts yet';
    });
});
const upVote = (el) => {
  fetch(`/post/up/${el.parentElement.parentElement.id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
    .then((response) => response.json())
    .then((result) => {
      el.parentElement.children[1].textContent = result.data.vote;
    })
    .catch();
};
const downVote = (el) => {
  fetch(`/post/down/${el.parentElement.parentElement.id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
    .then((response) => response.json())
    .then((result) => {
      el.parentElement.children[1].textContent = result.data.vote;
    })
    .catch();
};

addPostForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const postData = {
    title: postTitle.value,
    content: postContent.value,
  };
  fetch(`/post`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((result) => {
      createPost(postsContainer, result.data, user_name, result.data.id);
    })
    .catch((err) => {
      window.location.href = '/login';
    });
});
