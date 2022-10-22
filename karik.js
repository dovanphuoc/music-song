const listSongs = [
    {
        nameSong: 'Có Chơi Có Chịu',
        imagePath: './images/img15.webp',
        singer: 'Karik',
        icon: '<i class="activeIcon fa-regular fa-star icon-star icon-grey"></i>',
        iconMusic: '<i class="fa-solid fa-music icon-grey"></i>',
        iconPlay: '<i class="fa-solid fa-play icon-play"></i>',
        hidePlayIcon: '<i class="fa-solid fa-play icon-play hide"></i>',
        src: './audio/Co Choi Co Chiu - Karik, OnlyC - NhacHay360.mp3',
        text: 'Có Chơi Có Chịu (Single)',
        text1: 'Có Chơi Có Chịu (Single)',
        durationSong: '03:44'
    },
    {
        nameSong: 'Vì Mẹ Anh Bắt Chia Tay',
        imagePath: './images/img16.webp',
        singer: 'Karik',
        icon: '<i class="fa-regular fa-star icon-star icon-grey"></i>',
        iconMusic: '<i class="fa-solid fa-music icon-grey"></i>',
        iconPlay: '<i class="fa-solid fa-play icon-play"></i>',
        hidePlayIcon: '<i class="fa-solid fa-play icon-play hide"></i>',
        src: './audio/Vi Me Anh Bat Chia Tay - Miu Le_ Karik_.mp3',
        text: 'Vì Mẹ Anh Bắt Chia Tay (Single)',
        text1: 'Vì Mẹ Anh Bắt Chia Tay (Single)',
        durationSong: '04:22'
    },
    {
        nameSong: 'Người Lạ Ơi',
        imagePath: './images/img17.webp',
        singer: 'Karik',
        icon: '<i class="fa-regular fa-star icon-star icon-grey"></i>',
        iconMusic: '<i class="fa-solid fa-music icon-grey"></i>',
        iconPlay: '<i class="fa-solid fa-play icon-play"></i>',
        hidePlayIcon: '<i class="fa-solid fa-play icon-play hide"></i>',
        src: './audio/Nguoi La Oi - Superbrothers_ Karik_ Oran.mp3',
        text: 'Người Lạ Ơi (Single)',
        text1: 'Người Lạ Ơi (Single)',
        durationSong: '03:37'
    },
    {
        nameSong: 'Lần Cuối',
        imagePath: './images/img18.webp',
        singer: 'Karik',
        icon: '<i class="fa-regular fa-star icon-star icon-grey"></i>',
        iconMusic: '<i class="fa-solid fa-music icon-grey"></i>',
        iconPlay: '<i class="fa-solid fa-play icon-play"></i>',
        hidePlayIcon: '<i class="fa-solid fa-play icon-play hide"></i>',
        src: './audio/Lan Cuoi - Karik.mp3',
        text: 'Lần Cuối (Single)',
        text1: 'Lần Cuối (Single)',
        durationSong: '02:44'
    },
    {
        nameSong: 'Có Lẽ Anh Chưa Từng',
        imagePath: './images/img19.webp',
        singer: 'Karik',
        icon: '<i class="fa-regular fa-star icon-star icon-grey"></i>',
        iconMusic: '<i class="fa-solid fa-music icon-grey"></i>',
        iconPlay: '<i class="fa-solid fa-play icon-play"></i>',
        hidePlayIcon: '<i class="fa-solid fa-play icon-play hide"></i>',
        src: './audio/Co Le Anh Chua Tung - OnlyC_ Karik.mp3',
        text: 'Có Lẽ Anh Chưa Từng (Single)',
        text1: 'Có Lẽ Anh Chưa Từng (Single)',
        durationSong: '04:55'
    },
    {
        nameSong: 'Thương',
        imagePath: './images/img21.webp',
        singer: 'Karik',
        icon: '<i class="fa-regular fa-star icon-star icon-grey"></i>',
        iconMusic: '<i class="fa-solid fa-music icon-grey"></i>',
        iconPlay: '<i class="fa-solid fa-play icon-play"></i>',
        hidePlayIcon: '<i class="fa-solid fa-play icon-play hide"></i>',
        src: './audio/Thuong - Karik_ Uyen Pim.mp3',
        text: 'Thương (Single)',
        text1: 'Thương (Single)',
        durationSong: '02:56'
    },
    {
        nameSong: 'Anh Là Của Em',
        imagePath: './images/img22.webp',
        singer: 'Karik',
        icon: '<i class="fa-regular fa-star icon-star icon-grey"></i>',
        iconMusic: '<i class="fa-solid fa-music icon-grey"></i>',
        iconPlay: '<i class="fa-solid fa-play icon-play"></i>',
        hidePlayIcon: '<i class="fa-solid fa-play icon-play hide"></i>',
        src: './audio/Anh-La-Cua-Em-Karik.mp3',
        text: 'Anh Là Của Em (Single)',
        text1: 'Anh Là Của Em (Single)',
        durationSong: '03:36'
    },
    {
        nameSong: 'Yêu Đơn Phương',
        imagePath: './images/img23.webp',
        singer: 'Karik',
        icon: '<i class="fa-regular fa-star icon-star icon-grey"></i>',
        iconMusic: '<i class="fa-solid fa-music icon-grey"></i>',
        iconPlay: '<i class="fa-solid fa-play icon-play"></i>',
        hidePlayIcon: '<i class="fa-solid fa-play icon-play hide"></i>',
        src: './audio/Yeu Don Phuong - OnlyC_ Karik.mp3',
        text: 'Yêu Đơn Phương (Single)',
        text1: 'Yêu Đơn Phương (Single)',
        durationSong: '04:29'
    },
    {
        nameSong: 'Chưa Từng Vì Nhau',
        imagePath: './images/img24.webp',
        singer: 'Karik',
        icon: '<i class="fa-regular fa-star icon-star icon-grey"></i>',
        iconMusic: '<i class="fa-solid fa-music icon-grey"></i>',
        iconPlay: '<i class="fa-solid fa-play icon-play"></i>',
        hidePlayIcon: '<i class="fa-solid fa-play icon-play hide"></i>',
        src: './audio/Chua-Tung-Vi-Nhau-Karik-x-VP-Tien.mp3',
        text: 'Chưa Từng Vì Nhau (Single)',
        text1: 'Chưa Từng Vì Nhau (Single)',
        durationSong: '04:07'
    }
]

const listSingers = [
    {
        nameSinger: 'Hòa Minzy',
        subcribers: '241K quan tâm',
        thumb: './images/mixartist.jpg',
    },
    {
        nameSinger: 'Mr. Siro',
        subcribers: '792K quan tâm',
        thumb: './images/img3.webp',
    },
    {
        nameSinger: 'XHTĐRLX',
        subcribers: '28K quan tâm',
        thumb: './images/img2.webp',
    },
    {
        nameSinger: 'Forest Studio',
        subcribers: '333 quan tâm',
        thumb: './images/img1.webp',
    },
]

window.addEventListener('load', () => {
    iconSpinner.style.display = 'block'
    playIcon.style.display = 'none'
    setTimeout(() => {
        iconSpinner.style.display = 'none'
        playIcon.style.display = 'block'
    }, 1000);
    render()
    let htmlList = listSingers.map((item) => {
        return `
            <div class="carousel-item">
                <div class="thumbnail">
                    <div class="card-image">
                        <div class="thumb">
                            <figure class="image1">
                                <img height="220" src=${item.thumb} alt="anh ca si">
                                <div class="icon-position">
                                    <button class="btn btn-circle-lay">
                                        <i class="fa-solid fa-repeat icon-white"></i>
                                    </button>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <div class="artists">
                        <div class="name-singer">
                            <span>${item.nameSinger}</span>
                            <i class="fa-solid fa-star icon-star icon-grey"></i>
                        </div>
                        <span class="like">${item.subcribers}</span>
                        <button class="btn-play btn-share" onclick="handleShare(this)">
                            <i class="fa-solid fa-user-plus"></i>
                            <span>Quan tâm</span>
                        </button>
                    </div>
                </div>
            </div>
        `
    }).join('')
    carouselList.innerHTML = htmlList    
})

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
const iconRandom = btnRandom.querySelector('.btn-random .fa-shuffle')
const iconSpinner = $('#btn-play .icon-spinner')
const timeEnd = $('.time.right')
const btnPlaySong = $('#btn-play-song')
const inputRange = $('#input-range')
const timeStart = $('.time.left')
const inputRangeSong = $('.input-range-song')
const volumeUpIcon = $('.btn-volume .fa-volume-up')
const volumeMuteIcon = $('.btn-volume .fa-volume-mute')
const figureImage = $('.thumb>.image')
const iconPlaying = $('#icon-playing')
const songInfoWrap = $('.song-info-wrapper')
const carouselList = $('.carousel-list')
const btnHeart = $('.btn-heart')
const singerThumb = $('#singer-thumb')
const scrollBar = $('#scroll-bar')
const thumbVertical = $('#thumb-vertical')
const btnChangeThumb = $('#btnChangeThumb')
const modalOverlay = $('.modal-overlay')
const btnClose = $('.modal-content .btn-close')

let isClick = false
let saveIndex
let currentIndex = 0 
const audio = document.createElement('audio')
let isRandom = false
let isRepeat = false
let isPlaying = false

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
figureImage.addEventListener('click', handlePlaySong)
figureImage.addEventListener('mouseleave', handleLeaveSong)
figureImage.addEventListener('mouseover', handleMoveSong)
btnPlaySong.addEventListener('click', handleSong)
btnHeart.addEventListener('click', addColor)
btnChangeThumb.addEventListener('click', openModal)
btnClose.addEventListener('click', closeModal)

function closeModal() {
    modalOverlay.style.visibility = 'hidden'
}

function openModal() {
    modalOverlay.style.visibility = 'visible'
}

function handleClickImage(index, el) {
    isClick = true
    saveIndex = index
    loadCurrentSong(index)
    let menuNodeItem = el.parentElement.parentElement.parentElement.parentElement
    let menuNode = $('.active')
    if (menuNode !== null) {
        menuNode.classList.remove('active')
    }
    menuNodeItem.classList.add('active')
    audio.src = listSongs[index].src
    playSong()
}

function addColor() {
    btnHeart.querySelector('.fa-heart').classList.toggle('addColor')
}

function handleSong() {
    playSong()
}

function handlePlaySong() {
    playSong()
}

function handleLeaveSong() {
    if (!isPlaying) {
        $('.icon-position').style.opacity = '0'
    }
}

function handleMoveSong() {
    $('.icon-position').style.opacity = '1'
}

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
    timeStart.innerHTML = formatTime(audio.currentTime)
    if (inputRange.value !== 0) {
        inputRange.style.background = `linear-gradient(to right, #fff 0%, #fff ${seek}%, hsla(0,0%,100%,0.3) ${seek}%, hsla(0,0%,100%,0.3) 100%)`
    }
}

function changeProgressSong() {
    const seekTime = Math.floor(audio.duration / 100 * inputRange.value)
    audio.currentTime = seekTime
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

function handleSongWhenImagePlay() {
    audio.play()
    isPlaying = true
    pauseIcon.style.display = 'block'
    playIcon.style.display = 'none'
    iconPlaying.style.display = 'block'
    $('.btn-circle-play .fa-play').style.display = 'none'
    $('.icon-position').style.opacity = '1'
    singerThumb.style.animation = 'rotate 6s linear infinite'
    singerThumb.style.borderRadius = '50%'
    singerThumb.style.transition = 'border-radius .3s ease-out'
    displayTextWhenPlaySong()
}

function handleSongWhenImagePause() {
    audio.pause()
    isPlaying = false
    pauseIcon.style.display = 'none'
    playIcon.style.display = 'block'
    iconPlaying.style.display = 'none'
    $('.btn-circle-play .fa-play').style.display = 'block'
    singerThumb.style.animation = 'rotate1 .5s'
    setTimeout(() => {
        singerThumb.style.borderRadius = '5px'
        singerThumb.style.transition = 'border-radius .2s'
    },700)
    displayTextWhenPauseSong()
}

function playSong() {
    if (audio.paused) {
        handleSongWhenImagePlay()   
    }
    else {
        handleSongWhenImagePause()
    }
}

function prevSong() {
    if (isRandom) {
        playRandomSong()
        timeEnd.innerHTML = listSongs[currentIndex].durationSong
        iconPlaying.style.display = 'block'
        $('.btn-circle-play .fa-play').style.display = 'none'
        $('.icon-position').style.opacity = '1'
        playSong()
        setTimeout(() => {
            displayTextWhenPlaySong()
        }, 800)
        displayTextWhenPauseSong()
        showLoadingIcon()
        singerThumb.style.animation = 'rotate 4s linear infinite'
        singerThumb.style.borderRadius = '50%'
        singerThumb.style.transition = 'border-radius .3s ease-out'
    }
    else {
        if (currentIndex == 0) {
            currentIndex = listSongs.length - 1
            loadCurrentSong(currentIndex)
            render()
            iconPlaying.style.display = 'block'
            $('.btn-circle-play .fa-play').style.display = 'none'
            $('.icon-position').style.opacity = '1'
            timeEnd.innerHTML = listSongs[currentIndex].durationSong
            showLoadingIcon()
            singerThumb.style.animation = 'rotate 4s linear infinite'
            singerThumb.style.borderRadius = '50%'
            singerThumb.style.transition = 'border-radius .3s ease-out'
            setTimeout(() => {
                displayTextWhenPlaySong()
            }, 800)
            displayTextWhenPauseSong()
            audio.play()
        }
        else {
            if (isClick) {
                currentIndex = saveIndex
                if (currentIndex == 0) {
                    currentIndex = listSongs.length
                }
                isClick = false
            }
            currentIndex--
            render()
            iconPlaying.style.display = 'block'
            $('.btn-circle-play .fa-play').style.display = 'none'
            $('.icon-position').style.opacity = '1'
            pauseIcon.style.display = 'block'
            playIcon.style.display = 'none'
            audio.src = listSongs[currentIndex].src
            loadCurrentSong(currentIndex)
            timeEnd.innerHTML = listSongs[currentIndex].durationSong
            showLoadingIcon()
            singerThumb.style.animation = 'rotate 4s linear infinite'
            singerThumb.style.borderRadius = '50%'
            singerThumb.style.transition = 'border-radius .3s ease-out'
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

function handleShare(el) {
    el.classList.add('active')
    el.querySelector('i').setAttribute('class', 'fa-solid fa-shuffle')
    JSON.stringify(localStorage.setItem('saveText', 'Góc nhạc'))
    let getText = localStorage.getItem('saveText')
    el.querySelector('span').innerHTML = getText
}

function nextSong() {
    if (isRandom) {
        playRandomSong()
        timeEnd.innerHTML = listSongs[currentIndex].durationSong
        iconPlaying.style.display = 'block'
        $('.btn-circle-play .fa-play').style.display = 'none'
        $('.icon-position').style.opacity = '1'
        playSong()
        setTimeout(() => {
            displayTextWhenPauseSong()
        }, 800)
        displayTextWhenPlaySong()
        showLoadingIcon()
        singerThumb.style.animation = 'rotate 4s linear infinite'
        singerThumb.style.borderRadius = '50%'
        singerThumb.style.transition = 'border-radius .3s ease-out'
    }
    else {
        if (currentIndex == listSongs.length - 1) {
            currentIndex = 0
            render()
            loadCurrentSong(currentIndex)
            iconPlaying.style.display = 'block'
            $('.btn-circle-play .fa-play').style.display = 'none'
            $('.icon-position').style.opacity = '1'
            timeEnd.innerHTML = listSongs[currentIndex].durationSong
            showLoadingIcon()
            singerThumb.style.animation = 'rotate 4s linear infinite'
            singerThumb.style.borderRadius = '50%'
            singerThumb.style.transition = 'border-radius .3s ease-out'
            setTimeout(() => {
                displayTextWhenPlaySong()
            }, 800)
            displayTextWhenPauseSong()
            audio.play()
        }
        else {
            if (isClick) {
                currentIndex = saveIndex
                if (currentIndex == listSongs.length - 1) {
                    currentIndex = -1
                }
                isClick = false
            }
            currentIndex++
            render()
            iconPlaying.style.display = 'block'
            $('.btn-circle-play .fa-play').style.display = 'none'
            $('.icon-position').style.opacity = '1'
            audio.src = listSongs[currentIndex].src
            loadCurrentSong(currentIndex)
            timeEnd.innerHTML = listSongs[currentIndex].durationSong
            showLoadingIcon()
            singerThumb.style.animation = 'rotate 4s linear infinite'
            singerThumb.style.borderRadius = '50%'
            singerThumb.style.transition = 'border-radius .3s ease-out'
            setTimeout(() => {
                displayTextWhenPlaySong()
            }, 800)
            displayTextWhenPauseSong()
            audio.play()
        }
    } 
}

function handleClickActiveSong(index, el) {
    isClick = true
    saveIndex = index
    loadCurrentSong(index)
    let menuNode = $('.active')
    if (menuNode !== null) {
        menuNode.classList.remove('active')
    }
    el.classList.add('active')
    audio.src = listSongs[index].src
    playSong()
}

function render() {
    const htmls = listSongs.map((songItem, index) => {
        return `
            <div ondblclick="handleClickActiveSong(${index}, this)" class="song-item ${currentIndex === index ? 'active' : ''}">
                <div class="checkbox-wrap"></div>
                <div class="media hide-right media-item">
                    <div class="mdi-left mdi-wrap">
                        <div class="song-pref">
                            ${songItem.iconMusic}
                        </div>
                        <div class="song-thumb">
                            <div onclick="handleClickImage(${index}, this)" class="activeSong ${currentIndex === index ? 'overlay-bg' : ''}"></div>
                            <figure>
                                <img class="singer-img" src=${songItem.imagePath} alt="singer">
                            </figure>
                            <div class="action-container">
                                <div class="zm-action">
                                    <button>
                                        ${songItem.hidePlayIcon}
                                        <div></div>
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
    songWrap.innerHTML = htmls;
}