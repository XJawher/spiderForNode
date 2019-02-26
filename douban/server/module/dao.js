exports.createOne = (model, doc) => {
    return new Promise((resolve, reject) => {
        model.create(doc, (error, doc) => {
            error ? reject(error) : resolve(doc);
        });
    });
};