
const modal = {
    initRequest() {
        return async (ctx, next) => {
            ctx.parma = ctx.request.method.toLowerCase() === 'post' ? ctx.request.body : ctx.query;
            await next();
        };
    }
};

module.exports = modal;