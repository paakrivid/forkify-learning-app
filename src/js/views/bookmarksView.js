// import View from './View.js';
// import previewView from './previewView.js';
// import icons from 'url:../../img/icons.svg';

// class BookmarksView extends View {
//   _parentElement = document.querySelector('.bookmarks__list');
//   _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it.';
//   _message = '';

//   _generateMarkup() {
//     //console.log(this._data);
//     return this._data
//       .map(bookmark => previewView.render(bookmark, false))
//       .join('');
//   }
// }

// export default new BookmarksView();

// another approach using prototype inhertance instead of creating more child.......found in the qna section----more easy to understand

import PreviewView from './previewView';

class BookmarksView extends PreviewView {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find an bookmark a recipe';
  _successMessage =
    'Start by searching for a recipe or an ingredient. Have fun!';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
}
export default new BookmarksView();
