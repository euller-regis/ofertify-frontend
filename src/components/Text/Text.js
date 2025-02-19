import styles from './Text.module.css'

export function Text(props){
    const textStyle = props.variant === 'head' ? styles.head : styles.body
    return <span className={textStyle}>
        {props.children}
    </span>
}