export class RequestModel {
    email: string;
    subject: string;
    message: string;
    recaptcha: string;

    constructor(email: string, subject: string, message: string, recaptcha: string) {
        this.email = email;
        this.subject = subject;
        this.message = message;
        this.recaptcha = recaptcha;
    }
}
