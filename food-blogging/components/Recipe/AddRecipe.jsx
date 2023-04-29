import React from "react";
import styles from "@/styles/Recipe.module.scss";
export default function AddRecipe() {
  return (
    <form className={styles.form}>
      <div className={styles.imageupload}>
        <label htmlFor="recipe-image">Add an image</label>
        <input id="recipe-image" placeholder="add image" type="file" />
      </div>
      <div className={styles.input}>
        <label htmlFor="recipe title">Title</label>
        <input type="text" placeholder="add your recipe title here" />
      </div>
      <div className={styles.input}>
        <label htmlFor="ingredients"></label>
        <input type="text" placeholder="ingredients" />
      </div>
      <div className={styles.textbox}>
        <textarea type="text" placeholder="cooking steps" />
      </div>
    </form>
  );
}
