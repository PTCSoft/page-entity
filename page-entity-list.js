(function (){
  'use strict';

  class PageEntityList extends Polymer.Element {
    static get is () { return 'page-entity-list'; }

    static get config () {
      return {
        properties: {
        }
      };
    } // end config

    tap (event) {
      console.log('************ TAP **************');

      var indexnum = event.model.item.index;
      console.log('dataindex(ID) : ' + this.dataindex);

      // this.fire('sendindex', this.dataindex);
      var myevent = new CustomEvent("sendindex",
        {
          detail: {
            dataid : indexnum
          }
        }
      );

      this.dispatchEvent(myevent);

      console.log('************ TAP **************');
    }
  }

  customElements.define(PageEntityList.is, PageEntityList);
})();
