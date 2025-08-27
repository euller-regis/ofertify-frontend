"use client";

import styles from "./page.module.css";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { InputCheckBox } from "@/components/InputCheckBox/InputCheckBox";
import { InputText } from "@/components/InputText/InputText";
import { Text } from "@/components/Text/Text";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SelectBox } from "@/components/SelectBox/SelectBox";
import { buildQuerystring } from "../utils/url-utils";

const DEFAULT_IMAGE_URL =
    "https://www.publicdomainpictures.net/pictures/470000/velka/image-not-found.png";

export default function Search() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [sortedBy, setSortedBy] = useState("name");
    const [page, setPage] = useState(1);
    const router = useRouter();
    const pageTotal = data ? data.page_total : undefined;

    useEffect(() => {
        fetchData();
    }, [page, sortedBy]);

    const fetchData = async () => {
        setLoading(true);
        let fullUrl = "http://localhost:3002/products";
        fullUrl += buildQuerystring({
            sort: sortedBy,
            page: page,
            search: searchText,
        });
        const { data: response } = await axios.get(fullUrl);
        setData(response);
        setLoading(false);
    };

    const changePage = (toPage) => {
        setPage(toPage);
        const queryString = buildQuerystring({
            sort: sortedBy,
            page: toPage,
            search: searchText,
        });
        router.replace(`/search${queryString}`);
    };

    const changeSort = (event) => {
        setPage(1);
        setSortedBy(event.target.value);
        const queryString = buildQuerystring({
            sort: event.target.value,
            page: 1,
            search: searchText,
        });
        router.replace(`/search${queryString}`);
    };

    const onSearchText = () => {
        fetchData();
        setPage(1);
        const queryString = buildQuerystring({
            sort: sortedBy,
            page: 1,
            search: searchText,
        });
        router.replace(`/search${queryString}`);
    };

    return (
        <div>
            <header className={styles.header}>
                <Text variant="head_1">Search Results</Text>
                <div className={styles.searchBar}>
                    <InputText
                        placeholder="Search Products"
                        onChange={(event) => setSearchText(event.target.value)}
                        className={styles.input}
                        onKeyUp={(event) =>
                            event.key === "Enter" && onSearchText()
                        }
                    ></InputText>
                    <Button text="Search" onClick={onSearchText} />
                </div>
            </header>
            <SelectBox
                onChange={(event) => {
                    changeSort(event);
                }}
                options={data ? data.sortOptions : null}
            ></SelectBox>
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

                {data ? (
                    <div className={styles.pagination}>
                        <Button
                            variant="primary"
                            text={<FontAwesomeIcon icon={faAngleLeft} />}
                            disabled={page === 1}
                            onClick={() => changePage(page - 1)}
                        />
                        <Button
                            text="1"
                            variant={page === 1 ? "secondary" : "primary"}
                            onClick={
                                page === 1 ? undefined : () => changePage(1)
                            }
                        />
                        {page >= 3 && page !== pageTotal ? (
                            <Button text="..." disabled />
                        ) : null}
                        {pageTotal >= 3 ? (
                            <Button
                                variant="secondary"
                                text={
                                    page > 1 && page < pageTotal ? page : "..."
                                }
                            />
                        ) : null}
                        {page !== 1 && page <= pageTotal - 2 ? (
                            <Button text="..." disabled />
                        ) : null}
                        {pageTotal != 1 ? (
                            <Button
                                text={pageTotal}
                                variant={
                                    page === pageTotal ? "secondary" : "primary"
                                }
                                onClick={
                                    page === pageTotal
                                        ? undefined
                                        : () => changePage(pageTotal)
                                }
                            />
                        ) : null}
                        <Button
                            text={<FontAwesomeIcon icon={faAngleRight} />}
                            disabled={page >= pageTotal}
                            onClick={() => changePage(page + 1)}
                        />
                    </div>
                ) : null}
            </div>
            <footer className={styles.footer}>
                <Text variant="body">@ 2025 Ofertify</Text>
            </footer>
        </div>
    );
}
