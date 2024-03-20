export interface bejelentkezesObj{
    id: string;
    jelszo: string;
}

export interface registTObj{
    csaladNev: string;
    keresztNev: string;

    telefon: string;
    email: string;

    anyaLeanyVezetekneve: string;
    anyaLeanyKeresztneve: string;

    neme: string;

    szuletesiDatum: string;
    szuletesiOrszag: string;
    szuletesiHely: string;

    orszag: string;
    iranyitoSzam: string;
    kozseg: string;
    ut: string;
    hazSzam: string;

    allampolgarsag: string;
    anyanyelv: string;

    szemelyi: string;
    oktatasiAzonosito: string;
    adoszam: string;
    taj: string;

    bankszamlaSzam: string;

    jogviszony: string;
    jogviszonyKezdete: string;
    jogviszonyVartVege: string;

    szakok: string;

    egyeb: string;

    admin: boolean;

}

export interface registDObj{
    csaladNev: string;
    keresztNev: string;
    telefon: string;
    email: string;

    anyaLeanyVezetekneve: string;
    anyaLeanyKeresztneve: string;
    anyaTelefonszam: string;
    anyaEmail: string;

    gondviseloVezetekneve: string;
    gondviseloKeresztneve: string;
    gondviseloTelefon: string;
    gondviseloEmail: string;

    neme: string;

    szuletesiDatum: string;
    szuletesiOrszag: string;
    szuletesiHely: string;

    orszag: string;
    iranyitoSzam: string;
    kozseg: string;
    ut: string;
    hazSzam: string;

    allampolgarsag: string;
    anyanyelv: string;

    szemelyi: string;
    oktatasiAzonosito: string;
    taj: string;
    adoszam: string;

    bankszamlaSzam: string;

    jogviszony: string;
    jogviszonyKezdete: string;
    jogviszonyVartVege: string;

    kepzes: string;
    osztalyId: string;

    egyeb: string;

}