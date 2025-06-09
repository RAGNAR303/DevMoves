import React, { useEffect, useState } from "react";
import { Backgraund, Container, ContainerSlider, Info } from "./styles";
import {
  getAiringToday,
  getOnTheAir,
  getPopularSeries,
  getSeries,
  getTopSeries,
  getDetailTv,
} from "../../services/getData";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";

function Series() {
  const [series, setSeries] = useState();
  const [onTheAir, setOnTheAir] = useState();
  const [AiringToday, setAiringToday] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topSeries, setTopSeries] = useState();


  useEffect(() => {
    async function allSeries() {
      Promise.all([
        getSeries(),
        getOnTheAir(),
        getAiringToday(),
        getPopularSeries(),
        getTopSeries(),
      ])
        .then(([series, ontheair, airingtoday, popular, topseries]) => [
          setSeries(series[1]),
          setOnTheAir(ontheair),
          setAiringToday(airingtoday),
          setPopularSeries(popular),
          setTopSeries(topseries),
        ])
        .catch((error) => console.error(error));
    }
    allSeries();
  }, []);

  return (
    <Container>
      {series && <Backgraund $img={getImages(series.backdrop_path)} />}
      {series && (
        <Info>
          <h1>{series.name}</h1>
          <p>{series.overview}</p>
        </Info>
      )}
      <ContainerSlider>
        {topSeries && <Slider info={topSeries} title={"Top Series "} />}
        {popularSeries && (
          <Slider info={popularSeries} title={"Series Populares "} />
        )}
        {onTheAir && <Slider info={onTheAir} title={"No ar "} />}
        {AiringToday && <Slider info={AiringToday} title={"Exibindo Hoje "} />}
      </ContainerSlider>
    </Container>
  );
}

export default Series;
