const postTitle = document.getElementById('post-title');
const postContent = document.getElementById('post-content');
const postsContainer = document.querySelector('.posts-container');
const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.className = className;
  return element;
};
const createPost = (parent, data, username) => {
  const post = createElement('div', 'post');
  const postSideBar = createElement('div', 'post-side-bar');
  const upArrowSpan = createElement('span', 'up arrow');
  const upArrowIcon = createElement('i', 'fa fa-arrow-up');
  const ratingSpan = createElement('span', 'rating');
  const downArrowSpan = createElement('span', 'down arrow');
  const downArrowIcon = createElement('i', 'fa fa-arrow-down');
  const postHeader = createElement('div', 'post-header');
  const postGeneral = createElement('div', 'post-general');
  const deleteIcon = createElement('i', 'icon fa fa-trash');
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
  postTitle.textContent = data.title;
  postParagraph.textContent = data.content;
  postInformation.textContent = `Posted by ${data.name} at ${data.date}`;
  ratingSpan.textContent = data.vote === null ? '0' : data.vote;
  userName.textContent = username;
  comment.textContent = 'Comment';
  share.textContent = 'Share';
  save.textContent = 'Save';
  upArrowSpan.setAttribute('onclick', 'upVote()');
  downArrowSpan.setAttribute('onclick', 'downVote()');

  parent.appendChild(post);
  return post;
};
document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  fetch('/post')
    .then((response) => response.json())
    .then((result) => {
      const posts = [...result.data];
      posts.forEach((element) => {
        createPost(postsContainer, element, element.username);
      });
    })
    .catch((err) => {
      postsContainer.textContent = 'No posts yet';
    });
});

const upVote = () => {
  window.location.href = '/login';
};
const downVote = () => {
  window.location.href = '/login';
};
