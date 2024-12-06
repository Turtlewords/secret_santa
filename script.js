const appSettings = {
    databaseURL: "https://secret-santa-ef5e1-default-rtdb.firebaseio.com/"
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

const app = initializeApp(appSettings)

console.log(app)

const output = document.getElementById("output");
const submitBtn = document.getElementById("submit-btn");