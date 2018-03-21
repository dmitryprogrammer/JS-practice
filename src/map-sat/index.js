const map = new Map();
const keyObj = {user: "Volodya"};

map.set(1, "1");
map.set(true, "truth");
map.set("string", true);
map.set(keyObj, 1);

export function mapsMain() {
    console.info("Maps");
    console.log("map size", map.size);
    console.log("keys");
    for (let key of map.keys()) {
        console.log(key);
    }
    console.log("");
    for (let value of  map.values()) {
        console.log(value);
    }
    console.log("");
    for (let entry of map.entries()) {
        console.log(entry);
    }
    map.clear();
    console.log(map.size);
}

export function setMain() {
    const set = new Set();

    set.add(1);
    set.add(2);
    set.add(3);
    set.add(true);
    set.add(false);

// выведет элементы по порядку: 1, "some text", {"a": 1, "b": 2}
    for (let item of set.keys()) console.log(item);

// выведет элементы по порядку: 1, "some text", {"a": 1, "b": 2}
    for (let item of set.values()) console.log(item);
    for (let [key, value] of set.entries()) console.log(key, value);
}

export function weakMapMain() {
    const mapList = [{name: "Den",}, {name: "Bob"}, {name: "Valera"}];
    let mapList2 = [{name: "Danila"}];

    let weakMap = new WeakMap();

    weakMap.set(mapList[0], 0);
    weakMap.set(mapList[1], 1);
    weakMap.set(mapList[2], 2);
    weakMap.set(mapList2[0], "Даня");

    console.log(weakMap.get(mapList[0]));
    console.log(weakMap.get(mapList2[0]));
    mapList2 = [];
    console.log(weakMap.get(mapList2[0]));
}