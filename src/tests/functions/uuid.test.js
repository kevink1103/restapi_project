import {
    uuid
} from '../../utils/uuid'

test('ordered UUID 가 출력되어야 합니다.', () => {
    const orderedUuid = uuid()

    expect(orderedUuid).toMatch(/\b4[0-9A-Fa-f]{31}\b/g)
})