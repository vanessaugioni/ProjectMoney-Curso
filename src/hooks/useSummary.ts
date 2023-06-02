import { TransactionsContext } from '../contexts/Transactions.Context'
import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += Number(transaction.price)
        acc.total += Number(transaction.price)
      } else {
        acc.outcome += Number(transaction.price)
        acc.total -= Number(transaction.price)
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
