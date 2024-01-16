const code = "123";

const url = "https://justarandomaccountt.github.io/";

const xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300)
    {
        const jres = JSON.parse(xhr.responseText);
        jres.code = code;
        console.log(code);
    }
    else {
        console.error(xhr.statusText);
    }
};

xhr.onerror = function () {
    console.error("Request failure");
}

xhr.send();