import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit ame.</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              accusantium sint reiciendis amet fugit! Quod, mollitia fugiat
              earum distinctio error qui, quas vel nisi et maiores obcaecati hic
              illo nulla.
            </p>
          </a>

          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit ame.</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              accusantium sint reiciendis amet fugit! Quod, mollitia fugiat
              earum distinctio error qui, quas vel nisi et maiores obcaecati hic
              illo nulla.
            </p>
          </a>

          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit ame.</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              accusantium sint reiciendis amet fugit! Quod, mollitia fugiat
              earum distinctio error qui, quas vel nisi et maiores obcaecati hic
              illo nulla.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
