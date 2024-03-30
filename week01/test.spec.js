const metamong = require("./metamong");
const statement = require("./statement");

{/* <reference types="jest" />  */}
test('테스트 설명', () => {
    expect(metamong).toBe(statement);
});