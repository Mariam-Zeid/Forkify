import * as model from "./model";
import recipeView from "./views/recipeView";

///////////////////////////////////////
const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1); // #527f7f7 => 527f7f7
    // guard clause
    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
};
init();
