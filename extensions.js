export const folders = {
    IMAGES: "Images",
    DOCS: "Docs",
    VIDEOS: "Videos",
    AUDIO: "Audio",
    SOFTWARES: "Softwares",
    OTHERS: "Others"
};

const extensions = [
    // Document Files
    { ext: ".pdf", folder: folders.DOCS },
    { ext: ".doc", folder: folders.DOCS },
    { ext: ".docx", folder: folders.DOCS },
    { ext: ".xls", folder: folders.DOCS },
    { ext: ".xlsx", folder: folders.DOCS },
    { ext: ".ppt", folder: folders.DOCS },
    { ext: ".pptx", folder: folders.DOCS },
    { ext: ".txt", folder: folders.DOCS },
    { ext: ".csv", folder: folders.DOCS },
    { ext: ".rtf", folder: folders.DOCS },
    { ext: ".odt", folder: folders.DOCS },

    // Image Files
    { ext: ".jpg", folder: folders.IMAGES },
    { ext: ".jpeg", folder: folders.IMAGES },
    { ext: ".png", folder: folders.IMAGES },
    { ext: ".gif", folder: folders.IMAGES },
    { ext: ".bmp", folder: folders.IMAGES },
    { ext: ".tiff", folder: folders.IMAGES },
    { ext: ".tif", folder: folders.IMAGES },
    { ext: ".webp", folder: folders.IMAGES },
    { ext: ".svg", folder: folders.IMAGES },
    { ext: ".ico", folder: folders.IMAGES },

    // Video Files
    { ext: ".mp4", folder: folders.VIDEOS },
    { ext: ".mkv", folder: folders.VIDEOS },
    { ext: ".avi", folder: folders.VIDEOS },
    { ext: ".mov", folder: folders.VIDEOS },
    { ext: ".wmv", folder: folders.VIDEOS },
    { ext: ".flv", folder: folders.VIDEOS },
    { ext: ".webm", folder: folders.VIDEOS },
    { ext: ".mpeg", folder: folders.VIDEOS },
    { ext: ".mpg", folder: folders.VIDEOS },
    { ext: ".3gp", folder: folders.VIDEOS },

    // Audio Files
    { ext: ".mp3", folder: folders.AUDIO },
    { ext: ".wav", folder: folders.AUDIO },
    { ext: ".aac", folder: folders.AUDIO },
    { ext: ".flac", folder: folders.AUDIO },
    { ext: ".ogg", folder: folders.AUDIO },
    { ext: ".wma", folder: folders.AUDIO },
    { ext: ".m4a", folder: folders.AUDIO },
    { ext: ".aiff", folder: folders.AUDIO },

    // Software Files
    { ext: ".exe", folder: folders.SOFTWARES },
    { ext: ".msi", folder: folders.SOFTWARES },
    { ext: ".dmg", folder: folders.SOFTWARES },
    { ext: ".pkg", folder: folders.SOFTWARES },
    { ext: ".sh", folder: folders.SOFTWARES },
    { ext: ".deb", folder: folders.SOFTWARES },
    { ext: ".rpm", folder: folders.SOFTWARES },
    { ext: ".app", folder: folders.SOFTWARES },
    { ext: ".iso", folder: folders.SOFTWARES },

    // Others (Uncategorized)
    { ext: ".zip", folder: folders.OTHERS },
    { ext: ".rar", folder: folders.OTHERS },
    { ext: ".7z", folder: folders.OTHERS },
    { ext: ".tar", folder: folders.OTHERS },
    { ext: ".gz", folder: folders.OTHERS },
    { ext: ".torrent", folder: folders.OTHERS },
];

export default extensions;
