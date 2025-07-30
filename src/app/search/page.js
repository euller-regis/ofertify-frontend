"use client";

import styles from "./page.module.css";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { InputCheckBox } from "@/components/InputCheckBox/InputCheckBox";
import { InputText } from "@/components/InputText/InputText";
import { Text } from "@/components/Text/Text";
import { useEffect, useState } from "react";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const DEFAULT_IMAGE_URL =
    "https://www.publicdomainpictures.net/pictures/470000/velka/image-not-found.png";

export default function Search() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async (pageToFetch = 1) => {
        setLoading(true);
        let fullUrl = "http://localhost:3002/products";
        if (searchText != "") {
            fullUrl += "?page=" + pageToFetch + "&search=" + searchText;
        } else {
            fullUrl += "?page=" + pageToFetch;
        }
        const { data: response } = await axios.get(fullUrl);
        setData(response);
        setLoading(false);
    };

    console.log(data);

    return (
        <div>
            <header className={styles.header}>
                <Text variant="head_1">Search Results</Text>
                <div className={styles.searchBar}>
                    <InputText
                        placeholder="Search Products"
                        onChange={(event) => setSearchText(event.target.value)}
                        className={styles.input}
                    ></InputText>
                    <Button
                        text="Search"
                        onClick={() => {
                            fetchData();
                            setPage(1);
                            router.replace(
                                "/search?page=1&search=" + searchText
                            );
                        }}
                    />
                </div>
            </header>
            <div className={styles.mainContent}>
                <div className={styles.searchResults}>
                    <Card className={styles.filtersCard}>
                        <Text variant="head_2">Filters</Text>

                        <InputCheckBox label="Category 1"></InputCheckBox>
                        <InputCheckBox label="Category 2"></InputCheckBox>
                        <InputCheckBox label="Category 3"></InputCheckBox>
                    </Card>

                    {loading === true ? (
                        <div>
                            <div className={styles.loader} />
                        </div>
                    ) : null}

                    {data ? (
                        <ul className={styles.productCardsGrid}>
                            {data.products.map((product) => (
                                <li key={product.id}>
                                    <Card className={styles.productCard}>
                                        <Text variant="head_2">
                                            {product.product_name}
                                        </Text>
                                        <img
                                            src={
                                                product.image_url ||
                                                DEFAULT_IMAGE_URL
                                            }
                                        />
                                        <Text variant="body">
                                            R$ {product.price}
                                        </Text>
                                    </Card>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>

                <div className={styles.pagination}>
                    {data ? (
                        <div>
                            <Button
                                text="1"
                                onClick={() => {
                                    router.replace("/search?page=1");
                                    setPage(1);
                                    fetchData(1);
                                }}
                                disabled={page === 1}
                            />
                            {data.page_total != 1 ? (
                                <Button
                                    text={data.page_total}
                                    onClick={() => {
                                        router.replace(
                                            "/search?page=" + data.page_total
                                        );
                                        setPage(data.page_total);
                                        fetchData(data.page_total);
                                    }}
                                    disabled={page === data.page_total}
                                />
                            ) : null}
                            {page < data.page_total ? (
                                <Button
                                    text="Next"
                                    onClick={() => {
                                        router.replace(
                                            "/search?page=" + (page + 1)
                                        );
                                        setPage(page + 1);
                                        fetchData(page + 1);
                                    }}
                                />
                            ) : null}
                        </div>
                    ) : null}
                </div>
            </div>
            <footer className={styles.footer}>
                <Text variant="body">@ 2025 Ofertify</Text>
            </footer>
        </div>
    );
}
