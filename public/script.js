// Wake Button
let wakeButton = document.getElementById('wakeButton');
let wakeLock = null;
const lock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    wakeButton.innerText = "UNLOCK"
    wakeButton.onclick = unlock;
  } catch (err) {
    console.log(err);
  }

}

const unlock = async () => {
  try {
    await wakeLock.release();
    wakeLock = null;
    wakeButton.innerText = "LOCK"
    wakeButton.onclick = lock;
  } catch (err) {
    console.log(err);
  }
}

// Date and Time
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
setInterval(() => {
  let time = new Date();
  hours.innerText = `${time.getHours()}`;
  minutes.innerText = `${time.getMinutes()}`.padStart(2, '0');
}, 1000)