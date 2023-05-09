/*
This class extension is named StorageExtension and defines three static functions: set, get, and remove.
These functions provide a simple wrapper around the localStorage API in the browser, allowing developers to easily store, retrieve, and remove data from the browser's local storage.

The set function takes two arguments, a string key and a value of any type.
 The function first checks if there is already a value stored in the local storage for the given key.
 If a value exists, it is removed before storing the new value. The value is converted to a JSON string using JSON.stringify() before storing it in the local storage.

The get function takes a single string argument, the key for the value that should be retrieved from the local storage.
If the key is not provided, the function returns null. Otherwise, it retrieves the value from the local storage using window.localStorage.getItem(key),
and parses it using JSON.parse() before returning it.

The remove function takes a single string argument, the key for the value that should be removed from the local storage.
It removes the value from the local storage using window.localStorage.removeItem(key).

All of the functions in this class extension are static, meaning they can be accessed without creating an instance of the StorageExtension class.
They provide a simple and convenient way to work with the browser's local storage from within a TypeScript or JavaScript application.
* */

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
