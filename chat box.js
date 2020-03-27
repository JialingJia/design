const wrapper = document.querySelector('.content-wrapper');
const content = document.querySelector('.content');
const text = document.querySelector('.text');
const isTyping = document.querySelector('.isTyping');
const inputEl = document.querySelector('.input');
const resetButton = document.querySelector('.reset__button');
const submitButton = document.querySelector('.submit__button');
//

// ADD MESSAGE TO ARRAY & RESET INPUT VALUE
setData = message => {
  const chatThread = [];
  const imageUrl = 'https://api.adorable.io/avatars/285/abott@adorable.png';
  const bubble = `
    <div class='chat-bubble'>
      <div class='avatar'>
        <img class='avatar__img' src=${imageUrl} />
      </div>
      <div class='bubble'>
          <p class='text'>${message}</p>
      </div>
    </div>`;

  chatThread.push(bubble);

  const chatThreadDOM = document.createRange().createContextualFragment(chatThread);

  content.appendChild(chatThreadDOM);

  inputEl.value = '';

  return false;
}

isUserTyping = inputEl => inputEl.value !== '' ? true : false;

scrollDown = () => wrapper.scrollTop = content.clientHeight + isTyping.clientHeight;

// RESET UI
handleResetClick = () => {
  inputEl.value = '';
  content.innerHTML = '';
}

resetButton.addEventListener('click', handleResetClick);

handleKeyUp = (e) => {
  const typing = isUserTyping(inputEl);

  if (typing) {
    isTyping.classList.add('isTyping--active');
  } else {
    isTyping.classList.remove('isTyping--active');
  }

  if (typing && inputEl.value.length === 1) {
    scrollDown();
  }

// SUBMIT VIA RETURN
  if (e.which == 13 && inputEl.value.length !== 0) {
    scrollDown();
    isTyping.classList.remove('isTyping--active');
    setData(inputEl.value);
  }

  if (e.which == 8 && inputEl.value.length === 0 || e.which == 46 && inputEl.value.length === 1) {
    isTyping.classList.remove('isTyping--active');
  }

}

inputEl.addEventListener('keyup', handleKeyUp);

handleSubmitClick = () => {
  if (inputEl.value !== "") {
    scrollDown();
    isTyping.classList.remove('isTyping--active');
    setData(inputEl.value);
  }
}

// SUBMIT VIA BUTTON CLICK
submitButton.addEventListener('click', handleSubmitClick);
