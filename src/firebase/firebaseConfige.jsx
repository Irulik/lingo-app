import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

export const firebaseConfig = {
	apiKey: "AIzaSyBnbF93L_e-YM1l0IfpVG6xe1yQypttTqs",
	authDomain: "base-lingo.firebaseapp.com",
	databaseURL: 'https://base-lingo-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: "base-lingo",
	storageBucket: "base-lingo.appspot.com",
	messagingSenderId: "501362930586",
	appId: "1:501362930586:web:387ce46ec4671a8d3f4023"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
