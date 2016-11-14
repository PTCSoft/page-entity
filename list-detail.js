(function (){
	'use strict';

	class ListDetail extends Polymer.Element {
		static get is () { return 'list-detail'; }

		static get config () {
			return {
				properties: {

					/**
					* The z-depth of this element, from 0-5. Setting to 0 will remove the
					* shadow, and each increasing number greater than 0 will be "deeper"
					* than the last.
					*
					* @attribute elevation
					* @type number
					* @default 1
					*/
					elevation: {
						type: Number,
						reflectToAttribute: true,
						value: 1
					},

				},

				/**
				 * reset panel-filter.
				 */
				_resetfilter : function () {
					this.search = "";
					this.numbersearch = "";

					var select = this.querySelectorAll('.checkchange');
					for (var i = 0; i<=5; i++) {
						select[i].checked = false;
					}

					var dropselect = this.$$('#dropdown');
					// console.log("1" , dropselect);
					dropselect.selectedItem  = null;
					// console.log("2" , dropselect);
				},

			}
		}
	}

	customElements.define(ListDetail.is, ListDetail);
})();
