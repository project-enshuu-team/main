import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getAuth,onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'
import { getDatabase, ref, set, get, onValue, query, orderByChild } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js"
const response = await fetch('./firebase-config.json');
const firebaseConfig = await response.json();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
let uid = null;

onAuthStateChanged(auth, (user) => { // <4>
    if (user) {
        uid = user.uid;
    } else {
        uid = null;
    }
});

export function save(count, clickValue){
    if(uid == null) {console.log("ログインされていません");return;}
    let dataRef = ref(db, 'users/' + uid);
    set(dataRef, {
        count: count,
        clickValue: clickValue
    });

}
export async function load(){

    if(uid == null) {console.log("ログインされていません");return {clickValue: 1, count:0};}
    let dataRef = ref(db, 'users/' + uid);

    let docSnap = await get(dataRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.val());
            return docSnap.val();
          } else {
            // docSnap.data() will be undefined in this case
            console.log("過去の保存データが見つかりませんでした");
            return {clickValue: 1, count:0};
        }

    

}
