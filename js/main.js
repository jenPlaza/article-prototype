//Google form //https://forms.gle/bQZ3AST3FJ4RNdVp7

var href = window.location.href;
var hrefArray = href.split('=');
var pageId = hrefArray.pop();
var idArray2 = new Array();
//testing
//console.log('pageId: ', pageId);

const googleURL =
  'https://script.googleusercontent.com/macros/echo?user_content_key=2ZGU6z9X-gmNktHtiN64zfYw-u2sPyVD4YHE-o3BuOV9IOqVZUR8Hvw_GtA3x-gvjDnw4FaRQ1PXdMTKyxqVnWYuU6Q1mlitm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBmWV0uqwEUYvQVTbSroa-LtVkQyxaOPswDQ-hZlC_ULkLK00J9YMfrBZnivBAIblN62jYw-3L_yrXivIZwbqvN7uqm8wDfASdz9Jw9Md8uu&lib=MTiSNS-2lUNP9cEBKSL4-jL-ughKgtinJ';
(async () => {
  const getData = async () => {
    const res = await fetch(googleURL);
    const data = await res.json();
    return data.GoogleSheetData;
  };
  displayGoogleSheetData = await getData();

  for (var i = 1; i < displayGoogleSheetData.length; i++) {
    var id = displayGoogleSheetData[i][4];
    idArray2.push(id);
  }
  //testing
  //console.log('idArray2: ', idArray2);

  var x;
  var index;
  for (x = 1; x < idArray2.length; x++) {
    if (idArray2[x] == pageId) {
      return x;
    }
  }
  //console.log('x: ', x);

  //Article Page
  var newArticle =
    '<h1 style="text-align: center; margin-bottom:5%">Artcle Title</h1>';
  newArticle += '<ul>';
  newArticle +=
    '<figure><img src="' +
    displayGoogleSheetData[x][3] +
    '" width="100%" height="100%" alt="' +
    displayGoogleSheetData[x][5] +
    '"/></figure>';
  newArticle += '<div>';
  newArticle += '<label>Name</label>';
  newArticle += '<p>' + displayGoogleSheetData[x][1] + '</p>';
  newArticle += '<br />';
  newArticle += '<label>Email</label>';
  newArticle += '<p>' + displayGoogleSheetData[x][2] + '</p>';
  newArticle += '</div>';

  newArticle += '</ul>';
  document.getElementById('article').innerHTML = newArticle;
})();
