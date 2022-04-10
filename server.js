const http = require('http');
const fs = require("fs")
const hostname = 'localhost';
const PORT = 4000;

const server = http.createServer((req, res)=> {
    console.log(`${req.method} request for ${req.url}`);
    if (req.url === "/") {
        fs.readFile("public/index.html", "UTF-8", function (err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        })
    } else if (req.url === "/contact") {
        fs.readFile("pages/contact.html", "UTF-8", function (err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        })
    } else if (req.url === "/home") {
        res.writeHead(302, {
            location: "/",
        });
        res.end();
    } else if (req.url === "/about") {
        fs.readFile("pages/about.html", "UTF-8", function (err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        })
    }
})
server.listen(PORT, hostname, () => {
    console.log(`Server running at ${hostname}:${PORT}`)
});