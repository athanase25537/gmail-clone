export class LinkModel {
    constructor(
        public id: number,
        public iconClass: string,
        public label: string,
        public linkAdress: string,
        public badge: string = '',
        public others: string = ''
    ) { }
}