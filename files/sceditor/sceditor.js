jQuery( document ).ready(function() {
    jQuery.sceditor.plugins.bbcode.bbcode
            .set("list", {
                html: function(element, attrs, content) {
                    var type = (attrs.defaultattr === '1' ? 'ol' : 'ul');

                    return '<' + type + '>' + content + '</' + type + '>';
                },
                breakAfter: false
            })
            .set("ul", { format: function($elm, content) { return '[list]' + content +'[/list]'; }})
            .set("ol", { format: function($elm, content) { return '[list=1]' + content +'[/list]'; }})
            .set("li", { format: function($elm, content) { return '[*]' + content; }})
            .set("*", { excludeClosing: true, isInline: false });

    jQuery.sceditor.command
            .set("bulletlist", { txtExec: ["[list]\n[*]", "\n[/list]"] })
            .set("orderedlist", { txtExec: ["[list=1]\n[*]", "\n[/list]"] });

    jQuery(".scedit_bbcode").sceditor({
        plugins: "bbcode",
        style: "sceditor/Air_sceditor.css",
        toolbar: "bold,italic,underline,strike|bulletlist,orderedlist|left,center,right,horizontalrule|color,font,size,removeformat|emoticon|link,email,image,quote|date,time|code|source",
        emoticonsEnabled: true,
        emoticons: {
                dropdown: {
                        ':)': 'img/smilies/smile.png',
                        ':(': 'img/smilies/sad.png',
                        ':D': 'img/smilies/big_smile.png',
                        ':o': 'img/smilies/yikes.png',
                        ':p': 'img/smilies/tongue.png',
                        ':/': 'img/smilies/hmm.png',
                        ':|': 'img/smilies/neutral.png',
                        ':cool:': 'img/smilies/cool.png',
                        ':lol:': 'img/smilies/lol.png',
                        ':mad:': 'img/smilies/mad.png',
                        ':rolleyes:': 'img/smilies/roll.png',
                        ';)': 'img/smilies/wink.png'
                },
                hidden: {
                        '=)': 'img/smilies/smile.png',
                        '=(': 'img/smilies/sad.png',
                        '=D': 'img/smilies/big_smile.png',
                        ':O': 'img/smilies/yikes.png',
                        ':P': 'img/smilies/tongue.png',
                        '=|': 'img/smilies/neutral.png',
                }
        },
    });

    jQuery(".scedit_html").sceditor({
        plugins: "xhtml",
        style: "minified/jquery.sceditor.default.min.css",
        emoticonsEnabled: true,
        emoticons: {
                dropdown: {
                        ':)': 'img/smilies/smile.png',
                        ':(': 'img/smilies/sad.png',
                        ':D': 'img/smilies/big_smile.png',
                        ':o': 'img/smilies/yikes.png',
                        ':p': 'img/smilies/tongue.png',
                        ':/': 'img/smilies/hmm.png',
                        ':|': 'img/smilies/neutral.png',
                        ':cool:': 'img/smilies/cool.png',
                        ':lol:': 'img/smilies/lol.png',
                        ':mad:': 'img/smilies/mad.png',
                        ':rolleyes:': 'img/smilies/roll.png',
                        ';)': 'img/smilies/wink.png'
                },
                hidden: {
                        '=)': 'img/smilies/smile.png',
                        '=(': 'img/smilies/sad.png',
                        '=D': 'img/smilies/big_smile.png',
                        ':O': 'img/smilies/yikes.png',
                        ':P': 'img/smilies/tongue.png',
                        '=|': 'img/smilies/neutral.png',
                }
        },
    });

});