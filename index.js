(function() {
    var elementsFadeInSide;
    var elementsPopUp;
    var elementsFadeInTop;
    var windowHeight;
  
    function init() {
      elementsFadeInSide = document.getElementsByClassName('element-animate-fadeinside');
      elementsPopUp = document.getElementsByClassName('element-animate-popup');
      elementsFadeInTop = document.getElementsByClassName('element-animate-fadeintop');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elementsFadeInSide.length; i++) {
        var element1 = elementsFadeInSide[i];
        var positionFromTop = elementsFadeInSide[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= -50) {
          element1.classList.add('animate-fade-in-side');
          element1.classList.remove('hidden');
        }
      }

      for (var i = 0; i < elementsPopUp.length; i++) {
        var element2 = elementsPopUp[i];
        var positionFromTop = elementsPopUp[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= -50) {
          element2.classList.add('animate-pop-up');
          element2.classList.remove('hidden');
        }
      }

      for (var i = 0; i < elementsFadeInTop.length; i++) {
        var element3 = elementsFadeInTop[i];
        var positionFromTop = elementsFadeInTop[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= -50) {
          element3.classList.add('animate-fade-in-top');
          element3.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();