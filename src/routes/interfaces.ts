export interface IMenuItem {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
  id?: string;
}
