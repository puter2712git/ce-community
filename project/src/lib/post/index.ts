const domain = process.env.COMMUNITY_URL;

export async function readPosts() {
  try {
    const result = await fetch(`${domain}/api/`);
  } catch (err: unknown) {}
}
