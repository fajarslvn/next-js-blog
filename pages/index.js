import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi my name is <b>fsec</b>. I'm a freelance Backend engineer.</p>
        <p>
        To check our first post, please{' '}
          <Link href='/posts/first-post'>
            <a>click here...</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}