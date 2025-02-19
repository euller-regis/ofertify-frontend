import styles from './page.module.css'
import {Button} from '../components/Button/Button'
import { InputText } from '@/components/InputText/InputText'
import { Card } from '@/components/Card/Card'
import { Text } from '@/components/Text/Text'

export default function Home() {
  return (
    <div className={styles.page}>
      <Card>
        <Text variant="head">
          Sell for Free on Our E-Commerce Platform
        </Text>
        <Text variant="body">
          List your products and start selling without any fees.
        </Text>
        <Button text="Get Started" variant="primary"></Button>
      </Card>
      <Card>
        <Text variant="head">
          Key Features
        </Text>
        <Text variant="body">100% free to use</Text>
        <Text variant="body">Easy product listing</Text>
        <Text variant="body">User friendly dashboard</Text>
      </Card>
      <Card>
        <Text variant="head">
          See How It Works
        </Text>
        <Text variant="body">Showcase</Text>
      </Card>
    </div>


  )


}