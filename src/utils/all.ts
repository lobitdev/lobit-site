export const getFormattedDate = (date: string) => {
    return date ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }) : '';
}