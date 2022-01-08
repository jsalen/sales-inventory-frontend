import { Helmet } from 'react-helmet'

export const MetaHead = ({ title, description, image, url }) => (
  <Helmet>
    <title>{`Inv. & Sales - ${title}`}</title>
    <meta name='description' content={description} />
    <meta
      name='robots'
      content='max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    />
    <meta name='keywords' content='inventory,sales,system' />
    <meta author='Joseph Salen' />
    <link rel='canonical' href={url} />
    <meta property='og:locale' content='en_US' />
    <meta property='og:type' content='article' />
    <meta property='og:title' content={`Inv. & Sales - ${title}`} />
    <meta property='og:description' content={description} />
    <meta property='og:url' content={url} />
    <meta property='og:site_name' content='Inventory and Sales System' />
    <meta property='og:image' content={image} />
    <meta property='og:image:secure_url' content={image} />
    <meta property='og:image:width' content='1280' />
    <meta property='og:image:height' content='720' />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:site' content='@salenjs' />
    <meta name='twitter:creator' content='@salenjs' />
    <meta name='twitter:title' content={`Inv. & Sales - ${title}`} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content={image} />
  </Helmet>
)
