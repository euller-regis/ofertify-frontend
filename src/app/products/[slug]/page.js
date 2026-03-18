"use client";

import styles from "./page.module.css";
import { Button } from "../../../components/Button/Button";
import { Card } from "../../../components/Card/Card";
import { Text } from "../../../components/Text/Text";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { ImgPreview } from "../../../components/ImgPreview/ImgPreview";
import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";

const DEFAULT_IMAGE_URL =
    "https://www.publicdomainpictures.net/pictures/470000/velka/image-not-found.png";

export default function Product() {
    const [product, setProduct] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const params = useParams();

    console.log(params);

    const fetchData = async () => {
        let url = "http://localhost:3002/products/" + params.slug;
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

    const imageRow = product.images.filter((image) => !image.is_primary);

    return (
        <>
            <header>
                <Button text={<FontAwesomeIcon icon={faOpencart} />} />

                <Text variant="head_2">Product Details</Text>
            </header>

            <div className={styles.cards}>
                <div>
                    <img
                        className={styles.primaryImage}
                        src={product.primary_image.url || DEFAULT_IMAGE_URL}
                    />
                    <div className={styles.cardGrid}>
                        {imageRow.slice(0, 4).map((image) => (
                            <ImgPreview src={image.url} key={image.id} />
                        ))}
                    </div>

                    <div className={styles.productDetails}>
                        <Text variant="head_1">{product.product_name}</Text>
                        <Text color="blue">R$:{product.price}</Text>
                        <Text>{product.description}</Text>
                        <div className={styles.details}>
                            <div className={styles.test}>
                                <Text variant="head_3">Condition</Text>
                                <Text>{product.product_condition}</Text>
                            </div>
                            <div className={styles.test}>
                                <Text variant="head_3">Location</Text>
                                <Text>{product.location}</Text>
                            </div>
                            <div className={styles.test}>
                                <Text variant="head_3">Category</Text>
                                <Text>{product.category_name}</Text>
                            </div>
                        </div>
                    </div>

                    <Button text="Contact Seller" className={styles.button} />
                </div>
            </div>
        </>
    );
}
