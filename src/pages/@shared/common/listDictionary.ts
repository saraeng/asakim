
export class listDictionary {

    constructor() {
    }

    public dictionary:  { [id: string] : boolean; } = {};


    public toggle(id: string) {
        this.dictionary[id] = !this.dictionary[id] ;
    }

    public getValue(id: string) {
        return this.dictionary[id];
    }
}