'use client'

import styles from './page.module.css'
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { InputCheckBox } from '@/components/InputCheckBox/InputCheckBox';
import { InputText } from '@/components/InputText/InputText';
import { Text } from "@/components/Text/Text";
import { useEffect, useState } from 'react';


export default function Search() {

    const axios = require('axios')
    

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const {data: response} = await axios.get("http://localhost:3002/products")
        setData(response);
        setLoading(false);
    };

    return (
        <div>
            <header className={styles.header}>
                <Text variant="head_1">Search Results</Text>

                <InputText placeholder="Search Products" className={styles.input}></InputText>
            </header>
            <div className={styles.mainContent}>
                <div className={styles.searchResults}>
                    <Card className={styles.filtersCard}>
                        <Text variant="head_2">Filters</Text>

                        <InputCheckBox label='Category 1'></InputCheckBox>
                        <InputCheckBox label='Category 2'></InputCheckBox>
                        <InputCheckBox label='Category 3'></InputCheckBox>
                    </Card>

                    {loading === true ? 
                    <div>
                      <div className={styles.loader}/></div> : null
                    
                    }
                    <ul className={styles.productCardsGrid}>{
                        data.map((product) => (
                            <li key={product.id}>
                             <Card className={styles.productCard}>
                                <Text variant="head_2">{product.product_name}</Text>
                                <img src={product.image_url} />
                                <Text variant="body">R$ {product.price}</Text>
                            </Card>
                            </li>
                        ))
                    }
                        
                    </ul>
                </div>

                <div className={styles.pagination}>
                    <Button text="1" />
                    <Button text="2" />
                    <Button text="Next" />
                </div>
            </div>
            <footer className={styles.footer}>
                <Text variant="body">@ 2025 Ofertify</Text>
            </footer>
        </div>
    )
}