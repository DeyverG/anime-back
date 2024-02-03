import express from 'express';
import { getAnime } from './anime.service';
const router = express.Router();

router.get('/anime', async (req, res) => {
    // Variables
    const name = String(req.query.q);
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    // Validate variables
    if (!name) return res.status(400).json({ message: 'El nombre del anime es requerido' });

    // call service
    const anime = await getAnime(name, page, limit);

    // validate response
    if (!anime) return res.status(424).json({ message: 'Se ha producido un error al consultar el anime' });

    // response
    return res.status(200).json(anime);
});

export default router;