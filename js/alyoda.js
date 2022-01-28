// Sidenotes for decisions
window.fnLoader.fns.sidenotes = function () {
	var setSidenotesPosition = function () {
		var $sidenotes = $(".decision__textes .tab-pane.active #sidenotes");

		if ($sidenotes.length === 0) return;

		var margin = 10;
		var minTop = 0;
		var maxBottom = $sidenotes.offset().top + $sidenotes.innerHeight() - 100;

		// Try until element is displayed
		if (maxBottom < 0) {
			window.setTimeout(function() {
				setSidenotesPosition();
			}, 100);
			return;
		}

		// Lien "notes suivantes"
		var $more = $sidenotes.find(".notesbaspage--more");
		$more.hide();

		$sidenotes.children("p:not(.notesbaspage--more)").each(function () {
			try {
				$(this).show();
				var $a = $(this).find("a.FootnoteSymbol");
				if ($a.length === 0) return;
				
				var href = $a.attr("href");
				var targetId = href.replace("#ftn", "#bodyftn");
				var $target = $(targetId);

				// Barriere mobile
				if ($target.length === 0) {
					$(this).hide();
					return;
				}

				var top = $target.offset().top;
				if (top <= minTop) {
					top = minTop;
				}
				$(this).offset({ top: top });
				var bottom = top + $(this).height();
				minTop = bottom + margin;
				if (bottom > maxBottom) {
					$(this).add($(this).nextAll()).hide();
					$more.find("a").attr("href", href);
					$more.show().offset({ top: top });
					return false;
				}
			} catch (error) {
				$(this).hide();
				console.error(error, $(this));
			}
		});
	};

	var toggleAnchors = function () {
		$(".decision__textes .tab-pane").each(function() {
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

	var updateTabContents = function() {
		toggleAnchors();
		setSidenotesPosition();
	};

	// Run when page is ready + on viwport resize
	$(function() {
		const $tabs = $(".decision__textes a[data-toggle='tab']");
		$tabs.on("shown.bs.tab", updateTabContents);
		$(window).resize(setSidenotesPosition);
		$(document).on("zoomLevelChanged", setSidenotesPosition);
		updateTabContents();
	});
};
