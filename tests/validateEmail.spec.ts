import { validateEmail } from "./validateEmail"


describe('Validate email adress', () => {
    it('should validate email correctly', () => {
        const validEmail = 'anja@gmail.com';

        expect(validateEmail(validEmail)).toBe(true);

        const invalidEmailSnabela = 'anjagmail.com'
        expect(validateEmail(invalidEmailSnabela)).toBe(false);
        const invalidEmailPunkt = 'anja@gmailcom';
        expect(validateEmail(invalidEmailPunkt)).toBe(false);

    })
})
