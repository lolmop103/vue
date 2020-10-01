import firebase from "firebase/app";

import "firebase/database";
import config from "@/config";

firebase.initializeApp(config.firedatabase);
const database = firebase.database();

export default database;