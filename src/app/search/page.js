import styles from './page.module.css'
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { InputCheckBox } from '@/components/InputCheckBox/InputCheckBox';
import { InputText } from '@/components/InputText/InputText';
import { Text } from "@/components/Text/Text";


export default function Search() {

    const axios = require('axios')
      
    console.log("test")
    console.log(listItems.data)

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

                    <ul className={styles.productCardsGrid}>
                        {listItems}
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