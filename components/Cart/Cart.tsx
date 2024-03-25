import { Dialog } from "@mui/material"
import { useState } from "react"

import styles from './style.module.css'

interface CartProps {
    open: boolean,
    handle: (value: boolean) => void
}

export default function Cart({ open, handle }: CartProps) {

    return (
        <Dialog className={styles.container} onClose={() => handle(false)} open={open}>
            <h1> Cart </h1>    
        </Dialog>
    )
}