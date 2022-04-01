console.log("hello Akash }")

function text(url) {
    return fetch(url).then(res => res.text());
}
text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
    let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
    let ip = data.match(ipRegex)[0];
    console.log("ip",ip)
    // fetch('http://localhost:8000/receiveclietdata/',
    //     {
    //         method: 'POST',
    //         body: JSON.stringify({ip})
    //     })
    //     .then(function (res) { console.log(res) })
    //     .catch(function (res) { console.log(res) })
});