"use client";

import styles from "./page.module.css";
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { Text } from "../../components/Text/Text";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ImgPreview } from "../../components/ImgPreview/ImgPreview";

const DEFAULT_IMAGE_URL =
    "https://www.publicdomainpictures.net/pictures/470000/velka/image-not-found.png";

export default function Product() {
    const [product, setProduct] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let url = "http://localhost:3002/products/ergonomic_office_chair_12345";
        try {
            const { data: response } = await axios.get(url);
            setProduct(response);
            console.log(response);
        } catch (error) {
            setProduct(null);
        }
    };

    if (product === null) {
        return <div>Product not found</div>;
    }
    if (product === undefined) {
        return <div></div>;
    }

    return (
        <>
            <header>
                <Button />
                <Text variant="head_2">Product Details</Text>
            </header>

            <div className={styles.cardGrid}>
                <Card className={styles.cards}>
                    <img src={product.image_url} />
                    <ImgPreview src={product.image_url} />
                </Card>

                <Card className={styles.cards}>
                    <div className={styles.cards}>
                        <Text variant="head_1">{product.product_name}</Text>
                        <Text color="blue">R$:{product.price}</Text>
                        <Text>{product.description}</Text>
                    </div>
                    <Button text="Contact Seller" className={styles.button} />
                </Card>
            </div>
        </>
    );
}
