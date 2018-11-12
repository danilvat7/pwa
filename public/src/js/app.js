let deferredPrompt;
if(!window.Promise) {
    window.Promise = Promise;
}
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
            console.log('Service worker ready!');
        }).catch((err) => {
            console.log(err);
        });
}

window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
});

const promise = new Promise((resolve, reject) => {

});

fetch('https://httpbin.org/ip').then((response) => {
    return response.json()
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://httpbin.org/post');
xhr.responseType = 'json';
xhr.onload = () => {
    console.log(xhr.response);
}
xhr.onerror = () => {
    console.log('Error!');
}
xhr.send();

fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    mode: 'cors',
    body: 'some body'
}).then((response) => {
    return response.json()
}).then(data => {
    console.log('[POST] ', data);
}).catch(err => {
    console.log(err);
});