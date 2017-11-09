import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib//noframework.waypoints';

class RevalOnScroll {
  constructor(element, offset) {
    this.itemsToReval = element;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReval.addClass("reval-item");
  }

  createWaypoints() {
    var that = this;
    this.itemsToReval.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reval-item--is-visible");
        },
        offset: that.offsetPercentage
      });
    });
  }
}

export default RevalOnScroll;