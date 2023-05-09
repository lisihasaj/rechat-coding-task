export class StorageExtension {
    static set(key: string, value: any) {
        const valueInLocalStorage = window.localStorage.getItem(key);
        if (valueInLocalStorage) {
            window.localStorage.removeItem(key);
            window.localStorage.setItem(key, JSON.stringify(value));
        } else {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    }

    static get(key: string) {
        if (!key) return null;
        return JSON.parse(window.localStorage.getItem(key)!);
    }

    static remove(key: string) {
        window.localStorage.removeItem(key);
    }
}
