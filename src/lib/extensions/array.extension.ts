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
