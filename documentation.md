# Using Contensis with React

This step by step guide will take you through getting your entries from Contensis and displaying them using the delivery API and a simple React app.

## Requirements

* NPM
* [Git](https://git-scm.com/downloads)
* Command line interface knowledge

## Using the demo project

This app will pull in data from the Leif project in Contensis. The React demo is used so you can see how a simple app can use the delivery API.

To get started:

* Clone the Contensis React project *** Make sure we update the example here ***

``` shell
git clone https://path-to-the-project-in-github
```

* Change directory to the repo directory

``` shell
cd react-leif-example
```

* Install dependencies

``` shell
npm install
```

* Run it

``` shell
npm start
```

Go to http://localhost:3000 and view the React app running in your browser.

## How it works

### Include the Contensis delivery API helper
The Contensis delivery API helper contains classes to perform the repetitive tasks of retrieving content from the API.

Include an instance of ```contensis-delivery-api``` in index.js:

```js
// connection.js
const { Client } = require("contensis-delivery-api");
```

### Connect to the Contensis delivery API

Set the root url of the Contensis CMS, access token, and project you want to use with the delivery API.

``` js
// connection.js
const ContensisClient = Client.create({
  rootUrl: "<root-url>",
  accessToken: "<access-token>",
  projectId: "<project-id>",
});
```

### Export it for use in the app

```js
// connection.js
export default ContensisClient
```

### Get a single blog entry by its id

To keep things simple we're using the GUID of the entry as part of the url and passing that along as part of the routing.

```js
// Get the Contensis connection details and connect
import ContensisClient from '../connection';
...
// Get the ID from the routing params
let params = useParams();
...
// Get the entry by the ID
ContensisClient.entries.get({ id: params.blogId, linkDepth: 1 })
```

Here's the full example:

```js
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './BlogItem.css';
// Get the Contensis connection details and connect
import ContensisClient from '../connection';

const BlogItem = () => {
    // Get the ID from the routing params
    let params = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        // Get the entry by the ID
        ContensisClient.entries.get({ id: params.blogId, linkDepth: 1 })
            .then(
                (result) => {
                    setBlog(result);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [params])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <>
                <div className="blog-hero">
                    <h1 className="blog-hero__title">{blog.entryTitle}</h1>
                    {blog.thumbnailImage && <img className="blog-hero__img" src={'http://live.leif.zenhub.contensis.cloud' + blog.thumbnailImage.asset.sys.uri} alt={blog.thumbnailImage.altText} />}
                </div>
                <div className="profile">
                    {blog.author && <img className="profile__img" src={'http://live.leif.zenhub.contensis.cloud' + blog.author.photo.asset.sys.uri} alt={blog.author.photo.altText} />}
                    {blog.author && <span className="profile__name">{blog.author.entryTitle}</span>}
                    {blog.category && <span className="category">{blog.category.entryTitle}</span>}
                </div>
                <div className="blog__content">
                    {blog.leadParagraph && <p className="lead">{blog.leadParagraph}</p>}

                    {blog.postBody.map((field, idx) => {
                        switch (field.type) {
                            case 'markup':
                                return (
                                    <div key={idx} dangerouslySetInnerHTML={{ __html: field.value }} ></div>
                                );
                            case 'image':
                                return (
                                    <div key={idx} className="inline-img">
                                        <img className="inline-img__img" src={'http://live.leif.zenhub.contensis.cloud' + field.value.asset.sys.uri} alt={field.value.altText} />
                                        <div className="inline-img__content">
                                            <h2 className="inline-img__title">{field.value.caption}</h2>
                                        </div>
                                    </div>
                                );
                            default:
                                break;
                        }
                        return null
                    })}
                </div>
            </>
        )
    }

}

export default BlogItem;

```

### Get a list of blogs

More information on search queries can be found here: https://www.contensis.com/help-and-docs/apis/delivery-js/search/query-operators

```js
// Get the Contensis connection details and connect
import ContensisClient from '../connection';
...
// Import Query and Op to query the api
const { Query, Op } = require("contensis-delivery-api");
// Create a new query for the latest blog posts
const blogsQuery = new Query(
    Op.equalTo("sys.contentTypeId", "blogPost"),
    Op.equalTo("sys.versionStatus", "latest")
);
// Search using the query
ContensisClient.entries.search(blogsQuery)
...
```

Full example:

```js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogListing.css';
// Get the Contensis connection details and connect
import ContensisClient from '../connection';


const BlogListing = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Import Query and Op to query the api
    const { Query, Op } = require("contensis-delivery-api");
    // Create a new query for the latest blog posts
    const blogsQuery = new Query(
      Op.equalTo("sys.contentTypeId", "blogPost"),
      Op.equalTo("sys.versionStatus", "latest")
    );
    // Search using the query
    ContensisClient.entries.search(blogsQuery)
      .then(
        (result) => {
          // Set the items
          setItems(result.items);
          setIsLoaded(true);
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
      <>
        <h1 className="blogs__title">Our blogs</h1>
        <ul className="blogs">
          {items.map(item => (
            <li className="blog-card" key={item.sys.id}>
              <Link to={`/blog/${item.sys.id}`}>
                <h2 className="blog-card__title mobile">{item.entryTitle}</h2>
                <img className="blog-card__img" src={`http://live.leif.zenhub.contensis.cloud${item.thumbnailImage.asset.sys.uri}`} alt={item.thumbnailImage.altText} />
                <div className="related-blog__content">
                  <h2 className="blog-card__title desktop">{item.entryTitle}</h2>
                  <p className="blog-card__text">{item.leadParagraph}</p>
                  <span className="category">{item.category.entryTitle}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default BlogListing;

```
