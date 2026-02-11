const practiceCollections = (): Map<string, any> => {
    // Create a Map of collections to demonstrate collection usage
    const collectionMap: Map<string, any> = new Map();
    collectionMap.set("numbersArray", [1, 2, 3, 4, 5]);
    collectionMap.set("stringSet", new Set(["apple", "banana", "cherry"]));
    collectionMap.set("userObject", { name: "Alice", age: 30 });
    collectionMap.set("tupleExample", [true, "hello", 42] as [boolean, string, number]);
    return collectionMap;
}

const displayCollections = (): string => {
    let content: string = "Displaying Collections 2:\n";
    const collections: Map<string, any> = practiceCollections();
    collections.forEach((value: any, key: string) => {
        content += `${key}:${JSON.stringify(value)}\n`;
    });
    return content;
};

// declare a main arrow function that returns a string "Collections Module"
const main = (): string => {
    let content: string = displayCollections();
    return content;
};

console.log(main());
