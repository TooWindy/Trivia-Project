import React from "react";
import { Route } from "react-router-dom";
import Start from './Components/Start'

const Routes = () => {
  return (
    <div>
      <Route path="/" component={Start}/>
    </div>
  )
}

export default Routes
