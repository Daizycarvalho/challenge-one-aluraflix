import React from 'react';
import styled from 'styled-components';
import VideoCard from '../VideoCard';
import CategoryTitle from '../CategoryTitle';

const StyledVideoCardContainer = styled.div`
    width: 100%;
    margin-bottom: 60px;
    display: flex;
    gap: 20px;
    overflow-y: auto;
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: #2271d1 #2271d12b;
    &::-webkit-scrollbar {
        height: 10px;
    }
    &::-webkit-scrollbar {
        background-color: #2271d12b;
        border: 5px;
        border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #2271d1;
        border-radius: 20px;
    }
`;

const CategoryContainer = ({ categories, videos }) => {
    if (!categories || !categories.length || !videos || !videos.length) {
        return null; // Retorna null se não houver categorias ou vídeos
    }

    return (
        <>
            {categories.map((category) => (
                <div key={category.area}>
                    <CategoryTitle color={category.color}>{category.area}</CategoryTitle>
                    <StyledVideoCardContainer>
                        {videos
                            .filter((video) => video.area === category.area)
                            .map((video) => (
                                <VideoCard key={video.title} color={category.color} video={video} />
                            ))}
                    </StyledVideoCardContainer>
                </div>
            ))}
        </>
    );
};

export default CategoryContainer;