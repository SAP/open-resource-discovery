function locationHashChanged(){document.querySelectorAll(".highlight").forEach((t=>{t.classList.remove("highlight")}));const t=location.hash.split("#")[1];console.debug("highlighting",t);const e=document.getElementById(t);e&&(e.classList.add("highlight"),e.getElementsByTagName("a")[0]?addAnchorTitle(e.getElementsByTagName("a")[0].title):addAnchorTitle(e.textContent))}function addAnchorTitle(t){const e=document.title.split(" | ");t=t.replace("Direct link to ",""),document.title=`${t} | ${e[e.length-1]} | ${e[e.length-2]}`}window.addEventListener("load",locationHashChanged,!1),window.addEventListener("hashchange",locationHashChanged,!1);