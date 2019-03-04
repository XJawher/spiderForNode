
/**
 * {modal:the datas of database model}
 * {doc:the params of the models database,we need save this data on database  }
 */
exports.createOne = (model, doc) => {
    return new Promise((resolve, reject) => {
        model.create(doc, (error, doc) => {
            error ? reject(error) : resolve(doc);
        });
    });
};

/**
 * {modal:the datas of database model}
 * {conditions: the conditions of you want find from this database}
 * {projection: the conditions of you want find from this database}
 * {options: the conditions of you want find from this database}
 */
exports.findAll = (model, conditions = {}, projection = {}, options = {}) => {
    return new Promise((resolve, reject) => {
        model.find(conditions, projection, options, (error, doc) => {
            error ? reject(error) : resolve(doc);
        });
    });
};