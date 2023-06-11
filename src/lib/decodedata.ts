const LETTER_CHARS = {
	english: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
};
const NUMERIC_CHARS = "1234567890";
const SYMBOL_CHARS = "\"',./-_=+?!@£$%&;:|()[]{}~`<> ";

export const UPDATE_SPEED = 1;

export const charactersArray = () => {
	const characterString = LETTER_CHARS["english"] + NUMERIC_CHARS + SYMBOL_CHARS;
	return characterString.split("");
};
