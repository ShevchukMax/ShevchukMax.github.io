'use strict'

function round(val) {return Math.floor(val / 10) * 10;}

let weather = {
    'apiKey': '28978eb0027481e969c32dc1aa0fc432',
    fetchWeather: function(city) {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const {name} = data
        const {description} = data.weather[0]
        const {temp, humidity} = data.main
        const {speed} = data.wind
        const {feels_like} = data.main
        document.querySelector('.weather').classList.remove('hidden')
        document.querySelector('.rain').src= `video/${description}.mp4`
        document.querySelector('.bart').src= `/wear/${round(temp)}.png`
        document.querySelector('.city').innerText = `Weather in ${name}`
        document.querySelector('.description').innerText = description
        document.querySelector('.temp').innerText = `${Math.trunc(temp)}℃`
        document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`
        document.querySelector('.wind').innerText = `Wind speed: ${speed} km/h`
        document.querySelector('.feels').innerText = `Feels like: ${Math.trunc(feels_like)}℃`
        asd3()
        setTimeout(asd1,301)
    },
    search: function() {
        this.fetchWeather(spell(document.querySelector('.search').value))
        document.querySelector('.search').value = ''
    },
}

document.querySelector('.button').addEventListener('click', function() {
    weather.search()
    setTimeout(asd, 301)
    asd2()
})

document.querySelector('.search').addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        weather.search()
        setTimeout(asd, 301)
        asd2()
    }
})

document.querySelector('.dress').addEventListener('click', function() {
    if(!document.querySelector('.weather').classList.contains('hidden')) {
        document.querySelector('.bart').classList.toggle('hidden')
    }
})

function spell(qwe) {
    let arr = qwe.split('')
    for(let i = 0; i < arr.length;i++) {
        if(arr[arr.length - 1] === ' ') {
            arr.pop()
        }
    }
    return arr.join('').replace(' ', '-')
}

function asd () {
    document.querySelector('.invalid').classList.remove('hidden')
}

function asd1 () {
    document.querySelector('.invalid').classList.add('hidden')
}

function asd2 () {
    document.querySelector('.invalid').classList.remove('visibility')
}

function asd3 () {
    document.querySelector('.invalid').classList.add('visibility')
}
