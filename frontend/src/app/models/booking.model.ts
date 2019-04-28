export class Booking {

  constructor(
    public id: number,
    public comment: string,
    // tslint:disable-next-line:variable-name
    public ad_id: number,
    // tslint:disable-next-line:variable-name
    public created_at: Date,
    // tslint:disable-next-line:variable-name
    public updated_at: Date,
    public status: boolean
    ) {

  }



}
