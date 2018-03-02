$(document).ready(function() {
  var mTags = document.getElementsByTagName('meta');
  var metaTagLength=mTags.length;
  for(var i=0;i<metaTagLength;i++)
  {
  var identifier = mTags[i].content
  //console.log(mTags[i].name);
  if (mTags[i].name == 'DC.identifier'){
  //console.log(identifier);
  if (identifier === undefined) {
    return;
  }
  var doi = new URL(identifier);
  var url = 'https://data.datacite.org/application/vnd.schemaorg.ld+json' + doi.pathname;

  $.ajax({
    url: url,
    dataType: 'text', // don't convert JSON to Javascript object
    success: function(data) {
      $('<script>')
         .attr('type', 'application/ld+json')
         .text(data)
         .appendTo('head');
    },
    error: function (error) {
      console.log(error.responseJSON);
    }
  });
  }}
});
