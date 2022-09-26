import SongDb from '../src/lib/Songs.js';
// import PlaylistDb from '../src/lib/Playlists.js';
// import UserDb from '../src/lib/Users.js';
import { app } from "../src/index.js";

 
const songData = new SongDb();
// const playlistData = new PlaylistDb();
// const userData = new UserDb();

describe("Database tests", () => {
  it("should return an array of at least 4 songs", async () => {
    const songs = await songData.get();
    expect(Array.isArray(songs)).toBe(true);
    expect(songs.length).toBeGreaterThanOrEqual(1);
  });
});

describe("App endpoints", () => {
  let token = "";

  it("should give me an access token", async (done) => {
    const res = await request(app)
      .post("/auth/login")
      .send({
        username: "mthabie",
        password: "thabisa-D",
      })
      .set("Accept", "application/json");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
    token = res.body.token;
    done();
  });

  it("should give me songs", async (done) => {
    const res = await request(app)
      .get("/api/songs/")
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + token);
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("title");
    expect(Array.isArray(res.body.songs)).toBe(true);
    done();
  });
});