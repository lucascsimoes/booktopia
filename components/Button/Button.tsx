import { ReactNode } from 'react'
import styles from './style.module.css'

interface ButtonProps {
    children: ReactNode
    fill?: boolean
    weight?: 300 | 400 | 500 | 600 | 700
}

export default function Button({ children, fill, weight }: ButtonProps) {
    return (
        <button 
            className={styles.container}
            style={{ width: `${fill ? "100%" : "fit-content"}`, fontWeight: `${weight}` }}
        > 
            { children } 
        </button>
    )
}