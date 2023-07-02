var App = {
    numberOfDroplets: 100
  };
  
  //-------------------------------------
  
  App.spawnDroplet = function(input) {
    var droplet = document.createElement('div');
    droplet.className = 'droplet';
  
    var flying = document.createElement('div');
    flying.className = 'flying';
  
    var splashing = document.createElement('div');
    splashing.className = 'splashing';
  
    droplet.appendChild(flying);
    droplet.appendChild(splashing);
    document.body.appendChild(droplet);
  
    droplet.style.left = input.left + '%';
    droplet.style.top = input.top + '%';
    droplet.style.transform = 'scale(' + input.scale + ')';
    droplet.style.opacity = input.opacity;
  
    flying.style.animation = input.duration + 's flying infinite linear';
    flying.style.animationDelay = input.delay + 's';
  
    splashing.style.animation = input.duration + 's splashing infinite linear';
    splashing.style.animationDelay = (input.duration + input.delay) + 's';
  };
  
  //-------------------------------------
  
  var i = 0;
  while (i < App.numberOfDroplets) {
    var opacity = (Math.random() * 0.9 + 0.1).toFixed(1);
    var scale = opacity * 3;
    var y = 65 + opacity * 35;
    var duration = (Math.random() * 0.9 + 0.1).toFixed(2);
  
    App.spawnDroplet({
      left: parseInt(Math.random() * 100),
      top: y,
      opacity: opacity,
      scale: scale,
      duration: duration,
      delay: duration
    });
  
    i++;
  }
  //-------------------------------------
  