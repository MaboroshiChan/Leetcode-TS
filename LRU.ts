class LRUCache {
    buffer: number[];
    dict: {[a:number]: [number, number]}; // value, index
    capacity: number;
    constructor(capacity: number) {
        this.buffer = Array(capacity);
        this.dict = {};
        this.capacity = capacity;
    }

    get(key: number): number {
        if(key in this.dict){
            return this.dict[key][0];
        }
        return -1;
    }

    put(key: number, value: number): void {
        this.dict[key][0] = value;
        if(this.buffer.length == this.capacity){
            let least_used = this.buffer.shift();
            delete this.dict[least_used];
        }
    }
}