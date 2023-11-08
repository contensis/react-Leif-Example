import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Get the Contensis connection details and connect
import ContensisClient from '../connection';

const BlogListing = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Import Query and Op to query the api
    const { Query, Op } = require('contensis-delivery-api');
    // Create a new query for the latest blog posts
    const blogsQuery = new Query(
      Op.equalTo('sys.contentTypeId', 'blogPost'),
      Op.equalTo('sys.versionStatus', 'latest')
    );
    // Search using the query
    ContensisClient.entries.search(blogsQuery).then(
      (result) => {
        // Set the items
        setItems(result.items);
        setIsLoaded(true);
      },
      (error) => {
        setIsLoaded(true);
        console.error(error);
      }
    );
  }, []);

  const imageHost = `http://live-${process.env.REACT_APP_ALIAS}.cloud.contensis.com`;
  console.log(imageHost);

  if (!isLoaded) return null;
  else
    return (
      <>
        <h1 className="blogs__title">Our blogs</h1>
        <ul className="blogs">
          {items.map((item) => (
            <li className="blog-card" key={item.sys.id}>
              <h2 className="blog-card__title mobile">
                <Link className="blog-card__link" to={`/blog/${item.sys.id}`}>
                  {item.entryTitle}
                </Link>
              </h2>
              {item.thumbnailImage && (
                <img
                  className="blog-card__img"
                  src={`${imageHost}${item.thumbnailImage.asset.sys.uri}`}
                  alt=""
                />
              )}
              <div className="related-blog__content">
                <h2 className="blog-card__title desktop">
                  <Link
                    className="blog-card__link"
                    to={`/blog/${item.sys.id}`}
                  ></Link>
                  {item.entryTitle}
                </h2>
                <p className="blog-card__text">
                  {' '}
                  {item.summary.slice(0, 124)}...
                </p>
                <span className="category">{item?.category?.entryTitle}</span>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
};

export default BlogListing;
