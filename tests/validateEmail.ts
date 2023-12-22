export const validateEmail = (email: string): boolean => {
    console.log('Checking email:', email);
    if (email.includes('@') && email.includes('.')) {
        return true
    }
    return false

}
