const baseAddress = 'http://localhost:8080/api';

const sendRequest = async (path, options) => {
    try {
        const response = await fetch(baseAddress + path || '/', options);
        const responseContent = await response.json();
        if (responseContent.success) return responseContent;
        throw new Error(responseContent.message);
    } catch (error) {
        window.alert('Error');
        return { success: false };
    }
};

export default { sendRequest };