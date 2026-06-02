import { Observable } from "rxjs";
import { GraClass } from "../classes/gra.class";

export interface GetDataInterface {
    Get(strona?: number, rozmiarStrony?: number, tytul?: string): Observable<GraClass[]>;
    GetByID(id: number): Observable<GraClass>;
}