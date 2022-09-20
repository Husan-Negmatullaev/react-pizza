import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = (props) => (
  <ContentLoader 
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
   >
      <circle cx="140" cy="145" r="130" /> 
      <rect x="0" y="290" rx="10" ry="10" width="280" height="30" /> 
      <rect x="0" y="332" rx="10" ry="10" width="280" height="75" /> 
      <rect x="0" y="428" rx="10" ry="10" width="120" height="25" /> 
      <rect x="145" y="420" rx="25" ry="25" width="130" height="40" />
   </ContentLoader>
);

export default PizzaSkeleton;