import type {
    ReactElement,
    LiHTMLAttributes,
    JSXElementConstructor,
} from "react";
import styles from "../features/App.module.css";

type CollectionType =
    | number[]
    | { name: string; age: number }
    | Set<string>
    | [boolean, string, number];

const practiceCollections = (): Map<string, CollectionType> => {
    // Create a Map of collections to demonstrate collection usage
    const collectionMap: Map<string, CollectionType> = new Map();
    collectionMap.set("numbersArray2", [1, 2, 3, 4, 5]);
    collectionMap.set("stringSet", new Set(["apple", "banana", "cherry"]));
    collectionMap.set("userObject", { name: "Alice", age: 30 });
    collectionMap.set("tupleExample", [true, "hello", 42] as [
        boolean,
        string,
        number,
    ]);
    return collectionMap;
};

type listItem<T> = ReactElement<
    LiHTMLAttributes<HTMLLIElement>,
    T extends string ? string : JSXElementConstructor<any>
>;

const displayCollections = (): listItem<"li">[] => {
    let content: listItem<"li">[] = [];
    const collections: Map<string, CollectionType> = practiceCollections();
    collections.forEach((value: CollectionType, key: string) => {
        content.push(<li key={key}>{`${key}: ${JSON.stringify(value)}`}</li>);
    });
    return content;
};

const MyButton = ({ title }: { title: string }) => {
    return <button>{title}</button>;
};

export default function MyApp() {
    return (
        <div className={styles.colContainer}>
            <h1>Welcome to my app</h1>
            <MyButton title="This is a button" />
            <ul>{displayCollections()}</ul>
        </div>
    );
}
