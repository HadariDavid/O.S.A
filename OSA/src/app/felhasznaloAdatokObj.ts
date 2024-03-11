export interface bejelentkezesObj{
    felhasznaloNev: string;
    azonosito: string;
    jelszo: string;
}

export interface registTObj{
    csaladNev: string;
    // tNevKozep: string;
    keresztNev: string;

    telefon: string;
    email: string;

    //tANevVezetek: string
    //tAANevKozep: string;
    //tANevKereszt: string;

    // tNem: string;

    szuletesiDatum: string;
    szuletesiHely: string;
    //szuletesiOrszag: string;


    //tCimOrszag: string;
    //tCimIranyitoSzam: string;
    //tCimKozseg: string;
    //tCímUt: string;
    //tCimHazSzam: string;

    allampolgarsag: string;
    anyanyelv: string;

    // tSzemelyIgazolvany: string;
    oktatasiAzonosito: string;
    // iskolaAzonosito: string;
    taj: string;
    adoszam: string;

    bankszámlaszám: string;


    jogviszony: string;
    jogviszonyKezdete: string;
    // jogviszonyVartVege: string;

    szakok: string;

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
    id: string;
    dTAJ: string;
    dAdozonosito: string;

    dBank1: string;
    dBank2: string;
    dBank3: string;

    djogviszony: string;
    djogviszonydatum: Date;

    dKepzes: string;
    dOsztal: string;

}