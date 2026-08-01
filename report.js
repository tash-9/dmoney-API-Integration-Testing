const newman = require('newman');
//require('dotenv').config();
 
newman.run({
   
    collection:require('./dMoney_API_Integration_Testing.postman_collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
     delayRequest: 5000,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
    }, function (err) {
        if (err) { throw err; }
        console.log('collection run complete!');
    });
