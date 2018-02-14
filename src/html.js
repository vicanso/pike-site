/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import React, {Component} from 'react';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.error(e);
  }
}

const JS_NPM_URLS = [
  '//unpkg.com/docsearch.js@2.4.1/dist/cdn/docsearch.min.js',
];

const baiduTongji = `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?83e6b838eeeb56f0ad0a214e0945e623";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`;

export default class HTML extends Component {
  render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{__html: stylesStr}}
        />
      );
    }
    const js = JS_NPM_URLS.map(url => <script key={url} src={url} />);

    return (
      <html lang="zh">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script dangerouslySetInnerHTML={{
            __html: baiduTongji,
          }}>
          </script>
          <link rel="icon" href="/favicon.ico" />
          {this.props.headComponents}
          {js}
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
