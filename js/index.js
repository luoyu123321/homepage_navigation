$(function(){
    /*构建主菜单*/
    (function createMain(navConfig){
        var section = $('main>section');
        if(!navConfig.length) return;

        navConfig.forEach(function(item,index){
            var div = $("<div></div>");
            var h1 = $("<h1></h1>");
            var aside_a = $("<a></a>");
            h1.text(item.title);
            h1.attr('id','l'+index);
            h1.appendTo(div);
            aside_a.attr("href","#l"+index);
            aside_a.text(item.title);
            aside_a.appendTo(".leftMenu");

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
    })(mainNav);

    /*构建侧边栏*/
    (function createAside(navConfig){
        var aside = $("aside");
        navConfig.forEach(function(item){
            var a = $("<a></a>");
            a.text(item.title);
            if(item.icon){
                var icon = $("<img>");
                icon.attr("src",item.icon);
                icon.prependTo(a);
            }
            a.attr({
                href:item.link,
                target:"_blank"
            });
            a.appendTo(aside);
        });
    })(asideNav);

    /*百度一下*/
    function search(){
        var keyword = $(".search").val();
        console.log(keyword);
        window.open(keyword ? "https://www.baidu.com/s?word="+keyword+"&ie=utf-8"  : "https://www.baidu.com","_blank");
    }

    $("#baidu").click(search);
    $(document).keyup(function(event){
        event.keyCode === 13 && search();
    });
});