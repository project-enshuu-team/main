import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getAuth,onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'

const response = await fetch('/account/firebase-config.json');
const firebaseConfig = await response.json();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => { // <4>
    if (user) {
        document.querySelector("#account-page-link").textContent = `${user.email}としてログインしています`
    } else {
    }
});
