import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
    logo: <span>ScalaWorks</span>,
    project: {
      link: 'https://github.com/scala-works/scala-works',
    },
    docsRepositoryBase: 'https://github.com/scala-works/scala-works/blob/main',
   head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://scala.works' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return <>
      <title>ScalaWorks</title>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || 'ScalaWorks'} />
      <meta property="og:description" content={frontMatter.description || 'A site about the Scala 3 programming language'} />
    </>
  },
  footer: {
    text: <span>
      ScalaWorks site content is licensed the <a href="https://github.com/scala-works/scala-works/blob/main/LICENSE.md" target="_blank">Apache 2.0 License</a>.
    </span>,
  }, 
  }