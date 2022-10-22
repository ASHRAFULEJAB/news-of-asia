import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CustomNewsCard from '../../Shared/CustomNewsCard/CustomNewsCard'
const Home = () => {
    const AllNews=useLoaderData()
    return (
        <div>
            <h1>News of Aisa :{AllNews.length}</h1>
            {
                AllNews.map(news => <CustomNewsCard
                    key={news._id}
                    news={news}
                ></CustomNewsCard>)
            }
        </div>
    );
};

export default Home;