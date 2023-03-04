setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hourHand=document.getElementById("hourHand");
    minHand=document.getElementById("minHand");
    secHand=document.getElementById("secHand");

    hourHand.style.transform = `rotate(${hrotation}deg)`;
    minHand.style.transform = `rotate(${mrotation}deg)`;
    secHand.style.transform = `rotate(${srotation}deg)`;
}, 1000);