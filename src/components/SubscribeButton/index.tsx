import { signIn, useSession } from 'next-auth/react'
import styles from './styles.module.scss'

interface ISubscribeButton {
  priceId: string
}

export function SubscribeButton({ priceId }: ISubscribeButton) {
  const { data: session } = useSession()

  function handleSubscribe() {
    if (!session) {
      signIn('github')

      return
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  )
}
