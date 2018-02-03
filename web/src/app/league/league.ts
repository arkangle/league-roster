export class League {
  id: number = -1;
  organization_id: number;
  name: string;
  constructor(organization_id: number) {
    this.organization_id = organization_id;
  }
}
