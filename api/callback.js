export default async function handler(req, res) {
  const { code } = req.query;
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(400).send(`Auth Error: ${data.error_description}`);
    }

    // This script passes the token back to the window context where Decap CMS is running
    const content = `
      <script>
        const recieveMessage = (e) => {
          window.opener.postMessage(
            'authorization:github:success:${JSON.stringify({ token: data.access_token, provider: 'github' })}',
            e.origin
          );
        }
        window.addEventListener("message", recieveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      </script>
    `;

    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(content);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}