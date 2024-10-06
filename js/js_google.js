const googleURL =
  'https://script.googleusercontent.com/macros/echo?user_content_key=2ZGU6z9X-gmNktHtiN64zfYw-u2sPyVD4YHE-o3BuOV9IOqVZUR8Hvw_GtA3x-gvjDnw4FaRQ1PXdMTKyxqVnWYuU6Q1mlitm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBmWV0uqwEUYvQVTbSroa-LtVkQyxaOPswDQ-hZlC_ULkLK00J9YMfrBZnivBAIblN62jYw-3L_yrXivIZwbqvN7uqm8wDfASdz9Jw9Md8uu&lib=MTiSNS-2lUNP9cEBKSL4-jL-ughKgtinJ';
let displayGoogleSheetData;

(async () => {
  const getData = async () => {
    const res = await fetch(googleURL);
    const data = await res.json();
    //testing
    //console.log('data: ', data.GoogleSheetData);
    return data.GoogleSheetData;
  };
  displayGoogleSheetData = await getData();

  //Gallery Page
  var newArticleCover = ' <h1>Gallery of Artcles</h1>';
  newArticleCover +=
    '<p>Click on any of the images below to view the article.</p>';
  newArticleCover += '<ul>';
  for (var i = 1; i < displayGoogleSheetData.length; i++) {
    newArticleCover +=
      '<li style="list-style:none;" id="' +
      displayGoogleSheetData[i][4] +
      '"><figure>';
    newArticleCover +=
      '<a href="article.html?id=' +
      displayGoogleSheetData[i][4] +
      '" target="_/blank">';
    newArticleCover +=
      '<figure><img src="' +
      displayGoogleSheetData[i][3] +
      '" width="100%" height="100%" alt="' +
      displayGoogleSheetData[i][3] +
      '"/>';

    newArticleCover += ' </figure></a></li>';
  }
  newArticleCover += '</ul>';
  document.getElementById('gallery').innerHTML = newArticleCover;
})();
