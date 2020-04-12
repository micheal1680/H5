
function sendGet(url, callback) {
    let xmr = new XMLHttpRequest();
    xmr.open("get", url);
    xmr.send();

    xmr.onreadystatechange = function () {
        console.log(xmr.responseText);
        if (xmr.status == 200 && xmr.readyState == 4) {
            let result = JSON.parse(xmr.responseText);
            callback(result)
        }
    }
}

