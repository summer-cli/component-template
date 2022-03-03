const glob = require('glob');
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');

function resolveCss() {
        return new Promise((resolve, reject) => {
            glob('**/*.css', {
                cwd: path.resolve(process.cwd(), './lib/css'),
                ignore: 'node_modules',
            }, (err, files) => {
                if (err) {
                    reject(err);
                }
                
                let outputPath = path.join(process.cwd(), 'lib/css/index.css')
                fse.ensureFileSync(outputPath);
                let ws = fs.createWriteStream(outputPath);
                
                Promise.all(files.map(file => {
                    const filePath = path.join(process.cwd(), 'lib', file);
                    return new Promise((resolve1, reject1) => {
                        let rs = fs.createReadStream(filePath);                        
                        rs.pipe(ws);
                        resolve1()
                    })
                })).then(() => {
                    resolve();
                }).catch(e => {
                    reject(e)
                })
            })
        }) 
    
}

module.exports = resolveCss;
