import AddRecipe from "@/components/Recipe/AddRecipe";
import Cta from "@/components/utils/Cta";
import MyModal from "@/components/utils/Modal";
import React, { useState } from "react";

export default function Recipes() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Cta onClick={() => setIsOpen(true)}>Create New Recipe</Cta>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <AddRecipe setIsOpen={setIsOpen} />
      </MyModal>
    </div>
  );
}
