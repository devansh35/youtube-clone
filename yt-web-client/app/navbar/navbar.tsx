import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css";
import SignIn from "./sign-in";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";


export default function Navbar() {
    // Initialize user state
    const [user, setUser] = useState<User | null>(null);
    
    useEffect(() => {
        onAuthStateChangedHelper((user) => {
            setUser(user);
        });
    });

    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image width={90} height={20} 
                    src="/youtube-logo.svg" alt="YouTube Logo" />
            </Link>
            {
                // TODO: Add a upload button
            }
            <SignIn />
        </nav>
    );
}