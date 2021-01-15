$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
    $("iframe").on("load", function () {
        iframe = $(this).contents();
        
        iframe.find("#text-code").keydown(function (event) {
            if (event.keyCode === 9) {
                var v = this.value,
                    s = this.selectionStart,
                    e = this.selectionEnd;
                this.value = v.substring(0, s) + "\t" + v.substring(e);
                this.selectionStart = this.selectionEnd = s + 1;
                return false;
            }
        });
    });
});
