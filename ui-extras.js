/* ============================================================
   名画赏析画廊 · 增强层 (ui-extras.js)
   - 浅色 / 深色主题切换（默认深色，localStorage 记忆）
   - 分享 / 复制链接 / 收藏 悬浮工具
   纯前端、零第三方依赖、同源。
   ============================================================ */
(function () {
  "use strict";
  var KEY = "ag-theme";
  var root = document.documentElement;
  var isMac = /Mac|iPhone|iPad|iPod/i.test((navigator.platform || "") + " " + (navigator.userAgent || ""));

  function stored() { try { return localStorage.getItem(KEY) || "dark"; } catch (e) { return "dark"; } }

  function setTheme(t) {
    if (t === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
    try { localStorage.setItem(KEY, t); } catch (e) {}
    var b = document.getElementById("ag-theme");
    if (b) {
      var light = t === "light";
      b.textContent = light ? "\u263E" : "\u2600";              /* ☾ / ☀ */
      b.setAttribute("aria-label", light ? "切换到深色模式" : "切换到浅色模式");
      b.setAttribute("aria-pressed", light ? "true" : "false");
      b.title = b.getAttribute("aria-label");
    }
  }

  var toastEl = null, toastTimer = 0;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "ag-toast";
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 2200);
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", "");
    ta.style.position = "fixed"; ta.style.top = "-1000px"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    var ok = false; try { ok = document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    return ok;
  }
  function doCopy() {
    var url = location.href;
    var okMsg = "已复制链接，去分享吧～";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () { toast(okMsg); },
        function () { toast(fallbackCopy(url) ? okMsg : "复制失败，请手动复制地址栏链接"); });
    } else {
      toast(fallbackCopy(url) ? okMsg : "复制失败，请手动复制地址栏链接");
    }
  }
  function doShare() {
    if (navigator.share) {
      navigator.share({ title: document.title, text: document.title, url: location.href }).catch(function () {});
    } else { doCopy(); }
  }
  function doBookmark() { toast("按 " + (isMac ? "\u2318" : "Ctrl") + " + D 即可收藏本站"); }

  function menuEl() { return document.getElementById("ag-menu"); }
  function hideMenu() {
    var m = menuEl(); if (m) m.classList.remove("open");
    var b = document.getElementById("ag-share"); if (b) b.setAttribute("aria-expanded", "false");
  }
  function toggleMenu() {
    var m = menuEl(); if (!m) return;
    var open = m.classList.toggle("open");
    var b = document.getElementById("ag-share"); if (b) b.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function build() {
    if (document.querySelector(".ag-tools")) return;
    var tools = document.createElement("div"); tools.className = "ag-tools";

    var menu = document.createElement("div");
    menu.className = "ag-menu"; menu.id = "ag-menu";
    menu.setAttribute("role", "menu"); menu.setAttribute("aria-label", "分享与收藏");

    function entry(icon, label, fn) {
      var b = document.createElement("button");
      b.type = "button"; b.setAttribute("role", "menuitem");
      var i = document.createElement("span"); i.className = "ic"; i.setAttribute("aria-hidden", "true"); i.textContent = icon;
      var s = document.createElement("span"); s.textContent = label;
      b.appendChild(i); b.appendChild(s);
      b.addEventListener("click", function () { hideMenu(); fn(); });
      return b;
    }
    menu.appendChild(entry("\uD83D\uDCE4", "分享到…", doShare));
    menu.appendChild(entry("\uD83D\uDD17", "复制链接", doCopy));
    menu.appendChild(entry("\u2B50", "收藏本站", doBookmark));

    var bShare = document.createElement("button");
    bShare.type = "button"; bShare.id = "ag-share"; bShare.textContent = "\u2197";
    bShare.title = "分享 / 收藏"; bShare.setAttribute("aria-label", "分享与收藏");
    bShare.setAttribute("aria-haspopup", "true"); bShare.setAttribute("aria-expanded", "false");
    bShare.addEventListener("click", function (e) { e.stopPropagation(); toggleMenu(); });

    var bTheme = document.createElement("button");
    bTheme.type = "button"; bTheme.id = "ag-theme";
    bTheme.addEventListener("click", function () {
      var next = (root.getAttribute("data-theme") === "light") ? "dark" : "light";
      setTheme(next);
      toast(next === "light" ? "已切换到「浅色」" : "已切换到「深色」");
    });

    tools.appendChild(menu);
    tools.appendChild(bShare);
    tools.appendChild(bTheme);
    document.body.appendChild(tools);
    setTheme(stored());
  }

  /* apply stored theme ASAP (head inline script also does this to avoid flash) */
  setTheme(stored());

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();

  document.addEventListener("click", function (e) {
    if (e.target && e.target.closest && e.target.closest(".ag-tools")) return;
    hideMenu();
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") hideMenu(); });
})();
