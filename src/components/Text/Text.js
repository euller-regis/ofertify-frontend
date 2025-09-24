import styles from "./Text.module.css";

/*
Props {
    variant: 'body' | 'head_1' | 'head_2'
    color: 'black' | 'blue'
    children: ReactElement
}
*/

export function Text(props) {
    const { variant = "body", color = "black", children } = props;
    const variants = ["body", "head_1", "head_2"];
    const colors = ["black", "blue"];
    if (!variants.includes(variant)) {
        throw new Error(`variant "${variant}" not supported!`);
    }
    if (!colors.includes(color)) {
        throw new Error(`color "${color}" not supported`);
    }

    const colorStyle = styles[color];
    const textStyle = styles[variant];

    return <span className={`${textStyle} ${colorStyle}`}>{children}</span>;
}
