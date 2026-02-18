import prisma from '../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const stations = await prisma.station.findMany({
        orderBy: { createdAt: 'desc' },
      });
      return res.status(200).json(stations);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener estaciones' });
    }
  }

  if (req.method === 'POST') {
    const { name, streamUrl } = req.body;
    try {
      const newStation = await prisma.station.create({
        data: { name, streamUrl },
      });
      return res.status(201).json(newStation);
    } catch (error) {
      return res.status(500).json({ error: 'Error al crear estación' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
