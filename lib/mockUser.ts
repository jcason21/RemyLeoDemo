// lib/mockUser.ts

export interface MockUser {
  id: string;
  username: string;
  avatar: string;
  favorites: string[]; // Playlist IDs
  likedTracks: string[]; // Track IDs
  following: string[]; // User IDs
}

const mockUser: MockUser = {
  id: "user123",
  username: "vibeSeeker",
  avatar: "/avatars/avatar1.png",
  favorites: ["playlist001", "playlist003"],
  likedTracks: ["track123", "track789", "track999"],
  following: ["user456", "user789"],
};

export function useMockUser(): MockUser {
  return mockUser;
}
