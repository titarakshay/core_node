7. // Write respective headers object below.
General
Request URL: https://altcampus.io/
Request Method: GET
Status Code: 200 
Remote Address: 128.199.85.71:443
Referrer Policy: origin



Response headers
access-control-allow-credentials: true
access-control-allow-origin: *
access-control-expose-headers: 
cache-control: max-age=0, private, must-revalidate
date: Sun, 26 Apr 2020 16:24:44 GMT
server: nginx/1.10.3 (Ubuntu)
status: 200
x-content-type-options: nosniff
x-content-type-options: nosniff
x-download-options: noopen
x-frame-options: SAMEORIGIN
x-frame-options: DENY
x-permitted-cross-domain-policies: none
x-request-id: 2o4mmh1pjl4kj2a42800glph
x-xss-protection: 1; mode=block



request header
:authority: altcampus.io
:method: GET
:path: /
:scheme: https
accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,
;q=0.8,application/signed-exchange;v=b3;q=0.9
accept-encoding: gzip, deflate, br
accept-language: en-US,en;q=0.9
cache-control: max-age=0
cookie: _ga=GA1.2.1643109415.1580368053; track_uid=0655a9b9-6fec-de33-d38d-5a39b9938099; _altcampus_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYMDcxSkFNcGs1WWhhaFFPQUR3ZFZzdz09.skU4tRiYbSZcDCUUmaFJo2LAQpuzySzPPuhDDLs9Fi0; _gid=GA1.2.1251244628.1587918278; _gat_gtag_UA_121886584_1=1
referer: https://www.google.com/
sec-fetch-dest: document
sec-fetch-mode: navigate
sec-fetch-site: cross-site
sec-fetch-user: ?1
upgrade-insecure-requests: 1
user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36

8.  Write parsed object below of the url ``http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4
    var url=require('url');
    var answer=url.parse(`http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4`)
    console.log(answer)


    ///output
    Url {
        protocol: 'http:',
        slashes: true,
        auth: null,
        host: 'localhost:3000',
        port: '3000',
        hostname: 'localhost',
        hash: null,
        search: '?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
        query: [Object: null prototype] {
          token: '8372fcb8y2874b2t478t6t48cbtbc72t4'
        },
        pathname: '/api/v3',
        path: '/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
        href: 'http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4'
      }
      
      
9. // Write parsed query object

var url=require('url');
var answer=url.parse(`http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4`,true)
console.log(answer)

//output

Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'localhost:3000',
    port: '3000',
    hostname: 'localhost',
    hash: null,
    search: '?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
    query: [Object: null prototype] {
      token: '8372fcb8y2874b2t478t6t48cbtbc72t4'
    },
    pathname: '/api/v3',
    path: '/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
    href: 'http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4'
  }
  
