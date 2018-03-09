/**
 * Created by alicamargo on 31/05/15.
 */
! function (r) {
    var t = function (r) {
            var t = r.winner ? "winner" : "",
                e = r.ID ? r.ID : "",
                a = '       <div class="player ' + t + " player-" + e + '" data-id="' + e + '">';
            return r.url ? (a += '        <a class="name" href="' + r.url + '">', a += "           " + r.name, a += "        </a>") : a += "           " + r.name, a += "       </div>"
        },
        e = function (r) {
            var e = '   <div class="match">';
            return r.player1 && (e += t(r.player1)), r.player2 && (e += t(r.player2)), e += "   </div>"
        },
        a = function (r, t) {
            for (var e = '<div class="separator-brackets rd-' + r + '">', a = 1; t >= a; a++) e += '<div class="line"></div>';
            return e += "</div>"
        },
        n = function (t, e) {
            var a = "";
            if (a += '<div class="brackets-header">', t)
                if (Array.isArray(t)) r.each(t, function (r, t) {
                    a += '<div class="title">' + t + "</div>"
                });
                else
                    for (i = 1; i <= e; i++) a += i == e ? '<div class="title">Champion</div>' : i == e - 1 && e > 2 ? '<div class="title">Final</div>' : i == e - 2 && e > 3 ? '<div class="title">Semifinal</div>' : '<div class="title">Round ' + i + "</div>";
            return a += "</div>"
        },
        o = function (t, i) {
            var o = "";
            return o += n(i, t.length), o += '<div class="container-brackets">', r.each(t, function (n, i) {
                o += '<div class="round rd-' + (n + 1) + '">', r.each(i, function (r, t) {
                    o += e(t)
                }), o += "</div>", t.length != n + 1 && (o += a(n + 1, i.length))
            }), o += "</div>"
        },
        c = function (r) {
            return 23 * Math.pow(2, r - 2) + 20 * Math.pow(2, r - 3) + 40 * (Math.pow(2, r - 3) - 1)
        },
        l = function (r) {
            var t = "";
            for (r = r ? r : 0, i = 2; i <= r; i++) {
                var e = 2 == i ? 32.5 : c(i) + 19.5,
                    a = 2 == i ? 21.5 : c(i) + 8.5,
                    n = 2 * a + 40,
                    o = 2 * e + 40;
                t += "/*-- Round " + i + " --*/", t += ".container-brackets .round.rd-" + i + "{ margin-top: " + a + "px; }", t += "   .container-brackets .round.rd-" + i + " .match .player{ margin-bottom: " + n + "px; }", t += "/*-- lines " + i + " --*/", t += ".container-brackets .separator-brackets.rd-" + i + " .line{", t += "   height: " + o + "px;", t += "   margin-bottom: " + o + "px;", t += "}", t += "   .container-brackets .separator-brackets.rd-" + i + " .line:first-child{ margin-top: " + e + "px; }"
            }
            return t
        },
        s = function (r) {
            return 150 * r + 80 * (r - 1) - 75 * (r - 1)
        },
        d = function (r) {
            return c(r + 1)
        },
        p = function (r, t) {
            var e, a = document.head || document.getElementsByTagName("head")[0],
                n = document.createElement("style");
            e = ".left{float: left}", e += ".right{float: right}", e += ".brackets-header{", e += "    margin-bottom: 20px;", e += "    height: 30px;", e += "    width: " + s(t) + "px !important;", e += "}", e += ".brackets-header .title{", e += "    color: " + r.color_title + " !important;", e += "}", e += ".brackets-header .title{ float: left; width: 150px;  margin-right: 5px; text-align: center;}", e += ".brackets-header .title:last-child{ margin-right: 0px;}", e += ".container-brackets *,", e += ".container-brackets *:before,", e += ".container-brackets *:after {", e += "  -webkit-box-sizing: content-box !important;", e += "     -moz-box-sizing: content-box !important;", e += "          box-sizing: content-box !important;", e += "}", e += ".container-brackets{", e += "    position: relative;", e += "    overflow: hidden;", e += "    margin: 10px;", e += "    width: " + s(t) + "px !important;", e += "    height: " + d(t) + "px !important;", e += "}", e += ".container-brackets .round{ width: 150px; margin-left: -75px; float: left;}", e += "    .container-brackets .round:first-child{ margin-left: 0; }", e += "    .container-brackets .round .match{}", e += "        .container-brackets .round .match:last-child{ margin-bottom: 0px;}", e += "        .container-brackets .round .match .player{", e += "            border: solid 1px " + r.border_color + ";", e += "            border-radius: " + r.border_radius_player + ";", e += "            height: 21px;", e += "            padding: 0 5px;", e += "            /*width: calc(100% - 10px);*/", e += "            line-height: 21px;", e += "            background: " + r.bg_player + ";", e += "        }", e += "            .container-brackets .round .match .player.hover{ background: " + r.bg_player_hover + "; color: " + r.color_player_hover + ";}", e += "                .container-brackets .round .match .player .name{", e += "                    text-align: center;", e += "                    text-decoration: none;", e += "                    cursor: pointer;", e += "                   width: 100%;", e += "                    margin-left: 10px;", e += "                    /*display: block;*/", e += "                    color: " + r.color_player + ";", e += "                }", e += "                .container-brackets .round .match .player.hover a{", e += "                    color: " + r.color_player_hover + " !important;", e += "                }", e += ".container-brackets .separator-brackets{ width: 80px; float: left;}", e += "    .container-brackets .separator-brackets .line{", e += "        border: 1px solid " + r.border_color + ";", e += "        border-left: none;", e += "        border-radius: 0 " + r.border_radius_lines + " " + r.border_radius_lines + " 0;", e += "    }", e += "        .container-brackets .separator-brackets .line:last-child{ margin-bottom: 0; }", e += "/*-- First ronda --*/", e += "    .container-brackets .round.rd-1 .match{ margin-bottom: 40px; }", e += "        .container-brackets .round.rd-1 .match .player{ margin-bottom: 20px; }", e += "/*-- First lines --*/", e += ".container-brackets .separator-brackets.rd-1 .line{", e += "    height: 42px;", e += "    margin-bottom: 62px;", e += "}", e += "    .container-brackets .separator-brackets.rd-1 .line:first-child{ margin-top: 11px; }", e += l(t), n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)), a.appendChild(n)
        };
    r.fn.brackets = function (t) {
        var e = r.extend({}, r.fn.brackets.defaults, t);
        return e.rounds ? void(this.length >= 1 ? this.each(function () {
            var t = r(this),
                a = o(e.rounds, e.titles);
            t.html(a), p(e, e.rounds.length), r(".player", t).on({
                mouseover: function () {
                    var t = r(this);
                    ID = t.data("id"), r(".player[data-id='" + ID + "']").addClass("hover")
                },
                mouseout: function () {
                    r(".player").removeClass("hover")
                }
            })
        }) : console.error("Object not found :( ")) : (console.error("Round not found :("), !1)
    }, r.fn.brackets.defaults = {
        rounds: !1,
        titles: !1,
        color_title: "black",
        border_color: "black",
        color_player: "black",
        bg_player: "white",
        color_player_hover: "black",
        bg_player_hover: "white",
        border_radius_player: "0px",
        border_radius_lines: "0px"
    }
}(jQuery);