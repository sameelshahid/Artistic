import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Styles from "../styles/Artist.module.css";
import { EventDetails } from "./EventDetails";
import Head from "next/head";

export const Events = () => {
  const router = useRouter();
  const { name } = router.query;
  const [artist_event, setArtistEvent] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (name) {
      fetch(
        "https://rest.bandsintown.com/artists/" +
          name +
          "/events" +
          "?app_id=abc"
      )
        .then((res) => res.json())
        .then((r) => setArtistEvent(r) & setLoading(false));
    }
  }, [name]);
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      {loading == true ? (
        <div className={Styles.spin}></div>
      ) : (
        <>
          {artist_event.length == 0 ? (
            <h4 className="container text-center">No Events Found</h4>
          ) : (
            <>
              <div className="container">
                <h4 className="text-center">
                  {artist_event.length} Upcoming Events
                </h4>
              </div>
              <div className="d-flex flex-wrap justify-content-center">
                {artist_event?.map((post) => {
                  return (
                    <EventDetails
                      key={post.id}
                      country={post.venue.country}
                      city={post.venue.city}
                      venue={post.venue.name}
                      datetime={post.datetime}
                    />
                  );
                })}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
