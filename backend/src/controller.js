const repository = require('./repository');

const createSuccess = (data) => ({ success: true, ...data })
const createFailure = (data) => ({ success: false, ...data })

exports.getAll = (request, response) => repository.get()
    .catch(message => response.json(createFailure({ message })))
    .then(tasks => response.json(createSuccess({ tasks })));

exports.post = (request, response) => repository.create(request.body)
    .catch(message => response.json(createFailure({ message })))
    .then(insertId => response.json(createSuccess({ task: { ...request.body, id: insertId } })));

exports.patch = (request, response) => repository.update(request.params.id, request.body)
    .catch(message => response.json(createFailure({ message })))
    .then(() => response.json(createSuccess({})));

exports.delete = (request, response) => repository.delete(request.params.id)
    .catch(message => response.json(createFailure({ message })))
    .then(() => response.json(createSuccess({})));

exports.deleteAll = (request, response) => repository.deleteAll()
    .catch(message => response.json(createFailure({ message })))
    .then(() => response.json(createSuccess({})));