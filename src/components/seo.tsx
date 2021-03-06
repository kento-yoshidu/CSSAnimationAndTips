import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
  pageTitle?: string,
  pagepath?: string,
  pagedesc?: string
}

const Seo: React.VFC<Props> = (props) => {
  const data = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          title
          lang
          description
          siteUrl
          locale
        }
      }
    }`
  )

  const title = props.pageTitle
    ? `${props.pageTitle} | ${data.site?.siteMetadata?.title}`
    : data.site?.siteMetadata?.title

  const description = props.pagedesc || data.site?.siteMetadata?.description 

  const url = props.pagepath
    ? `${data.site?.siteMetadata?.siteUrl}${props.pagepath}`
    : data.site?.siteMetadata?.siteUrl

  return (
    <Helmet>
      <html lang={data.site?.siteMetadata?.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={data.site?.siteMetadata?.title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={data.site?.siteMetadata?.locale} />
    </Helmet>
  )
}

export default Seo