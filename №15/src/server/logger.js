const moment = require('moment');
const fs = require('fs');

const logger = (name, action) => {
    fs.readFile('dist/server/db/stats.json', 'utf-8', (err, data) => {
        if(err){
            console.log('Can`t read file')
        } else {
            const stat = JSON.parse(data);
            stat.push({
                time: moment().format('DD MMM YYYY, h:mm:ss a'),
                prod_name: name,
                action: action,
            });
            fs.writeFile('dist/server/db/stats.json', JSON.stringify(stat), (err) => {
                if(err){
                    console.log('Can`t write file')
                }
            })
        }
    })
};

module.exports = logger;