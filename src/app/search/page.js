import styles from './page.module.css'
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { Text } from "@/components/Text/Text";

export default function Search() {

    const response = [
        { name: 'Magic deck', price: 90 },
        { name: 'Vacuum robot', price: 300 },
        { name: 'Desk', price: 45.50 },
        { name: 'Pencil', price: 1.50 },
        { name: 'iPhone', price: 4500.50 }
    ]

    const listItems = response.map((product) => (
        <li key={product.name}>
            <Card className={styles.productCard}>
                <Text variant="head_2">{product.name}</Text>
                <Text variant="body">R$ {product.price}</Text>
            </Card>
        </li>
    ))
    return (
        <div>
            <header className={styles.header}>
                <Text variant="head_1">Search Results</Text>
            </header>
            <div className={styles.mainContent}>
                <div className={styles.searchResults}>
                    <Card className={styles.filtersCard}>
                        <Text variant="head_2">Filters</Text>
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