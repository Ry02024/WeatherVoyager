// ここに上記のどちらかのJavaScriptコードを挿入
document.body.innerHTML += '<p>こんにちは、世界！</p>';
// または
var newElement = document.createElement('p');
newElement.textContent = 'こんにちは、世界！';
document.body.appendChild(newElement);
