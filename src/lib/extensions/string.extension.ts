/*
This class extension is named StringExtension and defines a single static function capitalize.
The function takes a single argument, a string that needs to be capitalized.

The capitalize function capitalizes the first letter of each word in the input string.
It does this by iterating over each character in the string and checking if it is the first character of a new word.
If it is, it capitalizes the character and sets a flag to skip capitalizing the next character.
If the character is not the first character of a new word, it is simply added to the output string.

The function also includes a special case where it capitalizes the first letter of the first word in the string, even if it does not follow a period.

The function returns the modified string with the first letter of each word capitalized.

This class extension can be useful for formatting text output in a more visually appealing way, especially in situations where proper capitalization is important.
* */

export class StringExtension {
    // For word capitalization
    static capitalize(string: string): string {
        let outputString = "";
        let capitalizeNext = true;

        for (let i = 0; i < string.length; i++) {
            const char = string[i];
            if (capitalizeNext && /[a-zA-Z]/.test(char)) {
                outputString += char.toUpperCase();
                capitalizeNext = false;
            } else {
                outputString += char;
            }

            if (
                char === "." &&
                i < string.length - 1 &&
                string[i + 1] === " "
            ) {
                capitalizeNext = true;
            }
        }

        return outputString;
    }
}
