import pkg from 'pg'; // Import the whole pg module
const { Client } = pkg; // Destructure the Client

export default async function handler(req, res) {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL, // Ensure this env variable is added in Vercel
  });

  // Check if the request is POST
  if (req.method === 'POST') {
    const { name, message } = req.body; // Extract data from the request body

    // Basic validation
    if (!name || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      await client.connect();

      // Insert data into your_table (you should adjust the table name and columns as needed)
      const query = `
        INSERT INTO contact (name, message) 
        VALUES ($1, $2) 
        RETURNING *`;
      const values = [name, message];

      const result = await client.query(query, values);
      await client.end();

      // Send back the inserted row
      return res.status(201).json({ message: 'Data inserted successfully', data: result.rows[0] });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to insert data into the database' });
    }
  } else {
    // For any non-POST requests, return a 405 Method Not Allowed error
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
