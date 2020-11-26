export function getAsString(value: string | string[] | undefined): string | undefined {
	if (!value) {
		return undefined;
	} else if (Array.isArray(value)) {
		return value[0];
	}
	return value;
}
