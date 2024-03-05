export interface bejelentkezesObj{
    felhasznaloNev: string;
    azonosito: string;
    jelszo: string;
}

export interface registTObj{
    tNevVezetek: string;
    tNevKozep: string;
    tNevKereszt: string;

    tTel: string;
    tEMail: string;

    tANevVezetek: string
    tAANevKozep: string;
    tANevKereszt: string;

    tNem: boolean;

    tSzulIdo: Date;
    tSzulHely: string;

    tCimOrszag: string;
    tCimIranyitoSzam: string;
    tCimKozseg: string;
    tCímUt: string;
    tCimHazSzam: string;

    tAllampolgarsag: string;
    tAnyanyelv: string;

    tSzemelyIgazolvany: string;
    tAzonosito: string;
    tTAJ: string;
    tAdozonosito: string;

    tBank1: string;
    tBank2: string;
    tBank3: string;

    tjogviszony: string;
    tjogviszonydatum: Date;

}

export interface registDObj{
    dNevVezetek: string;
    dNevKozep: string;
    dNevKereszt: string;
    dTel: string;
    dEMail: string;

    dANevVezetek: string
    dAANevKozep: string;
    dANevKereszt: string;
    dATel: string;
    dAEMail: string;

    dGNevVezetek: string
    dGANevKozep: string;
    dGNevKereszt: string;
    dGTel: string;
    dGEMail: string;

    dNem: boolean;

    dSzulIdo: Date;
    dSzulHely: string;

    dCimOrszag: string;
    dCimIranyitoSzam: string;
    dCimKozseg: string;
    dCímUt: string;
    dCimHazSzam: string;

    dAllampolgarsag: string;
    dAnyanyelv: string;

    dSzemelyIgazolvany: string;
    dAzonosito: string;
    dTAJ: string;
    dAdozonosito: string;

    dBank1: string;
    dBank2: string;
    dBank3: string;

    djogviszony: string;
    djogviszonydatum: Date;

    dKepzes: string;
    dOsztaly: string;

}