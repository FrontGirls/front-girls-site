(function(){
  document.getElementById("open-about").addEventListener("click", function() {
    openArticle('about');
  });
  document.getElementById("about").getElementsByClassName('js-overlay__close-btn')[0].addEventListener("click", function() {
    closeArticle('about');
  });

  document.getElementById("open-resources").addEventListener("click", function() {
    openArticle('resources');
  });
  document.getElementById("resources").getElementsByClassName('js-overlay__close-btn')[0].addEventListener("click", function() {
    closeArticle('resources');
  });

  function openArticle(target) {
    const element = document.getElementById(target);
    element.classList.add('open');
  }

  function closeArticle(target) {
    const element = document.getElementById(target);
    element.classList.remove('open');
  }
})();