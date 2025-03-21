export function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("SaaSProject", 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("contacts")) {
        db.createObjectStore("contacts", {
          keyPath: "id",
          autoIncrement: true,
        });
      }
      if (!db.objectStoreNames.contains("tasks")) {
        db.createObjectStore("tasks", { keyPath: "id", autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

export function addToDB(key, newEl) {
  return openDatabase().then((db) => {
    const transaction = db.transaction(key, "readwrite");
    const store = transaction.objectStore(key);
    store.add(newEl);
  });
}

export function getFromDB(key) {
  return openDatabase().then((db) => {
    return new Promise((resolve) => {
      const transaction = db.transaction(key, "readonly");
      const store = transaction.objectStore(key);
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
    });
  });
}
export function deleteFromDB( key,id) {
  return openDatabase().then((db) => {
    return new Promise((resolve) => {
      const transaction = db.transaction(key, "readwrite");
      const store = transaction.objectStore(key);
      store.delete(id);
    });
  });
}
