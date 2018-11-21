# Examples in Ionic 4, Angular 6

## Storage. Use NativeStorage and LocalStorage

Storage is an easy way to store key/value pairs and JSON objects. Storage uses a variety of storage engines underneath, **picking the best one available depending on the platform**.

When running in a native app context, Storage will prioritize using SQLite, as it's one of the most stable and widely used file-based databases, **and avoids some of the pitfalls of things like localstorage and IndexedDB, such as the OS deciding to clear out such data in low disk-space situations**.

When running in the web or as a Progressive Web App, Storage will attempt to use IndexedDB, WebSQL, and localstorage, in that order.

### Tested in:

- browser: Safari, Chrome
- emolator iPhone
# testIonicStorage
