module.exports = {
    configure: function (app) {
        function open(url) {
            var exec = require('child_process').exec;
            exec('"'+url+'"', function (err, stdout, stderr) {
                if (err) {
                    return console.error(err);
                }
            })
        }
        app.get('/', function (req, res) {
            res.send("test");
            return console.log("recieved");
        });
        app.get('/open/:program', function (req, res) {
            console.log("got /open");
            res.send("ok");
            console.log(req.params.program)
            switch(req.params.program) {
                case 'explorer':
                    open("C:\\Windows\\explorer.exe")
                    break;
                case 'visual studio code':
                    open("C:\\Users\\Chris\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe")
                    break;
                case "google chrome":
                    open("C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe")
                    break;
                case "overwatch":
                    open("C:\\Program Files (x86)\\\Overwatch\\_retail_\\Overwatch.exe");
                    break;
                case "spotify":
                    open("C:\\Users\\Chris\\AppData\\Roaming\\Spotify\\Spotify.exe");
                    break;
                case "discord":
                    open("C:\\Users\\Chris\\AppData\\Local\\DiscordCanary\\app-0.0.263\\DiscordCanary.exe");
                    break;
                case "csgo":
                    open("C:\\Users\\Chris\\Desktop\\csgo.url");
                    break;
            }
             // notice this without a callback.. // exit this nodejs process
        })

    }
}