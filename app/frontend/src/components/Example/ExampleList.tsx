import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Why is the Dartmouth case considered to be important in the economic history of United States ?",
        value: "Why is the Dartmouth case considered to be important in the economic history of United States ?"
    },
    { text: "What to do if Management of an existing trust that may contain criminal property ?", value: "What to do if Management of an existing trust that may contain criminal property ?" },
    { text: "Tell us Project Centurion", value: "Tell us Project Centurion" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
