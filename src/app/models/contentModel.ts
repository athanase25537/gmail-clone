export class ContentModel {
    constructor(
        public isFavorite: boolean = false,
        public isImportant: boolean = false,
        public title: string,
        public content: string,
        public time: string,
        public isView: boolean = false,
        public isCheck: boolean = false,
    ) { }
}