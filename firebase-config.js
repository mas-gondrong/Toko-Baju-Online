// ===== KONFIGURASI FIREBASE =====
const firebaseConfig = {
  apiKey: "AIzaSyDxNIdxNFmvZH532cmz14wx4gpXNdwfHns",
  authDomain: "toko-baju-online-alfa.firebaseapp.com",
  databaseURL: "https://toko-baju-online-alfa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "toko-baju-online-alfa",
  storageBucket: "toko-baju-online-alfa.firebasestorage.app",
  messagingSenderId: "299306229226",
  appId: "1:299306229226:web:21c02a1e57dfea5fdda693"
};

// Inisialisasi Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
