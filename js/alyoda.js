// Toggle text anchors in tabs
window.fnLoader.fns.toggleTabAnchors = function() {
	var toggleAnchors = function () {
		$(".noticejuridique__textes .tab-pane").each(function() {
			var $pane = $(this);
			var isActive = $pane.is(".active");
			var sourceAttr = isActive ? "data-id" : "id";
			var destAttr = isActive ? "id" : "data-id";
			$pane.find("[" + sourceAttr + "]").each(function() {
				var id = $(this).attr(sourceAttr);
				$(this).attr(destAttr, id).removeAttr(sourceAttr);
			});
		})
	};

	$(function() {
		const $tabs = $(".noticejuridique__textes a[data-toggle='tab']");
		$tabs.on("shown.bs.tab", toggleAnchors);
		toggleAnchors();
	});
};
