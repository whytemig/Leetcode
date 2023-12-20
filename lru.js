// class LRUCache {
//     // initialize the capacity
//     constructor(capacity) {
//         this.capacity = capacity;
//         this.map = new Map()
//     };
//     get(key) {
//         // Return the value of the key if the key exists, otherwise return -1.
//         if (this.map.has(key)) {
//             let value = this.map.get(key)
//             this.map.delete(key)
//             this.map.set(key, value)
//             return value
//         } else {
//             return -1
//         }
//     }

//     put(key, value) {
//         if (this.get(key) === -1) {
//             // if the key is not in the Map, then add the key-value pair, & check if the map is at max capacity.
//             if (this.map.size === this.capacity) {
//                 for (let lru of this.map) {
//                     this.map.delete(lru[0])
//                     break;
//                 }
//             }
//         }

//         this.map.set(key, value)

//     }

// }

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    if (this.map.has(key)) {
      let value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    } else {
      return -1;
    }
  }

  put(key, value) {
    // if key exist delete and set it.
    // updating the hash
    if (this.map.has(key)) {
      this.map.delete(key);
    } else if (this.map.size >= this.capacity) {
      const lruKey = this.map.keys().next().value;
      this.map.delete(lruKey);
    }
    this.map.set(key, value);
  }
}
