import React from "react";
import { DiscoverRecipesList } from "../DiscoverRecipesList/DiscoverRecipesList";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <DiscoverRecipesList />
    </div>
  )
}

export { Dashboard }