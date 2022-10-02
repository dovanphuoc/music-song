const listSongs = [
    {
        nameSong: 'Rời bỏ',
        imagePath: './images/singer.webp',
        singer: 'Hòa Minzy',
        icon: '<i class="fa-regular fa-star icon-star icon-grey"></i>',
        iconMusic: '<i class="fa-solid fa-music icon-grey"></i>',
        src: './audio/Roi Bo - Hoa Minzy.mp3',
        text: 'Rời Bỏ (Single)',
        text1: 'Rời Bỏ (Single)',
        durationSong: '04:37'
    },
    {
        nameSong: 'Không Thể Cùng Nhau Suốt Kiếp',
        imagePath: './images/singer1.webp',
        singer: 'Mr.Siro',
        icon: '<i class="fa-regular fa-star icon-star icon-grey"></i>',
        iconMusic: '<i class="fa-solid fa-music icon-grey"></i>',
        src: './audio/Khong The Cung Nhau Suot Kiep - Hoa Minz.mp3',
        text: 'Không Thể Cùng Nhau Suốt Kiếp (Single)',
        text1: 'Không Thể Cùng Nhau Suốt Kiếp (Single)',
        durationSong: '05:01'
    },
    {
        nameSong: 'Đêm Lao Xao',
        imagePath: './images/singer2.webp',
        singer: 'Đức Phúc',
        icon: '<i class="fa-regular fa-star icon-star icon-grey"></i>',
        iconMusic: '<i class="fa-solid fa-music icon-grey"></i>',
        src: './audio/Dem Lao Xao - Hoa Minzy_ XHTDRLX.mp3',
        text: 'Xuân Hạ Thu Đông, rồi lại Xuân - Tập 3+4',
        text1: 'Xuân Hạ Thu Đông, rồi lại Xuân - Tập 3+4',
        durationSong: '03:59'
    },
    {
        nameSong: 'Cứ Yêu Đi (100 Ngày Bên Em OST)',
        imagePath: './images/singer3.webp',
        singer: 'Trịnh Thăng Bình',
        icon: '<i class="fa-regular fa-star icon-star icon-grey"></i>',
        iconMusic: '<i class="fa-solid fa-music icon-grey"></i>',
        src: './audio/Cu Yeu Di - Duc Phuc_ Hoa Minzy.mp3',
        text: 'Cứ Yêu Đi (100 Ngày Bên Em OST) (Single)',
        text1: 'Cứ Yêu Đi (100 Ngày Bên Em OST) (Single)',
        durationSong: '04:45'
    },
    {
        nameSong: 'Khác Biệt To Lớn (Talkshow Chuyện Chúng Ta',
        imagePath: './images/singer4.webp',
        singer: 'Hòa Minzy',
        icon: '<i class="fa-regular fa-star icon-star icon-grey"></i>',
        iconMusic: '<i class="fa-solid fa-music icon-grey"></i>',
        src: './audio/Khac Biet To Lon Remix_ - Trinh Thang Bi.m4a',
        text: 'Talkshow Chuyện Chúng Ta',
        text1: 'Talkshow Chuyện Chúng Ta',
        durationSong: '03:52'
    },
]

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const songWrap = $('.song-wrap')
const thumb = $('#current-image')
const textSong = $('#name-song')
const textSong1 = $('#name-song1')
const nameSinger = $('#text-singer')
const icon = $('#icon-color-white')
const btnRandom = $('.btn.btn-random')
const btnPrev = $('.btn.btn-prev')
const btnCirclePlay = $('#btn-play')
const btnNext = $('.btn.btn-next')
const btnRepeat = $('.btn.btn-repeat')
const playIcon = btnCirclePlay.querySelector('.icon-play')
const pauseIcon = btnCirclePlay.querySelector('.icon-pause')
const iconRandom = btnRandom.querySelector('.addColor')
const iconSpinner = $('#btn-play .icon-spinner')
const timeEnd = $('.time.right')
const btnPlaySong = $('#btn-play-song')
const inputRange = $('#input-range')
const timeStart = $('.time.left')
const inputRangeSong = $('.input-range-song')
const volumeUpIcon = $('.btn-volume .fa-volume-up')
const volumeMuteIcon = $('.btn-volume .fa-volume-mute')
let currentIndex = 0
const audio = document.createElement('audio')
let isRandom = false
let isRepeat = false

function loadCurrentSong(currentIndex) {
    thumb.src = listSongs[currentIndex].imagePath
    textSong.innerHTML = listSongs[currentIndex].text
    textSong1.innerHTML = listSongs[currentIndex].text1
    nameSinger.innerHTML = listSongs[currentIndex].singer
    icon.innerHTML = listSongs[currentIndex].icon
    audio.src = listSongs[currentIndex].src
}
loadCurrentSong(currentIndex)
btnCirclePlay.addEventListener('click', playSong)
btnNext.addEventListener('click', nextSong)
btnPrev.addEventListener('click', prevSong)
btnRandom.addEventListener('click', randomSong)
audio.addEventListener('timeupdate', updateProgressSong)
inputRange.addEventListener('input', changeProgressSong)
audio.addEventListener('ended', handleEndSong)
audio.preload = "metadata"
audio.addEventListener('loadedmetadata', loadedData)
btnRepeat.addEventListener('click', repeatSong)
inputRangeSong.addEventListener('input', changeVolumeSong)
volumeUpIcon.addEventListener('click', toggleIcon)
volumeMuteIcon.addEventListener('click', toggle)

function toggleIcon() {
    volumeMuteIcon.style.display = 'block'
    volumeUpIcon.style.display = 'none'
    inputRangeSong.value = '0'
    audio.volume = 0
    inputRangeSong.style.background = 'linear-gradient(to right, #fff 0%, #fff 0%, hsla(0,0%,100%,0.3) 0%, hsla(0,0%,100%,0.3) 100%)'
}

function toggle() {
    volumeMuteIcon.style.display = 'none'
    volumeUpIcon.style.display = 'block'
    inputRangeSong.value = '100'
    audio.volume = 1
    inputRangeSong.style.background = 'linear-gradient(to right, #fff 0%, #fff 100%, hsla(0,0%,100%,0.3) 100%, hsla(0,0%,100%,0.3) 100%)'
}

function changeVolumeSong() {
    audio.volume = inputRangeSong.value / 100
    inputRangeSong.style.background = `linear-gradient(to right, #fff 0%, #fff ${inputRangeSong.value}%, hsla(0,0%,100%,0.3) ${inputRangeSong.value}%, hsla(0,0%,100%,0.3) 100%)`
    if (inputRangeSong.value == 0) {
        volumeMuteIcon.style.display = 'block'
        volumeUpIcon.style.display = 'none'
    }
    else {
        volumeMuteIcon.style.display = 'none'
        volumeUpIcon.style.display = 'block'
    }
}

function repeatSong() {
    isRepeat = !isRepeat
    btnRepeat.querySelector('.fa-repeat').classList.toggle('addColorBtnRandom')
}

function loadedData() {
    timeStart.innerHTML = formatTime(audio.currentTime)
}

function formatTime(currentTime) {
    let seconds = Math.floor(currentTime)
    let minutes = Math.floor(seconds / 60)
    seconds -= minutes * 60
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes + ':' + seconds;
}

function handleEndSong() {
    if (isRepeat) {
        audio.play()
    }
    else {
        nextSong()
    }
}

function updateProgressSong() {
    const seek = Math.floor(audio.currentTime / audio.duration * 100)
    inputRange.value = seek 
    timeStart.innerHTML = formatTime(seek)
    if (inputRange.value !== 0) {
        inputRange.style.background = `linear-gradient(to right, #fff 0%, #fff ${seek}%, hsla(0,0%,100%,0.3) ${seek}%, hsla(0,0%,100%,0.3) 100%)`
    }
}

function changeProgressSong(e) {
    const seekTime = Math.floor(audio.duration / 100 * e.target.value)
    audio.currentTime = seekTime
    const format = formatTime(seekTime)
    timeStart.innerHTML = format
    inputRange.style.background = `linear-gradient(to right, #fff 0%, #fff ${seekTime}%, hsla(0,0%,100%,0.3) ${seekTime}%, hsla(0,0%,100%,0.3) 100%)`
}

function showLoadingIcon() {
    iconSpinner.style.display = 'block'
    playIcon.style.display = 'none'
    pauseIcon.style.display = 'none'
    setTimeout(() => {
        iconSpinner.style.display = 'none'
        pauseIcon.style.display = 'block'
    }, 1000)
}

function displayTextWhenPauseSong() {
    btnPlaySong.querySelector('span').innerHTML = 'Tiếp tục phát'
    btnPlaySong.querySelector('.fa-play').style.display = 'block'
    btnPlaySong.querySelector('.fa-pause').style.display = 'none'
}

function displayTextWhenPlaySong() {
    btnPlaySong.querySelector('span').innerHTML = 'Tạm dừng'
    btnPlaySong.querySelector('.fa-play').style.display = 'none'
    btnPlaySong.querySelector('.fa-pause').style.display = 'block'
}

function playSong() {
    if (audio.paused) {
        audio.play()
        pauseIcon.style.display = 'block'
        playIcon.style.display = 'none'
        displayTextWhenPlaySong()
    }
    else {
        audio.pause()
        pauseIcon.style.display = 'none'
        playIcon.style.display = 'block'
        displayTextWhenPauseSong()
    }
}

function nextSong() {
    if (isRandom) {
        playRandomSong()
        timeEnd.innerHTML = listSongs[currentIndex].durationSong
        playSong()
        setTimeout(() => {
            displayTextWhenPauseSong()
        }, 800)
        displayTextWhenPlaySong()
        showLoadingIcon()
    }
    else {
        if (currentIndex == listSongs.length - 1) {
            currentIndex = 0
            loadCurrentSong(currentIndex)
            timeEnd.innerHTML = listSongs[currentIndex].durationSong
            showLoadingIcon()
            setTimeout(() => {
                displayTextWhenPlaySong()
            }, 800)
            displayTextWhenPauseSong()
            audio.play()
        }
        else {
            currentIndex++
            audio.src = listSongs[currentIndex].src
            loadCurrentSong(currentIndex)
            timeEnd.innerHTML = listSongs[currentIndex].durationSong
            showLoadingIcon()
            setTimeout(() => {
                displayTextWhenPlaySong()
            }, 800)
            displayTextWhenPauseSong()
            audio.play()
        }
    } 
}

function prevSong() {
    if (isRandom) {
        playRandomSong()
        timeEnd.innerHTML = listSongs[currentIndex].durationSong
        playSong()
        setTimeout(() => {
            displayTextWhenPlaySong()
        }, 800)
        displayTextWhenPauseSong()
        showLoadingIcon()
    }
    else {
        if (currentIndex == 0) {
            currentIndex = listSongs.length - 1
            loadCurrentSong(currentIndex)
            timeEnd.innerHTML = listSongs[currentIndex].durationSong
            showLoadingIcon()
            setTimeout(() => {
                displayTextWhenPlaySong()
            }, 800)
            displayTextWhenPauseSong()
            audio.play()
        }
        else {
            currentIndex--
            pauseIcon.style.display = 'block'
            playIcon.style.display = 'none'
            audio.src = listSongs[currentIndex].src
            loadCurrentSong(currentIndex)
            timeEnd.innerHTML = listSongs[currentIndex].durationSong
            showLoadingIcon()
            setTimeout(() => {
                displayTextWhenPlaySong()
            }, 800)
            displayTextWhenPauseSong()
            audio.play()
        }
    }
}

function randomSong() {
    isRandom = !isRandom
    iconRandom.classList.toggle('addColorBtnRandom')
}

function playRandomSong() {
    let newIndex
    do {
        newIndex = Math.floor(Math.random() * listSongs.length)
    } while(newIndex === currentIndex)
    currentIndex = newIndex
    loadCurrentSong(currentIndex)
}

window.addEventListener('load', () => {
    iconSpinner.style.display = 'block'
    playIcon.style.display = 'none'
    setTimeout(() => {
        iconSpinner.style.display = 'none'
        playIcon.style.display = 'block'
    }, 1000)
    const htmls = listSongs.map(songItem => {
        return `
            <div class="song-item">
                <div class="checkbox-wrap"></div>
                <div class="media hide-right media-item">
                    <div class="mdi-left mdi-wrap">
                        <div class="song-pref">
                            ${songItem.iconMusic}
                        </div>
                        <div class="song-thumb">
                            <div class="overlay"></div>
                            <img class="singer-img" src=${songItem.imagePath} alt="singer">
                            <div class="action-container">
                                <div class="zm-action">
                                    <button>
                                        <i class="fa-solid fa-play icon-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-info">
                            <div class="name-song">${songItem.nameSong}</div>
                            <div class="name-singer">
                                <span>${songItem.singer}</span>
                                <i class="fa-regular fa-star icon-star icon-grey"></i>
                            </div>
                        </div>
                    </div>
                    <div class="mdi-content">
                        <p class="text-grey">${songItem.text}</p>
                    </div>
                    <div class="mdi-right">
                        <span class="text-grey">${songItem.durationSong}</span>
                    </div>
                </div>
            </div>
        `
    }).join('')
    songWrap.innerHTML = htmls
})