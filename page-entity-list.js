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
	}

	customElements.define(PageEntityList.is, PageEntityList);
})();
