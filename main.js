document.addEventListener('DOMContentLoaded', function() {
    const scene = document.querySelector('a-scene');
    const startButton = document.querySelector('#splash .start-button');

    const emitEvent = (eventName, listeners) => {
        listeners.forEach((listener) => {
            const el = document.querySelector(listener);
            el.emit(eventName);
        })
    };

    const emitMediaEvent = (eventType, listeners) => {
        listeners.forEach((listener) => {
            const el = document.querySelector(listener);
            el.components.sound[eventType]();
        })
    };

    const activateSoundsForTouch = () => {
    	const sounds = document.querySelectorAll('a-sound')
        sounds.forEach((soundEl) => {
            soundEl.components.sound.playSound();
            soundEl.components.sound.stopSound();
        })
    };

    var fuse = document.querySelector('#fuse-cursor');
    var fuseProgress = document.querySelector('#fuse-progress');

    scene.addEventListener('loaded', function (e) {
        setTimeout(() => {
            startButton.style.opacity = 1;
        }, 50);
    });

    fuse.addEventListener('fusing', function (e) {
        fuseProgress.emit('fusing');
    });

    startButton.addEventListener('click', function (e) {
        activateSoundsForTouch();
        emitEvent('scene-started', ['#dodge', '#dodge', '#dodge-1', '#dodge-1', '#dodge-2', '#dodge-2', '#timer']);
    });

    document.querySelector('#start-button').addEventListener('click', function (e) {
        emitEvent('start-button-clicked', ['#target-group', '#text-end', '#text-time', '#text-instux']);
    });
});