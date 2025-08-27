import styles from "./SelectBox.module.css";

export const SelectBox = (props) => {
    return (
        <select onChange={props.onChange}>
            {props.options ? (
                <>
                    {props.options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </>
            ) : null}
        </select>
    );
};
