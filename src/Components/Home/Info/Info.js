import React from "react";
import "../Home.css";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
function Info({
  tagline,
  title,
  overview,
  production_companies,
  revenue,
  release_date,
  vote_average,
  genres,
  runtime,
  dob,
  birthday,
  person,
  homepage,
  imdb,
  original_language
}) {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <>
      <div className="info">
        <div className="info__top">
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="tagline">{tagline}</div>
          <div className="overview">
            <p>{truncate(overview, 400)}</p>
          </div>
        </div>
        <div className="info__mid">
          <div className="genres">{genres?.join(", ") || dob}</div>

          <div className="production__companies">
            {production_companies?.join(", ") || birthday}
          </div>
        </div>
        {person ? (
          <div className="dash"></div>
        ) : (
          <div className="grid">
            <div className="grid__box">
              <span>Release Date:</span>
              <p>
                {release_date ? release_date : <div className="dash"></div>}
              </p>
            </div>
            <div className="grid__box">
              <span>Runing Time:</span>
              <p>{runtime ? runtime + "mins" : <div className="dash"></div>}</p>
            </div>
            <div className="grid__box">
              <span>Box Office:</span>
              <p>
                {revenue ? (
                  revenue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
                ) : (
                  <div className="dash"></div>
                )}
              </p>
            </div>
            <div className="grid__box">
              <span>Vote Avarage:</span>
              <p>
                {vote_average ? (
                  vote_average?.toFixed(1) + "/ 10"
                ) : (
                  <div className="dash"></div>
                )}
              </p>
            </div>
            <div className="languge">
              {original_language}
            </div>
          </div>
        )}
        {homepage? 
          <div className="watch">
            <a href={`${homepage}`} target="_blank">
              Watch <LanguageOutlinedIcon />
            </a>
            <a href={`https://www.imdb.com/title/${imdb}`}>IMDB</a>
          </div> : <div className="no"></div>
        }
      </div>
    </>
  );
}

export default Info;
