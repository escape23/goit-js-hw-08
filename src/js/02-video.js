import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const STORAGE_KEY = 'videoplayer - current - time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPayerTime, 1000));

function onPayerTime(currentTimeNow) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTimeNow.seconds));
}

const timeForPlay = Number(localStorage.getItem(STORAGE_KEY));

player
  .setCurrentTime(timeForPlay)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

// console.log(parseTimePlay.seconds);
