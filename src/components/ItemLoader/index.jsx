import React from "react"
import ContentLoader from "react-content-loader"

const ItemLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={240}
    height={70}
    viewBox="0 0 240 70"
    backgroundColor="#f0f0f0"
    foregroundColor="#c2c2c2"
    {...props}
  >
    <rect x="65" y="16" rx="8" ry="8" width="97" height="16" /> 
    <rect x="65" y="40" rx="7" ry="7" width="157" height="14" /> 
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
    <rect x="13" y="13" rx="5" ry="5" width="42" height="42" />
  </ContentLoader>

)

export default ItemLoader