/**
 * 这里的思路基本上就是 export 出去两个对象,一个是 post 一个是 get
 * 顺路再加深一下对 JS 的导出这玩意的印象,有点生疏了
 */
const modal = {
    /**
     * @param {请求的路径} path
     * @param {传入的参数} parma
     *  首先判断 parma 的属性,是不是对象,其实有很多的方式去做判断是不是对象,我们这里用 constructor 来做判断
     */
    fetch(path, parma, mothod) {
        /**
         * options（可选）
一个配置项对象，包括所有对请求的设置。可选的参数有：

method: 请求使用的方法，如 GET、POST。

headers: 请求的头信息，形式为 Headers 对象或 ByteString。

body: 请求的 body 信息：可能是一个 Blob、BufferSource、FormData、URLSearchParams 或者 USVString 对象。注意 GET 或 HEAD 方法的请求不能包含 body 信息。

mode: 请求的模式，如 cors、 no-cors 或者 same-origin。

credentials: 请求的 credentials，如 omit、same-origin 或者 include。

cache: 请求的 cache 模式: default, no-store, reload, no-cache, force-cache, 或者 only-if-cached。
         */
        let options = {
            mothod: mothod,
            headers: Headers,
        }

        const defer = new Promise((resolve, reject) => {
            fetch(path, options)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    if (data.code === 0) {
                        resolve(data) //返回成功数据
                    } else {
                        if (data.code === 401) {
                            //失败后的一种状态
                        } else {
                            //失败的另一种状态
                        }
                        reject(data) //返回失败数据
                    }
                })
                .catch(error => {
                    //捕获异常
                    console.log(error.msg)
                    reject()
                })
        })

        return defer
    }
}

/**
 * @param {parma} 这里的 parma 是一个对象,至少是个空对象,{},如果传入的参数不是空对象的话需要返回一个错误
 * 直接在 fetch 中进行 reject,这样保证传给后端的参数值是一个对象的值,不会是其余的奇怪的值
 */
export default POST = (path, param) => {
    return modal.fetch(path, param, 'POST');
}


