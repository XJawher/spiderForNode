// const processArgs = process.argv;

// let serverPath;
let [, , serverPath] = process.argv;

// let serverPathArgIndex = processArgs.findIndex(arg => arg === '--fp');
// if (serverPathArgIndex !== -1){
//     let serverPathArgValue = processArgs[serverPathArgIndex + 1];
//     if (serverPathArgValue !== undefined && !serverPathArgValue.startsWith('--')){
//         serverPath = serverPathArgValue;
//     }
// }

module.exports = function (proxy) {
    const chalk = require('chalk');

    // if (serverPathArgIndex !== -1 && !serverPath){
    //     console.error(chalk.red(`The value of parameter "--fp" must be specified.\n`));
    //     process.exit(1);
    // }

    if (serverPath) {
        const PROTOCOL_VALIDATE_REG = /http:|https:|ws:/;
        const IPV4_EXTRACT_REG = /(\d+\.\d+\.\d+\.\d+)/;
        const IPV4_VALIDATE_REG = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

        console.log(chalk.cyan('Validate server path ... \n'));
        if (!PROTOCOL_VALIDATE_REG.test(serverPath)) {
            console.error(chalk.red(`Validate server path failed: server path "${serverPath}" provided in "npm start" command needs a valid protocol, like "http", "https" or "ws". \n`));
            process.exit(1);
        } else {
            let extractResult = serverPath.match(IPV4_EXTRACT_REG);
            if (!extractResult || !IPV4_VALIDATE_REG.test(extractResult[0])) {
                console.error(chalk.red(`Validate server path failed: server path "${serverPath}" provided in "npm start" command does not have a valid IP with IPv4 pattern. \n`));
                process.exit(1);
            }
            proxy = serverPath;
            console.log(chalk.cyan('Server path validation passes. \n'));
        }
    }
    return proxy;
};

// This is a forward proxy which provides a development environment functionality enhancement,
// an usage example: $ npm (run) start -- --fp http://192.168.100.101:3579
// If your http server and webSocket server are running on the same port, only need to enter a 'http://' protocol for a short,
// and the proxy config will change the protocol to 'ws://' to fit the webSocket server automatically.