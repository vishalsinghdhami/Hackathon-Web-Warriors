import AddRecipe from "@/components/Recipe/AddRecipe";
import Cta from "@/components/utils/Cta";
import MyModal from "@/components/utils/Modal";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "@/styles/Recipe.module.scss";
import axios from "axios";
import Container from "@/components/utils/Container";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
export default function Recipes({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(data);
  return (
    <div>
      <Container>
        <Cta className={styles.cta} onClick={() => setIsOpen(true)}>
          Create New Recipe
        </Cta>
      </Container>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <AddRecipe setIsOpen={setIsOpen} />
      </MyModal>
      <main>
        {data.map((e) => (
          <>
            <Container>
              <div className={styles.recipeCover}>
                <div className={styles.left}>
                  <img
                    style={{
                      objectFit: "cover",
                      height: 300,
                      width: 300,
                      objectPosition: "center",
                    }}
                    alt={e.photos.title}
                    src={e.photos.url}
                  />
                  <div className={styles.base}></div>
                </div>
                <div className={styles.right}>
                  <h2 className={styles.heading}>{e.title}</h2>
                  <p>Ingredients: {e.ingredients}</p>
                  <div className={styles.row}>
                    <p className={styles.typeofcuisine}>{e.typeofcuisine}</p>
                    <p>{e.mealtype}</p>
                  </div>
                  <p>
                    dietary restrictions: contains{" "}
                    {e?.restriction?.map((e) => (
                      <span key={uuidv4()}>{e + ", "}</span>
                    ))}
                  </p>
                  {e.cookingsteps.map((e, i) => (
                    <div key={i}> {e}</div>
                  ))}
                </div>
              </div>
            </Container>
          </>
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
