# schemaorg_js

Javascript for adding schema.org JSON-LD from DataCite to a web page.  Modified
from
[DataCite](https://github.com/crosscite/doi-metadata-search/blob/master/public/javascripts/schemaorg.js)

You're required to have a HTML meta tag with the name 'DC.identifier' listing
the DOI

``` <meta name="DC.identifier" content="https://doi.org/10.14291/tccon.ggg2014.ascension01.R0/1149285"> ```

schemaorg.js works if there is one DC.identifier tag per page;
schemaorg_group.js works is there are multiple DC.identifier tags per page.
