import styles from './page.module.css'
import {Button} from '../components/Button/Button'

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Ofertify</h1>
      <Button text="button"> </Button>
      <Button text="search"> </Button>
    </div>
  )
}