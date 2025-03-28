import styles from './Button.module.css'

export const Button = (props) => {
    const colorStyle = props.variant === 'secondary' ? styles.secondary : styles.primary
    return (
        <button
            className={`${styles.button} ${colorStyle}`}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}