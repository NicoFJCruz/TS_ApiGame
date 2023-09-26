const { Songs, Albums, Images, Lyrics, Videos } = require("./models");

async function seed() {
  try {
    await Albums.bulkCreate([
      { title: "Lover", release_date: "23/08/2019" },
      { title: "Reputation", release_date: "10/11/2017" },
      { title: "Evermore", release_date: "11/12/2020" },
      { title: "Midnights", release_date: "21/10/2022" },
      { title: "1989", release_date: "27/10/2014" },
    ]);

    await Songs.bulkCreate([
      {
        title: "Cruel Summer",
        link: "https://open.spotify.com/track/1BxfuPKGuaTgP7aM0Bbdwr?si=9a8dd4e172424aff",
        length: "2:58",
        albumId: 1,
      },
      {
        title: "Call It What You Want",
        link: "https://open.spotify.com/track/1GwMQaZz6Au3QLDbjbMdme?si=a7a86fdc775b4ab0",
        length: "3:23",
        albumId: 2,
      },
      {
        title: "Don't Blame Me",
        link: "https://open.spotify.com/track/1R0a2iXumgCiFb7HEZ7gUE?si=846e4abec6724d2d",
        length: "3:56",
        albumId: 2,
      },
      {
        title: "Right where you left me",
        link: "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=bb3f3204aaa545c6",
        length: "4:05",
        albumId: 3,
      },
      {
        title: "Willow",
        link: "https://open.spotify.com/track/0lx2cLdOt3piJbcaXIV74f?si=03fdb0c96458439b",
        length: "3:34",
        albumId: 3,
      },
      {
        title: "Bejeweled",
        link: "https://open.spotify.com/track/3qoftcUZaUOncvIYjFSPdE?si=ae302c99c1414690",
        length: "3:14",
        albumId: 4,
      },
      {
        title: "Karma",
        link: "https://open.spotify.com/track/7KokYm8cMIXCsGVmUvKtqf?si=60127ec1323e4a5e",
        length: "3:24",
        albumId: 4,
      },
      {
        title: "Lover",
        link: "https://open.spotify.com/track/1dGr1c8CrMLDpV6mPbImSI?si=ec366cea6863414a",
        length: "3:41",
        albumId: 1,
      },
      {
        title: "Delicate",
        link: "https://open.spotify.com/track/6NFyWDv5CjfwuzoCkw47Xf?si=adbdcab8fe5848d8",
        length: "3:52",
        albumId: 2,
      },
      {
        title: "Blank Space",
        link: "https://open.spotify.com/track/1u8c2t2Cy7UBoG4ArRcF5g?si=6dffa0c122d546bf",
        length: "3:51",
        albumId: 5,
      },
    ]);

    await Images.bulkCreate([
      {
        link: "https://drive.google.com/file/d/1j5mMJ1gHD1HumUx0UbOznqA58Y_5lPhu/view",
        albumId: 1,
      },
      {
        link: "https://drive.google.com/file/d/1PIM37TmzxSAaJffBBfmJhhMiRAoswOfo/view",
        albumId: 1,
      },
      {
        link: "https://drive.google.com/file/d/1W5uz-s1wDO2wIvfrZO41uNyfLoM58w7L/view",
        albumId: 2,
      },
      {
        link: "https://drive.google.com/file/d/1NsAmImlcGhkbTDkyJ83736ZGZCY7hHJA/view",
        albumId: 2,
      },
      {
        link: "https://drive.google.com/file/d/1fKXBP1sWakLZshPHNIj9N1vomXCZm1TM/view",
        albumId: 3,
      },
      {
        link: "https://drive.google.com/file/d/1U4VbpW1zm17LM7yPzd-AqAi0hbaBea76/view",
        albumId: 3,
      },
      {
        link: "https://drive.google.com/file/d/13WayMrCC-Pnib61Mh383zPOLe0uEqEkP/view",
        albumId: 4,
      },
      {
        link: "https://drive.google.com/file/d/1sVs-GSsQOPK9cZr_1MsIeTvaVk_4uywS/view",
        albumId: 4,
      },
      {
        link: "https://drive.google.com/file/d/19ZRsedTMOzhm1BsnByssV_IdP7cBhSPM/view",
        albumId: 5,
      },
    ]);

    await Lyrics.bulkCreate([
      { text: "Fever dream high", songId: 1, songOrder: 1 },
      { text: "in the quiet of the night", songId: 1, songOrder: 2 },
      { text: "You know that I caught it", songId: 1, songOrder: 3 },
      { text: "Bad, bad boy", songId: 1, songOrder: 4 },
      { text: "Shiny toy with a price", songId: 1, songOrder: 5 },
      { text: "You know that I bought it", songId: 1, songOrder: 6 },
      { text: "Killing me slow,", songId: 1, songOrder: 7 },
      { text: "out the window", songId: 1, songOrder: 8 },
      {
        text: "I'm always waiting for you to be waiting below",
        songId: 1,
        songOrder: 9,
      },
      { text: "Devils roll the dice,", songId: 1, songOrder: 10 },
      { text: "angels roll their eyes", songId: 1, songOrder: 11 },
      {
        text: "What doesn't kill me makes me want you more",
        songId: 1,
        songOrder: 12,
      },
      { text: "And it's new, ", songId: 1, songOrder: 13 },
      { text: "the shape of your body", songId: 1, songOrder: 14 },
      { text: "It's blue,", songId: 1, songOrder: 15 },
      { text: "the feeling I've got", songId: 1, songOrder: 16 },
      { text: "And it's ooh, whoa, oh", songId: 1, songOrder: 17 },
      { text: "It's a cruel summer", songId: 1, songOrder: 18 },
      { text: "It's cool,", songId: 1, songOrder: 18 },
      { text: "that's what I tell 'em,", songId: 1, songOrder: 20 },
      { text: "No rules", songId: 1, songOrder: 21 },
      { text: "in breakable heaven", songId: 1, songOrder: 22 },
      { text: "But ooh, whoa oh", songId: 1, songOrder: 23 },
      { text: "It's a cruel summer", songId: 1, songOrder: 24 },
      { text: "With you", songId: 1, songOrder: 25 },
    ]);
  } catch (e) {
    console.log(e);
  }
}

seed();
