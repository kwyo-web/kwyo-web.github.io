function openDrawerMenu() {
  var x = document.getElementById("mainNav");
  if (x.className.indexOf("responsive") === -1) {
    x.className += " responsive";
  } else {
    x.className = x.className.replace(" responsive", "");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var dropdownButtons = document.querySelectorAll('.dropdown button');

  dropdownButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      // Only handle clicks in mobile view
      if (window.innerWidth <= 900) {
        e.preventDefault();
        e.stopPropagation();

        var parent = this.parentElement;
        var isActive = parent.classList.contains('active');

        // Close all dropdowns first
        document.querySelectorAll('.dropdown').forEach(function (d) {
          d.classList.remove('active');
        });

        // Toggle current (open if it was closed)
        if (!isActive) {
          parent.classList.add('active');
        }
      }
    });
  });
});
