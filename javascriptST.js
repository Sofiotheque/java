// Template Settings Starts Here
var defaultImgUrl='https://3.bp.blogspot.com/-XB85UD145qE/V5buf22iv2I/AAAAAAAAA1I/8LBmpwNX-rU7ZjzrHOS2b0F_Pj0xqpHIQCLcB/s1600/nia.png';
var disqus_short_name='demoblog12'; // Disqus shortname
var related_post_max=5;
var sticky_navigation=true;
var also_read_section=true;
var subscribe_widget=true;
var author_widget=true;
  var comment_system={
    blogger:true,
    disqus:true,
    facebook:true
  }
// Change Text
var View_All_Text='Voire tout';
var Also_Read_Text='Voire plus';
	var Ticker_Text='<i class="fa fa-rss"></i> Nouveaux';
  var Tab_Text={
    tab_recent:"Récent",
    tab_random:"Random",
    tab_comment:"Commentaire"
  }

// Pagination
    var perPage=7;
    var numPages=6;
    var firstText ='Premier';
    var lastText ='Dernier';
    var prevText ='« Dernier';
    var nextText ='Premier »';
// Template Settings end Here



var loaderHTML = '';

function getauthor(t) {
    return ""
}
if (sticky_navigation) {
    $(function() {
        $(".main-navigation").sticky({
            topSpacing: 0
        })
    })
}

function getAnyR() {
    var allRecent = $('.genova-load').not('.genova-loaded').first();
    allRecent.addClass('genova-recent min-height-need');
    var current = allRecent;
    if (!current.hasClass('loaded-c')) {
        switch (current.attr('data-genova')) {
            case "gallery":
                current.addClass('loaded-c recent-gal');
                current.addClass('hide-load genova-loaded');
                getgal(current);
                break;
            case "strips":
                current.addClass('loaded-c recent-strip');
                current.addClass('hide-load genova-loaded');
                getStrips(current);
                break;
            case "simple":
                current.addClass('loaded-c recent-single');
                current.addClass('hide-load genova-loaded');
                getSingle(current);
                break;
            case "sidebar":
                current.addClass('loaded-c recent-sidebar');
                current.addClass('hide-load genova-loaded');
                get_side(current);
                break;
            case "slider":
                current.addClass('loaded-c recent-slider');
                current.addClass('hide-load genova-loaded');
                getSlider(current);
                break;
            case "cards":
                current.addClass('loaded-c recent-cards');
                current.addClass('hide-load genova-loaded');
                getcards(current);
                break;
            case "single":
                current.addClass('loaded-c recent-simple-single');
                current.addClass('hide-load genova-loaded');
                get_single(current);
                break;
            case "headline":
                current.addClass('loaded-c recent-headline');
                current.addClass('hide-load genova-loaded');
                get_headline(current);
                break;
            case "big-wide":
                current.addClass('loaded-c recent-wide');
                current.addClass('hide-load genova-loaded');
                get_somewide(current);
                break;
            case "wide-tabs":
                current.addClass('loaded-c recent-w-tabs');
                current.addClass('hide-load genova-loaded');
                getwtabs(current);
                break;
            case "stack":
                current.addClass('loaded-c simple-cards');
                current.addClass('hide-load genova-loaded');
                getSimpleCards(current);
                break;
            case "video":
                current.addClass('loaded-c simple-cards');
                current.addClass('hide-load genova-loaded');
                getVideo(current);
                break
        }
    }
}
$(function() {
    $('.navicon').click(function() {
        $('.side-panel,.panel-mask').addClass('active');
        $(this).addClass('active')
    });
    $('.panel-close,.panel-mask').click(function() {
        $('.side-panel,.panel-mask,.navicon').removeClass('active')
    });

    function getFirstC(e) {
        if (e.category === undefined) {
            return false
        } else {
            return e.category[0].term
        }
    }
    $("[data-genova='ticker']").each(function() {
        var a = "/feeds/posts/summary/?max-results=10&alt=json-in-script",
            e = $(this);
        $.ajax({
            type: "GET",
            url: a,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(a) {
                var t = a.feed.entry;
                if (t) {
                    e.append('<div class="inner"><span class="ticker-label">' + Ticker_Text + '</span><ul class="ticker-inner"></ul></div>');
                    for (var s = 0; s < t.length; s++) {
                        for (var l, n = t[s], i = 0; i < n.link.length; i++)
                            if ("alternate" == n.link[i].rel) {
                                var r = n.link[i].href;
                                break
                            }
                        l = void 0 !== n.media$thumbnail ? n.media$thumbnail.url : defaultImgUrl;
                        var d = n.title.$t,
                            c = getFirstC(n);
                        if (c) {
                            var labelC = "<a class='recentLabel currentLabel' href='/search/label/" + c + "'>" + c + "</a>"
                        } else {
                            var labelC = "<a class='recentLabel currentLabel' href='#'>No Label</a>"
                        }
                        var o = '<li><a href="' + r + '"><img  class="toLoad" src="' + l + '" title="' + d + '"/></a><div class="content">' + labelC + '<h3><a href="' + r + '">' + d + "</a></h3></div></li>";
                        e.find("ul.ticker-inner").append(o)
                    }
                    e.find("ul.ticker-inner").liScroll()
                } else e.hide()
            }
        })
    });
    $('.sidebarw>div>h2,footer#footer-wrapper .widget > h2').html(function() {
        return "<span>" + $(this).text() + "</span>"
    });
    var current = $('.g-home-top');
    current.append('<div class="inner"><div class="home-top-left"></div><div class="home-top-right"><div class="home-col-1"><div class="home-col-1-top"></div><div class="home-col-1-bottom"></div></div><div class="home-col-2"><div class="home-col-2-top"></div><div class="home-col-2-bottom"></div></div></div></div>');
    for (var i = 1; i < 5; i++) {
        var l = current.attr('data-label' + i),
            s = '/feeds/posts/summary/-/' + l + '?max-results=1&alt=json-in-script';
        switch (i) {
            case 1:
                getTop(s, 'home-col-1', '.home-col-1-top', l);
                break;
            case 2:
                getTop(s, 'home-col-1', '.home-col-1-bottom', l);
                break;
            case 3:
                getTop(s, 'home-col-2', '.home-col-2-top', l);
                break;
            case 4:
                getTop(s, 'home-col-2', '.home-col-2-bottom', l);
                break
        }
    }
    get_top_recent(current.find('.home-top-left'));
    var allRP = $('[data-genova="gallery"],[data-genova="strips"],[data-genova="simple"],[data-genova="simple"],[data-genova="sidebar"],[data-genova="cards"],[data-genova="single"],[data-genova="video"],[data-genova="headline"],[data-genova="wide-tabs"],[data-genova="stack"],[data-genova="big-wide"]');
    allRP.addClass('genova-load');
    getAnyR()
});
$(function() {
    $('.genova-tabs').each(function() {
        var buttons = $(this).find('.tab-button>span').first(),
            button = $(this).find('.tab-button>span'),
            con = $(this).find('.tab-content>div'),
            cons = $(this).find('.tab-content>div').first();
        buttons.addClass('active');
        con.hide(0);
        cons.fadeIn();
        button.click(function() {
            if (!$(this).hasClass('active')) {
                button.removeClass('active');
                $(this).addClass('active');
                var cid = $(this).attr('id');
                con.each(function() {
                    if ($(this).hasClass(cid)) {
                        $(this).fadeIn()
                    } else {
                        $(this).hide()
                    }
                })
            }
        })
    });
    $('.genova-acc').each(function() {
        var e = $(this);
        e.find('.acc-button').first().addClass('active');
        e.find('.acc-content').slideUp();
        e.find('.acc-button').first().next('.acc-content').slideDown();
        $(this).find('.acc-button').click(function() {
            if (!$(this).hasClass('active')) {
                e.find('.acc-content').slideUp();
                $(this).next('.acc-content').slideDown();
                e.find('.acc-button').removeClass('active')
            }
        })
    })
});

function getHead(a, b, c, d) {
    var e = '<div class="' + d + ' rhead"><div>';
    if (a !== "none") {
        e += '<span class="headmt">' + a + '</span>'
    } else {
        e += '<span class="headmt">' + c + '</span>'
    }
    if (b !== "none") {
        e += "<span class='headst'>" + b + "</span>"
    }
    e += "</div><a class='headl' href='/search/label/" + c + "'>" + View_All_Text + "</a></div>";
    return e
}

function getmeta(t) {
    var e = [];
    e[1] = "Jan", e[2] = "Feb", e[3] = "Mar", e[4] = "Apr", e[5] = "May", e[6] = "Jun", e[7] = "Jul", e[8] = "Aug", e[9] = "Sep", e[10] = "Oct", e[11] = "Nov", e[12] = "Dec";
    var a = t.substring(0, 4),
        s = t.substring(5, 7),
        r = t.substring(8, 10),
        n = "<span class='date'> " + e[parseInt(s, 10)] + " " + r + " " + a + "</span>";
    return n
}

function getImg(a, b, c, d, f, g, h, i, j) {
    var e = "<div class='g-img-c'>";
    if (!a) e += "<span class='g-img-i'><i class='fa fa-image'></i></span>";
    if (a) e += "<span class='g-img-i'><i class='fa fa-youtube-play'></i></span>";
    if (b) e += "<div class='g-img-s'> <a href='http://www.facebook.com/sharer.php?u=" + h + "' class='f'>&#xf09a;</a> <a href='https://twitter.com/share?url=" + h + "' class='t'>&#xf099;</a> <a href='https://plus.google.com/share?url=" + h + "' class='g'>&#xf0d5;</a> </div>";
    if (c) e += "<div class='g-img-m'>";
    if (d) e += "<a class='z' href='" + j + "'>&#xf002;</a>";
    if (f) e += "<a href='" + h + "' class='l'>&#xf0c1;</a>";
    if (c) e += "</div>";
    if (g) e += "<a href='/search/label" + i + "' class='g-img-l'>" + i + "</a>";
    e += "</div>";
    return e
}

function getMeImg(e) {
    var n = ["", "", false];
    if (e !== undefined) {
        var n = [e.url, e.url, false];
        if (e.url.indexOf('img.youtube') !== -1) {
            n[0] = e.url.replace('default.jpg', 'mqdefault.jpg');
            n[1] = e.url.replace('default.jpg', 'mqdefault.jpg');
            n[2] = true
        } else {
            n[0] = e.url.replace('s72-c', 'w100-h75-c'), n[1] = e.url.replace('s72-c', 's500-c')
        }
    } else {
        n[0] = defaultImgUrl, n[1] = defaultImgUrl
    }
    return n
}
var loaderHTML = '<div class="loader"> <div class="square" ></div> <div class="square"></div> <div class="square last"></div> <div class="square clear"></div> <div class="square"></div> <div class="square last"></div> <div class="square clear"></div> <div class="square "></div> <div class="square last"></div> </div>';

function addslashes(str) {
    return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0')
}

function load_w_tab(e) {
    var allload = e.find('.wtab-content>div[data-load]');
    allload.each(function() {
        var toLoad = $(this);
        var label = toLoad.attr('data-load');
        var rr = "nav" + Math.random();
        $.ajax({
            type: 'GET',
            url: '/feeds/posts/summary/-/' + label + '?max-results=12&alt=json-in-script',
            async: true,
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
                if (json.feed.entry) {
                    toLoad.append('<div class="wtab-inner"><div class="w-car-con"></div></div>');
                    for (var i = 0; i < json.feed.entry.length; i++) {
                        var en = json.feed.entry[i];
                        for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                            if (json.feed.entry[i].link[j].rel == 'alternate') {
                                var postUrl = json.feed.entry[i].link[j].href;
                                break
                            }
                        }
                        var title = addslashes(en.title.$t),
                            imgTag = getMeImg(en.media$thumbnail),
                            imgLink = getImg(imgTag[2], true, true, true, true, true, postUrl, en.category[0].term, imgTag[1]),
                            con = '<div class="container"><div class="g-img-o"><img src="' + imgTag[1] + '" title="' + title + '"/><div class="g-img-c">' + imgLink + '</div></div><h2><a href="' + postUrl + '">' + title + '</a></h2></div>';
                        toLoad.find('.wtab-inner .w-car-con').append(con)
                    }
                    toLoad.find('.wtab-inner .w-car-con').owlCarousel({
                        nav: true,
                        dots: false,
                        items: 4,
                        loop: true,
                        margin: 25,
                        navText: ['&#xf053;', '&#xf054;'],
                        responsive: {
                            0: {
                                items: 1,
                                nav: true
                            },
                            600: {
                                items: 2
                            },
                            1000: {
                                items: 4,
                                nav: true,
                                loop: false
                            }
                        }
                    });
                    e.find('.g-img-o .g-img-m .z').colorbox({
                        rel: rr,
                        height: '80%',
                        width: '80%'
                    })
                }
            }
        })
    })
}

function getVideo(e) {
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + e.attr('data-label') + '?max-results=5&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var maintitle = e.attr('data-title') === undefined ? 'none' : e.attr('data-title'),
                    subtitle = e.attr('data-sub') === undefined ? 'none' : e.attr('data-sub'),
                    thelabel = e.attr('data-label');
                e.append(getHead(maintitle, subtitle, thelabel, 'video'));
                e.append('<div class="video-inner"><div class="video-inner-1"></div><div class="video-inner-2"></div></div>');
                for (var i = 0; i < json.feed.entry.length; i++) {
                    var en = json.feed.entry[i];
                    for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                        if (json.feed.entry[i].link[j].rel == 'alternate') {
                            var postUrl = json.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var title = en.title.$t,
                        date = getmeta(en.published.$t),
                        author = getauthor(en.author),
                        imgP = getMeImg(en.media$thumbnail),
                        icon = imgP[2] ? "<span class='videoicon'><i class='fa fa-youtube-play'></i></span>" : "";
                    con = "<div class='video-item'><a href='" + postUrl + "'>" + icon + "<img src='" + imgP[1] + "'/></a><div class='video-content'><h2><a href='" + postUrl + "'>" + title + "</a></h2><div class='video-meta'>" + date + author + "</div></div></div>";
                    if (i == 0 || i == 1) {
                        e.find('.video-inner-1').append(con)
                    } else {
                        e.find('.video-inner-2').append(con)
                    }
                }
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function getStrips(zxc) {
    var currentc = zxc;
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + currentc.attr('data-label') + '?max-results=6&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var maintitle = zxc.attr('data-title') === undefined ? 'none' : zxc.attr('data-title'),
                    subtitle = zxc.attr('data-sub') === undefined ? 'none' : zxc.attr('data-sub'),
                    thelabel = zxc.attr('data-label');
                zxc.append(getHead(maintitle, subtitle, thelabel, 'strip'));
                currentc.append('<div class="strip-inner"></div>');
                for (var i = 0; i < json.feed.entry.length; i++) {
                    var en = json.feed.entry[i];
                    for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                        if (json.feed.entry[i].link[j].rel == 'alternate') {
                            var postUrl = json.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var title = en.title.$t,
                        date = getmeta(en.published.$t),
                        author = getauthor(en.author),
                        imgP = getMeImg(en.media$thumbnail),
                        con = "<div class='simple-strip'><a href='" + postUrl + "'><img src='" + imgP[0] + "'/></a><div class='s-striple-content'><h2><a href='" + postUrl + "'>" + title + "</a></h2><div class='s-strip-meta'>" + date + author + "</div></div></div>";
                    currentc.find('.strip-inner').append(con)
                }
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function getSlider(zxc) {
    var currentc = zxc;
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + currentc.attr('data-label') + '?max-results=6&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var maintitle = zxc.attr('data-title') === undefined ? 'none' : zxc.attr('data-title'),
                    subtitle = zxc.attr('data-sub') === undefined ? 'none' : zxc.attr('data-sub'),
                    thelabel = zxc.attr('data-label');
                zxc.append(getHead(maintitle, subtitle, thelabel, 'slider'));
                currentc.append('<div class="slider-inner"></div>');
                for (var i = 0; i < json.feed.entry.length; i++) {
                    var en = json.feed.entry[i];
                    for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                        if (json.feed.entry[i].link[j].rel == 'alternate') {
                            var postUrl = json.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var title = en.title.$t,
                        date = getmeta(en.published.$t),
                        author = getauthor(en.author),
                        imgP = getMeImg(en.media$thumbnail),
                        con = "<div class='slider-item'><a href='" + postUrl + "'><img src='" + imgP[1] + "'/></a><div class='slider-content'><h2><a href='" + postUrl + "'>" + title + "</a></h2><div class='slider-meta'>" + date + author + "</div></div></div>";
                    currentc.find('.slider-inner').append(con)
                }
                currentc.find('.slider-inner').owlCarousel({
                    items: 1,
                    dots: false,
                    nav: true,
                    navText: ['&#xf104;', '&#xf105;']
                })
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function getSimpleCards(zxc) {
    var currentc = zxc;
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + currentc.attr('data-label') + '?max-results=6&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var maintitle = zxc.attr('data-title') === undefined ? 'none' : zxc.attr('data-title'),
                    subtitle = zxc.attr('data-sub') === undefined ? 'none' : zxc.attr('data-sub'),
                    thelabel = zxc.attr('data-label');
                currentc.append(getHead(maintitle, subtitle, thelabel, 'simple-cards') + '<div class="simple-cards-inner"></div>');
                for (var i = 0; i < json.feed.entry.length; i++) {
                    var en = json.feed.entry[i];
                    for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                        if (json.feed.entry[i].link[j].rel == 'alternate') {
                            var postUrl = json.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var title = en.title.$t,
                        date = getmeta(en.published.$t),
                        author = getauthor(en.author),
                        sum = en.summary.$t.substr(0, 150) + '...',
                        imgP = getMeImg(en.media$thumbnail),
                        thumb = imgP[2],
                        con = "<div class='simple-cards'><div class='img-con'><a href='" + postUrl + "'><img src='" + imgP[1] + "'/></a><div class='above-img-content'><div class='img-content-inner'><a class='simple-card-label' href='/search/label/" + en.category[0].term + "'>" + en.category[0].term + "</a><h2><a href='" + postUrl + "'>" + title + "</a></h2></div></div></div><div class='simple-card-content'><p>" + sum + "</p><div class='simple-card-meta'>" + date + "</div></div></div>";
                    currentc.find('.simple-cards-inner').append(con)
                }
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function getSingle(e) {
    var rr = "single" + Math.random(),
        r = e.attr('data-label');
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + r + '?max-results=5&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var maintitle = e.attr('data-title') === undefined ? 'none' : e.attr('data-title'),
                    subtitle = e.attr('data-sub') === undefined ? 'none' : e.attr('data-sub'),
                    thelabel = e.attr('data-label');
                e.append(getHead(maintitle, subtitle, thelabel, 'simple'));
                var entries = json.feed.entry;
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentImage, currentBigImage, currentDefault, currentTitle, currentLabel, currentAuthor, currentDate;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    var imgTag = getMeImg(currentEntry.media$thumbnail),
                        title = currentEntry.title.$t,
                        cDate = getmeta(currentEntry.published.$t),
                        cAuthor = getauthor(currentEntry.author),
                        content = i == 0 ? "<div class='container'><a href='" + currentLink + "'><img src='" + imgTag[1] + "' title='" + title + "'/></a><div class='single-content'><div class='single-label'><a href='/search/label/" + currentEntry.category[0].term + "'>" + currentEntry.category[0].term + "</a></div><div class='single-meta'>" + cDate + cAuthor + "</div><h2><a href='" + currentLink + "'>" + title + "</a></h2></div></div>" : "<div class='single-strip'><a href='" + currentLink + "'><img src='" + imgTag[0] + "' title='" + title + "'/></a><div class='single-content'><h2><a href='" + currentLink + "'>" + title + "</a></h2><div class='single-meta'>" + cDate + cAuthor + "</div></div></div>",
                        container = i == 0 ? '.left-content' : '.right-content';
                    e.append(content)
                }
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function getwtabs(e) {
    var labelArr = eval(e.attr('data-label')),
        html = '<div class="wtab-buttons">';
    for (var i = 0; i < labelArr.length; i++) {
        html += '<span data-target="' + labelArr[i] + '-genova">' + labelArr[i] + '</span>'
    }
    html += '</div><div class="wtab-content">';
    for (var i = 0; i < labelArr.length; i++) {
        html += '<div data-load="' + labelArr[i] + '" data-container="' + labelArr[i] + '-genova"></div>'
    }
    html += '</div>';
    e.append(html);
    e.find('.wtab-buttons>span').first().addClass('active');
    e.find('.wtab-content>div').hide(0);
    e.find('.wtab-content>div').first().show(0).addClass('active hide-load');
    load_w_tab(e);
    e.find('.wtab-buttons>span').click(function() {
        var current = $(this).attr('data-target'),
            button = $(this),
            activediv = "";
        e.find('.wtab-content>div').each(function() {
            if ($(this).attr('data-container') == current) {
                e.find('.wtab-buttons>span').removeClass('active');
                button.addClass('active');
                e.find('.wtab-content>div').removeClass('active').hide(0);
                $(this).fadeIn(0).addClass('active');
                var carousel = $(this).find('.w-car-con').data('owlCarousel');
                carousel._width = $(this).find('.w-car-con').width();
                carousel.invalidate('width');
                carousel.refresh()
            }
        })
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}
if (sticky_navigation) {
    $(function() {})
}

function getcards(zxc) {
    var currentc = zxc,
        rr = 'card' + Math.random();
    currentc.addClass('hide-load');
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + currentc.attr('data-label') + '?max-results=12&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                currentc.append('<div class="inner"><div class="cards-in"></div></div>');
                for (var i = 0; i < json.feed.entry.length; i++) {
                    var en = json.feed.entry[i];
                    for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                        if (json.feed.entry[i].link[j].rel == 'alternate') {
                            var postUrl = json.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var title = en.title.$t,
                        date = getmeta(en.published.$t),
                        author = getauthor(en.author),
                        sum = en.summary.$t.substr(0, 150) + '...',
                        imgP = getMeImg(en.media$thumbnail),
                        thumb = imgP[2],
                        con = "<div class='container'><div class='cards-inner'><div class='g-img-o'><img src='" + imgP[1] + "'/>" + getImg(imgP[2], true, true, true, true, true, postUrl, en.category[0].term, imgP[1]) + "</div><span class='card-author'>" + author + "</span><h2><a href='" + postUrl + "'>" + title + "</a></h2><p>" + sum + "</p><span class='card-date'>" + date + "</span></div>";
                    currentc.find('.cards-in').append(con)
                }
                currentc.find('.cards-in').owlCarousel({
                    items: 3,
                    autoplay: true,
                    loop: true,
                    margin: 25,
                    dots: false,
                    nav: true,
                    navText: ['&#xf104;', '&#xf105;'],
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        },
                        600: {
                            items: 2
                        },
                        1000: {
                            items: 3,
                            nav: true,
                            loop: true
                        }
                    }
                });
                zxc.find('.g-img-o .g-img-m .z').colorbox({
                    rel: rr,
                    height: '80%',
                    width: '80%'
                })
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function get_side(e) {
    var r = e.attr('data-label'),
        rr = 'side' + Math.random();
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + r + '?max-results=3&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var entries = json.feed.entry;
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentImage, currentBigImage, currentDefault, currentTitle, currentLabel, currentAuthor, currentDate;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    var imgTag = getMeImg(currentEntry.media$thumbnail),
                        title = currentEntry.title.$t,
                        cDate = getmeta(currentEntry.published.$t),
                        cAuthor = getauthor(currentEntry.author),
                        imgc = getImg(imgTag[2], true, true, true, true, true, currentLink, r, imgTag[1]),
                        content = "<div class='side-content'><div class='g-img-o'><img src='" + imgTag[1] + "'/>" + imgc + "</div><h2><a href='" + currentLink + "'>" + title + "</a></h2><div class='side-meta'>" + cDate + cAuthor + "</div></div>";
                    e.append(content)
                }
                e.find('.g-img-o .g-img-m .z').colorbox({
                    rel: rr,
                    height: '80%',
                    width: '80%'
                })
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function get_somewide(e) {
    var r = e.attr('data-label');
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + r + '?max-results=3&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var entries = json.feed.entry;
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentImage, currentBigImage, currentDefault, currentTitle, currentLabel, currentAuthor, currentDate;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    var imgTag = getMeImg(currentEntry.media$thumbnail),
                        title = currentEntry.title.$t,
                        cDate = getmeta(currentEntry.published.$t),
                        cAuthor = getauthor(currentEntry.author),
                        content = "<div class='side-content'><div class='wide-img-outer'><a href='" + currentLink + "'><img src='" + imgTag[1] + "'/></a><div class='wide-inner-c'><div class='wide-meta-c'><a href='/search/label" + r + "'>" + r + "</a></div><h2><a href='" + currentLink + "'>" + title + "</a></h2><div class='side-meta'>" + cDate + cAuthor + "</div></div></div></div>";
                    e.append(content)
                }
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function get_single(e) {
    var r = e.attr('data-label');
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + r + '?max-results=1&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var maintitle = e.attr('data-title') === undefined ? 'none' : e.attr('data-title'),
                    subtitle = e.attr('data-sub') === undefined ? 'none' : e.attr('data-sub'),
                    thelabel = e.attr('data-label');
                e.append(getHead(maintitle, subtitle, thelabel, 'single'));
                var entries = json.feed.entry;
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentImage, currentBigImage, currentDefault, currentTitle, currentLabel, currentAuthor, currentDate;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    var imgTag = getMeImg(currentEntry.media$thumbnail),
                        title = currentEntry.title.$t,
                        cDate = getmeta(currentEntry.published.$t),
                        cAuthor = getauthor(currentEntry.author),
                        sum = currentEntry.summary.$t.substr(0, 100) + '...',
                        imgc = getImg(imgTag[2], true, true, true, true, true, currentLink, r, imgTag[1]);
                    content = "<div class='single-outer'><div class='single-meta'>" + cDate + "</div><div class='g-img-o'><img src='" + imgTag[1] + "'/>" + imgc + "</div><div class='single-inner'><h2><a href='" + currentLink + "'>" + title + "</a></h2><p>" + sum + "</p><div class='single-author'>" + cAuthor + "</div></div></div>";
                    e.append(content)
                }
                e.find('.g-img-o .g-img-m .z').colorbox({
                    height: '80%',
                    width: '80%'
                })
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function get_headline(e) {
    var r = e.attr('data-label');
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + r + '?max-results=5&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var maintitle = e.attr('data-title') === undefined ? 'none' : e.attr('data-title'),
                    subtitle = e.attr('data-sub') === undefined ? 'none' : e.attr('data-sub'),
                    thelabel = e.attr('data-label');
                e.append(getHead(maintitle, subtitle, thelabel, 'single') + "<div class='headline-inner'><div class='left-headline'></div><div class='right-headline'></div><div style='clear:both'></div></div>");
                var entries = json.feed.entry;
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentImage, currentBigImage, currentDefault, currentTitle, currentLabel, currentAuthor, currentDate;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    var imgTag = getMeImg(currentEntry.media$thumbnail),
                        title = currentEntry.title.$t,
                        cDate = getmeta(currentEntry.published.$t),
                        cAuthor = getauthor(currentEntry.author),
                        content = i == 0 ? "<div class='container'><a href='" + currentLink + "'><img src='" + imgTag[1] + "' title='" + title + "'/></a><div class='headline-content'><div class='headline-label'><a href='/search/label/" + currentEntry.category[0].term + "'>" + currentEntry.category[0].term + "</a></div><div class='headline-meta'>" + cDate + cAuthor + "</div><h2><a href='" + currentLink + "'>" + title + "</a></h2></div></div>" : "<div class='headline-strip'><a href='" + currentLink + "'><img src='" + imgTag[0] + "' title='" + title + "'/></a><div class='headline-content'><h2><a href='" + currentLink + "'>" + title + "</a></h2><div class='headline-meta'>" + cDate + cAuthor + "</div></div></div>",
                        container = i == 0 ? '.left-headline' : '.right-headline';
                    e.find(container).append(content)
                }
            }
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function getgal(zxc) {
    var currentc = zxc;
    currentc.addClass('hide-load');
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/-/' + currentc.attr('data-label') + '?max-results=10&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var maintitle = currentc.attr('data-title') === undefined ? 'none' : currentc.attr('data-title'),
                    subtitle = currentc.attr('data-sub') === undefined ? 'none' : currentc.attr('data-sub'),
                    thelabel = currentc.attr('data-label');
                currentc.append(getHead(maintitle, subtitle, thelabel, 'gallery') + '<div class="gal-in"></div>');
                for (var i = 0; i < json.feed.entry.length; i++) {
                    var en = json.feed.entry[i];
                    for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                        if (json.feed.entry[i].link[j].rel == 'alternate') {
                            var postUrl = json.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var imageurl = getMeImg(json.feed.entry[i].media$thumbnail);
                    var title = en.title.$t,
                        desc = en.summary.$t.substr(0, 200) + '...',
                        auth = getauthor(en.author),
                        date = getmeta(en.published.$t),
                        con = '<div class="container"><img src="' + imageurl[1] + '"/><div class="gal-layer"><span><i class="fa-search-plus"></i></span></div><div class="i-content"><h2>' + title + '</h2><div class="meta">' + auth + " " + date + '</div><p>' + desc + '</p><a href="' + postUrl + '"><i class="fa fa-arrow-right"></i></a></div></div>';
                    currentc.find('.gal-in').append(con)
                }
                currentc.find('.container').height(currentc.find('.container').width())
            }
            $('.gal-in .container').click(function() {
                var ip = $(this).find('img').clone(),
                    cp = $(this).find('.i-content').clone();
                $('.gal-content').fadeIn().prepend(ip);
                $('.gal-content .gal-append').append(cp);
                $('.gal-content img,.gal-append').delay(400).fadeIn()
            });
            $('.gal-content .close').click(function() {
                $('.gal-content').fadeOut();
                $('.gal-content .gal-append').html('');
                $('.gal-content img').remove()
            })
        }
    });
    if ($('.genova-load').not('.genova-loaded').first().length > 0) {
        getAnyR()
    }
}

function checkcomments() {
    if (comment_system.blogger) {
        $('.comment-tabs .comment-system>div.blogger').show(0);
        return
    }
    if (comment_system.disqus) {
        $('.comment-tabs .comment-system>div.disqus').show(0);
        return
    }
    if (comment_system.facebook) {
        $('.comment-tabs .comment-system>div.facebook').show(0);
        return
    }
}
$(function() {
    var buttons = $('.comment-tabs .comment-buttons button'),
        systems = $('.comment-tabs .comment-system>div');
    systems.hide(0);
    checkcomments();
    buttons.first().addClass('active');
    buttons.click(function() {
        var current = $(this),
            activeClass = $(this).attr('id');
        systems.each(function() {
            if ($(this).hasClass(activeClass)) {
                $(this).fadeIn();
                buttons.removeClass('active');
                current.addClass('active')
            } else {
                $(this).hide(0)
            }
        })
    })
});
$(function() {
    $('.liveform').submit(function() {
        $('.search-item').remove();
        $('.trendy-search').addClass('remove');
        findit();
        return false
    });

    function findit() {
        var labelname = $('.searchbari').val();
        var startindex = $('.search-item').length + 1;
        if (labelname.length >= 1) {
            $('.search-content').show();
            $('.search-result span.status').show().html(loaderHTML);
            var url = '/feeds/posts/default?max-results=8&start-index=' + startindex + '&alt=json&q=' + labelname;
            $.ajax({
                type: 'GET',
                url: url,
                async: true,
                contentType: "application/json",
                dataType: 'jsonp',
                success: function(json) {
                    $('.more-result').hide();
                    doSearch(json, labelname);
                    $('.result-head em').text(labelname);
                    $('.result-head').fadeIn()
                }
            })
        } else {
            $('.search-content').hide()
        }
    }

    function doSearch(json, query) {
        if (json.feed.entry) {
            for (var i = 0; i < json.feed.entry.length; i++) {
                for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                    if (json.feed.entry[i].link[j].rel == 'alternate') {
                        var postUrl = json.feed.entry[i].link[j].href;
                        break
                    }
                }
                var imageurl = getMeImg(json.feed.entry[i].media$thumbnail);
                var postTitle = json.feed.entry[i].title.$t;
                var item = '<div class="search-item"><a href="' + postUrl + '"><img src="' + imageurl[0] + '"/></a><a class="st" href="' + postUrl + '" target="_blank">' + postTitle + '</a></div>';
                $('.search-result').prepend(item)
            }
            if (json.feed.entry.length < 5) {
                $('.search-result span.status').show().html('&#xf00d; No more result');
                $('.more-result').hide()
            } else {
                $('.search-result span.status').hide(function() {
                    $('.more-result').show()
                })
            }
        } else {
            $('.search-result span.status').show().html('No result');
            $('.more-result').hide()
        }
    };
    $('.close-search').click(function() {
        $('.search-content').hide()
    });
    $('.more-result').click(function() {
        $('.more-result').hide();
        findit()
    });
    $('.static-trigger').click(function() {
        var et = $(this).html();
        $(this).toggleClass('active').html(et == '<i class="fa fa-navicon"></i>' ? '<i class="fa fa-close"></i>' : '<i class="fa fa-navicon"></i>');
        $('.navigation .widget-content').slideToggle()
    });
    $('.dropdown-trigger').click(function() {
        var et = $(this).html();
        $(this).toggleClass('active').html(et == '<i class="fa fa-close"></i> Navigation' ? '<i class="fa fa-navicon"></i> Navigation' : '<i class="fa fa-close"></i> Navigation');
        $('.DropDownNavigation').slideToggle()
    });
    var sbl = $('.search-button').offset();
    var rt = ($(window).width() - (sbl.left + $('.search-button').outerWidth()));
    $('.search-button').click(function() {
        $('.search-outer,.search-button').toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).html('&#xf00d;');
            $('.searchbari').focus();
            $(this).css({
                'z-index': 102,
                'position': 'fixed',
                'right': rt,
                'top': sbl.top
            });
            $(this).animate({
                'right': '10px',
                'top': '10px',
                'width': 50,
                'height': 50
            })
        } else {
            $(this).html('&#xf002;');
            $(this).animate({
                'right': rt,
                'top': sbl.top,
                'width': 32,
                'height': 32
            }, function() {
                $('.search-button').css({
                    'position': 'relative',
                    'right': 'auto',
                    'top': 'auto',
                })
            });
            $('.trendy-search').removeClass('remove');
            $('.search-content').hide(0);
            $('.search-item').remove();
            $('.result-head').fadeOut()
        }
    })
});

function getBNav(a, b, c, d) {
    var rr = "navBig" + Math.random();
    $.ajax({
        type: 'GET',
        url: d,
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                a.find('.nav-out-wrap').prepend('<h3>' + c + '</h3>');
                var entries = json.feed.entry;
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentImage, currentBigImage, currentDefault, currentTitle, currentLabel, currentAuthor, currentDate;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    var imgTag = getMeImg(currentEntry.media$thumbnail),
                        title = currentEntry.title.$t,
                        cDate = getmeta(currentEntry.published.$t),
                        cAuthor = getauthor(currentEntry.author),
                        content = i == 0 ? "<div class='container'><a href='" + currentLink + "'><img src='" + imgTag[1] + "' title='" + title + "'/></a><div class='inner-content'><div class='inner-label'><a href='/search/label/" + currentEntry.category[0].term + "'>" + currentEntry.category[0].term + "</a></div><div class='nav-meta'>" + cDate + cAuthor + "</div><h2><a href='" + currentLink + "'>" + title + "</a></h2></div></div>" : "<div class='strip'><a href='" + currentLink + "'><img src='" + imgTag[0] + "' title='" + title + "'/></a><div class='strip-content'><h2><a href='" + currentLink + "'>" + title + "</a></h2><div class='strip-meta'>" + cDate + cAuthor + "</div></div></div>",
                        container = i == 0 ? '.left-content' : '.right-content';
                    a.find(container).append(content)
                }
            }
        }
    })
}

function getNav(a, b, c, d) {
    var rr = "nav" + Math.random();
    $.ajax({
        type: 'GET',
        url: a,
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var entries = json.feed.entry;
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentImage, currentBigImage, currentDefault, currentTitle, currentLabel, currentAuthor, currentDate;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    currentImage = getMeImg(currentEntry.media$thumbnail);
                    currentTitle = currentEntry.title.$t;
                    currentLabel = currentEntry.category[0].term;
                    var imgContent = getImg(currentImage[2], true, true, true, true, true, currentLink, currentLabel, currentImage[1]);
                    var nnitem = "<div class='n-item'><div class='g-img-o'><img src='" + currentImage[1] + "'/>" + imgContent + "</div><h3><a href='" + currentLink + "'>" + currentTitle + "</a></h3></div>";
                    b.find(c).append(nnitem)
                }
                b.find(c).owlCarousel({
                    items: 4,
                    nav: true,
                    dots: false,
                    margin: 25,
                    navText: ['&#xf104;', '&#xf105;'],
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 4,
                            nav: true,
                            loop: false
                        }
                    }
                });
                b.find('.g-img-o .g-img-m .z').colorbox({
                    rel: rr,
                    height: '80%',
                    width: '80%'
                })
            }
        }
    })
}

function get_simple_nav(e, a) {
    $.ajax({
        type: 'GET',
        url: a,
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                var entries = json.feed.entry;
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentDate, currentTitle, item;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    currentTitle = currentEntry.title.$t, currentDate = getmeta(currentEntry.published.$t), item = "<div class='nav-simple-strip'><h3><a href='" + currentLink + "'>" + currentTitle + "</a></h3><span>" + currentDate + "</span></div>";
                    e.find('.nav-simple-recent').append(item)
                }
            }
        }
    })
}
$(function() {
    $('li.nav-rec').each(function() {
        var e = $(this),
            r = e.attr('data-label'),
            g = '/feeds/posts/summary/-/' + r + '?max-results=15&alt=json-in-script';
        e.append("<div class='nav-outer'><div class='toCenter'>" + loaderHTML + "<div class='nav-oi'></div></div></div>");
        $(this).addClass('ready');
        var currentLink = $(this);
        if (!currentLink.hasClass('loaded-c')) {
            currentLink.addClass('loaded-c');
            setTimeout(function() {
                getNav(g, e, '.nav-oi', 5);
                currentLink.addClass('hide-load')
            }, 1000)
        }
    });
    $('li.nav-simple').each(function() {
        var e = $(this),
            g = '/feeds/posts/summary/?alt=json&max-results=15';
        e.append("<div class='nav-outer'><div class='toCenter'>" + loaderHTML + "<div class='nav-simple-recent'></div></div></div>");
        e.mouseenter(function() {
            var currentLink = $(this);
            if (!currentLink.hasClass('loaded-c')) {
                currentLink.addClass('loaded-c');
                setTimeout(function() {
                    get_simple_nav(e, g);
                    currentLink.addClass('hide-load')
                }, 1000)
            }
        })
    });
    $('li.nav-big').each(function() {
        var currentL = $(this),
            label = currentL.attr('data-label'),
            heading = currentL.attr('data-heading'),
            forhead = heading === undefined ? label : heading,
            url = '/feeds/posts/summary/-/' + label + '?max-results=7&alt=json-in-script';
        currentL.append('<div class="big-nav-outer"><div class="toCenter">' + loaderHTML + '<div class="nav-out-wrap"><div class="big-nav-inner"><div class="left-content"></div><div class="right-content"></div></div></div></div></div>');
        var thisL = $(this);
        if (!thisL.hasClass('loaded-c')) {
            thisL.addClass('loaded-c');
            setTimeout(function() {
                getBNav(currentL, label, forhead, url);
                thisL.addClass('hide-load')
            }, 1000)
        }
    });
    $('.megamenu').each(function() {
        $(this).append("<div class='megamenu-inner'><div class='toCenter'></div></div>");
        $(this).find('ul').appendTo('.megamenu-inner .toCenter')
    })
});
var Default_Image_For_Recent_Posts = "";

function get_top_recent(e) {
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/?max-results=5&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            var entries = json.feed.entry;
            var container;
            if (entries) {
                for (var i = 0; i < entries.length; i++) {
                    var currentEntry = entries[i],
                        currentLink, currentImage, currentTitle, currentLabel, currentAuthor, currentDate;
                    for (var j = 0; j < currentEntry.link.length; j++) {
                        if (currentEntry.link[j].rel == 'alternate') {
                            currentLink = currentEntry.link[j].href;
                            break
                        }
                    }
                    var currentTitle = currentEntry.title.$t,
                        current_label = currentEntry.category != undefined ? "<a href='/search/label/" + currentEntry.category[0].term + "' class='home-top-label g-label'>" + currentEntry.category[0].term + "</a>" : "",
                        currentDate = getmeta(currentEntry.published.$t),
                        sum = currentEntry.summary.$t.substr(0, 150) + '...',
                        currentAuthor = getauthor(currentEntry.author);
                    currentImage = getMeImg(currentEntry.media$thumbnail);
                    container = "<div class='top-inner'> <img src='" + currentImage[1] + "' /> <div class='g-top-layer'></div> <div class='content'> " + current_label + " <h3><a href='" + currentLink + "'>" + currentTitle + "</a></h3> <div class='top-meta'>" + currentDate + currentAuthor + "<p>" + sum + "</p></div></div> <a href='" + currentLink + "' class='g-link-layer'></a> </div>";
                    e.append(container)
                }
                e.owlCarousel({
                    items: 1,
                    dots: false,
                    loop: true,
                    autoplay: true,
                    nav: true,
                    navText: ['&#xf104;', '&#xf105;'],
                })
            } else {
                container = 'No Post Found';
                e.append(container)
            }
        }
    })
}

function getTop(a, classN, c, label) {
    var container = "";
    $.ajax({
        type: 'GET',
        url: a,
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            var entries = json.feed.entry;
            var container;
            if (entries) {
                var currentEntry = entries[0],
                    currentLink, currentImage, currentTitle, currentLabel, currentAuthor, currentDate;
                for (var j = 0; j < currentEntry.link.length; j++) {
                    if (currentEntry.link[j].rel == 'alternate') {
                        currentLink = currentEntry.link[j].href;
                        break
                    }
                }
                var currentTitle = currentEntry.title.$t,
                    currentLabel = currentEntry.category[0].term,
                    currentDate = getmeta(currentEntry.published.$t),
                    currentAuthor = getauthor(currentEntry.author);
                currentImage = getMeImg(currentEntry.media$thumbnail);
                container = "<div class='top-inner'> <img src='" + currentImage[1] + "' /> <div class='g-top-layer'></div> <div class='content'> <a href='/search/label/" + label + "' class='home-top-label g-label'>" + label + "</a> <h3><a href='" + currentLink + "'>" + currentTitle + "</a></h3> <div class='top-meta'>" + currentDate + currentAuthor + "</div></div> <a href='" + currentLink + "' class='g-link-layer'></a> </div>";
                $('.' + classN).find(c).append(container)
            } else {
                container = 'No Post Found';
                $('.' + classN).find(c).append(container)
            }
        }
    })
}

function t(t) {
    var t, e, a = [];
    for (e = 0; t > e; e++) a.push(e);
    return shuffle(a)
}
shuffle = function(t) {
    for (var e, a, s = t.length; s; e = parseInt(Math.random() * s), a = t[--s], t[s] = t[e], t[e] = a);
    return t
};

function getmashrandom(e) {
    var r = "/feeds/posts/summary/?max-results=500&alt=json-in-script",
        ass = e.find('div.tab-mash-random');
    ass.find('span#tab-mash-random').addClass('loaded');
    ass.append('<ul class="random-inner"></ul>'), $.ajax({
        type: "GET",
        url: r,
        async: true,
        contentType: "application/json",
        dataType: "jsonp",
        success: function(e) {
            ass.addClass('hide-load');
            for (var a = e.feed.entry, r = a.length, l = t(r), i = 0; 8 > i; i++) {
                for (var o = 0; o < e.feed.entry[l[i]].link.length; o++)
                    if ("alternate" == a[l[i]].link[o].rel) {
                        var c = e.feed.entry[l[i]].link[o].href;
                        break
                    }
                var p = getMeImg(a[l[i]].media$thumbnail);
                var u = a[l[i]].title.$t,
                    h = a[l[i]].published.$t,
                    f = getmeta(h),
                    v = getauthor(a[l[i]].author),
                    m = '<li><a href="' + c + '"><img  class="toLoad" src="' + p[0] + '"/></a><div class="recent-list-c"><h3><a href="' + c + '">' + u + '</a></h3><div class="meta">' + v + " " + f + "</div></div></li>";
                ass.find("ul").append(m)
            }
        }
    })
}

function getmashrecent(e) {
    e.find('span#tab-mash-recent').addClass('loaded');
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary?max-results=8&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                e.find('div.tab-mash-recent').append('<ul class="recent-post-list"></ul>');
                for (var i = 0; i < json.feed.entry.length; i++) {
                    var en = json.feed.entry[i];
                    for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                        if (json.feed.entry[i].link[j].rel == 'alternate') {
                            var postUrl = json.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var title = en.title.$t,
                        date = getmeta(en.published.$t),
                        author = getauthor(en.author),
                        imgP = getMeImg(en.media$thumbnail),
                        con = "<li class='recent-post-item'><a href='" + postUrl + "'><img src='" + imgP[0] + "'/></a><div class='recent-list-content'><h3><a href='" + postUrl + "'>" + title + "</a></h3><div class='recent-list-meta'>" + date + author + "</div></div></li>";
                    e.find('div.tab-mash-recent ul').append(con)
                }
            }
        }
    })
}

function getmashcomment(e) {
    $.ajax({
        type: 'GET',
        url: '/feeds/comments/default?alt=json-in-script&max-results=5',
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            e.find('div.tab-mash-comment').append('<ul></ul>').addClass('hide-load');
            for (var i = 0; i < json.feed.entry.length; i++) {
                var comment = json.feed.entry[i];
                for (var j = 0; j < comment.link.length; j++) {
                    if (comment.link[j].rel == 'alternate') {
                        var commentlink = comment.link[j].href;
                        break
                    }
                }
                for (var c = 0; c < comment.gd$extendedProperty.length; c++) {
                    if (comment.gd$extendedProperty[c].name == 'blogger.displayTime') {
                        var datePub = comment.gd$extendedProperty[c].value;
                        break
                    }
                }
                var commentcontent = comment.title.$t,
                    authorname = comment.author[0].name.$t,
                    authorimage = comment.author[0].gd$image.src,
                    item = '<li class="comment-item"><img src="' + authorimage + '"/><span>' + authorname + '</span> said, "<a href="' + commentlink + '">' + commentcontent + '</a>" on ' + datePub + '</li>';
                e.find('div.tab-mash-comment').append(item)
            }
        }
    })
}
$(function() {
    $('[data-genova="tab-mash"]').each(function() {
        var e = $(this);
        e.append("<div class='tab-mash-outer'><div class='tab-mash-button'><span class='active' id='tab-mash-recent'><i class='fa-rss'></i> " + Tab_Text.tab_recent + "</span><span id='tab-mash-random'><i class='fa-random'></i> " + Tab_Text.tab_random + "</span><span id='tab-mash-comment'><i class='fa-comment'></i> " + Tab_Text.tab_comment + "</span></div><div class='tab-mash-content'><div class='tab-mash-recent min-height-need'></div><div class='tab-mash-random min-height-need' style='display:none;'>" + loaderHTML + "</div><div class='tab-mash-comment min-height-need' style='display:none;'>" + loaderHTML + "</div></div></div>");
        getmashrecent(e);
        e.find('.tab-mash-button>span').click(function() {
            var current = $(this),
                alldivs = e.find('.tab-mash-content>div');
            alldivs.each(function() {
                if ($(this).hasClass(current.attr('id'))) {
                    $(this).fadeIn();
                    e.find('.tab-mash-button>span').removeClass('active');
                    current.addClass('active');
                    if (!current.hasClass('loaded')) {
                        if (current.attr('id') == "tab-mash-random") {
                            current.addClass('loaded');
                            setTimeout(function() {
                                getmashrandom(e)
                            }, 500)
                        } else if (current.attr('id') == "tab-mash-comment") {
                            current.addClass('loaded');
                            setTimeout(function() {
                                getmashcomment(e)
                            }, 500)
                        }
                    }
                } else {
                    $(this).hide(0)
                }
            })
        })
    })
});

function isRelated(a, b) {
    if (a.category !== undefined) {
        for (var i = 0; i < a.category.length; i++) {
            if (b.indexOf(a.category[i].term) !== -1) {
                return true
            } else {
                return false
            }
        }
    } else {
        return false
    }
}

function getRelated(e) {
    var counter = 0;
    $.ajax({
        type: 'GET',
        url: '/feeds/posts/summary/?max-results=500&alt=json-in-script',
        async: true,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(json) {
            if (json.feed.entry) {
                $('.related-post').append('<div class="related-inner"></div>');
                for (var i = 0; i < json.feed.entry.length; i++) {
                    if (counter == related_post_max) {
                        break
                    }
                    if (isRelated(json.feed.entry[i], e)) {
                        counter++;
                        var en = json.feed.entry[i];
                        for (var j = 0; j < json.feed.entry[i].link.length; j++) {
                            if (json.feed.entry[i].link[j].rel == 'alternate') {
                                var postUrl = json.feed.entry[i].link[j].href;
                                break
                            }
                        }
                        var title = en.title.$t,
                            img = getMeImg(en.media$thumbnail),
                            date = getmeta(en.published.$t),
                            con = '<div class="related-item"><div class="g-img-o""><img src="' + img[1] + '"/>' + getImg(img[2], true, true, true, true, true, postUrl, en.category[0].term, img[1]) + '</div><h3><a href="' + postUrl + '">' + title + '</a></h3><div class="related-meta">' + date + '</div></div>';
                        $('.related-post .related-inner').append(con)
                    }
                }
                if ($('.related-post .related-item').length == 0) {
                    $('.related-post').append('<h3>Pas de documents similaires</h3>')
                } else {
                    $('.related-post .related-inner').owlCarousel({
                        items: 3,
                        margin: 25,
                        dots: false,
                        nav: true,
                        navText: ['&#xf104;', '&#xf105;'],
                        responsive: {
                            0: {
                                items: 1,
                                nav: true
                            },
                            600: {
                                items: 3
                            },
                            1000: {
                                items: 3,
                                nav: true,
                                loop: false
                            }
                        }
                    })
                }
            }
        }
    })
}
$(function() {
    var c = $('.tl-sitemap'),
        counter = 1;
    var r = '/feeds/posts/summary?max-results=0&alt=json-in-script';

    function getLabels(e) {
        if (e.category === undefined) {
            return "<span>No Label</span>"
        } else {
            return "<a href='/search/label" + e.category[0].term + "'>" + e.category[0].term + "</a>"
        }
    }

    function getSitemap() {
        var s = '/feeds/posts/summary?max-results=10&alt=json-in-script&start-index=' + counter;
        $.ajax({
            type: "GET",
            url: s,
            async: true,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(e) {
                var t = e.feed.entry,
                    more = t.length < 10 ? false : true;
                for (var s = 0; s < t.length; s++) {
                    for (var l, n = t[s], i = 0; i < n.link.length; i++)
                        if ("alternate" == n.link[i].rel) {
                            var r = n.link[i].href;
                            break
                        }
                    if (!more) {
                        c.find('tfoot').hide()
                    }
                    var title = '<a href="' + r + '">' + n.title.$t + '</a>',
                        date = getmeta(n.published.$t),
                        labels = getLabels(n),
                        cc = counter + s;
                    c.find('tbody').append('<tr><td>' + cc + '</td><td>' + title + '</td><td>' + date + '</td><td>' + labels + '</td></tr>')
                }
                counter += 10
            }
        })
    }
    $.ajax({
        type: "GET",
        url: r,
        async: true,
        contentType: "application/json",
        dataType: "jsonp",
        success: function(e) {
            var content = "<h3>Total Post:" + e.feed.openSearch$totalResults.$t + "</h3>";
            c.append(content);
            var more = parseInt(e.feed.openSearch$totalResults.$t) < 10 ? false : true;
            if (e.feed.openSearch$totalResults.$t > 0) {
                c.append("<table><thead><tr><td><i class='fa fa-barcode'></i> S.N</td><td><i class='fa fa-link'></i> Title</td><td><i class='fa fa-calendar'></i> Date Published</td><td><i class='fa fa-tag'></i> Label</td></tr></thead><tbody></tbody></table>");
                if (more) {
                    c.find('table').append('<tfoot><tr><td><button class="load-more">Load More</button></td></tr></tfoot>')
                }
                getSitemap()
            } else {
                c.append("<h4>No post to show</h4>")
            }
            c.find('.load-more').click(getSitemap)
        }
    })
});

function isScrolledIntoView(elem) {
    var $window = $(window),
        docViewTop = $window.scrollTop(),
        docViewBottom = docViewTop + $window.height(),
        elemTop = $(elem).offset().top,
        elemBottom = elemTop + $(elem).outerHeight();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
}
