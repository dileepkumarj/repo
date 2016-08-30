var profile;
// Setup an event listener to make an API call once auth is complete
function onLinkedInLoad() {
    LinkedINAuth();
    IN.Event.on(IN, "auth", getProfileData);
}
function LinkedINAuth() {
    IN.UI.Authorize().place();
}
// Handle the successful return from the API call
function onSuccess(data) {
    profile = data;
    var dumb = JSON.stringify(data);
    if (localStorage.getItem('ProfileDetails') == undefined) {
        info();
        localStorage.setItem('ProfileDetails', dumb);
    } else {
        if (window.location.pathname == "/") {
            location.href = "/validate";
        }
    }


}
function info() {
    IN.API.Raw("/companies/" + profile.positions.values[0].company.id + ":(id,name,ticker,description,website-url)?format=json")
        .result(function (data) {
            if (localStorage.getItem('CompanyDetails') == undefined) {
                localStorage.setItem('CompanyDetails', JSON.stringify(data));
                if (window.location.pathname == "/") {
                    location.href = "/validate";
                }
            }
        })
        .error(function (data) {
            if (window.location.pathname == "/") {
                location.href = "/validate";
            }
        })
}
// Handle an error response from the API call
function onError(error) {
}

// Use the API call wrapper to request the member's basic profile data
function getProfileData() {
    IN.API.Raw("/people/~:(id,firstName,lastName,headline,location:(name,country:(code)),industry,summary,specialties,positions,picture-url,public-profile-url,email-address)?format=json")
        .result(onSuccess)
        .error(onError);
}
var senseSpeed = 5;
var previousScroll = 0;
$(window).scroll(function (event) {
    var scroller = $(this).scrollTop();
    if (scroller - senseSpeed > previousScroll) {
        $("#sub-header").filter(':not(:animated)').slideUp();
    }
    else if (scroller + senseSpeed < previousScroll) {
        $("#sub-header").filter(':not(:animated)').slideDown();
    }
    previousScroll = scroller;
});
 $('.carousel[data-type="multi"] .item').each(function () {
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
            for (var i = 0; i < 4; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));
            }
        });