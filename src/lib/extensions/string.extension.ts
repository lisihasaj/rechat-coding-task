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
