const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8',
    })

    if (req.url === '/') {
        const parsedData = fs.readFileSync('./JSON-and-sticks/index.json', { encoding: "utf8" });
        let dataObj = JSON.parse(parsedData);

        res.write(`<h1>${dataObj.title}</h1><p>${dataObj.content}</p>`);
        res.end();
        return;
    }

    if (req.url === '/contacts') {
        const parsedData = fs.readFileSync('./JSON-and-sticks/contacts.json', { encoding: "utf8" });
        let dataObj = JSON.parse(parsedData);

        res.write(`<h1>${dataObj.title}</h1><p>${dataObj.content}</p>`);
        res.end();
        return;
    }

    res.writeHead(404, {
        'Content-type': 'text/html; charset=utf-8',
    });
    res.write(`<h1>Страница не найдена</h1>`);
    res.end();

})

server.listen(3000, () => {
    console.log('Сервер запущен!');
})