(() => {
  const button = document.getElementById('about-language');
  const english = document.getElementById('about-en');
  const chinese = document.getElementById('about-zh');
  const storageKey = 'homepage-language';

  if (!button || !english || !chinese) return;

  function showLanguage(language) {
    const showChinese = language === 'zh-Hans';

    english.hidden = showChinese;
    chinese.hidden = !showChinese;
    document.documentElement.lang = showChinese ? 'zh-Hans' : 'en';
    button.value = showChinese ? 'English' : '简体中文';
    button.lang = showChinese ? 'en' : 'zh-Hans';
  }

  let savedLanguage;
  try {
    savedLanguage = localStorage.getItem(storageKey);
  } catch {
    // Use English if the browser blocks access to local storage.
  }

  showLanguage(savedLanguage);
  button.hidden = false;

  button.addEventListener('click', () => {
    const language = chinese.hidden ? 'zh-Hans' : 'en';
    showLanguage(language);

    try {
      localStorage.setItem(storageKey, language);
    } catch {
      // The current page can still switch languages.
    }
  });
})();
