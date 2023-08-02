window.onload=function(){
    document.getElementById("nav_open_btn").addEventListener("click", function() {
        var nav_open = document.getElementById("navigation_opened");
        var nav_closed = document.getElementById("navigation_closed");
        var main_div = document.getElementsByClassName("main")[0];

        const viewportWidth = window.innerWidth;
        if (viewportWidth < 768) {
            main_div.style.display = "none";
        }
        nav_open.style.display = "block";
        nav_closed.style.display = "none";
    })

    document.getElementById("nav_close_btn").addEventListener("click", function() {
        var nav_open = document.getElementById("navigation_opened");
        var nav_closed = document.getElementById("navigation_closed");
        var main_div = document.getElementsByClassName("main")[0];

        const viewportWidth = window.innerWidth;
        if (viewportWidth < 768) {
            main_div.style.display = "block";
        }
        nav_open.style.display = "none";
        nav_closed.style.display = "block";
    })

    document.getElementById("instance_toggle").addEventListener("click", function() {
        var elm = document.getElementById("instance_toggle_contents");
        var status = elm.style.display;
        if (status == "none") {
            elm.style.display = "block";
        }
        else {
            elm.style.display = "none";
        }
    })

    document.getElementById("image_toggle").addEventListener("click", function() {
        var elm = document.getElementById("image_toggle_contents");
        var status = elm.style.display;
        if (status == "none") {
            elm.style.display = "block";
        }
        else {
            elm.style.display = "none";
        }
    })

    document.getElementById("ebs_toggle").addEventListener("click", function() {
        var elm = document.getElementById("ebs_toggle_contents");
        var status = elm.style.display;
        if (status == "none") {
            elm.style.display = "block";
        }
        else {
            elm.style.display = "none";
        }
    })

    document.getElementById("net_sec_toggle").addEventListener("click", function() {
        var elm = document.getElementById("net_sec_toggle_contents");
        var status = elm.style.display;
        if (status == "none") {
            elm.style.display = "block";
        }
        else {
            elm.style.display = "none";
        }
    })

    document.getElementById("lb_toggle").addEventListener("click", function() {
        var elm = document.getElementById("lb_toggle_contents");
        var status = elm.style.display;
        if (status == "none") {
            elm.style.display = "block";
        }
        else {
            elm.style.display = "none";
        }
    })

    document.getElementById("autoscaling_toggle").addEventListener("click", function() {
        var elm = document.getElementById("autoscaling_toggle_contents");
        var status = elm.style.display;
        if (status == "none") {
            elm.style.display = "block";
        }
        else {
            elm.style.display = "none";
        }
    })
    
}