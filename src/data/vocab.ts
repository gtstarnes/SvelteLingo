interface Vocab {
    [unit: string]: Language;
}

interface Language{
    [languageCode: string]: WordEntry;
}

interface WordEntry {
    [word: string]: Translation;
}

interface Translation {
    [languageCode:string]: string;
}

const vocab: Vocab = {
    one: {
        en: {
            hello: {ch: "nihao", es: "hola", de:'hallo', gr:"yia sou", lat:'salve', sw: "hej"}
        }
    }
}


export default vocab