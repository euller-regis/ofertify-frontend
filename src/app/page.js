"use client";
import styles from "./page.module.css";
import { Button } from "../components/Button/Button";
import { Card } from "../components/Card/Card";
import { Text } from "../components/Text/Text";
import {
    faLineChart,
    faList,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    return (
        <div className={styles.page}>
            <Card className={styles.container}>
                <Text variant="head_2">
                    Sell for Free on Our E-Commerce Platform
                </Text>
                <Text variant="body">
                    List your products and start selling without any fees.
                </Text>
                <Button text="Get Started" variant="primary"></Button>
            </Card>
            <Card className={styles.container}>
                <Text variant="head_2">Key Features</Text>
                <div className={styles.row}>
                    <FontAwesomeIcon
                        icon={faShoppingCart}
                        className={styles.icon}
                    />
                    <Text variant="body">100% free to use</Text>
                </div>
                <div className={styles.row}>
                    <FontAwesomeIcon icon={faList} className={styles.icon} />
                    <Text variant="body">Easy product listing</Text>
                </div>
                <div className={styles.row}>
                    <FontAwesomeIcon
                        icon={faLineChart}
                        className={styles.icon}
                    />
                    <Text variant="body">User friendly dashboard</Text>
                </div>
            </Card>
            <Card className={styles.container}>
                <Text variant="head_2">See How It Works</Text>
                <Text variant="body">Showcase</Text>
            </Card>
        </div>
    );
}
