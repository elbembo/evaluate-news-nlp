function checkForName(inputText) {
    let url;
    try {
        url = new URL(inputText);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

export { checkForName }
