import React, { useEffect, useState } from 'react';
import Header from './Header';
import devIcon from '../assets/images/dev.webp';
import Fade from 'react-reveal/Fade';
import { ThreeDots } from 'svg-loaders-react'

const Dev = () => {

    const [devPosts, setDevPosts] = useState([]);
    const [loading, setLoading] = useState(true)

    const getDevFeed = async () => {
        const response = await fetch('https://dev.to/api/articles', {
            headers: {
                'Content-type': 'application/json',
            },
        })
        const apiResponse = await response.json();
        // console.log(apiResponse);
        setLoading(false);
        setDevPosts(apiResponse);

    }

    useEffect(() => {
        getDevFeed();
    }, [])


    return (
        <div>
            <Header
                icon={devIcon}
                title='Dev'
                borderColor='border-blue-100'
            />
            {
                (loading === true) ?
                    <div className="flex justify-center my-48">
                        < ThreeDots fill="#6366F1" />
                    </div>
                    :
                    <div className="flex flex-row flex-wrap justify-center p-2">

                        {devPosts.map(post => {
                            return (
                                <Fade bottom key={post.id}>
                                    <a href={post.url}
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <div className="w-72 h-64 py-auto shadow flex flex-col bg-blue-100 hover:bg-blue-600 rounded-md p-4 text-left m-2">
                                            <img src={post.social_image === '' ? 'https://picsum.photos/seed/picsum/200/150' : post.social_image}
                                                alt="cover-img" className="rounded" />
                                            <h3 className="text-xl mt-2">
                                                {post.title}
                                            </h3>
                                        </div>
                                    </a>
                                </Fade>
                            )
                        })}
                    </div>
            }
        </div>
    );
}

export default Dev;