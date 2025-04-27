export function darkenColor(hex: string, amount = 20) {
    let color = hex.startsWith("#") ? hex.slice(1) : hex;
    if (color.length === 3) {
        color = color
            .split("")
            .map((c) => c + c)
            .join("");
    }
    const num = parseInt(color, 16);
    const r = Math.max((num >> 16) - amount, 0);
    const g = Math.max(((num >> 8) & 0x00ff) - amount, 0);
    const b = Math.max((num & 0x0000ff) - amount, 0);
    return `rgb(${r}, ${g}, ${b})`;
}