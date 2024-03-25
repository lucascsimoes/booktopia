import Image from "next/image";
import Link from "next/link";

import styles from './not-found.module.css'
import MainContainer from "@/components/MainContainer/MainContainer";
import Button from "@/components/Button/Button";

export default function NotFound() {
    return (
        <MainContainer>
            <div className={styles.container}>
                <Image
                    width={700}
                    height={700}
                    alt="Página não encontrada"
                    src={"/not-found.svg"}
                />

                <div>
                    <h1> Ooops... </h1>
                    <h2> Essa página não existe mais </h2>

                    <p> A página que você está tentando acessar não existe mais. Você pode voltar para a página inicial clicando no botão abaixo </p>
                    <Link href={"/"}> 
                        <Button> Página inicial </Button>
                    </Link>
                </div>
            </div>
        </MainContainer>
    )
}