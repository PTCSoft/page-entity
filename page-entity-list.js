(function (){
  'use strict';

  class PageEntityList extends Polymer.Element {
    static get is () { return 'page-entity-list'; }

    static get config () {
      return {
        properties: {
          dataindex: {
            type: Number
          }
        }
      };
    } // end config

    tap (event) {
      // console.log('************ TAP **************');

      this.dataindex = event.model.item.index;
      // console.log('dataindex(ID) : ' + this.dataindex);

      this.fire('sendindex', this.dataindex);

      // console.log('************ TAP **************');
    }
  }

  customElements.define(PageEntityList.is, PageEntityList);
})();
