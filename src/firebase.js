import {InitializeApp} from "firebase/app" ;
import {getFirestore} from "firebase/getFirestore";

InitializeApp({
        apiKey: "AIzaSyAwHCIb5g5s1xTxHEnrGJ0Doyzj0_VX8bM",
        authDomain: "restaurantapp-dd5fe.firebaseapp.com",
        projectId: "restaurantapp-dd5fe",
        storageBucket: "restaurantapp-dd5fe.appspot.com",
        messagingSenderId: "1059901389741",
        appId: "1:1059901389741:web:73d095b85b44751e79ff24"
});

export const db = getFirestore();
