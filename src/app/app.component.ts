import { Component, OnInit, VERSION } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = ',This is audio test';
  sound: any = new Howl({
    src: [
      'https://cdn.jsdelivr.net/gh/parthsapra/audio-test@master/src/Krrish-Flute-Ringtone.mp3'
    ],
    loop: true
  });
  durationOfSOund: any;
  ngOnInit() {
    this.durationOfSOund = this.sound.duration();
  }
  playSound() {
    this.sound.play();
  }

  pauseSound() {
    this.sound.pause();
  }

  stopSound() {
    this.sound.stop();
  }
}
