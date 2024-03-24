// Leafletで地図を初期化
var map = L.map('map').setView([35.681236, 139.767125], 10); // 例として、東京駅周辺を中心に設定

// OpenStreetMapのタイルを地図にセット
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// OpenWeatherMap APIから天気情報を取得
const apiKey = '48f05f04634956cfec6452002c38094b'; // ここにOpenWeatherMapのAPIキーを設定
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data); // コンソールに天気情報を表示
        // ここで天気情報に基づいて、地図上に風や雲の動きを示すマーカーやアニメーションを追加できます
    })
    .catch(error => console.error('Error:', error));
