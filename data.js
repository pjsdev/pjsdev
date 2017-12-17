var gameData = [
  {
    name: 'heatwave', 
    title: 'Heatwave', 
    subtitle: 'Made for GGJAM 2017',
    date: 'Jan 2017',
    win: 'https://drive.google.com/file/d/0B9IhHuGpK1UJR1QwbS0wcV9pWUk/view?usp=sharing',
    description: 'A gnarly surf game for multiple players. Surf around the wave pulling of jumps and flips to gain points - but watch our for the zeppelin and the shark! For up to 4 players on 1 keyboard, crowd round, pick whichever two keys you want and surf. Made with <a class="yellow" href="http://boxofclicks.com">Tim</a>, <a class="yellow" href="http://twitter.com/mykeebee">Myke</a> and <a class="yellow" href="https://steamcommunity.com/id/harriso">Dave</a>'
  },

  {
    name: 'confined', 
    title: 'Confined', 
    subtitle: 'Made for Ludum Dare 37',
    date: 'Dec 2016',
    win: 'https://drive.google.com/file/d/0B_YOg_cYxzjzamRQU0FjZnFUNE0/view?usp=sharing',
    mac: 'https://drive.google.com/file/d/0B_YOg_cYxzjzM0JFVHY3bFpkNjg/view?usp=sharing',
    web: 'games/confined/',
    description: "A slow game where you planet-hop through space, looking for clues to help bring a lost girl home. Use what fuel you have to find and decrypt messages intercepted from a man to his wife before making your guess at where the missing girl is..."
  },

  {
    name: 'gbjam2016',
    title: 'Global Defense Corps', 
    subtitle: 'Submitted to GBJAM 5',
    date: 'Oct 2016',
    gif: true,
    win: 'https://drive.google.com/open?id=0B9IhHuGpK1UJNTUzZXE4WG1kbWs',
    // mac: '',
    web: 'games/gbjam2016/',
    description: 'Entry for the 2016 Game Boy Jam. I did some design and the code for "Global Defense Corps"; an action packed, monster-exploding, civilian-saving bonanza! Head on over to <a class="yellow" href="https://sean-noonan.itch.io/global-defense-corps">itch.io</a> to play it. Credits also to <a class="yellow" href="https://twitter.com/SeanNoonan">@SeanNoonan</a> and <a class="yellow" href="https://twitter.com/nostoppingepoch">@nostoppingepoch</a>'
  },

  {
    name: 'fickle_gods', 
    title: 'Fickle Gods', 
    subtitle: 'Made for GGJAM 2016',
    date: 'Jan 2016',
    win: 'https://drive.google.com/file/d/0B9IhHuGpK1UJejQ5NzllU0kwUE0/view?usp=sharing',
    mac: 'https://drive.google.com/file/d/0B9IhHuGpK1UJaUpObTBvalVObjg/view?usp=sharing',
    linux: 'https://drive.google.com/file/d/0B9IhHuGpK1UJVGw2bGZzY0t4WlE/view?usp=sharing',
    description: 'Made for GGJ16; "Fickle Gods", a game about rituals. Try to finish building your temple by appeasing the gods. Do this by scouring your world for valuable offerings, praying reverently and perhaps the odd human sacrifice...  Made with <a class="yellow" href="http://boxofclicks.com">Tim</a>, <a class="yellow" href="http://twitter.com/mykeebee">Myke</a>, <a class="yellow" href="https://steamcommunity.com/id/harriso">Dave</a> and <a class="yellow" href="http://darkjimbo.deviantart.com/">Jim</a>'
  },

  {
    name: 'trench_knickers', 
    title: 'Trench Knickers', 
    subtitle: 'Made for fun with good friends',
    date: 'Nov 2015',
    win: 'games/trench_knickers/trench_knickers_windows.zip',
    mac: 'games/trench_knickers/trench_knickers_mac.zip',
    web: 'games/trench_knickers',
    description: 'An experimental realtime-turn-based hybrid board game where you must navigate through the trenches, avoiding patrolling guards, to collect a secret dossier and escape! Roll your d6 every few seconds and outwit the gaurds rolling 2d6 every 10. Made with <a class="yellow" href="http://twitter.com/mykeebee">Myke</a>, <a class="yellow" href="https://steamcommunity.com/id/harriso">Dave</a> and <a class="yellow" href="http://darkjimbo.deviantart.com/">Jim</a>'
  },

  {
    name: 'pwrong', 
    title: 'Pwrong', 
    subtitle: 'Made for GGJAM 2015',
    date: 'Jan 2015',
    mac: 'http://pj-smith.co.uk/pwrong/pwrong_mac.zip',
    win: 'http://pj-smith.co.uk/pwrong/pwrong_win.zip',
    linux: 'http://pj-smith.co.uk/pwrong/pwrong_linux.zip',
    description: 'At the Montreal (global) game jam, we were the last group of around 25 to come up with an idea and only set to work at midnight on Friday! The theme of the jam was &quot;What do we do now?&quot; and we felt relief when one team member suggested &quot;a game of Pong but then the ball disappears...&quot;'
  },
] 

var archiveGames = [
  {
    name: 'text_team',
    title: 'Why Did We Bring Typewriters?', 
    subtitle: 'Made for fun with good friends',
    date: 'Apr 2016',
    unplayableMessage: "Having some issues with Photon API changes. Next time I have some time, i'll look into fixing it.",
    win: 'https://drive.google.com/file/d/0B9IhHuGpK1UJcWZEUFdLTDJORTQ/view?usp=sharing',
    mac: 'https://drive.google.com/folderview?id=0B9IhHuGpK1UJbGNvbGJDSksxeDQ&usp=sharing',
    description: 'Text adventure meets space team; 4 player, ascii madness. A 4 player networked co-operative game all about communication. You must type clues to your teammates and frantically \'/verb object\' to escape the monster! Watch out for the \'qwertyuiop\' reaper. Made with <a class="yellow" href="http://twitter.com/mykeebee">Myke</a> and <a class="yellow" href="https://steamcommunity.com/id/harriso">Dave</a>'
  },

  {
    name: 'tappitt',
    title: 'Tappitt', 
    subtitle: 'An experiment in releasing a game to the app stores',
    date: 'Mar 2016',
    unplayableMessage: "Originally released on Google and Apple app stores, but since removed.",
    ios: 'http://itunes.apple.com/app/id1084147795',
    android: 'http://play.google.com/store/apps/details?id=com.ludogear.tappitt',
    description: '<a class="yellow" href="http://ludogear.com">Ludo Gear\'s</a> first title. In Tappitt you must frantically tap the colored circles as they grow toward their edges. Do so and you\'ll earn points, miss them and you\'ll lose a life. Tap the colors in order to up your multiplier. Use your \'boosts\' to maximise your tapping power and master the highscore!'
  },

  {
    name: 'flip',
    title: 'Flip', 
    subtitle: 'Made for fun',
    date: 'Mar 2016',
    web: 'games/flip',
    description: ''
  },

  {
    name: 'colour_balance', 
    title: 'Colour Balance', 
    subtitle: 'Made as part of a tutorial teaching a Unity course',
    date: 'Oct 2015',
    web: 'games/colour_balance',
    description: 'A simple tension game where you must speedily click the expiring circles before you run out of lives. The catch is your lives are split into 3 colours that are linked to the circles. For advanced play you can also influence the spawning chance of the circle colours by moving the sliders at the bottom.'
  },

  {
    name: 'trusty_servant', 
    title: 'The Trusty Servant', 
    subtitle: 'Made for fun with good friends', 
    date: 'Oct 2015',
    win: 'https://drive.google.com/file/d/0B9IhHuGpK1UJY2JGQ2tXcVNSRnM/view?usp=sharing',
    mac: 'https://drive.google.com/file/d/0B9IhHuGpK1UJN3lZdHhEV1NXQjA/view?usp=sharing',
    description: 'As recently deceased butler of Professor Timotheth Longfellow in a final act of devotion, you must save your master and thwart his brother Sebastian\'s plans. You have twelve hours; use them wisely. Oh, and Arkwright! Time might prove less of a problem than you think... Made with <a class="yellow" href="http://twitter.com/mykeebee">Myke</a>, <a class="yellow" href="https://steamcommunity.com/id/harriso">Dave</a> and <a class="yellow" href="http://darkjimbo.deviantart.com/">Jim</a>'
  },

  {
    name: 'sneakers', 
    title: 'Sneakers', 
    subtitle: 'Made for fun', 
    date: 'May 2015',
    web: 'games/sneakers',
    description: 'A prototype for a local two player co-operative stealth game. @aub_dev designed the level and the game makes use of a core mechanic of letting your teammate through locked doors as they progress and help you along too.'
  },

  {
    name: 'the_grid', 
    title: 'The Grid', 
    subtitle: 'Made for fun', 
    date: 'Mar 2015',
    web: 'games/the_grid',
    description: 'A local multiplayer board game that required you to place your &quot;software&quot; onto the grid and try move it behind the opponents &quot;firewall&quot; on the other side to turn it into a &quot;server&quot; and connect to it to &quot;hack in&quot;. With an uninterrupted line connecting to one of these servers, you win the game.'
  },

  {
    name: 'space_miner', 
    title: 'Space Miner', 
    subtitle: 'Made for fun', 
    date: 'Dec 2012',
    web: 'games/space_miner',
    description: 'First experiments with Unity. A space based game where you need to collect resources whilst avoiding asteroids and space pirates! A simple resource balancing game and a solid first effort. This was the beginning of my dedication to quick prototyping.'
  }
]

function GameDataByName(name) {
  var i = 0;
  for(; i < gameData.length; ++i){
    var record = gameData[i];
    if(record.name === name) {
      return record;
    }
  }

  i = 0;

  for(; i < archiveGames.length; ++i){
    var record = archiveGames[i];
    if(record.name === name) {
      return record;
    }
  }
}

