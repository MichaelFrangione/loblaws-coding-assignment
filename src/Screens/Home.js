import React from "react";
import styled from "styled-components";
import GridItem from "../Components/GridItem";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AnimatedContainer from "../Components/AnimatedContainer";
import Carousel from "Components/Carousel";
import SectionDivider from "Components/SectionDivider";
import Header from "Components/Header";
import MealInfo from "Components/MealInfo";

const StyledContainer = styled(Container)`
  min-height: 150px;
  align-content: center;
  justify-content: center;
  margin: 32px 0;
`;

const RandomRecipe = styled.div`
  background: ${({ theme }) => theme.recipeCardBackground};
  margin-bottom: 32px;
  overflow: hidden;
`;

const Home = ({ categories, favorites, randomRecipes }) => {
  return (
    <>
      <Header />
      <SectionDivider
        backgroundColor="#8965e0"
        heading="Looking to try something new?"
        subHeading="Here's a few of our most popular meals"
      />
      {randomRecipes && (
        <RandomRecipe>
          <Carousel
            slides={randomRecipes.map((el, i) => (
              <MealInfo meal={el} isCarousel key={i} />
            ))}
          />
        </RandomRecipe>
      )}
      <SectionDivider
        heading="My Favorites"
        subHeading="Here are your favorited meals"
        backgroundColor="#2dce89"
      />
      <StyledContainer>
        {favorites && favorites.length > 0 ? (
          <Grid container spacing={6}>
            {favorites.map((favorite, i) => (
              <Grid item lg={3} md={4} xs={6} key={favorite.mealId}>
                <AnimatedContainer index={i}>
                  <GridItem
                    {...favorite}
                    linkToUrl={`/meal/${favorite.mealId}`}
                  />
                </AnimatedContainer>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h5">
            You haven't added any favorites yet.
          </Typography>
        )}
      </StyledContainer>

      <SectionDivider
        heading="What are you in the mood for tonight?"
        subHeading="Here you can find meals in various categories"
      />
      <StyledContainer>
        <Grid container spacing={6}>
          {categories &&
            categories.map((category, i) => (
              <Grid item lg={3} md={4} xs={6} key={category.categoryId}>
                <AnimatedContainer index={i}>
                  <GridItem
                    {...category}
                    linkToUrl={`/category/${category.name}`}
                  />
                </AnimatedContainer>
              </Grid>
            ))}
        </Grid>
      </StyledContainer>
    </>
  );
};

export default Home;
