const userProfile = document.getElementById('profile');
const postTitle = document.getElementById('post-title');
const postContent = document.getElementById('post-content');
const addPostForm = document.getElementById('add-post-form');
const postsContainer = document.querySelector('.posts-container');

let user_id;
let user_name;
window.addEventListener('load', (e) => {
  e.preventDefault();
  fetch('/home', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
    .then((response) => response.json())
    .then((result) => {
      user_id = result.user_data.id;
      user_name = result.user_data.username;
      userProfile.textContent = result.user_data.username;
      userProfile.href = `profile?id=${result.user_data.id}`;
    })
    .catch((err) => {
      window.location.href = '/home';
    });
});

addPostForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const postData = {
    title: postTitle.value,
    content: postContent.value,
  };
  fetch(`/post?id=${user_id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result.data);
      const post = document.createElement('div');
      const postSideBar = document.createElement('div');
      const upArrowSpan = document.createElement('span');
      const upArrowIcon = document.createElement('i');
      const ratingSpan = document.createElement('span');
      const downArrowSpan = document.createElement('span');
      const downArrowIcon = document.createElement('i');
      const postHeader = document.createElement('div');
      const postGeneral = document.createElement('div');
      const dotsIcon = document.createElement('i');
      const save = document.createElement('p');
      const saveIcon = document.createElement('i');
      const share = document.createElement('p');
      const shareIcon = document.createElement('i');
      const comment = document.createElement('p');
      const userImageLink = document.createElement('a');
      const commentIcon = document.createElement('i');
      const userImage = document.createElement('img');
      const postFooter = document.createElement('div');
      const postParagraph = document.createElement('div');
      const postContent = document.createElement('div');
      const userName = document.createElement('p');
      const postInformation = document.createElement('p');

      post.className = 'post';
      postSideBar.className = 'post-side-bar';
      upArrowSpan.className = 'up arrow';
      upArrowIcon.className = 'fa fa-arrow-up';
      ratingSpan.className = 'rating';
      downArrowSpan.className = 'down arrow';
      downArrowIcon.className = 'fa fa-arrow-down';
      postGeneral.className = 'post-general';
      postHeader.className = 'post-header';
      userImageLink.className = 'user-image-link';
      userImage.className = 'user-image';
      userImage.alt = 'User image';
      userImage.style.width = '20px';
      userImage.src = '../assets/user.png'
      userName.className = 'user-name';
      postInformation.className = 'post-information';
      postContent.className = 'post-content';
      postParagraph.className = 'post-paragraph';
      postFooter.className = 'post-footer';
      commentIcon.className = 'icon far fa-comment-alt';
      comment.className = 'parag comment';
      shareIcon.className = 'icon fa fa-share';
      share.className = 'parag share';
      saveIcon.className = 'icon fa fa-angle-up';
      save.className = 'parag save';
      dotsIcon.className = 'icon fa fa-ellipsis-h dots';

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
      postContent.appendChild(postParagraph);
      postFooter.appendChild(commentIcon);
      postFooter.appendChild(comment);
      postFooter.appendChild(shareIcon);
      postFooter.appendChild(share);
      postFooter.appendChild(saveIcon);
      postFooter.appendChild(save);
      postFooter.appendChild(dotsIcon);

      postParagraph.textContent = result.data.content;
      postInformation.textContent = `Posted by ${user_name} at ${result.data.date}`;
      ratingSpan.textContent =
        result.data.vote === null ? '0' : result.data.vote;
      userName.textContent = user_name;
      postsContainer.appendChild(post);
      comment.textContent = 'Comment';
      share.textContent = 'Share';
      save.textContent = 'Save';
    });
});
