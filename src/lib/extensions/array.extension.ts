/*
This class contains a static function named updateItemById that is a member of the ArrayExtension class.
The updateItemById function takes two arguments, an array of ArrayItem objects, and an updatedItem object that also has a string id property.
The function searches the input items array for an object with the same id as the updatedItem object.
If a match is found, the function replaces the old object with the updated object, and returns a new array with the updated object.
If no match is found, the original items array is returned.

The ArrayItem type is defined as an object with an id property that has a string value, and any other property with a value of any type.
This allows any additional properties to be added to the ArrayItem object.

The updateItemById function is a pure function that does not modify the input items array.
Instead, it creates a new array that includes the updated object and returns it.
The spread operator is used to concatenate the items array before and after the updated object.

This class and function can be useful for updating objects in an array of ArrayItem objects based on their id property.
* */

type ArrayItem = {
    id: string;
} & { [key: string]: any };

export class ArrayExtension {
    static updateItemById(
        items: ArrayItem[],
        updatedItem: ArrayItem,
    ): ArrayItem[] {
        const index = items.findIndex((item) => item.id === updatedItem.id);
        if (index === -1) {
            // if item is not found, return the original array
            return items;
        }
        // replace the old item with the updated item
        return [
            ...items.slice(0, index),
            updatedItem,
            ...items.slice(index + 1),
        ];
    }
}
