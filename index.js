$(function(){

    var section = $('main>section');

    function createDom(navConfig){
        if(!navConfig.length) return;

        navConfig.forEach(function(item){
            var div = $("<div></div>");
            var h1 = $("<h1></h1>");
            h1.text(item.title);
            h1.appendTo(div);

            item.nav.forEach(function(childItem){
                var dl = $("<dl></dl>");
                var dt = $("<dt></dt>");
                var dd = $("<dd></dd>");

                dl.attr("flex","cross:top");
                dt.text(childItem.navType);
                childItem.nav.forEach(function(menu){
                    var a = $("<a></a>");
                    a.text(menu.text);
                    if(menu.icon){
                        var icon = $("<img>");
                        icon.attr("src",menu.icon);
                        icon.prependTo(a);
                    }

                    a.attr({
                        "href":menu.link,
                        "target":"_blank"
                    });
                    a.appendTo(dd);
                });
                dt.appendTo(dl);
                dd.appendTo(dl);
                dl.appendTo(div);
            });
            section.append(div);
        });
    }

    createDom(mainNav);



});