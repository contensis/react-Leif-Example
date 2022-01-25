import { useState, useEffect } from 'react';
import './BlogListing.css';
import ContensisClient from '../connection'
import { Link } from 'react-router-dom'

const BlogListing = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
      const { Query, Op } = require("contensis-delivery-api");
      const blogsQuery = new Query(
        Op.equalTo("sys.contentTypeId", "blogPost"),
        Op.equalTo("sys.versionStatus", "latest")
      );

      ContensisClient.entries.search(blogsQuery)
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul className="blogs">
         {items.map(item => (
           <li className="blog-card" key={item.sys.id}>
            <Link to={`/blog/${item.sys.id}`}>
                <h2 className="blog-card__title mobile">{ item.entryTitle }</h2>
                <img className="blog-card__img" src={`http://live.leif.zenhub.contensis.cloud${item.thumbnailImage.asset.sys.uri}`} alt={item.thumbnailImage.altText} />
                <div className="related-blog__content">
                    <h2 className="blog-card__title desktop">{ item.entryTitle }</h2>
                    <p className="blog-card__text">{ item.leadParagraph }</p>
                    <span className="category">{ item.category.entryTitle }</span>
                </div>
                </Link>
          </li>
          ))}
    </ul>
    );
  }
}

export default BlogListing;
