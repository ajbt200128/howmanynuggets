import { element } from 'protractor';
export class NuggetHelper {
  static getNuggetDistribution(dollar: number): NuggetSet[] {
    const ns: NuggetSet[] = [];
    const nugget = NuggetVarieties.members;
      NuggetVarieties.membersReverse.forEach((nuggetBox: NuggetBox) => {
        if (nuggetBox.price <= dollar) {
          ns.push({amount: Math.floor(dollar / nuggetBox.price), box: nuggetBox});
          dollar -= ns[ns.length - 1].amount * ns[ns.length - 1].box.price;
        }
      });
    return ns;
  }
  static format(ns: NuggetSet): string {
    return ns.amount + ' ' + ns.box.name + (ns.amount > 1 ? 's' : ' ');
  }


  format(ns: NuggetSet): string {
    return NuggetHelper.format(ns);
  }
  getNuggetDistribution(dollar: number): NuggetSet[] {
    return NuggetHelper.getNuggetDistribution(dollar);
  }
}
export interface NuggetSet {
  amount: number;
  box: NuggetBox;
}
export interface NuggetBox {
  quantity: number;
  price: number;
  name: string;
}
export class NuggetVarieties {
   public static readonly FOURPIECE = {quantity: 4 , price: 1.99, name: 'Four Piece'};
   public static readonly SIXPIECE = {quantity: 6 , price: 3.99, name: 'Six Piece'};
   public static readonly TENPIECE = {quantity: 10 , price: 4.49, name: 'Ten Piece'};
   public static readonly TWENTYPIECE = {quantity: 20 , price: 5.00, name: 'Twenty Piece'};
   public static  readonly members =
        [NuggetVarieties.FOURPIECE, NuggetVarieties.SIXPIECE, NuggetVarieties.TENPIECE, NuggetVarieties.TWENTYPIECE];
  public static readonly membersReverse = NuggetVarieties.members.reverse();

}
