import styled from "styled-components";
import { useVideosContext } from "../../context/Videos";
import CategoryContainer from "../CategoryContainer";

const StyledVideosContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 40px 0;
  padding: 0 10px;
`;

const VideosContainer = () => {
  const { categories, videos } = useVideosContext();

  if (videos.length === 0 || categories.length === 0) {
    return null;
  }

  return (
    <StyledVideosContainer>
      {categories.map((category) => (
        <CategoryContainer
          key={category.area}
          category={category}
          videos={videos.filter((video) => video.area === category.area)}
        />
      ))}
    </StyledVideosContainer>
  );
};

export default VideosContainer;
