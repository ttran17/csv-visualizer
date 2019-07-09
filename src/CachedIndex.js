import FlexSearch from "flexsearch";

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

const defaultUuidKey = "fsuuid";

export default class CachedIndex {

    constructor(uuidKey) {
        this.uuid = uuidKey === undefined ? defaultUuidKey : uuidKey;
        this.indexes = [];
    }

    static getDefaultUuidKey() {
        return defaultUuidKey;
    }

    search = (docs, keys, str) => {
        let index = null;
        for (let i = 0; i < this.indexes.length; i++) {
            let ixo = this.indexes[i];
            if (arraysEqual(ixo.keys, keys)) {
                index = ixo.index;
                break;
            }
        }

        if (index === null) {
            index = new FlexSearch({
                doc: {
                    id: this.uuid,
                    field: keys
                }
            });
            this.indexes.push({
                keys: keys,
                index: index
            });
            index.add(docs);
        }

        return index.search(str);
    };
}