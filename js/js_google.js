const googleURL =
  'https://script.google.com/macros/s/AKfycbzeTzbQ5sF7m2VFTZlTb5HIUXYHdJk7Bx1ZZA8BCkswFZk1SJntjTRgFX0qs67hG0HC0Q/exec';
let displayGoogleSheetData;
var idArray = new Array();
var imgArray = new Array();
(async () => {
  const getData = async () => {
    const res = await fetch(googleURL);
    const data = await res.json();
    console.log('data: ', data.GoogleSheetData);
    return data.GoogleSheetData;
  };
  displayGoogleSheetData = await getData();

  for (var i = 0; i < displayGoogleSheetData.length; i++) {
    var newImgUrl = displayGoogleSheetData[i][3];
    newImgUrl = newImgUrl.replace('open?', 'thumbnail?');
    imgArray.push(newImgUrl);
  }
  console.log('imgArray: ', imgArray);

  for (var i = 0; i < imgArray.length; i++) {
    var id = imgArray[i];
    id = id.replace('https://drive.google.com/thumbnail?id=', '');
    idArray.push(id);
  }
  console.log('idArray: ', idArray);
  //Gallery Page
  var newArticleCover = ' <h1>Gallery of Artcles</h1>';
  newArticleCover +=
    '<p>Click on any of the images below to view the article.</p>';
  newArticleCover += '<ul>';
  for (var i = 1; i < displayGoogleSheetData.length; i++) {
    newArticleCover +=
      '<li style="list-style:none;" id="' + idArray[i] + '"><figure>';
    newArticleCover +=
      '<a href="article.html?id=' + idArray[i] + '" target="_/blank">';
    newArticleCover +=
      '<img src="' + imgArray[i] + '" width="100%" height="100%" />';
  }
  newArticleCover += ' </a></figure></li>';

  newArticleCover += '</ul>';
  document.getElementById('gallery').innerHTML = newArticleCover;
})();
