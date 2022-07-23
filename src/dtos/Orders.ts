export interface OrderDTO {
  uid: string;
  patrimony: string;
  description: string;
  solution?: string;
  when: string;
  status: "closed" | "open";
}
