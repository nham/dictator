// each "action" has a callback that is called to implement the action
var action_cbs = {};
action_cbs.TOGGLE_PORTAL = function(i) {
    $('#block'+i).toggleClass("hidden");
};

$('.portal').click(function() {
    var i = parseInt( $(this).attr('id').replace('portal', '') );
    action_cbs.TOGGLE_PORTAL(i);
});

// initialize all blocks to be hidden
$('.block').addClass("hidden");
