import { Html, Head, Main, NextScript } from "next/document";
import { extractStyles } from "evergreen-ui";

const Document = ({ css, hydrationScript }) => {
  return (
    <Html lang="en">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </Head>

      <body>
        <Main />
        {hydrationScript}
        <NextScript />
      </body>
    </Html>
  );
};

Document.getInitialProps = async ({ renderPage }) => ({
  ...(await renderPage()),
  ...extractStyles(),
});

export default Document;
