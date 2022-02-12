import React from "react";
import { Route } from "react-router-dom";

const TopSectionRouteWrapper = ({
  component: Component,
  layout: Layout,
  ...rest
}) => (
  <Route 
    {...rest}
    render={(props) => (
      <Layout {...props}>
        <Component {...props}/>
      </Layout>
    )}  
  />
)

export default TopSectionRouteWrapper