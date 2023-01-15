import Player from "@vimeo/player";
import localStorageAPI from "./localStorage";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeStopFromLocalStorage = localStorageAPI.load("videoplayer-current-time")

checkLocalStorage()

player.on('timeupdate', throttle((data) => {

        localStorageAPI.save("videoplayer-current-time", data)
 },1000));
    


function checkLocalStorage() {
    if (timeStopFromLocalStorage === undefined) {
        return
    }
    player.setCurrentTime(timeStopFromLocalStorage.seconds)

}






