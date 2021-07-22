import NextHead from "next/head";

type Props = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

// メタヘッダー
const Head: React.FC<Props> = (props) => {
  const title = props.title ? props.title : "";
  const description = props.description ? props.description : "";
  const url = props.url ? props.url : "";
  const image = props.image ? props.image : "";
  const keyword = "";

  return (
    <NextHead>
      <title>{props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta name="format-detection" content="telephone=no" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      <link rel="shortcut icon" href={`/favicon.ico`} />
      <link rel="apple-touch-icon" href={`/apple-touch-icon.png`} />
    </NextHead>
  );
};

export default Head;
