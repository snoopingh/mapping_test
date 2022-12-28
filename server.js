const http = require('http');

const server = http.createServer((request, response) => {
    let data;

    if (request.url === '/test1' && request.method === 'GET') {
        data = {
            commData1: '일반데이터 1',
            commData2: '일반데이터 2'
        };
    } else {
        data = {
            militaryData1: '육군데이터 1',
            militaryData2: '육군데이터 2'
        };
    }
    
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(data));
});

server.listen(8080, function() {
    console.log('Server is running...');
});