$(document).ready(function(){
// Создаем новый экземпляр класса
var client = new ZeroClipboard($("#copy-button"), {
  moviePath: "ZeroClipboard.swf"
});
// После того как происходит загрузка флеш файла
client.on("load", function(client) {  
  // и завершено копирование в буфер
  client.on("complete", function(client, args) {
    // выводим результат
    alert(args.text);
  });
});
});
