const CheckServer = require('./checkServer');
const cs = new CheckServer();

(async () => {
    let resGetMongod = await cs.getData();//'./mongod'
    let resGetMongo = await cs.getData('mongo');//'./mongod'
    if (resGetMongod.data) {
        let {data} = resGetMongod;
        console.log(`验证了 mongod 正在运行，运行端口是 ${data[1]}`);
        console.log(`即将杀掉 mongod 进程 ${data[1]}`);
        let cmd = `kill ${data[1]}`;
        let killRes = await cs.executionCmd(cmd);
        if (killRes.code === 0) {
            console.log(`杀掉 mongod 进程 ${data[1]} 成功，即将启动 mongod 服务`);
            cs.startServer('mongod');
            console.log(`启动 mongod 服务结束，请检查是否启动成功。`);
        }
    } else {
        console.log(`暂无 mongod 正在运行，即将启动 mongod 服务`);
        let startServerMongod = await cs.startServer('mongod');
        if (startServerMongod.code === 0) {
            console.log(`启动 mongod 服务结束，请检查是否启动成功。`);
        } else {
            console.log(`启动 mongod 服务失败，原因是：\n`);
            console.log(startServerMongod);
        }
    }
    if (resGetMongo.data) {
        let {data} = resGetMongo;
        console.log(`验证了 mongo 正在运行，运行端口是 ${data[1]}`);
        console.log(`即将杀掉 mongo 进程 ${data[1]}`);
        let cmd = `kill ${data[1]}`;
        let killRes = await cs.executionCmd(cmd);
        if (killRes.code === 0) {
            console.log(`杀掉 mongo 进程 ${data[1]} 成功，即将启动 mongo 服务`);
            console.log(`杀掉 mongo 进程成功，请手动启动 mongo 服务`);
        }
    } else {
        console.log(`暂无 mongo 正在运行，请手动启动 mongo 服务`);
    }


})();

