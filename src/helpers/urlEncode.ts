const encodeUrl = (url: string) => {
    const arrayUrl = url.split('');

    for (let i = 0; i < arrayUrl.length; i++) {
        switch (arrayUrl[i]) {
            case '/':
                arrayUrl[i] = '%2F';
                break;
            case ':':
                arrayUrl[i] = '%3A';
                break;
            case '#':
                arrayUrl[i] = '%23';
                break;
            default:
                break;
        }
    }   
    return arrayUrl.join('');
}

export default encodeUrl;