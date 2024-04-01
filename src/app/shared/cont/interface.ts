

export interface Iusers {
    username: string;
    userid: string;
    userRole:"candidate"| "admin"
}

export interface Iproducts {

    productName: string;
    pid: string;
    pstatus: Istatus;
    canRetu: 1 | 0

}

export enum Istatus {
    inprogress = "inprogress",
    dispatched = "dispatched",
    ordered = "ordered"
}