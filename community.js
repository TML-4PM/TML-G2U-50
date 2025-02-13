import { db } from "./firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function postToCommunity(user, text) {
    if (!user) {
        alert("Please sign in to post.");
        return;
    }
    await addDoc(collection(db, "community"), {
        user: user.displayName,
        text: text,
        timestamp: new Date()
    });
}

export async function fetchCommunityPosts() {
    const querySnapshot = await getDocs(collection(db, "community"));
    return querySnapshot.docs.map(doc => doc.data());
}
