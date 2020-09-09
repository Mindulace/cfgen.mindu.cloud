export class Notification
{
    constructor(title, text, timeout = 5)
    {
        this.title   = title;
        this.text    = text;
        this.timeout = timeout;
    }

    title() {
        return this.title;
    }

    text() {
        return this.text;
    }

    timeout() {
        return this.timeout;
    }
}