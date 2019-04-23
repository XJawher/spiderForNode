
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
exports.findAll = (model, conditions, projection = {}, options = {}) => {
    return new Promise((resolve, reject) => {
        model.find(conditions, projection, options, (error, doc) => {
            error ? reject(error) : resolve(doc);
        });
    });
};

/**
 * database.xianUpdateOne({ '_id': element._id }, { '$set': { datasSring: '2019-4-22' } }, { multi: 1 });
 * {@param modal:the datas of database model}
 * {@param conditions:the conditions of you want find from this database  { '_id': element._id }}
 * {@param update:the datas of what you want to update { '$set': { datasSring: '2019-4-22' } }}
 * {@param options: some spaceil parmas { multi: 1 }}
 */
exports.updateOne = (model, conditions, update, options = {}) => {
    return new Promise((resolve, reject) => {
        model.updateOne(conditions, update, options, (error, raw) => {
            error ? reject(error) : resolve(raw);
        });
    });
};