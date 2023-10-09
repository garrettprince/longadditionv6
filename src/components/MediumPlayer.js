/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Howl } from "howler";

function MediumPlayer({ artist, songTitle, albumTitle, albumArt, songSource }) {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [seek, setSeek] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const sound = new Howl({
      src: [songSource],
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onend: () => setIsPlaying(false),
      onload: () => setDuration(sound.duration()),
      volume: volume,
    });

    setPlayer(sound);

    return () => sound.unload();
  }, [songSource, volume]);

  useEffect(() => {
    if (player) {
      player.volume(volume);
    }
  }, [player, volume]);

  const play = () => {
    if (player) player.play();
  };

  const pause = () => {
    if (player) player.pause();
  };

  const togglePlay = () => {
    if (isPlaying) pause();
    else play();
  };

  const stop = () => {
    if (player) {
      player.stop();
      setIsPlaying(false);
      setSeek(0);
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);

    if (player) player.volume(newVolume);
  };

  const handleSeekChange = (event) => {
    const newSeek = parseFloat(event.target.value);
    setSeek(newSeek);

    if (player) {
      player.seek(newSeek);
    }
  };

  useEffect(() => {
    const updateSeek = () => {
      if (player && isPlaying) {
        setSeek(player.seek() || 0);
        requestAnimationFrame(updateSeek);
      }
    };

    if (player && isPlaying) {
      requestAnimationFrame(updateSeek);
    }
  }, [player, isPlaying]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="bg-transparent">
      <div className="bg-zinc-800 bg-zinc-800-shadow rounded-lg   mr-2 mt-7 mb-8">
        <main className="flex items-center justify-between bg-transparent">
          <section id="leftSide" className="bg-transparent flex items-center">
            <img src={albumArt} alt="" className="h-16 w-16 rounded m-3" />
            <section id="songDetails" className="bg-transparent text-sm">
              <p className="bg-transparent font-bold">{songTitle}</p>
              <p className="bg-transparent text-inactive">{artist}</p>
              <p className="bg-transparent text-inactive">{albumTitle}</p>
            </section>
          </section>
          <section id="rightSide" className="bg-transparent flex items-center">
            <section
              id="controls"
              className="bg-transparent flex items-center mr-7"
            >
              {!isPlaying && (
                <svg
                  onClick={togglePlay}
                  className="bg-transparent cursor-pointer h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="20"
                  viewBox="0 0 17.292 20.494"
                >
                  <path
                    id="Polygon_6"
                    dataName="Polygon 6"
                    d="M10.247,0,20.494,17.292H0Z"
                    transform="translate(17.292) rotate(90)"
                    fill="#fff"
                  />
                </svg>
              )}
              {isPlaying && (
                <svg
                  onClick={togglePlay}
                  className="bg-transparent cursor-pointer h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="20"
                  viewBox="0 0 16 19"
                >
                  <g
                    id="Group_13"
                    data-name="Group 13"
                    transform="translate(-284 -400)"
                  >
                    <rect
                      id="Rectangle_2"
                      data-name="Rectangle 2"
                      width="6"
                      height="19"
                      transform="translate(284 400)"
                      fill="#fff"
                    />
                    <rect
                      id="Rectangle_3"
                      data-name="Rectangle 3"
                      width="6"
                      height="19"
                      transform="translate(294 400)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              )}
            </section>
          </section>
        </main>

        <section
          id="timeInfo"
          className="bg-transparent text-xs flex justify-between mx-4 mb-4 mt-1"
        >
          <p className="bg-transparent text-inactive">{formatTime(seek)}</p>
          <p className="bg-transparent text-inactive">{formatTime(duration)}</p>
        </section>
        <section className="relative mx-4 bg-transparent h-1">
          <input
            type="range"
            min="0"
            step="0.001"
            max={duration}
            value={seek}
            onChange={handleSeekChange}
            id="range1"
            className="bg-zinc-600 w-full absolute bottom-3"
          />
        </section>
      </div>
    </div>
  );
}

export default MediumPlayer;
