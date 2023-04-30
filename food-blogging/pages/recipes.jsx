import AddRecipe from "@/components/Recipe/AddRecipe";
import Cta from "@/components/utils/Cta";
import MyModal from "@/components/utils/Modal";
import React, { useState } from "react";

import styles from "@/styles/Recipe.module.scss";
import axios from "axios";

export default function Recipes({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(data);
  return (
    <div>
      <Cta className={styles.cta} onClick={() => setIsOpen(true)}>
        Create New Recipe
      </Cta>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <AddRecipe setIsOpen={setIsOpen} />
      </MyModal>
      <main>
        {data.map((e) => (
          <p key={e._id}>{JSON.stringify(e)}</p>
        ))}
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get("https://savorshare.onrender.com/recipe/getall");
  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}
