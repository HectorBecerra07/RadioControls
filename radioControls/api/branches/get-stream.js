import prisma from '../lib/prisma';

export default async function handler(req, res) {
  const { slug } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!slug) {
    return res.status(400).json({ error: 'Slug is required' });
  }

  try {
    const branch = await prisma.branch.findUnique({
      where: { slug },
      include: {
        station: true, // Incluimos los datos de la estación vinculada
      },
    });

    if (!branch) {
      return res.status(404).json({ error: 'Sucursal no encontrada' });
    }

    if (!branch.station) {
      return res.status(404).json({ error: 'Esta sucursal no tiene una estación asignada' });
    }

    // Retornamos solo lo necesario para el player
    return res.status(200).json({
      branchName: branch.name,
      stationName: branch.station.name,
      streamUrl: branch.station.streamUrl,
      status: branch.status
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
