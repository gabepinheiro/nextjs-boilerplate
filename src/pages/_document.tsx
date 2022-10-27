import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/color-mode'
import { extendedTheme } from '@/styles/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='pt-BR'>
        <Head />
        <body>
          <ColorModeScript
            initialColorMode={extendedTheme.config.initialColorMode}
            storageKey='@app/colormode'
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
