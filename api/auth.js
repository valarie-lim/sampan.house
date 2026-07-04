export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = process.env.REDIRECT_URI || `https://${req.headers.host}/api/callback`;
  
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo&redirect_uri=${redirectUri}`
  );
}