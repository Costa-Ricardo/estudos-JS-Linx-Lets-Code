const crypto = require('crypto');

class MyCrypto{
    constructor(password){
        this._key = crypto.createHash('sha256').update(password).digest();
    }
    _createCipher(key){
        const initilizationVector = Buffer.allocUnsafe(16);
        return crypto.createCipheriv('aes256', key, initilizationVector);
    }
    encrypt(msg){
        const cipher = this._createCipher(this._key);
        let encrypted = '';
        encrypted += cipher.update(msg, 'binary', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }
    _createDecipher(key){
        const decipher
    }
}