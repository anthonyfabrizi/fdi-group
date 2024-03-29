import React from "react";
import Helmet from "react-helmet";
import Layout from "../layouts";
import { graphql } from "gatsby";

export default ({ data }) => {
  const home = data.gcms.homes[0];
  console.log(data);

  const slides = home.images.map((item, index) => {
    return index === 0 ? (
      <div
        key={item.url}
        className="carousel-item active"
        style={{ backgroundImage: "url(" + item.url + ")" }}
      >
        {/*
          <div className="carousel-caption d-none d-md-block">
            <h3>{item.caption}</h3>
            <p>This is a description for the slide {index + 1}.</p>
          </div>
        */}
      </div>
    ) : (
      <div
        key={item.url}
        className="carousel-item"
        style={{ backgroundImage: "url(" + item.url + ")" }}
      >
        {/*
            <div className="carousel-caption d-none d-md-block">
              <h3>{item.caption}</h3>
              <p>This is a description for the slide {index + 1}.</p>
            </div>
          */}
      </div>
    );
  });

  return (
    <Layout>
      <div className="homeContent">
        <Helmet>
          <title>
            Farmington Displays - Trade Show Displays, Exhibits, Retail
          </title>
        </Helmet>
        <header>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
            data-interval="3500"
          >
            <ol className="carousel-indicators">
              {home.images.map((item, index) =>
                index === 0 ? (
                  <li
                    key={item.url}
                    data-target="#carouselExampleIndicators"
                    data-slide-to={index}
                    className="active"
                  />
                ) : (
                  <li
                    key={item.url}
                    data-target="#carouselExampleIndicators"
                    data-slide-to={index}
                  />
                )
              )}
            </ol>
            <div className="carousel-inner" role="listbox">
              {slides}
            </div>
            {/*
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
          */}
          </div>
        </header>

        <section className="py-5">
          <div className="container text-center">
            <h1>
              <strong>brand-building environments</strong>
            </h1>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    gcms {
      homes {
        title
        images {
          handle
          url
        }
      }
    }
  }
`;
