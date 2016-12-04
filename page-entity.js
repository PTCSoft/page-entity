(function (){
  'use strict';

  class PageEntity extends Polymer.Element {
    static get is () { return 'page-entity'; }

    static get config () {
      return {
        properties: {
          indexnumber: {
            type: Number,
          },
        }
      };
    } // end config

    opendraw () {
      var appdrawer = this.shadowRoot.querySelector('app-drawer');
      appdrawer.setAttribute('opened', true);
    }

    send (event) {
      console.log('************ SEND *************');

      // console.log('routeData ' + this.routeData.page);
      // console.log('route.path ' + this.route.path);

      // this.set('route.path', route.path + event.detail);

      // console.log('route.path ' + this.route.path);
      // console.log('subroute ' + this.subroute.path);
      this.indexnumber = event.detail.dataid;
      console.log(this.indexnumber);

      console.log('************ SEND *************');
    }

    ready () {
      super.ready();

      var pel = this.shadowRoot.querySelector('page-entity-detail');

      pel.addEventListener("showdrawer", function(e) {
        // console.info("Event is: ", e);
        // console.info("Custom data is: ", e.detail);
      });

      pel.addEventListener("sendindex", function(e) {
        // console.info("Event is: ", e);
        // console.info("Custom data is: ", e.detail);
      });
    }
  }

  customElements.define(PageEntity.is, PageEntity);
})();
