var users = require('./userCtrl.js')

var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
    getFriends: function(req, res) {
      var friendsArr;
      var finalArray = [];
      console.log(users.users)
      for (var i = 0; i < users.users.length; i++) {
        if (users.users[i].name === req.session.currentUser.name) {
          friendsArr = users.users[i].friends;
          console.log(users.users[i])
        } 
      }

      for (var t = 0; t < profiles.length; t++) {
        for (var j = 0; j < friendsArr.length; j++) {
          if (profiles[t].name === friendsArr[j]) {
            finalArray.push(profiles[t])
          }
        }
      }
      var personObj = {
        friends: finalArray,
        person: req.session.currentUser
      }
      console.log('person', personObj)
      res.status(200).send(personObj)
    }
}

