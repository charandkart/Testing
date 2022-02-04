import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { logo } from "../utils/imagePath";

const Meta = (props) => {
  const { title, description, url, type, image, twitter_image } = props;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />

        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={"DOLPHINSKART.name"} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={twitter_image} />
      </Helmet>
    </>
  );
};

export default Meta;

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  twitter_image: PropTypes.string,
};
Meta.defaultProps = {
  title: "DOLPHINSKART.name",
  description: "Shop Wise, Shop More",
  url: "https://quirky-visvesvaraya-5f51ff.netlify.app/",
  type: "website",
  image: "https://quirky-visvesvaraya-5f51ff.netlify.app/" + logo,
  twitter_image: logo,
};
