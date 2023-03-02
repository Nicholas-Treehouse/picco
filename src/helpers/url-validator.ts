export const urlValidator = (input: string): boolean => {
    let url: URL;

    try {
        url = new URL(input);
    } catch (e) {
        return url.protocol === 'http:' || url.protocol === 'https:';
    }
};
