import React from 'react'
import PropTypes from 'prop-types'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

export default function HTML (props) {
  const jquery = <script src='https://code.jquery.com/jquery-3.1.1.slim.min.js' />
  const tether = <script src='https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js' />
  const bootstrap = <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js' />

  let css
  if (process.env.NODE_ENV === `production`) {
    css = (
      <style
        id='gatsby-inlined-css'
        dangerouslySetInnerHTML={{ __html: stylesStr }}
      />
    )
  }
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='keywords' content='trade show, tradeshow, trade show displays, trade show booth, trade show booths, trade show display, woodworking, exhibits, displays, fdi, fdi group, fdi-group, farmington displays, farmington displays inc, design, manufacture, custom, custom exhibits, portables, portable exhibits, mobile, mobile displays, capabilities, point of purchase, graphics, signage, retail, retail store fixtures, interiors, corporate, museum, architectural, brand-building environments, tabletops, inlines, banner stands, kisoks, rental' />
        <meta name='description' content='Farmington Displays, fdi, is a leader in the design and manufacturing of trade show displays, custom exhibits, museum, retail and corporate environments.' />
        <meta name='format-detection' content='telephone=no' />
        {props.headComponents}
        {css}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {jquery}
        {tether}
        {bootstrap}
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
