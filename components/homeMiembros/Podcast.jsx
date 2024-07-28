import React from "react";

const SpotifyEmbed = ({ episodeUrl }) => {
  const embedUrl = `https://open.spotify.com/embed-podcast/episode/${episodeUrl
    .split("/")
    .pop()}?utm_source=generator`;

  return (
    <div>
      <iframe
        src={embedUrl}
        width="100%"
        height="232"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
        title="Spotify Podcast Player"
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;
