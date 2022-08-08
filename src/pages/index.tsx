import styles from './home.module.scss'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { GetStaticProps } from 'next'
import { stripe } from '../services/stripe'

interface IHome {
  product: {
    amount: number
  }
}

export default function Home({ product }: IHome) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1L61KNLHR9hoaA94B98NtW9P', {
    expand: ['product'],
  })

  const product = {
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}
