import { Component, VERSION } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = ',This is audio test';
  sound: any = new Howl({
    src: ['../assets/krishna-flute.mp3'],
    // src: ['../assets/sound.mp3'],
    loop: true
  });

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
