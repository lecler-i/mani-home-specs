var deflate = require('./deflate.js');

function decode6bit(a) {
    return a >= "0" && a <= "9" ? a.charCodeAt(0) - 48 : a >= "A" && a <= "Z" ? a.charCodeAt(0) - 65 + 10 : a >= "a" && a <= "z" ? a.charCodeAt(0) - 97 + 36 : "-" == a ? 62 : "_" == a ? 63 : 0
}

function decode64(a) {
    var c = "";
    for (i = 0; i < a.length; i += 4) {
        var d = decode6bit(a.substring(i, i + 1)),
            e = decode6bit(a.substring(i + 1, i + 2)),
            f = decode6bit(a.substring(i + 2, i + 3)),
            g = decode6bit(a.substring(i + 3, i + 4));
        c += String.fromCharCode(d << 2 | e >> 4), c += String.fromCharCode((15 & e) << 4 | f >> 2), c += String.fromCharCode((3 & f) << 6 | g)
    }
    return decodeURIComponent(escape(RawDeflate.inflate(c)))
}

function encode64(a) {
    for (r = "", i = 0; i < a.length; i += 3) i + 2 == a.length ? r += append3bytes(a.charCodeAt(i), a.charCodeAt(i + 1), 0) : i + 1 == a.length ? r += append3bytes(a.charCodeAt(i), 0, 0) : r += append3bytes(a.charCodeAt(i), a.charCodeAt(i + 1), a.charCodeAt(i + 2));
    return r
}

function append3bytes(a, b, c) {
    return c1 = a >> 2, c2 = (3 & a) << 4 | b >> 4, c3 = (15 & b) << 2 | c >> 6, c4 = 63 & c, r = "", r += encode6bit(63 & c1), r += encode6bit(63 & c2), r += encode6bit(63 & c3), r += encode6bit(63 & c4), r
}

function encode6bit(a) {
    return a < 10 ? String.fromCharCode(48 + a) : (a -= 10, a < 26 ? String.fromCharCode(65 + a) : (a -= 26, a < 26 ? String.fromCharCode(97 + a) : (a -= 26, 0 == a ? "-" : 1 == a ? "_" : "?")))
}

function generatePlantUmlString(a) {
    a = unescape(encodeURIComponent(a));
    var b = deflate(a),
        c = encode64(b);

    return c;
}


var http = require('https');
var fs = require('fs')

var path = process.argv[2];

var output = fs.createWriteStream(path + ".png");

fs.readFile(process.argv[2], 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var str = generatePlantUmlString(data);
  var img_url = "https://www.planttext.com/plantuml/img/" + str;
  var svg_url = "https://www.planttext.com/plantuml/svg/" + str;


  var request = http.get(img_url, function(response) {
    response.pipe(output);
  });

  // console.log('Image : ', img_url);

  // console.log('');
  // console.log('SVG : ', svg_url);
});



