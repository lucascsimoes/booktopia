'use client'

import Header from "../Header/Header";
import styles from './style.module.css'

const MainContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    // function getWithExpiry(key: string) {
    //     const itemStr = localStorage.getItem(key);
    //     if (!itemStr) {
    //         return null;
    //     }
    //     const item = JSON.parse(itemStr);
    //     const now = new Date();
    //     if (now.getTime() > item.expiry) {
    //         localStorage.removeItem(key);
    //         return null;
    //     }
    //     return item.value;
    // }

    // const valor = getWithExpiry("chave") == null ? getWithExpiry("chave") : sessionStorage.getItem('chave');

    return (
        <main className={styles.container}>
            <Header auth={"valor"}/>
            <div> { children } </div>
        </main>
    )
}

export default MainContainer