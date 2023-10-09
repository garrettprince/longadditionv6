import React from "react";
import Thumbnail from "./Thumbnail";

function Feed({ selected }) {
  const thumbnailArray = [
    ///////////////////
    // NEWEST UP TOP //
    ///////////////////

    {
      title: "The End-All, Be-All Long Term Travel Checklist",
      type: "photoRight",
      link: "/posts/travel/",
      titleSize: "text-3xl",
      date: "07.10.23",
      category: "travel",
      duration: "7 min",
      series: false,
      seriesTitle: "",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1690182459/Long%20Addition/Posts/Travel/The%20End%20All%2C%20Be%20All%20Long%20Term%20Travel%20Checklist/Group_135_ucksde.png",
      marginBottom: "mb-20",
      popular: false,
      newPost: false,
    },
    {
      title: "I Wrote A Script To Update My IG Bio Daily, But Didn't Use It",
      type: "photoLeft",
      link: "/posts/logs/log-test",
      titleSize: "text-2xl",
      date: "07.10.23",
      category: "tech",
      duration: "7 min",
      series: false,
      seriesTitle: "",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1689918502/Long%20Addition/Posts/Tech/I%20Created%20A%20Script%20To%20Update%20My%20IG%20Bio%20Daily%2C%20But%20I%20Don%27t%20Use%20It/Group_125_fwywy8.png",
      marginBottom: "mb-20",
      popular: true,
      newPost: false,
    },
    {
      title: "A Different Kind Of Post",
      type: "photoRight",
      link: "/posts/logs/log-test",
      titleSize: "text-4xl",
      date: "07.10.23",
      category: "logs",
      duration: "7 min",
      series: true,
      seriesTitle: "Captain's Log 001",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1690095135/Long%20Addition/Posts/Logs/001%20A%20Different%20Kind%20Of%20Post/Group_132_iwfahj.png",
      marginBottom: "mb-20",
      popular: false,
      newPost: false,
    },
    {
      title: "The Benefits of Carb And Protein Listening",
      type: "photoLeft",
      link: "/posts/audio/carbs-and-protein-music",
      titleSize: "text-3xl",
      date: "07.10.23",
      category: "audio",
      duration: "7 min",
      series: false,
      seriesTitle: "",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1689922241/Long%20Addition/Posts/Audio/The%20Benefits%20Of%20Carb%20And%20Protein%20Listening/Group_129_nekkxb.png",
      marginBottom: "mb-20",
      popular: true,
      newPost: false,
    },

    {
      title: "Advice For People Like Me: Take More Photos",
      type: "photoRight",
      link: "/posts/visual/take-more-photos",
      titleSize: "text-3xl",
      date: "07.10.23",
      category: "visual",
      duration: "7 min",
      series: false,
      seriesTitle: "",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1683823345/Long%20Addition/Posts/Advice%20For%20People%20Like%20Me%20-%20Take%20More%20Photos/thumbnail_yjaeao.png",
      marginBottom: "mb-20",
      popular: false,
      newPost: false,
    },
    {
      title: "The Search For King Peenty's Big Red Rubies",
      type: "photoLeft",
      link: "/posts/travel/king-peenty-red-rubies",
      titleSize: "text-3xl",
      date: "07.08.23",
      category: "travel",
      duration: "5 min",
      series: false,
      seriesTitle: "",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679810837/Long%20Addition/Posts/The%20Search%20For%20King%20Peenty%27s%20Big%20Red%20Rubies/actionraised2_s499xr.png",
      marginBottom: "mb-20",
      popular: false,
      newPost: false,
    },
    {
      title: "My Timeline Theory",
      type: "photoRight",
      link: "/posts/misc/the-timeline-theory",
      titleSize: "text-4xl",
      date: "07.07.23",
      category: "misc",
      duration: "5 min",
      series: true,
      seriesTitle: "the theory series",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1683826432/Long%20Addition/Posts/My%20Timeline%20Theory/thumbnail_kfs1og.png",
      marginBottom: "mb-20",
      popular: true,
      newPost: false,
    },
    {
      title: "What Ever Happened To My Crunchlings?",
      type: "photoLeft",
      link: "/posts/visual/what-happened-to-crunchlings",
      titleSize: "text-3xl",
      date: "05.31.23",
      category: "visual",
      duration: "15 min",
      series: false,
      seriesTitle: "",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679793057/Long%20Addition/Posts/What%20Happened%20To%20My%20Crunchlings/crunchgroup2_vwuvzq.png",
      marginBottom: "mb-20",
      popular: false,
      newPost: false,
    },
    {
      title: "I Made A Mad Lib For The Whole Family",
      type: "photoLeft",
      link: "/posts/misc/madlib-for-the-family",
      titleSize: "text-3xl",
      date: "05.20.23",
      category: "misc",
      duration: "5 min",
      series: false,
      seriesTitle: "",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1680049461/Long%20Addition/Posts/I%20Made%20A%20Madlib/thumbnailraised_j068qn.png",
      marginBottom: "mb-20",
      popular: false,
      newPost: false,
    },
    {
      title: "What Is Long Addition?",
      type: "photoRight",
      link: "/posts/misc/what-is-long-addition",
      titleSize: "text-4xl",
      date: "05.11.23",
      category: "misc",
      duration: "5 min",
      series: false,
      seriesTitle: "",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1683327434/Long%20Addition/Posts/What%20Is%20Long%20Addition/thumbnailnew_d5ce8x.png",
      marginBottom: "mb-20",
      popular: true,
      newPost: false,
    },
    {
      title:
        "Scoring 5 Javascript Frameworks By How Physically Attracted I Am To Them",
      type: "photoLeft",
      link: "/posts/tech/scoring-javascript-frameworks",
      titleSize: "text-2xl",
      date: "05.11.23",
      category: "tech",
      duration: "10 min",
      series: false,
      seriesTitle: "",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679806795/Long%20Addition/Posts/Scoring%205%20Javascript%20Frameworks%20By%20How%20Attracted%20I%20Am%20To%20Them/roseraised2_dx4gcy.png",
      marginBottom: "mb-20",
      popular: false,
      newPost: false,
    },
    {
      title: "Not Vocal Enough? Here Are My Top 10 Things To Say During Sex",
      type: "photoRight",
      link: "/posts/health/10-things-to-say-during-sex",
      titleSize: "text-2xl",
      date: "05.11.23",
      category: "health",
      duration: "5 min",
      series: false,
      seriesTitle: "",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679861498/Long%20Addition/Posts/Not%20Vocal%20Enough/thumbnailraised_v9a4rc.png",
      marginBottom: "mb-20",
      popular: false,
      newPost: false,
    },

    // {
    //   type: "newsletterCtaLarge2",
    // },
    // {
    //   type: 'message',
    //   title: "Alienating your friends sounds way cooler than it is.",
    //   date: '02.32.22'
    // },
    // {
    //   title: "Panic Playdate: Making Handheld Gaming Actually Fun Again",
    //   type: "photoLeft",
    //   link: "/posts/visual/panic-playdate-handheld-gaming",
    //   titleSize: "text-2xl",
    //   date: "02.04.23",
    //   category: "visual",
    //   duration: "5 min",
    //   series: false,
    //   seriesTitle: "",
    //   photo:
    //     "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1681082360/Long%20Addition/Posts/Panic%20Playdate%20-%20Making%20Handheld%20Gaming%20Actually%20Fun%20Again/raisedthumbnail_fylreb.png",
    //   marginBottom: "mb-20",
    //   popular: false,
    // newPost: false,
    // },
    {
      title: "The Divine Comfort Of Mix Channels",
      type: "photoRight",
      link: "/posts/audio/mix-channels-youtube",
      titleSize: "text-3xl",
      date: "05.11.23",
      category: "audio",
      duration: "5 min",
      series: false,
      seriesTitle: "",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1680657574/Long%20Addition/Posts/Mix%20Channels%20on%20Youtube/thumbnail_skwygo.png",
      marginBottom: "mb-20",
      popular: false,
      newPost: false,
    },

    {
      title: "The Fishbowl Effect",
      type: "photoRight",
      link: "/posts/travel/the-fishbowl-effect",
      titleSize: "text-4xl",
      date: "05.11.23",
      category: "travel",
      duration: "20 min",
      series: false,
      seriesTitle: "",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679812065/Long%20Addition/Posts/Losing%20Money%20In%20Australia/collageraised_w9snh3.png",
      marginBottom: "mb-20",
      popular: false,
      newPost: false,
    },

    {
      // use this when newsletter is live, every 6-8 posts
      // type: "newsletterCtaLarge2",
      // membership: false,
    },
    // {
    //   title: "Building Long Addition: I Kind Of Know What I'm Doing",
    //   type: "photoLeft",
    //   link: "/posts/tech/site-build-part-1",
    //   titleSize: "text-3xl",
    //   date: "04.03.23",
    //   category: "tech",
    //   duration: "10 min",
    //   series: true,
    //   seriesTitle: "site build series pt. 1",
    //   photo:
    //     "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1680712453/Long%20Addition/Posts/Long%20Addition%20Site%20Build%20Pt.%201:%20I%20Don%27t%20Know%20What%20I%27m%20Doing/thumbnail_tkabhr.png",
    //   marginBottom: "mb-20",
    //   popular: false,
    //   newPost: false,
    // },

    // {
    //   title: "Template Check",
    //   type: "photoLeft",
    //   link: "/posts/template",
    //   titleSize: "text-3xl",
    //   date: "02.04.23",
    //   category: "tech",
    //   duration: "10 min",
    //   series: false,
    //   seriesTitle: "",
    //   photo:
    //     "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677734937/Long%20Addition/Posts/Long%20Addition%20Site%20Build%20Pt.%201:%20I%20Don%27t%20Know%20What%20I%27m%20Doing/orangemac_bwp8xa.png",
    //   marginBottom: "mb-20",
    //   popular: false,
    // newPost: false,
    // },

    // {
    //   type: "placeholder",
    //   category: "visual",
    // },
  ];

  const filteredThumbnails =
    selected === "latest"
      ? thumbnailArray.sort((thumbnail) => thumbnail)
      : thumbnailArray.filter((thumbnail) => thumbnail.category === selected);

  return (
    <div className="flex flex-col w-full ml-[4.5rem] mr-6 mt-12">
      {/* <h1 className="font-bold mb-10 text-xl">Hey, check out my latest writing below. Thanks for visiting!</h1> */}
      {filteredThumbnails.map((thumbnail) => (
        <Thumbnail
          title={thumbnail.title}
          type={thumbnail.type}
          key={thumbnail.title}
          link={thumbnail.link}
          category={thumbnail.category}
          titleSize={thumbnail.titleSize}
          series={thumbnail.series}
          seriesTitle={thumbnail.seriesTitle}
          date={thumbnail.date}
          duration={thumbnail.duration}
          photo={thumbnail.photo}
          newPost={thumbnail.newPost}
          popular={thumbnail.popular}
        />
      ))}
    </div>
  );
}

export default Feed;
