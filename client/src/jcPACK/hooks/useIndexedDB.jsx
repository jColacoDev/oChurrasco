import { useState, useEffect } from "react";

export function useIndexedDB() {
  const [db, setDB] = useState(null);

  useEffect(() => {
    const dbName = "ordersDB";
    const dbVersion = 1;

    const request = indexedDB.open(dbName, dbVersion);

    request.onerror = function(event) {
      console.log("Error opening database:", event.target.errorCode);
    };

    request.onsuccess = function(event) {
      setDB(event.target.result);
    };

    request.onupgradeneeded = function(event) {
      const db = event.target.result;
      db.createObjectStore("orders", { keyPath: "id", autoIncrement: true });
    };
  }, []);

  function addOrder(order) {
    if (db) {
      const ordersObjectStore = db.transaction("orders", "readwrite").objectStore("orders");
      ordersObjectStore.add(order);
    }
  }
  
  function updateOrder(order) {
    if (db) {
      const ordersObjectStore = db.transaction("orders", "readwrite").objectStore("orders");
      ordersObjectStore.put(order);
    }
  }
  
  function deleteOrder(id) {
    if (db) {
      const ordersObjectStore = db.transaction("orders", "readwrite").objectStore("orders");
      ordersObjectStore.delete(id);
    }
  }
  
  function getOrders(callback) {
    if (db) {
      const ordersObjectStore = db.transaction("orders", "readonly").objectStore("orders");
      const request = ordersObjectStore.getAll();
      request.onsuccess = function(event) {
        callback(event.target.result);
      };
    }
  }

  return [addOrder, updateOrder, deleteOrder, getOrders];
}