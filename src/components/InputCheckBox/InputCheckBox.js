'use client'

import React from 'react'
import styles from './InputCheckBox.module.css'

export function InputCheckBox(props){

    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <label>
            <input type='checkbox' className={styles.input}
                checked={checked}
                onChange={handleChange}
            />
            {props.label}
        </label>
    )
}