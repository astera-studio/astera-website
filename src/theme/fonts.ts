const fontFamilies = {
  display: "'Big Shoulders Display', sans-serif",
  serif: "'Playfair Display', serif",
  sans: "'DM Sans', sans-serif",
} as const

export const F = {
  ...fontFamilies,
  heading: fontFamilies.display,
  editorial: fontFamilies.serif,
  body: fontFamilies.sans,
  eyebrow: fontFamilies.sans,
  metadata: fontFamilies.sans,
  micro: fontFamilies.sans,
}
