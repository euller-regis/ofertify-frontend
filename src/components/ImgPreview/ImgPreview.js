import styles from "./ImgPreview.module.css";

export function ImgPreview(props) {
    return <img className={styles.img} src={props.src} />;
}
