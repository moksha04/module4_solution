(function () {

    var names = ["Sanya", "Niti", "Jay", "Vishwam", "Parth", "Jayesh", "Lay", "Prutha", "Jignesh", "Niti"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();
    