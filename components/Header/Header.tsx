import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.css'
import { motion } from 'framer-motion';
import { useState } from 'react';

import { RiSearchLine, RiShoppingCartLine, RiUser3Fill } from "react-icons/ri";
import Button from '../Button/Button';
import Cart from '../Cart/Cart';

const asideIconsStyle = { fontSize: "20px", color: "var(--text)" }

export default function Header(auth: any) {

    const [handleCart, setHandleCart] = useState<boolean>(false)

    return (
        <header className={styles.container}>
            <Link href={"/"}>
                <Image
                    src={"/logo.svg"}
                    width={38}
                    height={36}
                    alt={"Logo Booktopia"}
                />

                <h1> BOOKTOPIA </h1>
            </Link>
            
            <nav>
                <Link href={"/alta"}>
                    <p> Em alta </p>
                </Link>
                <Link href={"/livros"}>
                    <p> Livros </p>
                </Link>
                <Link href={"/autores"}>
                    <p> Autores </p>
                </Link>
            </nav>

            <div className={styles.divider}></div>

            <aside>
                <div className={styles.search}>
                    <RiSearchLine style={asideIconsStyle} />
                </div>
                
                <RiShoppingCartLine style={asideIconsStyle} onClick={() => setHandleCart(true)}/>
            </aside>

            { auth.auth === null ?
                <Link href={"/auth"}>
                    <Button> Acessar </Button>
                </Link>
                :
                <div className={styles.profileHandler}>
                    <RiUser3Fill fontSize={18}/>
                </div>
            }

            <Cart 
                open={handleCart}
                handle={setHandleCart}
            />
        </header>
    )
}