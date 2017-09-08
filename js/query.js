MinecraftAPI.getServerStatus('ts-mc.net', {
    port: 25565
}, function (err, status) {
    if (err) {
        document.querySelector('.info__inner').className += "info__inner--offline";
        return document.querySelector('.info__h2').innerHTML = 'Error loading server status';
    }

    if (status.online) {
        document.querySelector('.info__inner').className += "info__inner--online";
        document.querySelector('.info__h2').innerHTML = status.players.now + "/" + status.players.max + " players online"
    } else {
        document.querySelector('.info__inner').className += "info__inner--offline";
        document.querySelector('.info__h2').innerHTML = "Server Offline";
    }

});