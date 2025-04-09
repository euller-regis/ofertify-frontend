import styles from "./InputText.module.css"

/**
 * props: {
 *   placeholder: string
 *   label: string
 *   id: string
 * }
 */

export const InputText = (props) => {
    return (
        <div className={`${styles.inputContainer} ${props.className}`}>
            {(props.label !== undefined) ? (
                <label
                    htmlFor={props.id}
                    className={styles.inputLabel}
                >{props.label}</label>
            ) : null}
            <input
                id={props.id}
                type="text"
                className={styles.inputText}
                placeholder={props.placeholder}
            />
        </div>
    )
}