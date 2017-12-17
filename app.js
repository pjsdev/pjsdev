function GameButton(id, label, link)
{
  var b = "<a href='"+link+"' target='_blank' id='"+id+"' class='btn pink-bg'>"+label+"</a>";
  return b;
}

function RenderRecord(record)
{
  var img_path = record.name + "/" + record.name + ((record.gif) ? ".gif" : ".png");
  var h = " \
  <div class='row game-container'> \
    <div class='col-md-4'><div><img width='100%' class='thumbnail' src='games/" + img_path + "' /></div></div> \
      <div class='game-desc col-md-8'> \
        <div class='row'> \
          <h2 class='blue game-title'>"+record.title+"</h2> \
          <h6 class='yellow'>"+record.subtitle+" - "+record.date+"</h6> \
          <p>"+record.description+"</p><hr/>";

  h += ((record.vid !== undefined) ? GameButton("vid-img", "Video", record.vid) : "");

  if(record.unplayableMessage !== undefined)
  {
    h += "<span class='pink unplayable-msg'>"+record.unplayableMessage+"</span>"
  }
  else
  {
    h += ((record.web !== undefined) ? GameButton("webgl-img", "WebGL", record.web) : "");
    h += ((record.mac !== undefined) ? GameButton("mac-img", "Mac", record.mac) : "");
    h += ((record.ios !== undefined) ? GameButton("ios-img", "iOS", record.ios) : "");
    h += ((record.android !== undefined) ? GameButton("android-img", "Android", record.android) : "");
    h += ((record.win !== undefined) ? GameButton("win-img", "Windows", record.win) : "");
    h += ((record.linux !== undefined) ? GameButton("linux-img", "Linux", record.linux) : "");
  }

  h += "</div></div></div>";

  return h;
}

function RenderArchiveRecord(record)
{
  var img_path = record.name + "/" + record.name + ((record.gif) ? ".gif" : ".png");
  var path = record.web || record.win || record.mac || record.linux;
  var anchorOpen = record.unplayableMessage ? "<a target='_blank' href='unplayable.html'>" : "<a target='_blank' href='"+path+"'>"
  var anchorClose = "</a>"

  return h = " \
  <div class='col-md-3'> \
    "+anchorOpen+"<img width='100%' class='thumbnail' src='games/" + img_path + "' />"+anchorClose+" \
    <p class='blue'>"+record.title+"<br/><span class='yellow'>"+record.date+"</span></p> \
  </div>";

  return h;
}

