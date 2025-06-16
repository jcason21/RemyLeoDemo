export const mockUsers = {
  niad: {
    username: "niad",
    displayName: "Nia D",
    bio: "Curating good vibes and deep cuts 🎶",
    savedPlaylists: [
      {
        id: "abc123",
        name: "Late Night Vibes",
        tracks: [
          { id: "t1", title: "Nightfall", artist: "Drake" },
          { id: "t2", title: "Dreamin'", artist: "SZA" },
          { id: "t3", title: "Midnight Drive", artist: "Frank Ocean" },
          { id: "t4", title: "Low Light", artist: "Jhené Aiko" },
          { id: "t5", title: "Deep Cuts", artist: "Anderson .Paak" },
        ],
      },
      {
        id: "def456",
        name: "Workout Bangers",
        tracks: [
          { id: "t6", title: "Beast Mode", artist: "Kanye West" },
          { id: "t7", title: "Energy", artist: "Skepta" },
          { id: "t8", title: "Push It", artist: "Salt-N-Pepa" },
        ],
      },
    ],
    followers: 122,
    following: ["alexg", "jayz", "emilyv"],
    avatarUrl: "/avatars/niad.jpg",
  },
  alexg: {
    username: "alexg",
    displayName: "Alex G",
    bio: "Music is life. Playlist junkie.",
    savedPlaylists: [
      {
        id: "ghi789",
        name: "Study Session",
        tracks: [
          { id: "t9", title: "Focus", artist: "Lo-Fi Beats" },
          { id: "t10", title: "Deep Flow", artist: "Nujabes" },
        ],
      },
      {
        id: "jkl012",
        name: "Weekend Drive",
        tracks: [
          { id: "t11", title: "Cruisin'", artist: "J. Cole" },
          { id: "t12", title: "Highway", artist: "Post Malone" },
        ],
      },
    ],
    followers: 200,
    following: ["niad", "jayz"],
    avatarUrl: "/avatars/alexg.jpg",
  },
  jayz: {
    username: "jayz",
    displayName: "Jay Z",
    bio: "Hip-hop heads unite.",
    savedPlaylists: [
      {
        id: "mno345",
        name: "Classic Hip-Hop",
        tracks: [
          { id: "t13", title: "Big Pimpin'", artist: "Jay Z" },
          { id: "t14", title: "Juicy", artist: "Notorious B.I.G." },
        ],
      },
      {
        id: "abc123",
        name: "Late Night Vibes",
        tracks: [
          { id: "t1", title: "Nightfall", artist: "Drake" },
          { id: "t2", title: "Dreamin'", artist: "SZA" },
        ],
      },
    ],
    followers: 350,
    following: ["niad", "alexg"],
    avatarUrl: "/avatars/jayz.jpg",
  },
  emilyv: {
    username: "emilyv",
    displayName: "Emily V",
    bio: "Fitness and fun.",
    savedPlaylists: [
      {
        id: "def456",
        name: "Workout Bangers",
        tracks: [
          { id: "t6", title: "Beast Mode", artist: "Kanye West" },
          { id: "t7", title: "Energy", artist: "Skepta" },
        ],
      },
    ],
    followers: 95,
    following: ["niad"],
    avatarUrl: "/avatars/emilyv.jpg",
  },
  kiaj: {
    username: "kiaj",
    displayName: "Kia J",
    bio: "Lover of all things music and art.",
    savedPlaylists: [
      {
        id: "jkl012",
        name: "Weekend Drive",
        tracks: [
          { id: "t11", title: "Cruisin'", artist: "J. Cole" },
          { id: "t12", title: "Highway", artist: "Post Malone" },
        ],
      },
    ],
    followers: 78,
    following: ["niad", "alexg"],
    avatarUrl: "/avatars/kiaj.jpg",
  },
};
