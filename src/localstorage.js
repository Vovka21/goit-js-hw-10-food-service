const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');

const switchTheme = document.querySelector('#theme-switch-toggle');

// switchTheme.addEventListener('click', e => {
//   if (e.target.checked) {
//     body.classList.remove(Theme.LIGHT);
//     body.classList.add(Theme.DARK);

//     localStorage.setItem('theme', Theme.DARK);
//   } else {
//     body.classList.remove(Theme.DARK);
//     body.classList.add(Theme.LIGHT);

//     localStorage.setItem('theme', Theme.LIGHT);
//   }
// });

// if (!localStorage) localStorage.theme = Theme.LIGHT;
// body.className = localStorage.theme;

// *

function userCheckStorage() {
  const userTheme = localStorage.getItem('theme');
  if (userTheme) {
    document.body.classList.add(userTheme);
  } else {
    document.body.classList.add(Theme.LIGHT);
  }
  if (userTheme === Theme.DARK) {
    switchTheme.checked = true;
  }
}
userCheckStorage();

switchTheme.addEventListener('change', onChangeTheme);

function onChangeTheme(e) {
  if (e.target.checked) {
    document.body.classList.toggle(Theme.DARK);
    document.body.classList.toggle(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.toggle(Theme.DARK);
    document.body.classList.toggle(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
