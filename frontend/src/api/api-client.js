import requestHandler from './request-hander';
import optionsFactory from './options-factory';

const sendGet = async (path) => {
    const options = optionsFactory.createGetOptions();
    return await requestHandler.sendRequest(path, options);
};

const sendPost = async (path, data) => {
    const options = optionsFactory.createPostOptions(data);
    return await requestHandler.sendRequest(path, options);
};

const sendPatch = async (path, data) => {
    const options = optionsFactory.createPatchOptions(data);
    return await requestHandler.sendRequest(path, options);
};

const sendDelete = async (path) => {
    const options = optionsFactory.createDeleteOptions();
    return await requestHandler.sendRequest(path, options);
};

export default { sendGet, sendPost, sendPatch, sendDelete };