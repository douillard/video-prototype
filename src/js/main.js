var draggable = document.getElementById('draggable');
var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');

// keep the videos synchronized
video2.currentTime = video1.currentTime;

draggable.addEventListener('touchmove', function(event) {

    var touch = event.targetTouches[0];

    // Place element where the finger is
    var touchPoint = touch.pageX-25 

    // Drag the container to the touchPoint
    draggable.style.left = touchPoint + 'px';

    // Remove the initialized -50% margins
    draggable.style.marginLeft = '0';
    video2.style.marginLeft = '0';

    // Adjust the touchpoint 5px
    var touchNumberOffset = touchPoint - 5;

    // Move the video left 1px for every px the container moves right
    video2.style.left = -touchNumberOffset + 'px';

    // continue to keep the videos synchronized
    //video2.timeupdate = video1.currentTime;
    video2.currentTime = video1.currentTime;

    event.preventDefault();

}, false);
