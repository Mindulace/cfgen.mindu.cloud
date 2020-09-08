const Notification = class Notification
{
    constructor(title, text, timeout = 5)
    {
        this.title   = title;
        this.text    = text;
        this.timeout = timeout;
    }

    get title() {
        return this.title;
    }

    get text() {
        return this.text;
    }

    get timeout() {
        return this.timeout;
    }
}

export default {
    Notification
}