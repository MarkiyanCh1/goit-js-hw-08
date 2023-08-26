import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const playerTimeStamp = data => {
  let seconds = data.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
};

player.on('timeupdate', throttle(playerTimeStamp, 1000));

try {
  const TimeStamp = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );
  player.setCurrentTime(TimeStamp);
} catch (error) {
  console.error('Get state error: ', error.message);
}
