import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
import { element } from '@angular/core/src/render3';

import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blackjack';
  playerName: FormGroup;
  displayPlayerName: string;
  status = 'pause';
  displayAll = false;
  completeDec: any;
  playerDec: any = [];
  distributerDec: any = [];
  playerCardCount = 0;
  distributerCardCount = 0;
  gameid:string;
  dec1: any = [
    {
      card: '2',
      type: 'diamonds',
      value: 2
    },
    {
      card: '3',
      type: 'diamonds',
      value: 3
    },
    {
      card: '4',
      type: 'diamonds',
      value: 4
    },
    {
      card: '5',
      type: 'diamonds',
      value: 5
    },
    {
      card: '6',
      type: 'diamonds',
      value: 6
    },
    {
      card: '7',
      type: 'diamonds',
      value: 7
    },
    {
      card: '8',
      type: 'diamonds',
      value: 8
    },
    {
      card: '9',
      type: 'diamonds',
      value: 9
    },
    {
      card: '10',
      type: 'diamonds',
      value: 10
    },
    {
      card: 'J',
      type: 'diamonds',
      value: 11
    },
    {
      card: 'K',
      type: 'diamonds',
      value: 11
    },
    {
      card: 'Q',
      type: 'diamonds',
      value: 11
    },
    {
      card: 'A',
      type: 'diamonds',
      value: 1
    },
    {
      card: '2',
      type: 'hearts',
      value: 2
    },
    {
      card: '3',
      type: 'hearts',
      value: 3
    },
    {
      card: '4',
      type: 'hearts',
      value: 4
    },
    {
      card: '5',
      type: 'hearts',
      value: 5
    },
    {
      card: '6',
      type: 'hearts',
      value: 6
    },
    {
      card: '7',
      type: 'hearts',
      value: 7
    },
    {
      card: '8',
      type: 'hearts',
      value: 8
    },
    {
      card: '9',
      type: 'hearts',
      value: 9
    },
    {
      card: '10',
      type: 'hearts',
      value: 10
    },
    {
      card: 'J',
      type: 'hearts',
      value: 11
    },
    {
      card: 'K',
      type: 'hearts',
      value: 11
    },
    {
      card: 'Q',
      type: 'hearts',
      value: 11
    },
    {
      card: 'A',
      type: 'hearts',
      value: 1
    },
    {
      card: '2',
      type: 'clubs',
      value: 2
    },
    {
      card: '3',
      type: 'clubs',
      value: 3
    },
    {
      card: '4',
      type: 'clubs',
      value: 4
    },
    {
      card: '5',
      type: 'clubs',
      value: 5
    },
    {
      card: '6',
      type: 'clubs',
      value: 6
    },
    {
      card: '7',
      type: 'clubs',
      value: 7
    },
    {
      card: '8',
      type: 'clubs',
      value: 8
    },
    {
      card: '9',
      type: 'clubs',
      value: 9
    },
    {
      card: '10',
      type: 'clubs',
      value: 10
    },
    {
      card: 'J',
      type: 'clubs',
      value: 11
    },
    {
      card: 'K',
      type: 'clubs',
      value: 11
    },
    {
      card: 'Q',
      type: 'clubs',
      value: 11
    },
    {
      card: 'A',
      type: 'clubs',
      value: 1
    },
    {
      card: '2',
      type: 'spades',
      value: 2
    },
    {
      card: '3',
      type: 'spades',
      value: 3
    },
    {
      card: '4',
      type: 'spades',
      value: 4
    },
    {
      card: '5',
      type: 'spades',
      value: 5
    },
    {
      card: '6',
      type: 'spades',
      value: 6
    },
    {
      card: '7',
      type: 'spades',
      value: 7
    },
    {
      card: '8',
      type: 'spades',
      value: 8
    },
    {
      card: '9',
      type: 'spades',
      value: 9
    },
    {
      card: '10',
      type: 'spades',
      value: 10
    },
    {
      card: 'J',
      type: 'spades',
      value: 11
    },
    {
      card: 'K',
      type: 'spades',
      value: 11
    },
    {
      card: 'Q',
      type: 'spades',
      value: 11
    },
    {
      card: 'A',
      type: 'spades',
      value: 1
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute, private service:AppService) {

  }

  ngOnInit() {
    this.creatingDec();
    this.shufflingDec();
    this.playerName = new FormGroup({
      Name: new FormControl(),
      BetAmount: new FormControl()
    });

  }

  selectingDecValue() {
    const randomElement = this.completeDec[Math.floor(Math.random() * this.completeDec.length)];
    return randomElement;
  }

  shufflingDec() {
    // random shuffling of array element
    this.completeDec = this.completeDec.sort(function(a, b) {return 0.5 - Math.random(); });
  }

  creatingDec() {
    // multiply dec in 3 times
    this.completeDec = this.dec1.concat(this.dec1).concat(this.dec1);
  }

  submit() {
    console.log(this.playerName.value.Name);
    this.displayPlayerName = this.playerName.value.Name;
    this.status = 'play';

    for ( let x = 0; x < 2; x++ ) {
      const selectValue = this.selectingDecValue();
      this.completeDec.pop(selectValue);
      this.playerDec.push(selectValue);
    }

    for ( let x = 0; x < 2; x++ ) {
      const selectValue = this.selectingDecValue();
      this.completeDec.pop(selectValue);
      this.distributerDec.push(selectValue);
    }

    for (let x of this.playerDec) {
      this.playerCardCount += (x.value);
    }

    for (let x of this.distributerDec) {
      this.distributerCardCount += (x.value);
    }

    const obj = {
      'noOfPlayers': 1,
      'moves': [
        {
          'players': [
            {
              'playerCards': this.playerDec,
              'playerName': this.displayPlayerName,
              'moveName': 'distributed',
              'sumOfCards': this.playerCardCount
            }
          ],
          'distributerCards': this.distributerDec,
          'movetype': 'started',
          'movePlayer': 'none'
        }
      ]
    };
    console.log(obj);
    this.service.gameStatrted(obj).subscribe(resData => {
      this.gameid = resData.data._id;
    });
  }

  doubleDown() {
    console.log('doubleDown');
    this.displayAll = true;

    const selectValue = this.selectingDecValue();
    this.completeDec.pop(selectValue);
    this.playerDec.push(selectValue);
    this.playerCardCount += selectValue.value;
    console.log(this.playerCardCount);

    if (this.playerCardCount > 21) {
      Swal('20$', 'Computer Win!', 'success');
      this.displayAll = false;
    }

    while (this.distributerCardCount < this.playerCardCount && this.playerCardCount <= 21) {
      const selectValue = this.selectingDecValue();
      this.completeDec.pop(selectValue);
      this.distributerDec.push(selectValue);
      this.distributerCardCount += selectValue.value;
    }

    if (this.distributerCardCount > 21) {
      Swal('20$', 'You Win!', 'success');
    } else if (this.distributerCardCount === this.playerCardCount) {
      Swal('10$', 'Draw!', 'success');
    } else if (this.distributerCardCount > this.playerCardCount) {
      Swal('20$', 'Computer Win!', 'success');
    }

    console.log(this.playerCardCount, this.distributerCardCount);
    const obj = {
      '_id':this.gameid,
      'moves': [
        {
          'players': [
            {
              'playerCards': this.playerDec,
              'playerName': this.displayPlayerName,
              'moveName': 'doubleDown',
              'sumOfCards': this.playerCardCount
            }
          ],
          'distributerCards': this.distributerDec,
          'movetype': 'playerMove',
          'movePlayer': this.displayPlayerName
        }
      ]
    };
    console.log(obj);
    this.service.pushmove(obj).subscribe(resData => {
      this.gameid = resData.data._id;
    });
  }

  Surrender() {
    this.displayAll = true;
    const obj = {
      '_id':this.gameid,
      'moves': [
        {
          'players': [
            {
              'playerCards': this.playerDec,
              'playerName': this.displayPlayerName,
              'moveName': 'Surrender',
              'sumOfCards': this.playerCardCount
            }
          ],
          'distributerCards': this.distributerDec,
          'movetype': 'playerMove',
          'movePlayer': this.displayPlayerName
        }
      ]
    };
    console.log(obj);
    this.service.pushmove(obj).subscribe(resData => {
      this.gameid = resData.data._id;
    });
    Swal('20$', 'Computer Win!', 'success');
  }

  Hit() {
    console.log('hit');
    // this.displayAll = true;

    const selectValue = this.selectingDecValue();
    this.completeDec.pop(selectValue);
    this.playerDec.push(selectValue);
    this.playerCardCount += selectValue.value;
    console.log(this.playerCardCount);
    const obj = {
      '_id':this.gameid,
      'moves': [
        {
          'players': [
            {
              'playerCards': this.playerDec,
              'playerName': this.displayPlayerName,
              'moveName': 'Hit',
              'sumOfCards': this.playerCardCount
            }
          ],
          'distributerCards': this.distributerDec,
          'movetype': 'playerMove',
          'movePlayer': this.displayPlayerName
        }
      ]
    };
    console.log(obj);
    this.service.pushmove(obj).subscribe(resData => {
      this.gameid = resData.data._id;
    });

    if (this.playerCardCount > 21) {
      this.displayAll = true;
      Swal('20$', 'Computer Win!', 'success');
    }
  }

  Stand() {
    console.log('Stand');
    this.displayAll = true;

    while (this.distributerCardCount < this.playerCardCount) {
      const selectValue = this.selectingDecValue();
      this.completeDec.pop(selectValue);
      this.distributerDec.push(selectValue);
      this.distributerCardCount += selectValue.value;
    }

    const obj = {
      '_id':this.gameid,
      'moves': [
        {
          'players': [
            {
              'playerCards': this.playerDec,
              'playerName': this.displayPlayerName,
              'moveName': 'Stand',
              'sumOfCards': this.playerCardCount
            }
          ],
          'distributerCards': this.distributerDec,
          'movetype': 'playerMove',
          'movePlayer': this.displayPlayerName
        }
      ]
    };
    console.log(obj);
    this.service.pushmove(obj).subscribe(resData => {
      this.gameid = resData.data._id;
    });

    if (this.distributerCardCount > 21) {
      Swal('20$', 'You Win!', 'success');
    } else if (this.distributerCardCount === this.playerCardCount) {
      Swal('10$', 'Draw!', 'success');
    } else if (this.distributerCardCount > this.playerCardCount) {
      Swal('20$', 'Computer Win!', 'success');
    }

  }

  pause() {
    console.log('pause');
    this.status = 'pause';
  }

  newCard() {
    if (this.playerDec.length >= 3) {
      return true;
    } else {
      return false;
    }

  }

  newCard1() {
    if (this.playerDec.length >= 4) {
      return true;
    } else {
      return false;
    }
  }

  newCard11() {
    if (this.playerDec.length === 5) {
      return true;
    } else {
      return false;
    }
  }

  newCard3() {
    debugger;
    if (this.distributerDec.length >= 3) {
      return true;
    } else {
      return false;
    }

  }

  newCard2() {
    if (this.distributerDec.length >= 4) {
      return true;
    } else {
      return false;
    }
  }

  newCard5() {
    if (this.distributerDec.length === 5) {
      return true;
    } else {
      return false;
    }
  }
}
