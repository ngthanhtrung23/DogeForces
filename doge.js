console.log('doge!!!!');

var ratingIcon = '<img style="vertical-align:middle;margin-right:0.5em;" src="http://st.codeforces.com/images/icons/rating-24x24.png" alt="" title=""></img>';
var contributionIcon = '<img style="vertical-align:middle;margin-right:0.5em;" src="http://st.codeforces.com/images/icons/star_blue_24.png" alt="" title="">';
var settingLink = '<a href="/settings/general"><img style="vertical-align:middle;margin-right:0.5em;" src="http://st.codeforces.com/images/icons/settings.png" alt="Change settings" title="Change settings"></a>';

var dogeStyle = 'style="font-family: \'Comic Sans MS\'"';
var bigRedStyle = 'style="font-weight:bold;color:red"';
var bigGreenStyle = 'style="font-weight:bold;color:green"';

$(document).ready(function () {
    // Change logo
    var logoElement = $($($($('#header').children()[0]).children()[0]).children()[0]);
    logoElement.attr('src', 'http://i62.tinypic.com/xgjrxf.png').attr('width', '300');

    // Change name from <username> to Doge <username>
    var nameElement = $($($('.lang-chooser').children()[1]).children()[0]);
    var username = nameElement.html();

    console.log('username = ' + username);
    nameElement.html('<span ' + dogeStyle + '><span ' + bigRedStyle + '>Doge</span></span> ' + username);

    // In profile page:
    if ($('.info')) {
        // User rank (Master, Candiate master...) --> Doge
        $('.user-rank').each(function (index, el) { $(el).html('<span ' + dogeStyle + '><span ' + bigRedStyle + '>Doge</span></span>'); });
        
        // Info section in profile page
        $('.info').each(function (index, el) {
            // Such rating:
            var fatherElement = $($(el).children()[2]);
            var ratingElement = $(fatherElement.children()[0]);
            ratingElement.html(ratingIcon + '  <span ' + dogeStyle + '>Wow, such rating: <span ' + bigRedStyle + '>3333</span></span>');

            // Such contribution:
            var contributionElement = $(fatherElement.children()[1]);
            contributionElement.html(contributionIcon + '  <span ' + dogeStyle + '>Wow, such contribution: <span ' + bigGreenStyle + '>+200</span></span>');

            // Setting plz
            var settingElement = $(fatherElement.children()[2]);
            settingElement.html(settingLink + '<a href="/settings/general"' + dogeStyle + '> Setting plz</a>');

            // Online, wow
            var onlineId = 3;
            if ($(fatherElement.children()[onlineId]).text().indexOf('Last visit') < 0) {
                // user has email
                onlineId += 1;
            }
            var onlineElement = $(fatherElement.children()[onlineId]);
            onlineElement.html('<span ' + dogeStyle + '>Last visit: <span ' + bigGreenStyle + '>online, wow!</span></span>');

            var registerId = onlineId + 1;
            var registerElement = $(fatherElement.children()[registerId]);
            registerElement.html(registerElement.text() + ', such old, wow!');
        });
        
        // Avatar
        var avatarElement = $($($($($('.title-photo').children()[0]).children()[0]).children()[0]).children()[0]);
        avatarElement.attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8rEM2ykgPhFhA37QNllCf87eXSQZMxmSidiFRIyITChOCJZtVQ');
    }
});

