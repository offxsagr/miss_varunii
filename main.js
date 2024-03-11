function toggleAudio(videoId, audioIconId) {
    var video = document.getElementById(videoId);
    var audioIcon = document.getElementById(audioIconId);
    
    if (video.muted) {
        video.muted = false;
        audioIcon.classList.remove("uil-volume-mute");
        audioIcon.classList.add("uil-volume-up");
    } else {
        video.muted = true;
        audioIcon.classList.remove("uil-volume-up");
        audioIcon.classList.add("uil-volume-mute");
    }
}
