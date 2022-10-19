import { useState, useContext } from 'react';
import { getDoc, doc } from "firebase/firestore";

import { fireDB } from "../firebase";


async function fetchUserDetails(user) {

    try {
        let userInfo = {
            username: "",
            email: "",
            phone: ""
        }

        if(user) {
            // console.log("User details exist");
            // console.log(user.uid)
            // const docRef = doc(fireDB, "users", user.uid, "account", "details");
            // const docSnap = await getDoc(docRef);   
            // if(docSnap.exists()){
            //     // console.log("docs exist");
            //     userInfo = docSnap.data();
            //     // console.log(userInfo)
            // }else {
            //     console.log("docs does not exist")
            // }
        }

        return userInfo;
    } catch (error) {
        console.log("Error getting user info", error);
    }
}

export default fetchUserDetails;