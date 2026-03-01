export enum ContentType {
    // Text formats
    JSON = "application/json",
    XML = "application/xml",
    HTML = "text/html",
    PLAIN_TEXT = "text/plain",
    CSS = "text/css",
    JAVASCRIPT = "application/javascript",

    // Document formats
    PDF = "application/pdf",
    WORD = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    EXCEL = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    CSV = "text/csv",

    // Image formats
    PNG = "image/png",
    JPEG = "image/jpeg",
    GIF = "image/gif",
    WEBP = "image/webp",
    SVG = "image/svg+xml",
    ICO = "image/x-icon",

    // Audio formats
    MP3 = "audio/mpeg",
    WAV = "audio/wav",
    OGG = "audio/ogg",
    FLAC = "audio/flac",

    // Video formats
    MP4 = "video/mp4",
    WEBM = "video/webm",
    OGV = "video/ogg",

    // Form data
    FORM_URLENCODED = "application/x-www-form-urlencoded",
    FORM_DATA = "multipart/form-data",

    // Binary
    OCTET_STREAM = "application/octet-stream",

    // Archive formats
    ZIP = "application/zip",
    GZIP = "application/gzip",
}