const googleURL =
  'https://script.googleusercontent.com/macros/echo?user_content_key=lf0cNhjE2n9V6RvVRuS1V8fpXtnbeKnckCWR3edyGJ4LHP7c4PJH5AIEYRvGvvDjDzRpEQEyFVVPHGWGsEIyt5eTCaq3udvum5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnD-Gcit54aFufXByLsd0nptTvZvjtOqq68knHse3_n_OzwJKbhhEQ7o-Xr0opLVr6SFzvG5rdkMJQt2REjMoUZqYi33g8tsfTdz9Jw9Md8uu&lib=Meptghl_07YWH1V1E5dKHir-ughKgtinJ';
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
