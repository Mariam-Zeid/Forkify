import View from "./View";
import icons from "url:../../img/icons.svg";

class ResultView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipes found for your query! Please try again!";
  _successMessage = "Recipe loaded successfully!";

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }
  _generateMarkupPreview(recipe) {
    const id = window.location.hash.slice(1);

    return `<li class="preview">
            <a class="preview__link ${
              recipe.id === id && "preview__link--active"
            }" href="#${recipe.id}">
              <figure class="preview__fig">
                <img src="${recipe.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${recipe.title}</h4>
                <p class="preview__publisher">${recipe.publisher}</p>
              </div>
            </a>
          </li>
    `;
  }
}

export default new ResultView();
