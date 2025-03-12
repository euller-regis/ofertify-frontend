import styles from './Text.module.css'

export function Text(props){
    const variants = ['body', 'head_1', 'head_2']
    if (!variants.includes(props.variant)) {
        throw new Error(`variant "${props.variant}" not supported!`)
    }

    const textStyle = styles[props.variant]

    return <span className={textStyle}>
        {props.children}
    </span>
}