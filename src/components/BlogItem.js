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
