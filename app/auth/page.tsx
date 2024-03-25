'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '@/components/Button/Button'
import { motion } from 'framer-motion'
import { RiErrorWarningLine, RiCloseLine } from "react-icons/ri";
import { useRouter } from 'next/navigation'

export default function Auth() {

    const router = useRouter()

    const [emailInput, setEmailInput] = useState<string>("")
    const changeEmailValue = (value: string) => setEmailInput(value)

    const [passwordInput, setPasswordInput] = useState<string>("")
    const changePasswordValue = (value: string) => setPasswordInput(value)

    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const changeRememberMeValue = (value: boolean) => setRememberMe(value)

    const [error, setError] = useState<boolean>(false)

    function checkSubmition(e: FormEvent) {
        e.preventDefault()

        if (emailInput == "" || passwordInput == "") {
            setError(true)
        } else {
            if (rememberMe) {   
                setWithExpiry('chave', 'valor', 30 * 24 * 60 * 60 * 1000); // um mês
            } else {
                sessionStorage.setItem("chave", "valor")
            }
            
            router.back()
        }
    }

    function setWithExpiry(key: string, value: string, ttl: number) {
        const now = new Date();
        const item = {
            value: value,
            expiry: now.getTime() + ttl,
        };
        localStorage.setItem(key, JSON.stringify(item));
    }

    const variants = {
        open: { opacity: 1, transform: "translateX(0)" },
        close: { opacity: 0, transform: "translateX(-50px)" }
    }

    useEffect(() => {
        setError(false)
    }, [emailInput, passwordInput])

    return (
        <section className={styles.container}>
            <main>
                <header>
                    <Image
                        src={"/logo.svg"}
                        width={32}
                        height={30}
                        alt={"Logo Booktopia"}
                    />

                    <h1> BOOKTOPIA </h1>
                </header>

                <h1> Acesse sua conta </h1>

                <form onSubmit={(e) => checkSubmition(e)}>
                    <fieldset className={styles.inputField}>
                        <label htmlFor="email"> Email </label>
                        <input type="text" id='email' placeholder='Informe seu email' value={emailInput} onChange={e => changeEmailValue(e.target.value)}/>
                    </fieldset>

                    <fieldset className={styles.inputField}>
                        <label htmlFor="password"> Senha </label>
                        <input type="password" id='password' placeholder='********' value={passwordInput} onChange={e => changePasswordValue(e.target.value)}/>
                    </fieldset>

                    <div>
                        <input type='checkbox' id='rememberMe' checked={rememberMe} onChange={e => changeRememberMeValue(e.target.checked)} hidden/>
                        <label htmlFor="rememberMe"></label>
                        <label htmlFor="rememberMe"> Lembre de mim </label>

                        <Link href="/forget-password"> Esqueci minha senha </Link>
                    </div>

                    <Button 
                        fill={true}
                        weight={500}
                    > Acessar </Button>
                </form>

                <p> Não possui uma conta? <Link href={"/signup"}> Cadastre-se </Link> </p>
            </main>

            <motion.div
                className={styles.error}
                initial={{ opacity: 0, transform: "translateX(50px)" }}
                animate={error ? "open" : "close"}
                variants={variants}
                transition={{ duration: .2 }}
            >
                <RiErrorWarningLine fontSize={22}/>
                <p> E-mail ou senha inválidos. Tente novamente </p>
                <RiCloseLine fontSize={22} opacity={.5} cursor={"pointer"} onClick={() => setError(false)}/>
            </motion.div>

            <aside>
                <Image 
                    alt='Ilustração' 
                    src="/auth-illustration.webp" 
                    layout="fill" 
                    objectFit="cover" 
                />

                <div>
                    <h1> EXPLORE EXPLORE EXPLORE </h1>
                    <h1> ENCONTRE ENCONTRE ENCONTRE </h1>
                    <h1> DESCUBRA DESCUBRA DESCUBRA </h1>
                </div>

                <p> Designed by <a href="https://www.freepik.com/"> Freepik </a> </p>
            </aside>
        </section>
    )
}