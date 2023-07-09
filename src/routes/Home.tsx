import { useEffect, useState } from "react";
import { getAllChessStreams } from "../api";
import { StreamDataRoot } from "../api/types/getStreams";
import AppLogo from "../components/AppLogo";

function Home() {
  const [streams, setStreams] = useState<StreamDataRoot>();

  useEffect(() => {
    getAllChessStreams()
      .then((res) => {
        setStreams(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <AppLogo></AppLogo>
      <div>
        {streams &&
          streams.data.map((stream) => {
            return (
              <>
                <div key={stream.id}>
                  <p>{stream.user_name}</p>
                  <p>{stream.title}</p>
                  <p>{stream.viewer_count} viewers</p>
                  <p>{stream.language}</p>
                  <p>https://www.twitch.tv/{stream.user_login}</p>
                </div>
                <br />
              </>
            );
          })}
      </div>
    </>
  );
}

export default Home;
