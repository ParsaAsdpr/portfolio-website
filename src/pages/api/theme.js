const theme = Math.floor(Math.random() * 5) + 1;

export default function handler(req, res) {
    res.status(200).json({ theme: theme })
  }
  