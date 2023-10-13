import { EntityV2, schema, string } from 'dynamodb-toolbox';
import { mainTable } from '../table';

const id = string().key()
const name = string()

const teamSchema = schema({
    id, name
})

const teamEntity = new EntityV2({
    name: 'Team',
    table: mainTable,
    schema: teamSchema,
    computeKey: ({id}) => ({
        pk: 'TEAM',
        sk: id
    })
})