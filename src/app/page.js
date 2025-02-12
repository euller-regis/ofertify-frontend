import styles from './page.module.css'
import {Button} from '../components/Button/Button'
import { InputText } from '@/components/InputText/InputText'

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Product ad creation</h1>

      <InputText id="name" placeholder="Full name of the product" label="Name" />
      <br/>
      <InputText id="brand" placeholder="Example: Apple" label="Brand" />
      <br/>
      <InputText id="price" placeholder="Example: R$ 600,00" label="Price" />

      <InputText />

      <Button text="Primario" variant="primary"> </Button>
      <Button text="Secundario" variant="secondary"> </Button>
      <br/>
      <br/>
    </div>


  )


}