export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat('pt-br').format(new Date(date))
}

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
