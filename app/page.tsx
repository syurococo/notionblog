import type { Metadata } from 'next'
import Link from 'next/link'
import {
  NEXT_PUBLIC_URL,
  NEXT_PUBLIC_SITE_TITLE,
  NEXT_PUBLIC_SITE_DESCRIPTION
} from './server-constants'
import GoogleAnalytics from '../components/google-analytics'
import styles from '../styles/page.module.css'

export async function generateMetadata(): Promise<Metadata> {
  const title = NEXT_PUBLIC_SITE_TITLE
  const description = NEXT_PUBLIC_SITE_DESCRIPTION
  const url = NEXT_PUBLIC_URL ? new URL(NEXT_PUBLIC_URL) : undefined
  const images = NEXT_PUBLIC_URL ? [{ url: new URL('/default.png', NEXT_PUBLIC_URL) }] : []

  const metadata: Metadata = {
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: title,
      type: 'website',
      images: images,
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: images,
    },
    alternates: {
      canonical: url,
    },
  }

  return metadata
}

const RootPage = () => (
  <>
    <GoogleAnalytics pageTitle={NEXT_PUBLIC_SITE_TITLE} />
    <div className={styles.container}>
      <div>
        <h2>ようこそ</h2>
        <p>日本脱出後に書き始めたブログです。TwitterやYouTubeでは出せない内容がメイン。</p>
        <p>日本で色々納得いかない人は参考にしてね。</p>
        <p>
          Twitter…旅ノウハウ/日本への疑問/日記{' '}
          <Link href="https://twitter.com/peppermint_sgr">
            Twitterへのリンク
          </Link>
        </p>
        <p>
          YouTube…近況報告用、普通の旅動画{' '}
          <Link href="http://www.youtube.com/@user-gh2fe4kz8m">
            YouTubeへのリンク
          </Link>
        </p>
      </div>
    </div>
  </>
)

export default RootPage
