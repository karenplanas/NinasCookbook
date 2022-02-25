import React from "react";
import { DiscoverRecipesList } from "../DiscoverRecipesList/DiscoverRecipesList";
import { LayoutNav } from "../LayoutNav/LayoutNav";

const Dashboard: React.FC = () => {
  return (
    <LayoutNav>
      <DiscoverRecipesList />
    </LayoutNav>
  )
}

export { Dashboard }