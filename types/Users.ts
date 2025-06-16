export type User = {
  username: string;
  displayName: string;
  bio: string;
  savedPlaylists: string[]; // playlist IDs
  followers: number;
  following: string[]; // usernames
  avatarUrl: string;
};
