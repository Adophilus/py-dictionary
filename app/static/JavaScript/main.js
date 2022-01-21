function checkSearchEntry (event, elem) {
	elem = (elem) ? elem: $(this);

	if (elem.val()) {
		if (!$(elem).hasClass("has-val")) {
			elem.addClass("has-val");
		}
	}
	else {
		elem.removeClass("has-val");
	}
}

$("#search_btn").click(function () {
	var word = $("#search_entry").val();
	window.location.replace(`/dictionary/definition?search=${word}`);
});

$("#search_entry").on("input", checkSearchEntry);

$(document).ready(function () {
	checkSearchEntry(null, $("#search_entry"));
});