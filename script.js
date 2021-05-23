var request = window.indexedDB.open('mydb', 3);
request.onupgradeneeded = function(event) {
    var db = request.result;
    var objectStore = db.createObjectStore('keyvaluepairs');
    objectStore.add('bar', 'foo');
};