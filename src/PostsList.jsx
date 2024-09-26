import React from 'react';
import Post from './Post';

const PostsList = () => {
    const postsData = [
        {
            id: 1,
            name: 'Cody L. Bug',
            title: 'Ex-Googler | Ex-Metaoer | Ex-Amazoner | Ex-Boyfri..',
            time: '42m',
            content: "Junior developers punching thin air as tech companies wants new grads with 87 years of experience.",
            image: '/sadman.webp',
            likes: '169 miserable fucks liked this',
        },
        {
            id: 2,
            name: 'Rusty Rage',
            title: 'Co-founder @Yapping',
            time: '42m',
            content: "“Tech company replaces developers with AI—now hiring developers to fix AI’s mistakes!“",
            image: '/angryman.webp',
            likes: '69000 Devins liked this',
        },
        {
            id: 3,
            name: 'L.L.Max',
            title: 'ML Engineer @Close.. @OpenAI',
            time: '48m',
            content: "“ML engineering jobs declare themselves ‘Unicorns’—still rare, highly sought after, and definitely not going extinct!”",
            image: '/happyhappyman.jpeg',
            likes: 'Sam Altman and Ilya  liked this',
        },
    ];

    return (
        <div>
            {postsData
                .filter(post => post && post.id) // Only render valid posts
                .map(post => (
                    <Post key={post.id} {...post} />
                ))}
        </div>
    );
};

export default PostsList;
