import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="//code.tidio.co/8gq9wzgvu8ubuqghlquvuxefhuozzjmu.js" async></script>
          {/* <a href="https://www.producthunt.com/posts/klubmeet?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-klubmeet" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=304860&theme=dark" alt="KlubMeet - Create a personalised video conferencing room for yourself | Product Hunt" 
            style={{ width: '250px', height: '54px', position: 'fixed', bottom: '40px', left: '20px', zIndex: 100 }} 
          /></a> */}
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
