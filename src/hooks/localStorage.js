

const STORAGE_KEY = "todo-vue";

function useStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
    const items = [];

    function setItems(obj) {
        if (Array.isArray(obj)){
            items.splice(0, items.length, ...obj);
        }
        else{
            items.splice(0, items.length, obj);
        }
    }

    if(!data){
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
    else {
        // set items = JSON.parse(data)
        setItems(JSON.parse(data));
    }

    function putItems(obj) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
        setItems(obj);
    }

    function clearItem() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
        setItems([]);
    }

    return [items, putItems, clearItem];
}

export default useStorage;