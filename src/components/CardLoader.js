import React from "react"
import ContentLoader from "react-content-loader"

const CardLoader = () => (
  <ContentLoader
    speed={2}
    width={250}
    height={300}
    style={{margin:10}}
    viewBox="0 0 250 300"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="4" rx="3" ry="3" width="250" height="150" />
    <rect x="0" y="175" rx="3" ry="3" width="88" height="6" />
    <rect x="0" y="191" rx="3" ry="3" width="52" height="6" />
    <rect x="0" y="214" rx="3" ry="3" width="250" height="6" />
    <rect x="0" y="232" rx="3" ry="3" width="250" height="6" />
    <rect x="0" y="250" rx="3" ry="3" width="250" height="6" />
    <rect x="0" y="270" rx="3" ry="3" width="130" height="6" />
  </ContentLoader>
)

export default CardLoader

