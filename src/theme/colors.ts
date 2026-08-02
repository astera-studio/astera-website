const brandColors = {
  black: '#090909',
  white: '#F4F1EA',
  orange: '#E86A33',
  turquoise: '#467978',
  deep: '#224B5A',
  graphite: '#222222',
  gray: '#D8D8D8',
} as const

export const C = {
  ...brandColors,
  canvas: brandColors.black,
  textPrimary: brandColors.white,
  accentPrimary: brandColors.orange,
  accentTechnical: brandColors.turquoise,
  lineSubtle: 'rgba(244,241,234,0.065)',
  surfaceAlternative: '#0b0b0b',
}
