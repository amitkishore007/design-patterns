
interface ICommentCreator {
    addComment(): void;
}

interface PostSharer {
    sharePost(): void;
}

interface ImageUploader {
    uploadImages(): void;
}

interface ContentEditor {
    addContent(): void;
}


class Admin implements ICommentCreator, PostSharer, ImageUploader, ContentEditor {
    addComment() {}
    sharePost() {}
    uploadImages() {}
    addContent() {}
}

class Auditor {
    // cannot do anything
}

class PublicUser implements ICommentCreator, PostSharer {
    addComment() {}
    sharePost() {}
}

class Uploader implements Uploader {
    uploadImages() {}
}