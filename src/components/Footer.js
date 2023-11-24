import { Link } from 'react-router-dom';

const Footer = () => {
  const copyrightYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <Link to={`/`} className="footer__logo">
        <svg
          focusable="false"
          aria-hidden="true"
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="49"
          fill="none"
        >
          <path
            fill="#333"
            d="M6.447 47.777V6.42H0v41.357h6.447ZM53.36 47.777V18.125h-6.39v29.652h6.39ZM73.44 11.715c1.346 0 2.86.501 4.093 1.393L80 8.203c-1.906-1.393-4.317-2.062-6.727-2.062-5.158 0-10.26 3.288-10.26 10.2v2.898H59.09v4.794h3.924v23.744h6.391V24.033h7.793v-4.794h-7.793v-3.511c0-2.787 1.85-4.013 4.037-4.013ZM19.734 19.704c-7.615 4.524-9.915 12.912-5.38 20.655 4.507 7.696 12.802 9.879 20.735 5.233 4.451-2.607 7.198-6.347 8.108-10.562l-4.782-1.398c-.76 3.029-2.704 5.589-5.51 7.232-4.063 2.38-8.548 1.711-11.728-1.723l19.447-11.388c-4.73-9.632-11.843-13.347-20.89-8.049Zm-1.02 15.454C16.95 30.7 18.31 26.48 22.374 24.1c4.209-2.465 8.431-1.579 11.047 2.444l-14.707 8.613Z"
          />
          <path
            fill="#77E8C6"
            d="M58.836.564a.7.7 0 0 0-.126-.306.637.637 0 0 0-.248-.204.59.59 0 0 0-.6.063 7.949 7.949 0 0 1-4.79 1.31c-3.861 0-5.474 1.691-5.504 1.73a5.432 5.432 0 0 0-1.861 2.896 5.789 5.789 0 0 0 .19 3.513.36.36 0 0 1-.062.359l-1.668 1.94a.705.705 0 0 0-.167.46c0 .17.06.334.168.46a.6.6 0 0 0 .853.069c1.073-1.048 2.822-4.205 7.741-6.414a.59.59 0 0 1 .48.002c.153.068.275.2.339.364.064.164.064.35.002.515a.656.656 0 0 1-.335.367 16.387 16.387 0 0 0-5.27 3.722l-.006.006-.145.169a.358.358 0 0 0-.036.413.324.324 0 0 0 .099.103 4.753 4.753 0 0 0 2.664.822 7.233 7.233 0 0 0 3.615-1.057c5.481-3.24 4.957-9.47 4.667-11.302Z"
          />
        </svg>
      </Link>
      <div className="footer__socials">
      <a href="https://www.youtube.com/@Zengenti">
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
            fill="#2B2F51"
          >
            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.--> */}
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
          </svg>
          <span className="sr-only">Zengenti Youtube</span>
        </a>
        <a href="https://www.linkedin.com/showcase/contensis">
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 19H16.9231V13.3967C16.9231 11.8596 16.2715 11.0022 15.1031 11.0022C13.8315 11.0022 13.0769 11.8956 13.0769 13.3967V19H10V8.59243H13.0769V9.76288C13.0769 9.76288 14.0423 8 16.2177 8C18.3938 8 20 9.3818 20 12.2415C20 15.1004 20 19 20 19ZM5.50031 6C4.67151 6 4 5.32819 4 4.4997C4 3.67181 4.67151 3 5.50031 3C6.32849 3 7 3.67181 7 4.4997C7.00061 5.32819 6.32849 6 5.50031 6ZM4 19H7V9H4V19Z"
              fill="#2B2F51"
            />
          </svg>
          <span className="sr-only">Contensis LinkedIn</span>
        </a>
        <a href="https://twitter.com/Contensis?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            fill="#2B2F51"
          >
            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
          <span className="sr-only">Contensis Twitter</span>
        </a>
      </div>
      <div className="footer__copyright">
        <p>© {copyrightYear} Leif</p>
      </div>
    </footer>
  );
};

export default Footer;
