const code = "123";

const codesender = http.createServer((req, res) => {
    if (req.method == "GET")
    {
        res.write(code);
        res.end();
    }
    else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(3000, () => {
    console.log("listening");
});