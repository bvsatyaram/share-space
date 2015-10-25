(function() {
  $(function() {
    return $('.feature').click(function() {
      return $(this).toggleClass('selected');
    });
  });

}).call(this);
