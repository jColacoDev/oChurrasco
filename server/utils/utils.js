exports.normalizePathLabel = label => label.toLowerCase()
.normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
.replace(/[^\w\s]/g, "") // Remove punctuation
.replace(/\s+/g, "-"); // Replace spaces with dashes