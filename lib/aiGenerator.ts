// lib/aiGenerator.ts

export function generatePlaylistFromPreferences({
  mood,
  genre,
  tags,
}: {
  mood: string;
  genre: string;
  tags: string[];
}) {
  const tracks = [
    { id: "1", title: "Midnight Dreams", artist: "Luna Wave" },
    { id: "2", title: "Golden Hour", artist: "Sunset Drive" },
    { id: "3", title: "Chill Nights", artist: "Echo Fade" },
    { id: "4", title: "City Pulse", artist: "Metro Vibe" },
    { id: "5", title: "Slow Motion", artist: "Lo Tempo" },
    { id: "6", title: "Ocean Eyes", artist: "Blue Horizon" },
    { id: "7", title: "Moonlight Jam", artist: "Nite Owl" },
    { id: "8", title: "Dreamscape", artist: "VaporTone" },
  ];

  // For demo purposes, just shuffle and return top 6
  return shuffle(tracks).slice(0, 6);
}

function shuffle(array: any[]) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
