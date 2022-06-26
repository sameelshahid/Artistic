import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";
import Styles from "../styles/Artist.module.css";
import { Events } from ".//Events";

export const Artist = () => {
  const router = useRouter();
  const { name } = router.query;
  const [artist, setArtist] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (name) {
      fetch("https://rest.bandsintown.com/artists/" + name + "?app_id=abc")
        .then((res) => res.json())
        .then((r) => setArtist(r) & setLoading(false));
    }
    return () => {};
  }, [name]);

  const fb_link = artist.links
    ? artist.links?.find((item) => item.type === "facebook")?.url
    : "Facebook not found";

  return (
    <>
      {loading == true ? (
        <div className={Styles.spin}></div>
      ) : (
        <>
          {!artist.name ? (
            <NotFound />
          ) : (
            <>
              <Head>
                <title>{artist.name}</title>
              </Head>
              <div className={`card shadow-sm p-3 bg-white rounded`}>
                <div className={`${Styles.row} row no-gutters`}>
                  <div className="col-auto">
                    <img
                      src={artist.image_url}
                      width="100"
                      height="100"
                      className="rounded-circle"
                      alt="artist image"
                    />
                  </div>
                  <div className="col">
                    <div className={`${Styles.cardblock} card-block px-2`}>
                      <h4 className={`card-title`}>{artist.name}</h4>
                      <a
                        className="card-text"
                        href={
                          artist.links
                            ? artist.links?.find(
                                (item) => item.type === "facebook"
                              )?.url
                            : `${artist.name}`
                        }
                        alt="Artist link"
                        target="_blank"
                      >
                        {fb_link.includes("https://www.")
                          ? fb_link?.replace("https://www.", "")
                          : fb_link?.replace("https://", "")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4"></div>
              <Events />
            </>
          )}
        </>
      )}
    </>
  );
};
