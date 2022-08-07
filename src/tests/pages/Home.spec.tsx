import { render, screen } from '@testing-library/react'
import Home, { getStaticProps } from '../../pages'
import { stripe } from '../../services/stripe'

jest.mock('next/router')
jest.mock('next-auth/react', () => {
  return {
    useSession() {
      return [null, false]
    },
  }
})
jest.mock('../../services/stripe')

describe('Home page', () => {
  it('renders correctly', () => {
    render(<Home product={{ amount: '$10' }} />)

    expect(screen.getByText('for $10 month')).toBeInTheDocument()
  })

  it('it loads initial data', async () => {
    const retrieveStripePricesMocked = jest.mocked(stripe.prices.retrieve)

    retrieveStripePricesMocked.mockResolvedValueOnce({
      unit_amount: 1000,
    } as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            amount: '$10.00',
          },
        },
      })
    )
  })
})
