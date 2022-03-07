function Onchange(menu) {
    let value = menu.options[menu.selectedIndex].value;

    if (value === "mainpage") {
        loadwindow('index.html')
    }
    else if(value === "projectinfo") {
        loadwindow('projectinfo.html')
    }
}
function loadwindow(site) {
    window.location = site;
}
