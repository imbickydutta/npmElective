var QRCode = require('qrcode')

const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');

program
    .command('output <text>')
    .action((text) => {
        QRCode.toString(text, { type: 'terminal' }, function (err, url) {
            console.log(url)
        })
    })

program.parse(process.argv)