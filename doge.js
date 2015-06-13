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

    // Change name (near login/logout) from <username> to Doge <username>
    var nameElement = $($($('.lang-chooser').children()[1]).children()[0]);
    var username = nameElement.html();

    // Everyone is red!
    $('.rated-user').each(function (id, el) {
        $(el)
        .removeClass('user-orange')
        .removeClass('user-violet')
        .removeClass('user-blue')
        .removeClass('user-green')
        .removeClass('user-gray')
        .removeClass('user-admin')
        .removeClass('user-black')
        .addClass('user-red');
    });

    console.log('username = ' + username);
    nameElement.html('<span ' + dogeStyle + '><span ' + bigRedStyle + '>Doge</span></span> ' + username);

    // Main menu
    $('.main-menu-list').children().each(function (id, el) {
        var element = $($(el).children()[0]);
        var text = element.text();
        text = text.replace('Home', 'Hom');
        text = text.replace('Contests', 'Contez');
        text = text.replace('Gym', 'Gim');
        text = text.replace('Problemset', 'Poblemzet');
        text = text.replace('Groups', 'Grupz');
        text = text.replace('Rating', 'Ratin');
        text = text.replace('5 years!', '5 irz!');
        element.text(text);
    });

    // In profile page:
    if ($('.info')) {
        // User rank (Master, Candiate master...) --> Doge
        $('.user-rank').each(function (index, el) { $(el).html('<span ' + dogeStyle + '><span ' + bigRedStyle + '>Doge</span></span>'); });

        // City, Country, Organization
        $($('.main-info').children()[2]).html('<span ' + dogeStyle + '>Doge land</span>');

        
        // Info section in profile page
        $('.info').each(function (index, el) {
            if ($('#change-title-photo')) {
                $('#change-title-photo').html('<span ' + dogeStyle + '>Chang foto plz!</span>');
            }
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
            onlineElement.html('<span ' + dogeStyle + '>Haz visit? <span ' + bigGreenStyle + '>online, wow!</span></span>');

            // registered
            var registerId = onlineId + 1;
            var registerElement = $(fatherElement.children()[registerId]);
            registerElement.html('<span ' + dogeStyle + '>Haz' + registerElement.text() + ', such old, wow!</span>');

            // blog entries
            var blogId = registerId + 1;
            var blogElement = $(fatherElement.children()[blogId]);
            var blogLink = $(blogElement.children()[1]);
            blogLink.text('Such blog entries').attr('style', "font-family: 'Comic Sans MS'");
            var commentLink = $(blogElement.children()[2]);
            commentLink.text('wow!').attr('style', "font-family: 'Comic Sans MS'");

            // write new entries
            var entryId = blogId + 1;
            var entryElement = $(fatherElement.children()[entryId]);

            var talkId = entryId;
            if (entryElement.text().indexOf('Write new entry') >= 0) {
                // my own profile
                var entryLink = $(entryElement.children()[1]);
                entryLink.text('Entry plz').attr('style', "font-family: 'Comic Sans MS'");

                talkId += 1;
            }

            // talk
            var talkElement = $(fatherElement.children()[talkId]);
            var talkLink = $(talkElement.children()[1]);
            talkLink.text('Talk plz').attr('style', "font-family: 'Comic Sans MS'");
        });
        
        // Avatar
        var avatarElement = $($($($($('.title-photo').children()[0]).children()[0]).children()[0]).children()[0]);
        avatarElement.attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8rEM2ykgPhFhA37QNllCf87eXSQZMxmSidiFRIyITChOCJZtVQ');
    }
});

