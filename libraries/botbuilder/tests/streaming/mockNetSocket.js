const { STATUS_CODES } = require('http');

class MockNetSocket {
    constructor(readable = true, writable = true) {
        this.readable = readable;
        this.writable = writable;
    }

    write(response) { }

    destroy(err) { }
}

MockNetSocket.createNonSuccessResponse = (code) => {
    return `HTTP/1.1 ${code} ${STATUS_CODES[code]}\r\nConnection: 'close'\r\n\r\n`;
};

module.exports.MockNetSocket = MockNetSocket;
