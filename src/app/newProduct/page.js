"use client";

import styles from "./page.module.css";
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { InputCheckBox } from "../../components/InputCheckBox/InputCheckBox";
import { InputText } from "../../components/InputText/InputText";
import { Text } from "../../components/Text/Text";
import { useEffect, useState } from "react";
import axios from "axios";

export default function newProduct() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [condition, setCondition] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState();

    const setForm = () => {
        const newProduct = {
            name,
            description,
            condition,
            location,
            category,
            price,
        };
    };

    const submitForm = async () => {
        const categoryMap = { "Electronics": 1, "Clothing": 2, "Books": 3, "Home & Garden": 4, "Sports": 5 };
        const formData = {
            product_name: name,
            description,
            product_condition: condition,
            location,
            category_id: categoryMap[category] || 1,
            price: parseFloat(price) || 0,
        };
        try {
            const response = await axios.post('http://localhost:3002/products/new-product', formData);
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <>
            <header>
                <Text variant="head_2">New Product</Text>
            </header>
            <div>
                <Card>
                    <Text className={styles.input}>Name:</Text>
                    <InputText className={styles.input} value={name} onChange={(event) => setName(event.target.value)}></InputText>

                    <Text className={styles.input}>Description:</Text>
                    <InputText className={styles.input} value={description} onChange={(event) => setDescription(event.target.value)}></InputText>

                    <Text className={styles.input}>Condition:</Text>
                    <InputText className={styles.input} value={condition} onChange={(event) => setCondition(event.target.value)}></InputText>

                    <Text className={styles.input}>Location:</Text>
                    <InputText className={styles.input} value={location} onChange={(event) => setLocation(event.target.value)}></InputText>

                    <Text className={styles.input}>Category:</Text>
                    <InputText className={styles.input} value={category} onChange={(event) => setCategory(event.target.value)}></InputText>

                    <Text className={styles.input}>Price:</Text>
                    <InputText className={styles.input} value={price} onChange={(event) => setPrice(event.target.value)}></InputText>

                    <Button text="Submit" onClick={submitForm} />
                </Card>
            </div>
        </>
    );
}
