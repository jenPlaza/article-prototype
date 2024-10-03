//Google form //https://forms.gle/bQZ3AST3FJ4RNdVp7

var href = window.location.href;
var hrefArray = href.split('=');
var pageId = hrefArray.pop();
var imgArray2 = new Array();
var idArray2 = new Array();

console.log('pageId: ', pageId);
const googleURL =
  'https://script.googleusercontent.com/macros/echo?user_content_key=lf0cNhjE2n9V6RvVRuS1V8fpXtnbeKnckCWR3edyGJ4LHP7c4PJH5AIEYRvGvvDjDzRpEQEyFVVPHGWGsEIyt5eTCaq3udvum5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnD-Gcit54aFufXByLsd0nptTvZvjtOqq68knHse3_n_OzwJKbhhEQ7o-Xr0opLVr6SFzvG5rdkMJQt2REjMoUZqYi33g8tsfTdz9Jw9Md8uu&lib=Meptghl_07YWH1V1E5dKHir-ughKgtinJ';
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
    imgArray2.push(newImgUrl);
  }

  for (var i = 0; i < imgArray2.length; i++) {
    var id = imgArray2[i];
    id = id.replace('https://drive.google.com/thumbnail?id=', '');
    idArray2.push(id);
  }

  var x;
  var index;
  for (x = 1; x < idArray2.length; x++) {
    if (idArray2[x] == pageId) {
      index = x;
    }
  }

  //Article Page
  var newArticle =
    '<h1 style="text-align: center; margin-bottom:5%">Artcle Title</h1>';
  newArticle += '<ul>';
  newArticle +=
    '<figure><img src="' +
    imgArray2[index] +
    '" width="100%" height="100%" /></figure>';
  newArticle += '<div>';
  newArticle += '<label>Name</label>';
  newArticle += '<p>' + displayGoogleSheetData[index][1] + '</p>';
  newArticle += '<br />';
  newArticle += '<label>Email</label>';
  newArticle += '<p>' + displayGoogleSheetData[index][2] + '</p>';
  newArticle += '</div>';

  newArticle += '</ul>';
  document.getElementById('article').innerHTML = newArticle;
})();
