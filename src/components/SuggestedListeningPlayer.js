/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Howl } from "howler";


// TODO: This shit doesn't make sense and I need to decide if I'm going to try and do the individual howls like I did for the montanahead demos or use the useEffect method. After that, I need to find a way for the playlist function to work as I'll be adding multiple songs in each log.

function SuggestedListeningPlayer({
  artist1,
  songTitle1,
  albumTitle1,
  albumArt1,
  songSource1,
  songSource2,
}) {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const [seek, setSeek] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  // Establish a variable to hold the current song index from songs array
  let songs = [songSource1, songSource2];

  let currentIndex = 0;
  let currentSong = songs[currentIndex];

  const song1 = new Howl({
    src: [songSource1],
    loop: false,
    onend: function () {
      nextClick();
    },
    onload: () => setDuration(song1.duration()),
  });

  const song2 = new Howl({
    src: [songSource2],
    loop: false,
    onend: function () {
      nextClick();
    },
  });

  ////////////////////////////////////
  // AUDIO PLAYER CONTROL FUNCTIONS //
  ////////////////////////////////////

  // Functions to handle playing songs based on song index position
  const playClick = () => {
    setIsPlaying(!isPlaying)

    if (currentIndex === 0) {
      return song1.play();
    } else if (currentIndex === 1) {
      return song2.play();
    } else if (currentIndex === 2) {
      return song3.play();
    } else if (currentIndex === 3) {
      return song4.play();
    }
  };

  // Function to handle pausing all howls/songs and change the playing boolean
  const allPause = () => {
    playing = !playing;
    gumAudio.pause();
    swimmingLessonsAudio.pause();
    theKingAudio.pause();
    minutesAudio.pause();
  };

  // Function to handle stopping all howls/songs
  const allStop = () => {
    gumAudio.stop();
    swimmingLessonsAudio.stop();
    theKingAudio.stop();
    minutesAudio.stop();
  };

  // Functions to handle progressing and regressing through the songs array. By skipping forward and backward it also stops the current song and initiates the next
  function previousClick() {
    currentIndex -= 1;

    if (currentIndex === -1) {
      currentIndex = 3;
    }

    currentSong = songs[currentIndex];

    playing = false;

    allStop();
    playClick();
  }

  function nextClick() {
    currentIndex += 1;

    if (currentIndex > songs.length - 1) {
      currentIndex = 0;
    }

    currentSong = songs[currentIndex];

    playing = false;

    allStop();
    playClick();
  }

  //   useEffect(() => {
  //     const sound = new Howl({
  //       src: [songSource1, songSource2],
  //       onplay: () => setIsPlaying(true),
  //       onpause: () => setIsPlaying(false),
  //       onend: () => setIsPlaying(false),
  //       onload: () => setDuration(sound.duration()),
  //       volume: volume,
  //     });

  //     setPlayer(sound);

  //     return () => sound.unload();
  //   }, [songSource1, songSource2, volume]);

  //   console.log(playlist[2]);

  //   useEffect(() => {
  //     if (playlist && playlist.length > 0) {
  //       const currentSong = playlist[currentSongIndex];
  //       const newPlayer = new Howl({
  //         src: [currentSong],
  //         onplay: () => setIsPlaying(true),
  //         onpause: () => setIsPlaying(false),
  //         onend: () => setIsPlaying(false),
  //         onload: () => setDuration(newPlayer.duration()),
  //       });

  //       setPlayer(newPlayer);

  //       return () => {
  //         if (newPlayer) {
  //           newPlayer.unload();
  //         }
  //       };
  //     }
  //   }, [playlist, currentSongIndex]);

  const play = () => {
    if (player) player.play();
  };

  const pause = () => {
    if (player) player.pause();
  };

  const playCurrentSong = () => {
    player.stop(); // Stop the current song if playing
    player.seek(50); // Reset the seek position to the beginning
    player.play(); // Start playing the new song
  };

  const handleNext = () => {
    const nextSongIndex = (currentSongIndex + 1) % playlist.length;
    setCurrentSongIndex(nextSongIndex);
    playCurrentSong();
  };

  const handlePrevious = () => {
    const prevSongIndex =
      (currentSongIndex - 1 + playlist.length) % playlist.length;
    setCurrentSongIndex(prevSongIndex);
    playCurrentSong();
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

  //   const handleVolumeChange = (event) => {
  //     const newVolume = parseFloat(event.target.value);
  //     setVolume(newVolume);

  //     if (player) player.volume(newVolume);
  //   };

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
      {visible && (
        <div className="bg-zinc-800 bg-zinc-800-shadow rounded-lg  ml-5 mr-6 mt-4 mb-5">
          <main className="flex items-center justify-between bg-transparent">
            <section id="leftSide" className="bg-transparent flex items-center">
              <img
                src={albumArt1}
                alt=""
                className={
                  isPlaying
                    ? `${" transition-all duration-[200ms] h-9 w-9 rounded m-[.43rem] shadow-sm shadow-zinc-700/30"}`
                    : `${"brightness-[.93] transition-all duration-[200ms] scale-[.97] h-9 w-9 rounded m-[.43rem]"}`
                }
              />
              <section
                id="songDetails"
                className="bg-transparent text-xs ml-[.10rem]"
              >
                <p className="bg-transparent font-bold">{songTitle1}</p>
                <p className="bg-transparent text-inactive">{artist1}</p>
              </section>
            </section>
            <section
              id="rightSide"
              className="bg-transparent flex items-center"
            >
              <section
                id="controls"
                className="bg-transparent flex items-center space-x-5 mr-5"
              >
                <svg
                  className="bg-transparent cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.115"
                  height="12.922"
                  viewBox="0 0 14.115 12.922"
                  onClick={handlePrevious}
                >
                  <g
                    id="Group_10"
                    dataName="Group 10"
                    transform="translate(14.115 12.922) rotate(180)"
                  >
                    <path
                      id="Polygon_3"
                      dataName="Polygon 3"
                      d="M6.361,0l6.361,10.735H0Z"
                      transform="translate(10.735) rotate(90)"
                      fill="#fff"
                    />
                    <rect
                      id="Rectangle_4"
                      dataName="Rectangle 4"
                      width="3.578"
                      height="12.723"
                      transform="translate(10.536 0.199)"
                      fill="#fff"
                    />
                  </g>
                </svg>
                {!isPlaying && (
                  <svg
                    onClick={playClick}
                    className="bg-transparent cursor-pointer"
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
                    className="bg-transparent cursor-pointer"
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
                <svg
                  onClick={handleNext}
                  className="bg-transparent cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.115"
                  height="12.922"
                  viewBox="0 0 14.115 12.922"
                >
                  <g
                    id="Group_11"
                    data-name="Group 11"
                    transform="translate(0)"
                  >
                    <path
                      id="Polygon_3"
                      dataName="Polygon 3"
                      d="M6.361,0l6.361,10.735H0Z"
                      transform="translate(10.735) rotate(90)"
                      fill="#fff"
                    />
                    <rect
                      id="Rectangle_4"
                      dataName="Rectangle 4"
                      width="3.578"
                      height="12.723"
                      transform="translate(10.536 0.199)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </section>
              <section id="close" className="bg-transparent">
                <svg
                  onClick={() => {
                    setVisible(false);
                    stop();
                  }}
                  className="bg-transparent mr-2 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8.545"
                  height="8.545"
                  viewBox="0 0 8.545 8.545"
                >
                  <g
                    id="Group_12"
                    data-name="Group 12"
                    transform="translate(-2322.004 113.081)"
                  >
                    <rect
                      id="Rectangle_20"
                      data-name="Rectangle 20"
                      width="1.633"
                      height="10.452"
                      transform="translate(2329.395 -113.081) rotate(45)"
                      fill="#656565"
                    />
                    <rect
                      id="Rectangle_21"
                      data-name="Rectangle 21"
                      width="1.633"
                      height="10.452"
                      transform="translate(2322.004 -111.927) rotate(-45)"
                      fill="#656565"
                    />
                  </g>
                </svg>
              </section>
            </section>
          </main>

          <section className="relative mx-2 bg-transparent h-1">
            <input
              type="range"
              min="0"
              step="0.001"
              max={duration}
              value={seek}
              onChange={handleSeekChange}
              id="range1"
              className="bg-zinc-600 w-full absolute rounded"
            />
          </section>
        </div>
      )}
    </div>
  );
}

export default SuggestedListeningPlayer;
