export const mockPlaylists = {
  "1": {
    id: "1",
    title: "Late Night Vibes",
    genre: "Lo-Fi",
    mood: "Chill",
    createdBy: "alexg",
    likedBy: ["user1", "user2", "user3"],
    tracks: Array.from({ length: 20 }, (_, i) => ({
      id: `lnv-track-${i + 1}`,
      title: `Lo-Fi Groove #${i + 1}`,
      artist: `Cloudwave ${i + 1}`,
      length: `${2 + (i % 3)}:${String(30 + (i % 29)).padStart(2, "0")}`,
      likes: 100 + i * 3,
      comments: 15 + (i % 5),
      description: "Perfect for winding down at night.",
      url: `/audio/lnv-track-${i + 1}.mp3`,
      badges:
        i === 0
          ? ["Top Track"]
          : i === 1
          ? ["Most Listened"]
          : i === 2
          ? ["Most Added"]
          : [],
      sampleComments: [
        "This one's a vibe 🎧",
        "On loop all night.",
        "Hits different after midnight.",
      ],
    })),
  },
  "2": {
    id: "2",
    title: "AfroSoul Sundays",
    genre: "Afrobeat",
    mood: "Uplifting",
    createdBy: "niad",
    likedBy: ["user4", "user5"],
    tracks: Array.from({ length: 20 }, (_, i) => ({
      id: `as-track-${i + 1}`,
      title: `Soulful Heat #${i + 1}`,
      artist: `AfroVibe ${i + 1}`,
      length: `3:${String(10 + (i % 50)).padStart(2, "0")}`,
      likes: 150 + i * 2,
      comments: 10 + (i % 4),
      description: "Blend of Afrobeat and Soul sounds.",
      url: `/audio/as-track-${i + 1}.mp3`,
      badges:
        i === 0
          ? ["Top Track"]
          : i === 1
          ? ["Most Listened"]
          : i === 2
          ? ["Most Added"]
          : [],
      sampleComments: ["So soulful 🔥", "Great rhythm", "Sunday essential"],
    })),
  },
  "3": {
    id: "3",
    title: "Hype Energy",
    genre: "Hip-Hop",
    mood: "Energetic",
    createdBy: "kiaj",
    likedBy: ["user2", "user3", "user6"],
    tracks: Array.from({ length: 20 }, (_, i) => ({
      id: `hype-track-${i + 1}`,
      title: `Energy Blast #${i + 1}`,
      artist: `BeatzFire ${i + 1}`,
      length: `2:${String(45 + (i % 15)).padStart(2, "0")}`,
      likes: 180 + i,
      comments: 20 + (i % 6),
      description: "Hard-hitting tracks to get you moving.",
      url: `/audio/hype-track-${i + 1}.mp3`,
      badges:
        i === 0
          ? ["Top Track"]
          : i === 1
          ? ["Most Listened"]
          : i === 2
          ? ["Most Added"]
          : [],
      sampleComments: ["Let's gooo 💥", "Gym playlist certified", "Beats crazy"],
    })),
  },
  "4": {
    id: "4",
    title: "Ocean Drip",
    genre: "Trap / R&B",
    mood: "Smooth",
    createdBy: "jayflow",
    likedBy: ["user8"],
    tracks: Array.from({ length: 20 }, (_, i) => ({
      id: `od-track-${i + 1}`,
      title: `Wave Ride #${i + 1}`,
      artist: `DripLord ${i + 1}`,
      length: `3:${String(20 + (i % 40)).padStart(2, "0")}`,
      likes: 120 + i * 2,
      comments: 5 + (i % 3),
      description: "Silky trap beats with R&B flavor.",
      url: `/audio/od-track-${i + 1}.mp3`,
      badges:
        i === 0
          ? ["Top Track"]
          : i === 1
          ? ["Most Listened"]
          : i === 2
          ? ["Most Added"]
          : [],
      sampleComments: ["Silky smooth", "Drip overload 💧", "R&B perfection"],
    })),
  },
  "5": {
    id: "5",
    title: "Sunrise Coffee",
    genre: "Jazzhop",
    mood: "Mellow",
    createdBy: "melcafe",
    likedBy: [],
    tracks: Array.from({ length: 20 }, (_, i) => ({
      id: `sc-track-${i + 1}`,
      title: `Warm Brew #${i + 1}`,
      artist: `Smooth Joe ${i + 1}`,
      length: `2:${String(50 + (i % 20)).padStart(2, "0")}`,
      likes: 80 + i,
      comments: 3 + (i % 2),
      description: "Gentle jazz-infused lo-fi to start your day.",
      url: `/audio/sc-track-${i + 1}.mp3`,
      badges:
        i === 0
          ? ["Top Track"]
          : i === 1
          ? ["Most Listened"]
          : i === 2
          ? ["Most Added"]
          : [],
      sampleComments: ["Morning bliss ☕", "Jazzhop heaven", "Soft start to the day"],
    })),
  },
  "6": {
    id: "6",
    title: "Cosmic Bounce",
    genre: "Electronic",
    mood: "Trippy",
    createdBy: "zenon",
    likedBy: ["user9", "user10"],
    tracks: Array.from({ length: 20 }, (_, i) => ({
      id: `cb-track-${i + 1}`,
      title: `Orbit Pulse #${i + 1}`,
      artist: `ZenoLoop ${i + 1}`,
      length: `4:${String(5 + (i % 35)).padStart(2, "0")}`,
      likes: 90 + i * 2,
      comments: 8 + (i % 4),
      description: "Spacey synths and glitchy grooves.",
      url: `/audio/cb-track-${i + 1}.mp3`,
      badges:
        i === 0
          ? ["Top Track"]
          : i === 1
          ? ["Most Listened"]
          : i === 2
          ? ["Most Added"]
          : [],
      sampleComments: ["Trippy af 🚀", "Headphones mandatory", "Outer space energy"],
    })),
  },
};
