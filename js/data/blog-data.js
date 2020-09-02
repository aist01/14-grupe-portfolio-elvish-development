"use strict";

const data = [
    {
        media: { 
            images: 'blog-1.jpg'
        },
        title: 'There are many variations',
        category: 'Lifestyle',
        date: '13 February 2018',
        author: 'By Envato', 
        description: `Sit sagittis vulputate laoreet sodales 
        tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.`,
        readmore: 'Read More...' 
    },
    {
        media: { 
            video: 'mov.mp4'
        },
        title: 'Contrary to popular belief',
        category: 'Travel',
        date: '13 February 2018',
        author: 'By Envato', 
        description: `Sit sagittis vulputate laoreet sodales 
        tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.`,
        readmore: 'Read More...'  
    },
    {
        media: {
            slideshow: ['blog-3.jpg', 'blog-4.jpg', 'blog-5.jpg']
        },
        title: 'Lorem Ipsum is not simply',
        category: 'Food & Drinks',
        date: '13 February 2018',
        author: 'By Envato', 
        description: `Sit sagittis vulputate laoreet sodales 
        tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.`,
        readmore: 'Read More...'  
    }
];

export default data;
console.log(data);