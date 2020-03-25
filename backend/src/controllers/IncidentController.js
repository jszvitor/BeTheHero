const connection = require('../database/connection');

module.exports = {

    async all(request, response) {
        const { page = 1 } = request.query;
        const incidents = await connection('incidents')
            .join('ongs', 'ong_id', '=', 'incidents.ong_id') // relacionar dados de duas tabelas.
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ])

        const [count] = await connection('incidents').count()// [0], poderia ser tbm

        response.header('X-Total-Count', count['count(*)'])

        return response.json({ incidents })
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        return response.json({ id });
    },

    async update(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;
        
        
    },

    async delete(request, response) {
        //lógica do meu método.
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first()
        // dá uma olhada em HTTP status
        if (incident.ong_id != ong_id) {
            return response.status(404).json({ error: 'Operation not permitted.'})
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
}