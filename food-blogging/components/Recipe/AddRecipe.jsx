import React, { useState } from "react";
import styles from "@/styles/Recipe.module.scss";
import { v4 as uuidv4 } from "uuid";
import Cta from "../utils/Cta";

export default function AddRecipe() {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    cookingsteps: [""],
    photos: [],
    typeofcuisine: "",
    mealtype: "",
    restriction: "",
  });
  const handleChange = (item) => (e) => {
    setRecipe((prev) => ({
      ...prev,
      [item]: e.target.value.trim().split(","),
    }));
  };
  const handleCookingChange = (index, event) => {
    const newSteps = [...recipe.cookingsteps];
    newSteps[index] = event.target.value;
    setRecipe((prev) => ({ ...prev, cookingsteps: newSteps }));
  };
  const addStep = (step) => {
    setRecipe((prev) => ({
      ...prev,
      cookingsteps: [...prev.cookingsteps, step],
    }));
  };
  const removeStep = (index) => {
    const newSteps = [...recipe.cookingsteps];
    newSteps.splice(index, 1);
    setRecipe((prev) => ({ ...prev, cookingsteps: newSteps }));
  };
  const renderSteps = () => {
    return (
      <ul>
        {recipe.cookingsteps.map((step, index) => (
          <li key={index}>
            <input
              type="text"
              value={step}
              onChange={(event) => handleCookingChange(index, event)}
            />
            <button onClick={() => removeStep(index)}>&#10005;</button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <div className={styles.imageupload}>
        <label htmlFor="recipe-image">Add an image</label>
        <input id="recipe-image" placeholder="add image" type="file" />
      </div>
      <div className={styles.input}>
        <label htmlFor="recipe title">Title</label>
        <input
          value={recipe.title}
          onChange={handleChange("title")}
          type="text"
          placeholder="add your recipe title here"
        />
      </div>
      <div className={styles.input}>
        <label htmlFor="ingredients"></label>
        <input
          onChange={handleChange("ingredients")}
          type="text"
          placeholder="ingredients"
        />
      </div>
      <div className={styles.cookingSteps}>
        {renderSteps()}
        <button onClick={() => addStep("")}>Add Step</button>
      </div>
      <div className={styles.input}>
        <label htmlFor="typeofcuisine">typeofcuisine</label>
        <input type="text" name="typeofcuisine" id="typeofcuisine" />
      </div>
      <div className={styles.input}>
        <label htmlFor="category">Category</label>
        <input type="text" name="category" id="category" />
      </div>
      <div className={styles.input}>
        <label htmlFor="restriction">Dietery restriction</label>
        <input type="text" name="restriction" id="restriction" />
      </div>
      <Cta> Post </Cta>
    </form>
  );
}
