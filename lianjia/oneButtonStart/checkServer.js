let exec = require('child_process').exec;

/**
 * 获取输入的进程的所有的详细信息
 * 如果输入的进程是 空的话就获取默认的进程信息 也就是 ./mongod
 * @class checkServer
 */
class CheckServer {
    cosntructor (name) {
        this.name = name || './mongod';
    }

    async getServerInfo (cmd, name) {
        return new Promise((resolve, reject) => {
            exec(cmd, (err, stdout, stderr) => {
                if (err) {reject({code: 1, msg: `cmd: ${cmd}, execution fali`, err});}
                console.log(stdout.split('\n'));
                // 这里需要做个判断，既要有 name 的信息，又不能有 grep 的字段
                let data = false;
                for (let index = 0; index < stdout.split('\n').length; index++) {
                    const element = stdout.split('\n')[index];
                    if (element.includes(name) && !element.includes('grep')) {
                        // 发现有正在跑的进程，开始返回进程数据
                        data = element.trim().split(/\s+/);
                    }
                }
                resolve(data);
            });
        });
    }

    async getData (name) {
        this.name = name || './mongod';
        let cmd = `ps aux | grep ${this.name}`;
        let data = await this.getServerInfo(cmd, this.name);
        let res = {};
        if (data) {
            res = {code: 0, data: data, msg: `cmd: ${cmd}, execution succeed`, serverName: this.name};
        } else {
            res = {code: 1, data: data, msg: `cmd: ${cmd}, execution failed`, serverName: this.name};
        }
        return res;
    }

    executionCmd (cmd) {
        return new Promise((resolve, reject) => {
            exec(cmd, (err, stdout, stderr) => {
                if (err) {reject({code: 1, msg: `cmd: ${cmd}, execution fali`, err});}
                if (cmd === 'mongo') {
                    console.log(stdout);
                }
                resolve({code: 0, msg: `cmd: ${cmd}, execution succeed`});
            });
        });
    }

    async startServer (target) {
        switch (target) {
            case 'mongo':
                try {
                    return await this.executionCmd('mongo');
                } catch (error) {
                    return error;
                }

            case 'mongod':
                try {
                    return await this.executionCmd('/usr/local/Cellar/mongodb/4.0.3_1/bin/mongod');
                } catch (error) {
                    return error;
                }

            default:
                break;
        }
    }
}

module.exports = CheckServer;
