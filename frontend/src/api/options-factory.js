const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const createGetOptions = () => ({
    method: 'GET'
});

const createPostOptions = (data) => ({
    method: 'POST', headers,
    body: JSON.stringify(data)
});

const createPatchOptions = (data) => ({
    method: 'PATCH', headers,
    body: JSON.stringify(data)
});

const createDeleteOptions = () => ({
    method: 'DELETE'
});

export default { createGetOptions, createPostOptions, createPatchOptions, createDeleteOptions };