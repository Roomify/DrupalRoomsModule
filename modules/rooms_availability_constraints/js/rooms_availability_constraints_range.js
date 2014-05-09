(function ($) {
  /**
   * Booking unit options widget JS operations.
   */
  Drupal.behaviors.rooms_operations_widget = {
    attach: function(context) {
      $('.remove-booking-option').click(function(e) {
        $(this).parent().find('input[type=text]').val('');
        $(this).parents('tr').hide();
        e.preventDefault();
      })
    }
  };
})(jQuery);