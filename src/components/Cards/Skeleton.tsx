import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="skeleton" 
        speed={0.5}
        width={255}
        height={571}
        viewBox="0 0 255 571"
        backgroundColor="#e9e9e9"
        foregroundColor="#d3d3d3"
        {...props}
    >
<rect x="-1" y="-16" rx="21" ry="21" width="255" height="571" />
    </ContentLoader>
)

export default Skeleton;