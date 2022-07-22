export interface OrderDTO {
  uid: string;
  patrimony: string;
  when: string;
  status: "closed" | "open";
}
