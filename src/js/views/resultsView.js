// import View from './View.js';
// import previewView from './previewView.js';
// import icons from 'url:../../img/icons.svg';

// class ResultsView extends View {
//   _parentElement = document.querySelector('.results');

//   _errorMessage = 'No recipe found for your query. Please try another one!';
//   _message = '';

//   _generateMarkup() {
//     //console.log(this._data);
//     return this._data.map(result => previewView.render(result, false)).join('');
//   }
// }

// export default new ResultsView();

// another approach using prototype inhertance instead of creating more child.......found in the qna section----more easy to understand

import PreviewView from './previewView';

class ResultsView extends PreviewView {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes for this query. Please try another one!';
  _successMessage =
    'Start by searching for a recipe or an ingredient. Have fun!';
}
export default new ResultsView();
