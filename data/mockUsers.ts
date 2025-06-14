import { mockPlaylists } from "./mockPlaylists";

export const mockUsers = {
  niad: {
    username: "niad",
    displayName: "Nia D",
    bio: "Curating good vibes and deep cuts 🎶",
    savedPlaylists: ["abc123", "def456"], // just playlist IDs here!
    followers: 122,
    following: ["alexg", "jayz", "emilyv"],
    avatarUrl: "/avatars/niad.jpg",
  },
  alexg: {
    username: "alexg",
    displayName: "Alex G",
    bio: "Music is life. Playlist junkie.",
    savedPlaylists: ["ghi789", "jkl012"],
    followers: 200,
    following: ["niad", "jayz"],
    avatarUrl: "/avatars/alexg.jpg",
  },
  jayz: {
    username: "jayz",
    displayName: "Jay Z",
    bio: "Hip-hop heads unite.",
    savedPlaylists: ["mno345", "abc123"],
    followers: 350,
    following: ["niad", "alexg"],
    avatarUrl: "/avatars/jayz.jpg",
  },
  emilyv: {
    username: "emilyv",
    displayName: "Emily V",
    bio: "Fitness and fun.",
    savedPlaylists: ["def456"],
    followers: 95,
    following: ["niad"],
    avatarUrl: "/avatars/emilyv.jpg",
  },
  kiaJ: {
    username: "kiaJ",
    displayName: "Kia J",
    bio: "Lover of all things music and art.",
    savedPlaylists: ["jkl012"],
    followers: 78,
    following: ["niad", "alexg"],
    avatarUrl: "/avatars/kiaj.jpg",
  },
  // Add more users as needed
};
