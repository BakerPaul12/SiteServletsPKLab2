document.addEventListener("DOMContentLoaded", function () {
    var radioButtons = document.querySelectorAll('input[type="radio"]');

    radioButtons.forEach(function (radio) {
        radio.addEventListener('click', function () {
            if (this.checked) {
                radioButtons.forEach(function (otherRadio) {
                    if (otherRadio !== radio) {
                        otherRadio.checked = false;
                    }
                });
            }
        });
    });
});