import database from "@/modules/firebase/Firedatabase.js";

const ref = "messages";

export default class MessageService {
    constructor() {
        this.ref = ref;
    }

    listen(callback) {
        let databaseRef = database.ref(this.ref);
        databaseRef.on("value", (data) => {
            const value = this.ifNullConvertToObject(data.val());
            callback(value);
        });
    }

    ifNullConvertToObject(data) {
        if (data == null)
          return {}

        return data
    }

    add(data) {
        let databaseRef = database.ref(this.ref);
        let newDatabaseRef = databaseRef.push();
        newDatabaseRef.set(data);
    }

    remove(key) {
        let databaseRef = database.ref(this.ref + "/" +key);
        databaseRef.remove();
    }
}