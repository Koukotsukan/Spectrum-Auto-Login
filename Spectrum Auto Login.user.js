    // ==UserScript==
    // @name         Spectrum Auto Login
    // @name:zh-CN   Spectrum自动登录
    // @name:ms      Spectrum Log masuk automatik 
    // @namespace    http://tampermonkey.net/
    // @version      0.1
    // @license      MIT
    // @description  This code is designed to help users automatically log into the University of Malaya's SPeCTRUM system.
    // @description:zh-CN  此代码是为了帮助用户自动登录马来亚大学的SPeCTRUM系统
    // @description:ms  Kod ini direka untuk membantu pengguna masuk ke sistem SPeCTRUM Universiti Malaya secara automatik.
    // @author       Koukotsukan Neo
    // @
    // @match        https://casv.um.edu.my/cas/*
    // @match        https://spectrum.um.edu.my
    // @grant        none
    // @require      http://libs.baidu.com/jquery/2.0.0/jquery.min.js
    // ==/UserScript==
     
    (function() {
        //setTimeout(2000);
        const curURL = window.location.href
        const match = (...patterns) => patterns.some(p => curURL.includes(p))
        if (match("https://spectrum.um.edu.my")) {
            document.querySelector("span.login").querySelector("a").click();
        }else if(match("https://casv.um.edu.my/cas/loginAllType?service=https%3A%2F%2Fspectrum.um.edu.my%2Flogin%2Findex.php")){
            $(document).ready(function(){
                var x=document.getElementById("domain");
                x.innerHTML="<select name=\"domain\" id=\"domain\"><option selected=\"\" value=\"@perdana.um.edu.my\">Student</option><option value=\"@um.edu.my\">Staff</option><option value=\"\">External</option></select>";
                document.querySelector("button[type=submit]").click();
            });
        }
     
     
    }
    )();

