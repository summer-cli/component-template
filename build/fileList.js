const fs = require('fs');
const path = require('path');
let fileList = fs.readdirSync(path.resolve(__dirname, '../src/components'));
    
module.exports = fileList;