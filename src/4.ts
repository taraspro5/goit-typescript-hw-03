class Key {
    private signature: number = Math.random();

    getSignature() {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key){}

    getKey(){
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected tenants: Person[] = [];

    constructor(protected key:Key){}

    comeIn(person: Person){
        if(this.door){
            this.tenants.push(person);
            console.log("Go");
        }else{
            console.log("Door is closed");
        }
    }

    abstract openDoor(Key: object): void;
}

class MyHouse extends House{
    openDoor(key: Key): void {
        if(this.key.getSignature() === key.getSignature()){
            this.door = true;
            console.log("Door opened");
        }else{
            console.log("Incorrect key");
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};