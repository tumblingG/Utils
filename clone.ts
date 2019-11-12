const deepClone = (obj: any) => {
    if (obj == null) {
        return obj;
    }
    let result: any;
    const types = [Number, String, Boolean];
    types.forEach(type => {
        if (obj instanceof type) {
            result = type(obj);
        }
    });
    if (typeof result === 'undefined') {
        if (Object.prototype.toString.call(obj) === '[object Array]') {
            result = [];
            (obj as any[]).forEach((item, index) => {
                if (item !== obj) {
                    result[index] = deepClone(item);
                }
            })
        } else if (typeof obj === 'object') {
            if (obj instanceof Date) {
                result = new Date(obj.getTime());
            } else if (obj.nodeType && typeof obj.cloneNode === 'function') {
                result = obj.cloneNode(true);
            } else if (obj instanceof Map) {
                result = new Map();
                for(const key of obj.keys()) {
                    const value = obj.get(key);
                    if (value !== obj) {
                        result.set(key, deepClone(value));
                    }
                }
            }  else if (obj instanceof RegExp) {
                result = new RegExp(obj.source, (obj as any).flags);
            } else if (obj instanceof Set) {
                result = obj;
            } else {
                result = {};
                for (const key in obj) {
                    if ((obj as Object).hasOwnProperty(key)) {
                        if (obj[key] !== obj) {
                            result[key] = deepClone(obj[key]);
                        }
                    }
                }
            }
        } else {
            result = obj;
        }
    }
    return result;
};
