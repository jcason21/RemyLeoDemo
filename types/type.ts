export type MockTrack = {
  id: string;
  title: string;
  artist: string;
  length: string;
  likes: number;
  comments: number;
  description: string;
  url: string;
  badges: string[];
  sampleComments: string[];
};

export type MockPlaylist = {
  id: string;
  title: string;
  genre: string;
  mood: string;
  createdBy: string;
  likedBy: string[];
  tracks: MockTrack[];
};

export type MockPlaylistsMap = Record<string, MockPlaylist>;
