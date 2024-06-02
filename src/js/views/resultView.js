import View from "./View";
import previewView from "./previewViews";

class ResultView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipes found for your query! Please try again!";
  _successMessage = "Recipe loaded successfully!";

  _generateMarkup() {
    return this._data
      .map((recipe) => previewView.render(recipe, false))
      .join("");
  }
}

export default new ResultView();
