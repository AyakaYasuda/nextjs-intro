// our-domain.com/news
import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/1">News no.1</Link>
        </li>
        <li>
          <Link href="/news/2">News no.2</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
