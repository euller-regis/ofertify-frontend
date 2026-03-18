"use client";

import styles from "./page.module.css";
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { InputCheckBox } from "../../components/InputCheckBox/InputCheckBox";
import { InputText } from "../../components/InputText/InputText";
import { Text } from "../../components/Text/Text";

export default function addImages() {
    return (
        <>
            <header>
                <Text variant="head_2">Add Images</Text>
            </header>
            <div>
                <InputText className={styles.input}>Main Image</InputText>
                <InputText className={styles.input}>Image 1</InputText>
            </div>
        </>
    );
}
