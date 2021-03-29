// import View from './View.js';
import icons from 'url:../../img/icons.svg';

// class PreviewView extends View {
//   _parentElement = '';

//   _generateMarkup() {
//     const id = window.location.hash.slice(1);

//     return `
//         <li class="preview">
//             <a class="preview__link ${
//               this._data.id === id ? 'preview__link--active' : ''
//             }" href="#${this._data.id}">
//               <figure class="preview__fig">
//                 <img src="${this._data.image}" alt="${this._data.title}" />
//               </figure>
//               <div class="preview__data">
//                 <h4 class="preview__title">${this._data.title}</h4>
//                 <p class="preview__publisher">${this._data.publisher}</p>
//                 <div class="preview__user-generated">
//                   <svg>
//                     <use href="${icons}#icon-user"></use>
//                   </svg>
//                 </div>
//               </div>
//             </a>
//           </li>
//       `;
//   }
// }

// export default new PreviewView();

// another approach using prototype inhertance instead of creating more child.......found in the qna section----more easy to understand

import View from './View';
export default class PreviewView extends View {
  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join();
  }
  _generateMarkupPreview(result) {
    const id = window.location.hash.slice(1);
    //console.log(result);
    return `
           <li class="preview">
            <a class="preview__link ${
              result.id === id ? 'preview__link--active' : ''
            }" href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>

                 <div class="preview__user-generated ${
                   result.key ? '' : 'hidden'
                 }">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
    `;
  }
}
